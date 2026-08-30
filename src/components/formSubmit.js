'use client'

// Shared plumbing for posting the public forms to our own API routes.
//
// Replaces the previous @emailjs/browser integration, which required the
// service ID, template ID and public key to be shipped in the browser bundle.
// Those credentials could not be protected - EmailJS gates its domain allowlist
// behind a paid plan - so the send moved server-side instead.

export const HONEYPOT_FIELD = 'website'

// Turns the form into a plain object, collecting repeated inputs (checkbox
// groups) into arrays. Names ending in `[]` are unwrapped, since that suffix was
// only ever an EmailJS convention.
export function formToObject(formElement) {
  const data = {}

  for (const [rawKey, value] of new FormData(formElement).entries()) {
    const key = rawKey.endsWith('[]') ? rawKey.slice(0, -2) : rawKey
    const isGroup = rawKey.endsWith('[]')

    if (key in data) {
      data[key] = Array.isArray(data[key]) ? [...data[key], value] : [data[key], value]
    } else {
      data[key] = isGroup ? [value] : value
    }
  }

  return data
}

export async function submitForm(endpoint, formElement) {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formToObject(formElement)),
  })

  let body = {}
  try {
    body = await response.json()
  } catch {
    // A non-JSON response means something upstream failed badly; fall through
    // to the generic error below rather than throwing a parse error at a parent.
  }

  if (!response.ok) {
    throw new Error(body.error || 'Submission failed')
  }

  return body
}

// Hidden from people, visible to naive bots that fill every input they find.
// Not a security control - it just removes the low-effort noise.
export function HoneypotField() {
  return (
    <div aria-hidden="true" className="absolute left-[-9999px] top-[-9999px]">
      <label htmlFor={HONEYPOT_FIELD}>Leave this field empty</label>
      <input
        id={HONEYPOT_FIELD}
        type="text"
        name={HONEYPOT_FIELD}
        tabIndex={-1}
        autoComplete="off"
      />
    </div>
  )
}
