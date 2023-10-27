import { ContactHero } from '@/components/ContactHero'
import { ContactInformation } from '@/components/ContactInformation'

export const metadata = {
  title: 'Contact us - Azza Supplementary School',
  description:
    "Get in touch with Azza Supplementary School - we're here to help! Find our contact information, location, and hours, or submit an inquiry.",
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInformation />
    </>
  )
}
