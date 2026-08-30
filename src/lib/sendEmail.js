// Thin wrapper over the Resend REST API.
//
// Uses fetch directly rather than the SDK to keep the dependency surface small -
// this is one POST, and a dependency that needs upgrading is a dependency that
// can break a form the school relies on.

const RESEND_API = 'https://api.resend.com/emails'

export async function sendEmail({ subject, text, replyTo }) {
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.FORM_EMAIL_TO
  const from = process.env.FORM_EMAIL_FROM

  if (!apiKey || !to || !from) {
    throw new Error(
      'Email is not configured (RESEND_API_KEY, FORM_EMAIL_TO, FORM_EMAIL_FROM)',
    )
  }

  const payload = { from, to: [to], subject, text }
  if (replyTo) payload.reply_to = [replyTo]

  const response = await fetch(RESEND_API, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    const detail = await response.text()
    throw new Error(`Resend returned ${response.status}: ${detail}`)
  }

  return response.json()
}
