import { getItemData, getAllItems } from '@/lib/getItems'
import ProgramPageContent from '@/components/ProgramPageContent'

export async function generateMetadata({ params: { slug } }) {
  const program = getItemData(slug, 'programs')

  return {
    title: `${program.name} - Azza Supplementary School`,
    description: program.hero.description,
  }
}

export default function ProgramPage({ params: { slug } }) {
  const program = getItemData(slug, 'programs')
  const programArabic = getItemData(slug, 'programs-arabic')

  return <ProgramPageContent program={program} programArabic={programArabic} />
}

export async function generateStaticParams() {
  const programs = getAllItems('programs')

  const paths = programs.map((program) => ({
    slug: program.slug,
  }))

  return paths
}

export const dynamicParams = false
