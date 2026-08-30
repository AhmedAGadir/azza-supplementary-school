import { NextResponse } from 'next/server'

import {
  CONTACT_REQUIRED,
  buildContactEmail,
  isBot,
  validate,
} from '@/lib/submissions'
import { clientKey, rateLimit } from '@/lib/rateLimit'
import { sendEmail } from '@/lib/sendEmail'

export const dynamic = 'force-dynamic'

export async function POST(request) {
  let data
  try {
    data = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  // Answer bots with a success they cannot distinguish from the real thing -
  // telling them they were caught just invites another attempt.
  if (isBot(data)) {
    return NextResponse.json({ ok: true })
  }

  const { allowed } = rateLimit(`contact:${clientKey(request)}`, {
    limit: 5,
    windowMs: 10 * 60_000,
  })
  if (!allowed) {
    return NextResponse.json(
      { error: 'Too many messages sent. Please try again shortly.' },
      { status: 429 },
    )
  }

  const errors = validate(data, CONTACT_REQUIRED, ['from_email'])
  if (errors.length > 0) {
    return NextResponse.json({ error: errors.join('; ') }, { status: 400 })
  }

  try {
    await sendEmail(buildContactEmail(data))
  } catch (error) {
    // Log the detail for us, but never leak provider internals to the browser.
    console.error('Contact form send failed:', error)
    return NextResponse.json(
      { error: 'Could not send your message. Please try again.' },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true })
}
