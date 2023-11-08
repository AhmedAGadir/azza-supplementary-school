import { EnrollmentHero } from '@/components/EnrollmentHero'
import { ContactInformation } from '@/components/ContactInformation'

export const metadata = {
  title: 'Enroll Today - Azza Supplementary School',
  description:
    'Begin your child’s journey with Azza Supplementary School. Discover our enrollment process, educational programs, and how we empower students through a rich blend of academic learning and cultural experiences.',
}

export default function EnrollmentPage() {
  return (
    <>
      <EnrollmentHero />
      <ContactInformation email="enrollment@azzaschool.org" />
    </>
  )
}
