import { NextResponse } from 'next/server'

// Daily check that form submissions are actually being delivered.
//
// The failure this guards against is silent: EmailJS accepts a submission and
// records it, then the underlying mail service rejects it (an expired Gmail
// OAuth grant did exactly this, unnoticed, for weeks). Nothing surfaces that
// to anyone, so we poll the history and alert out-of-band.
//
// The alert deliberately goes out via Resend rather than EmailJS: an alert
// that travels the same path as the thing being monitored dies with it.

export const dynamic = 'force-dynamic'

const EMAILJS_HISTORY_URL = 'https://api.emailjs.com/api/v1.0/history'
const LOOKBACK_MS = 24 * 60 * 60 * 1000

export async function GET(request) {
  // Vercel Cron sends this header automatically; it stops anyone hitting the
  // endpoint directly. Fail closed if the secret was never configured.
  const cronSecret = process.env.CRON_SECRET
  const authHeader = request.headers.get('authorization')

  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const publicKey = process.env.EMAILJS_PUBLIC_KEY
  const privateKey = process.env.EMAILJS_PRIVATE_KEY

  if (!publicKey || !privateKey) {
    return NextResponse.json(
      { error: 'EmailJS credentials are not configured' },
      { status: 500 },
    )
  }

  let history
  try {
    const response = await fetch(EMAILJS_HISTORY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user_id: publicKey,
        accessToken: privateKey,
      }),
      cache: 'no-store',
    })

    if (!response.ok) {
      throw new Error(
        `EmailJS history returned ${response.status}: ${await response.text()}`,
      )
    }

    history = await response.json()
  } catch (error) {
    // If we can't even read the history, that is itself worth knowing about.
    await sendAlert(
      'Azza site: unable to check form delivery',
      `The daily form health check could not reach the EmailJS history API.\n\n${error.message}`,
    )
    return NextResponse.json({ error: error.message }, { status: 502 })
  }

  const records = Array.isArray(history) ? history : (history?.rows ?? [])
  const since = Date.now() - LOOKBACK_MS

  const recentFailures = records.filter((record) => {
    const result = String(record.result ?? '').toLowerCase()
    if (result === 'ok' || result === 'success') return false

    const timestamp = Date.parse(record.created ?? record.created_at ?? '')
    // Keep undated records rather than dropping a failure on a parsing quirk.
    return Number.isNaN(timestamp) ? true : timestamp >= since
  })

  if (recentFailures.length > 0) {
    const details = recentFailures
      .slice(0, 10)
      .map(
        (f) =>
          `- ${f.created ?? 'unknown time'} | ${f.template_id ?? 'unknown template'} | ${f.error ?? f.result ?? 'no error text'}`,
      )
      .join('\n')

    await sendAlert(
      `Azza site: ${recentFailures.length} form submission(s) failed to send`,
      `The following form submissions were accepted by EmailJS but not delivered in the last 24 hours.\n\n` +
        `${details}\n\n` +
        `The submitted data is still recoverable from the EmailJS history and can be resent:\n` +
        `https://dashboard.emailjs.com/admin/history\n\n` +
        `A common cause is the mail service connection needing to be reconnected.`,
    )
  }

  return NextResponse.json({
    checked: records.length,
    failures: recentFailures.length,
  })
}

async function sendAlert(subject, body) {
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.ALERT_EMAIL_TO
  const from = process.env.ALERT_EMAIL_FROM

  if (!apiKey || !to || !from) {
    console.error('Alert not sent - Resend env vars missing:', subject)
    return
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ from, to, subject, text: body }),
    })

    if (!response.ok) {
      console.error('Alert send failed:', await response.text())
    }
  } catch (error) {
    console.error('Alert send threw:', error)
  }
}
