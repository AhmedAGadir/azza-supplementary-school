// Validation and email-body construction for the public forms.
//
// Kept free of Next.js and network calls so it can be unit tested directly.
// The browser's `required` attributes are a convenience for real users; anyone
// can POST whatever they like straight at the route, so everything is validated
// again here.

export const HONEYPOT_FIELD = 'website'

export const CONTACT_REQUIRED = ['from_name', 'from_email', 'from_phone', 'message']

export const ENROLLMENT_REQUIRED = [
  'firstName',
  'lastName',
  'gender',
  'dateOfBirth',
  'address1',
  'postcode',
  'borough',
  'parentFullName',
  'relationshipToStudent',
  'parentTelephoneNumber',
  'mobileTelephoneNumber',
  'parentEmail',
  'mainstreamSchool',
  'schoolYear',
  'ethnicOrigin',
  'learningDifficultyOrDisability',
  'registeredForFreeSchoolMeals',
  'emergencyContactName',
  'emergencyContactNumber',
  'emergencyContactRelationship',
  'medicalConditions',
  'medicalConsent',
  'lunchTimeAgreement',
  'parentCarerConsent',
  'signatureFullName',
  'signatureDate',
]

// Deliberately permissive. The goal is to catch typos and obvious junk, not to
// adjudicate the RFC - over-strict email regexes reject valid addresses, and a
// parent losing their place over a rejected apostrophe is the worse failure.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const MAX_FIELD_LENGTH = 5000

export function isFilled(value) {
  if (Array.isArray(value)) return value.length > 0
  return typeof value === 'string' ? value.trim().length > 0 : Boolean(value)
}

export function validate(data, requiredFields, emailFields = []) {
  const errors = []

  for (const field of requiredFields) {
    if (!isFilled(data[field])) {
      errors.push(`${field} is required`)
    }
  }

  for (const field of emailFields) {
    const value = data[field]
    if (typeof value === 'string' && value && !EMAIL_PATTERN.test(value.trim())) {
      errors.push(`${field} is not a valid email address`)
    }
  }

  for (const [key, value] of Object.entries(data)) {
    if (typeof value === 'string' && value.length > MAX_FIELD_LENGTH) {
      errors.push(`${key} is too long`)
    }
  }

  return errors
}

// A filled honeypot means a bot walked the DOM and completed every input.
// Real users never see the field, so it should always be empty.
export function isBot(data) {
  return isFilled(data[HONEYPOT_FIELD])
}

function formatValue(value) {
  if (Array.isArray(value)) return value.join(', ')
  if (value === 'on') return 'Yes'
  return String(value ?? '')
}

// Long labels would otherwise run straight into their value with no separator.
const LABEL_WIDTH = 34

function padLabel(label) {
  return label.length >= LABEL_WIDTH ? `${label} ` : label.padEnd(LABEL_WIDTH, '.')
}

function labelise(key) {
  return key
    .replace(/\[\]$/, '')
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (c) => c.toUpperCase())
    .replace(/_/g, ' ')
    .trim()
}

export function buildContactEmail(data) {
  const lines = [
    `New message from the Azza School website contact form.`,
    ``,
    `Name .......... ${formatValue(data.from_name)}`,
    `Email ......... ${formatValue(data.from_email)}`,
    `Phone ......... ${formatValue(data.from_phone)}`,
    ``,
    `Message`,
    `-------`,
    formatValue(data.message),
    ``,
    `--`,
    `Sent from www.azzaschool.org. Reply directly to this email to respond.`,
  ]

  return {
    subject: `Website contact form - ${formatValue(data.from_name)}`,
    text: lines.join('\n'),
    replyTo: typeof data.from_email === 'string' ? data.from_email.trim() : null,
  }
}

// Sections mirror the order of the paper registration form so staff reading the
// email can follow along with the form they already know.
const ENROLLMENT_SECTIONS = [
  {
    title: 'Student',
    fields: [
      'firstName',
      'lastName',
      'gender',
      'dateOfBirth',
      'address1',
      'address2',
      'postcode',
      'borough',
    ],
  },
  {
    title: 'Parent or guardian',
    fields: [
      'parentFullName',
      'relationshipToStudent',
      'parentTelephoneNumber',
      'mobileTelephoneNumber',
      'parentEmail',
      'agreeToOnlineSurvey',
    ],
  },
  { title: 'Education', fields: ['mainstreamSchool', 'schoolYear'] },
  { title: 'Ethnicity', fields: ['ethnicOrigin'] },
  {
    title: 'Additional information',
    fields: [
      'learningDifficultyOrDisability',
      'learningDifficultyDetail',
      'registeredForFreeSchoolMeals',
    ],
  },
  {
    title: 'Emergency contact',
    fields: [
      'emergencyContactName',
      'emergencyContactNumber',
      'emergencyContactRelationship',
    ],
  },
  { title: 'Medical', fields: ['medicalConditions', 'medicalConsent'] },
  { title: 'Classes', fields: ['classes'] },
  {
    title: 'Agreements',
    fields: ['lunchTimeAgreement', 'photoPermission'],
  },
  {
    title: 'Data protection',
    fields: ['contactFor', 'contactBy'],
  },
  {
    title: 'Declaration',
    fields: ['parentCarerConsent', 'signatureFullName', 'signatureDate'],
  },
]

export function buildEnrollmentEmail(data, meta = {}) {
  const lines = [
    `New student registration from the Azza School website.`,
    ``,
  ]

  const rendered = new Set()

  for (const section of ENROLLMENT_SECTIONS) {
    const present = section.fields.filter((f) => isFilled(data[f]))
    if (present.length === 0) continue

    lines.push(section.title)
    lines.push('-'.repeat(section.title.length))
    for (const field of present) {
      rendered.add(field)
      lines.push(`${padLabel(labelise(field))} ${formatValue(data[field])}`)
    }
    lines.push('')
  }

  // Anything the form gains later still reaches the school, even before this
  // file knows which section it belongs in.
  const extras = Object.keys(data).filter(
    (k) => !rendered.has(k) && k !== HONEYPOT_FIELD && isFilled(data[k]),
  )
  if (extras.length > 0) {
    lines.push('Other')
    lines.push('-----')
    for (const field of extras) {
      lines.push(`${padLabel(labelise(field))} ${formatValue(data[field])}`)
    }
    lines.push('')
  }

  lines.push('--')
  lines.push(
    `Submitted ${meta.submittedAt ?? new Date().toISOString()} from www.azzaschool.org.`,
  )
  lines.push('Reply directly to this email to contact the parent or guardian.')

  return {
    subject: `Student registration - ${formatValue(data.firstName)} ${formatValue(
      data.lastName,
    )}`,
    text: lines.join('\n'),
    replyTo: typeof data.parentEmail === 'string' ? data.parentEmail.trim() : null,
  }
}
