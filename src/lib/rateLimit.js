// Simple in-memory per-key rate limiter.
//
// Deliberately modest in what it promises: serverless instances do not share
// memory, so this is a speed bump against casual abuse and accidental double
// submits, not a hard guarantee. At this site's traffic (tens of submissions a
// month) that is the right trade - a shared store would be more moving parts
// than the problem warrants.

const buckets = new Map()

export function rateLimit(key, { limit = 5, windowMs = 60_000, now = Date.now() } = {}) {
  const cutoff = now - windowMs
  const hits = (buckets.get(key) ?? []).filter((t) => t > cutoff)

  // Opportunistic cleanup so the map cannot grow without bound on a warm
  // instance that sees many distinct addresses.
  if (buckets.size > 5000) {
    for (const [k, times] of buckets) {
      if (times.every((t) => t <= cutoff)) buckets.delete(k)
    }
  }

  if (hits.length >= limit) {
    buckets.set(key, hits)
    return { allowed: false, remaining: 0, retryAfterMs: hits[0] + windowMs - now }
  }

  hits.push(now)
  buckets.set(key, hits)
  return { allowed: true, remaining: limit - hits.length, retryAfterMs: 0 }
}

export function resetRateLimits() {
  buckets.clear()
}

export function clientKey(request) {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0].trim()
  return request.headers.get('x-real-ip') ?? 'unknown'
}
