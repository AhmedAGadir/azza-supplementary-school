import { NextResponse } from 'next/server'

// Daily check that the forms can still deliver email.
//
// History
// -------
// Form submissions failed silently for weeks in August 2026: EmailJS accepted
// each one and recorded it, then Gmail rejected it asynchronously, and nothing
// told anyone. Two families' registrations were lost.
//
// That specific gap is now closed by design rather than by monitoring. The forms
// send synchronously inside /api/contact and /api/enroll, so a failure returns an
// error to the parent in the moment and is logged - there is no accept-now,
// fail-later window left to miss.
//
// What remains worth watching is the credential itself. A Resend API key can be
// revoked or rotated, and misconfigured environment variables would break every
// submission. This check verifies the send path is usable each morning, before a
// parent discovers it isn't.
//
// It deliberately does NOT send an email to prove this. Resend answers a request
// carrying a valid key but an incomplete payload with 422 (a validation
// complaint), and one carrying a dead key with 401/403. That distinction is
// enough, and it costs nothing and reaches nobody's inbox.
//
// Known limitation: if Resend itself is the thing that is broken, the alert
// cannot be sent, because the alert also travels over Resend. In that case the
// route returns a non-200, which surfaces as a failed cron run in Vercel. There
// is no second delivery channel available here, and adding one for this alone
// would be more moving parts than the risk warrants.

export const dynamic = 'force-dynamic'

const RESEND_API = 'https://api.resend.com/emails'

export async function GET(request) {
  // Vercel Cron sends this header automatically; it stops anyone hitting the
  // endpoint directly. Fail closed if the secret was never configured.
  const cronSecret = process.env.CRON_SECRET
  if (!cronSecret || request.headers.get('authorization') !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const problems = []

  for (const name of ['RESEND_API_KEY', 'FORM_EMAIL_TO', 'FORM_EMAIL_FROM']) {
    if (!process.env[name]) problems.push(`${name} is not set`)
  }

  if (problems.length === 0) {
    try {
      const response = await fetch(RESEND_API, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        // Intentionally incomplete - we want the validation error, not a send.
        body: JSON.stringify({ from: process.env.FORM_EMAIL_FROM }),
        cache: 'no-store',
      })

      if (response.status === 401 || response.status === 403) {
        problems.push(
          `Resend rejected the API key (${response.status}). Form submissions are failing.`,
        )
      } else if (response.status >= 500) {
        problems.push(`Resend returned ${response.status}. It may be having an outage.`)
      }
      // 422 is the expected healthy answer: authenticated, payload incomplete.
    } catch (error) {
      problems.push(`Could not reach Resend: ${error.message}`)
    }
  }

  if (problems.length > 0) {
    console.error('Email health check failed:', problems)
    await tryAlert(problems)
    return NextResponse.json({ healthy: false, problems }, { status: 503 })
  }

  return NextResponse.json({ healthy: true })
}

// Best effort. If the send path is the broken thing, this cannot work - the
// non-200 above is what surfaces the problem in that case.
async function tryAlert(problems) {
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.ALERT_EMAIL_TO
  const from = process.env.ALERT_EMAIL_FROM

  if (!apiKey || !to || !from) return

  try {
    await fetch(RESEND_API, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject: 'Azza site: contact and registration forms may be failing',
        text:
          `The daily check of the website's email delivery found a problem.\n\n` +
          problems.map((p) => `- ${p}`).join('\n') +
          `\n\nParents may be unable to submit the contact or registration forms.\n` +
          `Check the Resend dashboard (https://resend.com) and the Vercel\n` +
          `environment variables for the azza-supplementary-school project.`,
      }),
    })
  } catch (error) {
    console.error('Health alert could not be sent:', error)
  }
}
