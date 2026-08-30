import assert from 'node:assert/strict'
import { beforeEach, describe, it } from 'node:test'

import { clientKey, rateLimit, resetRateLimits } from '../src/lib/rateLimit.js'

describe('rateLimit', () => {
  beforeEach(() => resetRateLimits())

  it('allows requests up to the limit', () => {
    for (let i = 0; i < 5; i++) {
      assert.equal(rateLimit('a', { limit: 5 }).allowed, true, `request ${i + 1}`)
    }
  })

  it('blocks the request that exceeds the limit', () => {
    for (let i = 0; i < 5; i++) rateLimit('a', { limit: 5 })
    assert.equal(rateLimit('a', { limit: 5 }).allowed, false)
  })

  it('keeps separate counts per key', () => {
    for (let i = 0; i < 5; i++) rateLimit('a', { limit: 5 })
    assert.equal(rateLimit('b', { limit: 5 }).allowed, true)
  })

  it('lets requests through again once the window has passed', () => {
    const start = 1_000_000
    for (let i = 0; i < 5; i++) {
      rateLimit('a', { limit: 5, windowMs: 60_000, now: start })
    }
    assert.equal(
      rateLimit('a', { limit: 5, windowMs: 60_000, now: start + 30_000 }).allowed,
      false,
      'still blocked inside the window',
    )
    assert.equal(
      rateLimit('a', { limit: 5, windowMs: 60_000, now: start + 60_001 }).allowed,
      true,
      'allowed once the window has passed',
    )
  })

  it('reports how long to wait when blocked', () => {
    const start = 1_000_000
    for (let i = 0; i < 5; i++) {
      rateLimit('a', { limit: 5, windowMs: 60_000, now: start })
    }
    const result = rateLimit('a', { limit: 5, windowMs: 60_000, now: start + 10_000 })
    assert.equal(result.allowed, false)
    assert.equal(result.retryAfterMs, 50_000)
  })

  it('is generous enough for a parent registering three children', () => {
    for (let i = 0; i < 10; i++) {
      assert.equal(
        rateLimit('parent', { limit: 10, windowMs: 600_000 }).allowed,
        true,
        `registration ${i + 1} should be allowed`,
      )
    }
  })
})

describe('clientKey', () => {
  const req = (headers) => ({ headers: new Headers(headers) })

  it('uses the first address in x-forwarded-for', () => {
    assert.equal(clientKey(req({ 'x-forwarded-for': '1.2.3.4, 5.6.7.8' })), '1.2.3.4')
  })

  it('falls back to x-real-ip', () => {
    assert.equal(clientKey(req({ 'x-real-ip': '9.9.9.9' })), '9.9.9.9')
  })

  it('returns a stable placeholder when no address is present', () => {
    assert.equal(clientKey(req({})), 'unknown')
  })
})
