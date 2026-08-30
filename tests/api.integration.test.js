// Integration tests for the form API routes, run against a real server.
//
// The route modules import through the `@/` alias, which the bare node test
// runner cannot resolve, and mocking the module graph to get around that would
// test the mocks rather than the routes. Driving real HTTP is both simpler and
// closer to what a parent actually exercises.
//
//   npm run dev                       # then, in another shell:
//   npm run test:integration
//   BASE_URL=https://www.azzaschool.org npm run test:integration
//
// Skips itself with a clear message if no server is reachable, so `npm test`
// stays green in a bare checkout.

import assert from 'node:assert/strict'
import { before, describe, it } from 'node:test'

const BASE_URL = process.env.BASE_URL ?? 'http://localhost:3000'
const SEND = process.env.SEND_REAL_EMAILS === '1'

let reachable = false

async function post(path, body) {
  return fetch(`${BASE_URL}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
}

before(async () => {
  try {
    const res = await fetch(BASE_URL, { signal: AbortSignal.timeout(5000) })
    reachable = res.ok || res.status < 500
  } catch {
    reachable = false
  }
  if (!reachable) {
    console.log(`\n  ! No server at ${BASE_URL} - integration tests skipped.\n`)
  }
})

describe('POST /api/contact', () => {
  it('rejects a malformed body', async (t) => {
    if (!reachable) return t.skip()
    const res = await fetch(`${BASE_URL}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: 'not json',
    })
    assert.equal(res.status, 400)
  })

  it('rejects a submission missing required fields', async (t) => {
    if (!reachable) return t.skip()
    const res = await post('/api/contact', { from_name: 'Test' })
    assert.equal(res.status, 400)
    const body = await res.json()
    assert.match(body.error, /required/)
  })

  it('rejects an invalid email address', async (t) => {
    if (!reachable) return t.skip()
    const res = await post('/api/contact', {
      from_name: 'Test',
      from_email: 'nope',
      from_phone: '07700900000',
      message: 'hello',
    })
    assert.equal(res.status, 400)
    assert.match((await res.json()).error, /valid email/)
  })

  it('silently accepts a honeypot submission without sending', async (t) => {
    if (!reachable) return t.skip()
    // Deliberately also missing required fields: a 200 proves the honeypot
    // short-circuited before validation, so no email could have been sent.
    const res = await post('/api/contact', { website: 'http://spam.example' })
    assert.equal(res.status, 200)
    assert.deepEqual(await res.json(), { ok: true })
  })

  it('rejects GET', async (t) => {
    if (!reachable) return t.skip()
    const res = await fetch(`${BASE_URL}/api/contact`)
    assert.equal(res.status, 405)
  })

  it('accepts a valid submission', async (t) => {
    if (!reachable) return t.skip()
    if (!SEND) return t.skip('set SEND_REAL_EMAILS=1 - this delivers a real email')
    const res = await post('/api/contact', {
      from_name: 'Automated test',
      from_email: 'test@example.com',
      from_phone: '07700900000',
      message: 'Automated integration test - please ignore.',
    })
    assert.equal(res.status, 200)
  })
})

describe('POST /api/enroll', () => {
  it('rejects a submission missing the new medical and consent fields', async (t) => {
    if (!reachable) return t.skip()
    const res = await post('/api/enroll', {
      firstName: 'Test',
      lastName: 'Child',
      parentEmail: 'parent@example.com',
    })
    assert.equal(res.status, 400)
    const { error } = await res.json()
    for (const field of ['medicalConditions', 'parentCarerConsent', 'signatureFullName']) {
      assert.ok(error.includes(field), `expected ${field} to be required`)
    }
  })

  it('silently accepts a honeypot submission', async (t) => {
    if (!reachable) return t.skip()
    const res = await post('/api/enroll', { website: 'http://spam.example' })
    assert.equal(res.status, 200)
  })

  it('rejects GET', async (t) => {
    if (!reachable) return t.skip()
    const res = await fetch(`${BASE_URL}/api/enroll`)
    assert.equal(res.status, 405)
  })
})

describe('client bundle', () => {
  it('no longer ships EmailJS credentials', async (t) => {
    if (!reachable) return t.skip()
    const html = await (await fetch(`${BASE_URL}/enroll`)).text()
    const scripts = [...html.matchAll(/static\/[A-Za-z0-9/_.-]+\.js/g)].map((m) => m[0])

    for (const path of scripts) {
      const js = await (await fetch(`${BASE_URL}/_next/${path}`)).text()
      assert.ok(!js.includes('service_38pbzft'), `${path} leaks the EmailJS service ID`)
      assert.ok(!js.includes('h2aliAfkhfHqWIE5G'), `${path} leaks the EmailJS public key`)
      assert.ok(!js.includes('api.emailjs.com'), `${path} still calls EmailJS`)
    }
  })
})
