import { HomeHero } from '@/components/HomeHero'
import { HomeFeatureBlocks } from '@/components/HomeFeatureBlocks'
import { FeaturedPrograms } from '@/components/FeaturedPrograms'
import { StaffAssurances } from '@/components/StaffAssurances'
import { Testimonials } from '@/components/Testimonials'
import { Faqs } from '@/components/Faqs'

import { getAllItems } from '@/lib/getItems'

export const metadata = {
  title:
    'Azza Supplementary School - Empowering Communities, Enriching Education.',
  description:
    'At Azza Supplementary School, we blend cultural enrichment with academic growth, cultivating confident learners proud of their heritage. Join us in a journey where education extends beyond textbooks, fostering community, identity, and a shared future.',
}

export default function HomePage() {
  const faqs = getAllItems('faqs')

  return (
    <>
      <HomeHero />
      {/* Gradient background transition */}
      <div className="h-40 w-full bg-gradient-to-b from-yellow-50 to-yellow-100 sm:h-48 xl:h-52" />

      <HomeFeatureBlocks />
      <StaffAssurances />
      <FeaturedPrograms />
      <Testimonials />
      <Faqs faqs={faqs} />
    </>
  )
}
