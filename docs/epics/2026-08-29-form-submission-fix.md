# 2026-08-29 — Form submission fix, registration form 26/27, and delivery monitoring

**Status:** In progress
**Owner:** Ahmed
**Started:** 2026-08-29

---

## Background

Parents reported that form submissions "weren't working". Investigation found that
every submission — contact and enrollment — had been failing since at least
26 Aug 2026 with:

> `Gmail_API: Invalid grant. Please reconnect your Gmail account`

The EmailJS Gmail OAuth refresh token had been revoked by Google. EmailJS accepted
each submission and recorded it, then Gmail refused to send. The site showed only a
generic error, and nothing alerted anyone — so it went unnoticed for weeks.

**Every record in the visible EmailJS history (30 of 30) is a Service Error.** One
parent submitted ~25 times in four minutes on 27 Aug, clearly re-clicking because
nothing happened. Those families believe they have applied and the school has no
record of them.

Ruled out during investigation: env vars (correctly baked into the production
build), public key / service ID (valid), domain allow-list (no restriction
configured), and the React form code (correct).

---

## Decisions taken

- **Tick-box signature** is sufficient. Ahmed to inform the client of its
  evidential limitations.
- **Resend** as the transactional email provider, replacing the Gmail OAuth
  connection with a static API key that cannot expire.
- **No Supabase**, no new database — the project doesn't use one today.
- **No GitHub Actions** (usage limits) — monitoring runs on Vercel Cron instead.
- **No 2FA** on the school Gmail account, which rules out Gmail App Passwords.

---

## Phase 1 — Restore service (urgent)

Parents cannot currently register. Do this first.

- [x] Reconnect Gmail OAuth in EmailJS (Email Services → Gmail → Disconnect → Connect Account)
- [x] **Re-grant the send scope.** First reconnect attempt produced a fresh token but
      returned `412 Gmail_API: Request had insufficient authentication scopes` on
      Update Service. Google's consent screen leaves permission checkboxes
      **unchecked by default** — the "Send email on your behalf" box must be ticked
      explicitly. Second attempt with the box ticked succeeded.
- [x] Verify with the "Send test email to verify configuration" tick
      → two `OK` results in Email History at 29/08/2026 21:36:36 and 21:44:34,
      the first successes in the whole retained history.
      (Note: test emails do not decrement the request quota — the `OK` rows are the
      signal to look for, not the counter.)
- [ ] Confirm the two test emails actually landed in the school inbox
- [x] ~~Resend the failed submissions from Email History~~ — **Resend button is a
      no-op on these records.** Tried four times: the confirm dialog opens and closes
      cleanly, but no email is sent, no new history row appears, the Resends column
      stays `--` and the quota does not move. The school inbox confirms nothing
      arrived (and nothing was duplicated). Cause unknown — possibly EmailJS refuses
      to replay records predating the service reconnection, or resend is gated on a
      paid tier and fails silently. Not investigated further; superseded below.
