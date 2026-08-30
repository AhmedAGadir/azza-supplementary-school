# 2026-08-30 — Move forms off EmailJS onto server-side Resend

**Status:** In progress
**Owner:** Ahmed
**Started:** 2026-08-30
**Rollback point:** `git reset --hard pre-resend-migration`
**Follows:** [2026-08-29 form submission fix](./2026-08-29-form-submission-fix.md)

---

## Why

The 29 Aug incident was caused by an expiring Gmail OAuth grant inside EmailJS.
Reconnecting it restored service, but the same failure can recur at any time.
Three separate problems all trace back to EmailJS running in the browser:

| Problem | Cause | Fixable on EmailJS free tier? |
| --- | --- | --- |
| Credentials expire silently | Gmail OAuth grant inside EmailJS | No — inherent |
| Public key exposed in JS bundle | EmailJS is client-side by design | No — domain allowlist is a **paid** feature |
| 200 emails/month cap | Free tier limit | No |

**Client-side code cannot mitigate the key exposure.** An abuser reads the service
ID, template ID and public key from the bundle and POSTs directly to EmailJS's API.
They never load the site, so honeypots, JS rate limiting and obfuscation are all
irrelevant. The only real fix is moving the send server-side.

Severity note: `To Email` is **hardcoded** to `azzasupplementaryschool@gmail.com` in
the templates (verified on `contact_form`), so the account cannot be used as an open
relay against third parties. Worst case is inbox spam and quota exhaustion —
nuisance, not breach. This migration is driven by the **expiry** risk, not urgency
about the key.

## Approach

Replace `emailjs.sendForm()` in both forms with a POST to our own Next.js route
handler, which sends via Resend using a server-side API key. Resend is already set
up, domain-verified and proven — `/api/email-health` and the recovered-application
emails all went through it.

---

## Tasks

### Groundwork
- [x] Tag rollback point `pre-resend-migration` and push
- [x] Write this epic

### Server side
- [x] `src/lib/submissions.js` — pure, testable validation + email body builders
- [x] `src/lib/rateLimit.js` — in-memory per-IP limiter
- [x] `src/app/api/contact/route.js`
- [x] `src/app/api/enroll/route.js`
- [x] Honeypot field to catch naive bots
- [x] Server-side required-field validation (the browser's `required` is bypassable)
- [x] `Reply-To` set to the submitter so staff can reply directly

### Client side
- [x] Point `ContactHero` at `/api/contact`
- [x] Point `EnrollmentHero` at `/api/enroll`
- [x] Keep the existing sending/disabled/error behaviour
- [x] Remove the `@emailjs/browser` dependency
- [x] Remove the four `NEXT_PUBLIC_EMAIL_*` env vars from the bundle

### Tests
- [x] Test runner wired up (`node --test`, no new dependencies)
- [x] Validation: rejects missing required fields, accepts valid payloads
- [x] Honeypot: silently accepts but does not send
- [x] Rate limiter: allows under the limit, blocks over it
- [x] Email bodies: contain every submitted field, escape correctly
- [x] Route handlers: 400 on invalid, 200 on valid, 405 on wrong method

**Test results:** 32 unit tests and 10 integration tests passing. Verified locally
with a full realistic enrollment: the email arrived sectioned like the paper form,
with `Reply-To` set to the parent.

### Deploy & verify
- [x] Commit and push
- [ ] Deploy
- [ ] Submit both forms against production and confirm arrival in the school inbox
- [ ] Confirm no EmailJS credentials remain in the client bundle

### Cleanup
- [ ] Update `/api/email-health` — it monitors EmailJS, which will no longer be the
      delivery path. Needs repointing at Resend, or replacing.
- [ ] Decide what to do with the EmailJS account (keep dormant as fallback, or close)

---

## Notes

- The contact template signs off "Best wishes, GadirLabs team" — leftover
  boilerplate on school-facing email. Corrected in the new templates.
- Rate limiting is in-memory and therefore per-serverless-instance. It is a speed
  bump against casual abuse, not a hard guarantee. Adequate for this traffic level;
  a shared store would be needed for a real guarantee.
