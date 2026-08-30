import { NextResponse } from 'next/server'

import {
  ENROLLMENT_REQUIRED,
  buildEnrollmentEmail,
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

  if (isBot(data)) {
    return NextResponse.json({ ok: true })
  }

  // Deliberately more generous than the contact form. A parent legitimately
  // registering three children in one sitting must not be turned away, and the
  // 29 Aug incident showed people re-submitting when they are unsure it worked.
  const { allowed } = rateLimit(`enroll:${clientKey(request)}`, {
    limit: 10,
    windowMs: 10 * 60_000,
  })
  if (!allowed) {
    return NextResponse.json(
      {
        error:
          'Too many registrations submitted from this connection. Please wait a few minutes, or contact the school directly.',
      },
      { status: 429 },
    )
  }

  const errors = validate(data, ENROLLMENT_REQUIRED, ['parentEmail'])
  if (errors.length > 0) {
    return NextResponse.json({ error: errors.join('; ') }, { status: 400 })
  }

  try {
    await sendEmail(buildEnrollmentEmail(data))
  } catch (error) {
    console.error('Enrollment form send failed:', error)
    return NextResponse.json(
      { error: 'Could not submit your registration. Please try again.' },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true })
}
