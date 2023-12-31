import { AboutHero } from '@/components/AboutHero'
import { AlternatingFeatures } from '@/components/AlternatingFeatures'
import { Stats } from '@/components/Stats'
import { Staff } from '@/components/Staff'
import { Values } from '@/components/Values'
import { Maintenance } from '@/components/Maintenance'
import { getAllItems } from '@/lib/getItems'

export const metadata = {
  title: 'About us - Azza Supplementary School',
  description:
    "Learn about Azza Supplementary School's mission, philosophy, and dedicated team. Explore our commitment to nurturing young minds, fostering creativity, and empowering children for a bright future.",
}

export default function AboutPage() {
  const staff = getAllItems('staff')
  const staffArabic = getAllItems('staff-arabic')

  return (
    <>
      <AboutHero />
      {/* Gradient background transition */}
      <div className="h-32 w-full bg-gradient-to-b from-purple-25 to-white sm:h-40 lg:h-44" />

      {/* <AlternatingFeatures /> */}
      <Stats />
      <Staff staff={staff} staffArabic={staffArabic} />
      {/* <Values /> */}
    </>
  )
}
