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
    'We are a dedicated non-profit focused on Arabic language education. Through a balanced blend of cultural enrichment and academic growth, we shape confident learners primed to contribute actively to society.',
}

export default function HomePage() {
  const featuredPrograms = getAllItems('programs')
    .filter((program) => program.data.featured)
    .sort((a, b) => a.data.order - b.data.order)

  const featuredProgramsArabic = getAllItems('programs-arabic')
    .filter((program) => program.data.featured)
    .sort((a, b) => a.data.order - b.data.order)

  const faqs = getAllItems('faqs')

  const testimonials = getAllItems('testimonials')

  const testimonialsArabic = getAllItems('testimonials-arabic')

  return (
    <>
      <HomeHero />
      {/* Gradient background transition */}
      <div className="h-40 w-full bg-gradient-to-b from-yellow-50 to-yellow-100 sm:h-48 xl:h-52" />

      <HomeFeatureBlocks />
      <StaffAssurances />
      <FeaturedPrograms
        featuredPrograms={featuredPrograms}
        featuredProgramsArabic={featuredProgramsArabic}
      />
      <Testimonials
        testimonials={testimonials}
        testimonialsArabic={testimonialsArabic}
      />
      <Faqs faqs={faqs} />
    </>
  )
}
