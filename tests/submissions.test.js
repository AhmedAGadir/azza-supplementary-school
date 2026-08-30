import assert from 'node:assert/strict'
import { describe, it } from 'node:test'

import {
  CONTACT_REQUIRED,
  ENROLLMENT_REQUIRED,
  HONEYPOT_FIELD,
  buildContactEmail,
  buildEnrollmentEmail,
  isBot,
  isFilled,
  validate,
} from '../src/lib/submissions.js'

const validContact = {
  from_name: 'Samah Ali',
  from_email: 'samah@example.com',
  from_phone: '07700900000',
  message: 'Can I register my son for Arabic classes?',
}

function validEnrollment(overrides = {}) {
  const data = {}
  for (const field of ENROLLMENT_REQUIRED) data[field] = 'x'
  data.parentEmail = 'parent@example.com'
  data.firstName = 'Naeem'
  data.lastName = 'Ali'
  return { ...data, ...overrides }
}

describe('isFilled', () => {
  it('treats whitespace-only strings as empty', () => {
    assert.equal(isFilled('   '), false)
    assert.equal(isFilled('a'), true)
  })

  it('treats an empty array as empty', () => {
    assert.equal(isFilled([]), false)
    assert.equal(isFilled(['Arabic']), true)
  })

  it('treats missing values as empty', () => {
    assert.equal(isFilled(undefined), false)
    assert.equal(isFilled(null), false)
  })
})

describe('validate', () => {
  it('accepts a complete contact submission', () => {
    assert.deepEqual(validate(validContact, CONTACT_REQUIRED, ['from_email']), [])
  })

  it('reports every missing required field, not just the first', () => {
    const errors = validate({}, CONTACT_REQUIRED, ['from_email'])
    assert.equal(errors.length, CONTACT_REQUIRED.length)
    for (const field of CONTACT_REQUIRED) {
      assert.ok(errors.some((e) => e.includes(field)), `expected an error for ${field}`)
    }
  })

  it('rejects a malformed email address', () => {
    const errors = validate(
      { ...validContact, from_email: 'not-an-email' },
      CONTACT_REQUIRED,
      ['from_email'],
    )
    assert.ok(errors.some((e) => e.includes('valid email')))
  })

  it('accepts addresses that over-strict regexes often reject', () => {
    for (const email of ["o'brien@example.com", 'a+tag@sub.example.co.uk']) {
      const errors = validate({ ...validContact, from_email: email }, [], ['from_email'])
      assert.deepEqual(errors, [], `${email} should be accepted`)
    }
  })

  it('rejects absurdly long values', () => {
    const errors = validate(
      { ...validContact, message: 'x'.repeat(5001) },
      CONTACT_REQUIRED,
      [],
    )
    assert.ok(errors.some((e) => e.includes('too long')))
  })

  it('accepts a complete enrollment submission', () => {
    assert.deepEqual(validate(validEnrollment(), ENROLLMENT_REQUIRED, ['parentEmail']), [])
  })

  it('requires the medical and consent fields introduced for 2026/27', () => {
    for (const field of [
      'medicalConditions',
      'medicalConsent',
      'parentCarerConsent',
      'signatureFullName',
      'signatureDate',
    ]) {
      const data = validEnrollment()
      delete data[field]
      const errors = validate(data, ENROLLMENT_REQUIRED, [])
      assert.ok(
        errors.some((e) => e.includes(field)),
        `${field} should be required`,
      )
    }
  })
})

describe('isBot', () => {
  it('is false when the honeypot is untouched', () => {
    assert.equal(isBot(validContact), false)
    assert.equal(isBot({ ...validContact, [HONEYPOT_FIELD]: '' }), false)
  })

  it('is true when the honeypot is filled', () => {
    assert.equal(isBot({ ...validContact, [HONEYPOT_FIELD]: 'http://spam' }), true)
  })
})

describe('buildContactEmail', () => {
  const email = buildContactEmail(validContact)

  it('names the sender in the subject', () => {
    assert.ok(email.subject.includes('Samah Ali'))
  })

  it('includes every submitted field in the body', () => {
    for (const value of Object.values(validContact)) {
      assert.ok(email.text.includes(value), `body should contain ${value}`)
    }
  })

  it('sets reply-to so staff can answer the sender directly', () => {
    assert.equal(email.replyTo, 'samah@example.com')
  })

  it('does not carry the old GadirLabs boilerplate', () => {
    assert.ok(!email.text.includes('GadirLabs'))
  })
})

describe('buildEnrollmentEmail', () => {
  const data = validEnrollment({
    firstName: 'Aylah',
    lastName: 'Ali',
    classes: ['Arabic', 'Science'],
    medicalConditions: 'Asthma - carries an inhaler',
    agreeToOnlineSurvey: 'on',
    parentEmail: 'rez@example.com',
  })
  const email = buildEnrollmentEmail(data, { submittedAt: '2026-08-30T09:00:00.000Z' })

  it('names the child in the subject', () => {
    assert.ok(email.subject.includes('Aylah'))
    assert.ok(email.subject.includes('Ali'))
  })

  it('renders checkbox groups as a readable list', () => {
    assert.ok(email.text.includes('Arabic, Science'))
  })

  it('renders an "on" checkbox as Yes rather than raw form encoding', () => {
    assert.ok(!email.text.includes('agreeToOnlineSurvey.. on'))
    assert.ok(/Agree To Online Survey\.+ Yes/.test(email.text))
  })

  it('surfaces medical information, which staff need for safeguarding', () => {
    assert.ok(email.text.includes('Asthma - carries an inhaler'))
  })

  it('sets reply-to to the parent', () => {
    assert.equal(email.replyTo, 'rez@example.com')
  })

  it('never leaks the honeypot into the email', () => {
    const withBot = buildEnrollmentEmail({ ...data, [HONEYPOT_FIELD]: 'spam' })
    assert.ok(!withBot.text.includes('spam'))
  })

  it('still includes fields the section map does not know about', () => {
    const withNew = buildEnrollmentEmail({ ...data, favouriteColour: 'purple' })
    assert.ok(withNew.text.includes('purple'))
  })
})