- [x] **Data extracted manually instead**, removing the retention deadline. Both
      applications and the contact message written up in full to
      `scratchpad/recovered/recovered-submissions-2026-08-29.md`
      (deliberately outside the repo — children's personal data, must not be committed).
- [x] Confirm delivery works end to end — the two test emails arrived in the school
      inbox at 21:36 and 21:44. Sending is genuinely fixed; only the historical
      replay feature is broken.
- [ ] Send the recovered applications to the school
- [ ] Contact both families (see follow-up list in the recovery file)

### What the 30 failed rows actually contain

Only **2 enrollment applications and 1 contact enquiry**. The rest are the same
people re-submitting because nothing appeared to happen.

| Family | Content | Rows | Resend this row |
| --- | --- | --- | --- |
| Aylah Ali (parent Rezwana Begum) | Enrollment, 27/08 16:30–16:34 | 25 | **16:34:06** |
| Naeem Ali (parent Samah Ali) | Enrollment, 26/08 | 2 | **12:14:52** |
| Samah Ali | Contact message, 26/08 | 3 | **12:18:02** |

Aylah's 25 attempts are **not identical** — the early ones (16:30–16:31) list Arabic
only; the later ones (16:33–16:34) list Arabic + Science and tick the survey consent.
Resend the last one or her Science choice is lost.

Samah Ali's contact message reads: *"I'm trying to register my son onto the Arabic
classes but unfortunately im unable to submit the form online keeps giving an error
message"* — she had already submitted a valid enrollment at 12:12 and did not know it.
This is the original parent report that prompted this whole investigation.

**Data contamination confirmed in the live records** (see the select bug in Phase 3):
Naeem's `ethnicOrigin` is `Sudanese` — the old default first option — and both
families show `Kensington and Chelsea` for borough, also the default. Aylah's `Asian`
was actively chosen. **Confirm ethnicity and borough with both families directly.**

> ⚠️ The failed submissions hold real enrollment data and are the only record of
> those applications. EmailJS history retention is limited; older failures have
> likely already been lost permanently.

> ⚠️ Some recovered data will have **wrong borough and ethnicity values** — see the
> select-default bug in Phase 3. Treat those two fields as unreliable and confirm
> them with families directly.

---

## Phase 2 — Stop it recurring

- [x] Create a Resend account — under `azzasupplementaryschool@gmail.com` so the
      client owns it, matching the EmailJS account
- [x] Add and verify `azzaschool.org` in Resend — region `eu-west-1` (Ireland),
      status **Verified**
- [x] Add Resend's generated DNS records in Vercel → verified resolving via `dig`,
      and root SPF/MX for ImprovMX confirmed untouched
- [x] Test send from `noreply@azzaschool.org` → **delivered to the school inbox**
      (not spam), displaying as "Azza School"
- [ ] Point the EmailJS service at Resend SMTP (replacing the Gmail connection)
- [ ] Send a test submission through both forms end to end
- [ ] Lock EmailJS allowed origins to `www.azzaschool.org`

> **Vercel domain had to be moved to a team first.** `azzaschool.org` was an
> "Account domain", which Vercel has deprecated — the dashboard gated DNS
> management behind the move, and the CLI could not see the domain at all
> (`You don't have permission to list the domain record`). Moved to
> `ahmedagadirs-projects`; all DNS records, aliases and the live site verified
> intact afterwards.

> **Auto-renew confirmed on** — `azzaschool.org` renews 26 Oct 2026.

> **The Node.js 20 build warning is not this project.** `azza-supplementary-school`
> runs 22.x. The affected project is `anthroai` (20.x), unrelated to this work.

> ⚠️ **Do not modify the root SPF or MX records.** The domain runs ImprovMX email
> forwarding (`info@` / `enrollment@azzaschool.org` → Gmail) on:
> ```
> MX   10 mx1.improvmx.com / 20 mx2.improvmx.com
> TXT  v=spf1 include:spf.improvmx.com ~all
> ```
> A domain may only have **one** SPF record. Resend defaults its return-path to a
> `send.` subdomain, so its MX/SPF land on `send.azzaschool.org` and the root is
> untouched. Only the DKIM record goes at the root.

### Domain housekeeping (same sitting)

- [ ] **Confirm auto-renew is on — the domain expires 26 Oct 2026.** If it lapses the whole site goes down.
- [ ] Optionally apply Vercel's recommended DNS update to clear the warning:
      A `@` → `216.198.79.1`, CNAME `www` → `4b1efb55ea7b08b5.vercel-dns-017.com`
      (Non-urgent — the legacy records still work.)

---

## Phase 3 — Code changes

All complete, built clean, verified in browser. Not yet committed or deployed.

- [x] Disable submit button + "Sending…" state on both forms (prevents duplicate submissions)
- [x] Real error logging (`console.error`) and a fallback contact route for parents
- [x] Add `disabled:` styling to the shared `Button` component
- [x] **Fix select-required bug** — dropdowns had no empty option, so `required` never
      fired and every submission silently defaulted borough to "Kensington and Chelsea"
      and ethnicity to "Sudanese" unless actively changed
- [x] Add medical conditions section (own section + own explicit Article 9 consent)
- [x] Replace ethnicity list with the full 32-option RBKC/ONS set from the doc
- [x] Add learning-difficulty detail textarea
- [x] Add "Sport" to the classes list
- [x] Replace blanket consent tick with a declaration: consent statement + typed name + date
- [ ] Remove the dead US phone `pattern` (`[0-9]{3}-[0-9]{3}-[0-9]{4}`) that would
      reject UK numbers if ever wired up
- [ ] Commit and deploy

---

## Phase 4 — Monitoring

- [x] `src/app/api/email-health/route.js` — daily EmailJS history check, alerts via Resend
- [x] `vercel.json` — cron at 09:00 daily
- [ ] Add Vercel environment variables (**none prefixed `NEXT_PUBLIC_`**):
  - [ ] `CRON_SECRET`
  - [ ] `EMAILJS_PUBLIC_KEY`
  - [ ] `EMAILJS_PRIVATE_KEY`
  - [ ] `RESEND_API_KEY`
  - [ ] `ALERT_EMAIL_TO`
  - [ ] `ALERT_EMAIL_FROM`
- [ ] Confirm the first scheduled cron run succeeds
- [ ] Verify the `/history` response shape matches what the route expects (parsing may need adjusting)

---

## Phase 5 — Open questions for the client

- [ ] **Class allocation** — the doc marks classes as "supplementary school to fill in",
      but the web form lets parents choose. Confirm which is intended.
- [ ] **Ethnicity list** — confirm this is RBKC's current set (the doc is dated 2020/21 in places)
- [ ] **Westway Trust** — do WT and RBKC accept electronic registration, or do funding
      audits require wet signatures? Proceeding regardless, but worth knowing.
- [ ] Inform the client of the tick-box signature's evidential limitations

---

## Known limitations accepted

- **No durable storage.** Submissions live only in a Gmail inbox and an expiring
  EmailJS log. A legally robust consent record would need persistence (Vercel Blob,
  or emailing a generated PDF of each form). Deferred — no database in this project.
- **EmailJS public key remains in the client bundle.** Unavoidable with EmailJS;
  mitigated by the allowed-origins restriction in Phase 2.
- **Free tier caps at 200 emails/month.** Currently 33 used. Worth watching in
  September when registrations pick up.
