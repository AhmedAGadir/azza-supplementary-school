import '@/styles/tailwind.css'
import LayoutComp from '@/components/LayoutComp'
import { getAllItems, getItemData } from '@/lib/getItems'

export const metadata = {
  title:
    'Azza Supplementary School - Empowering Communities, Enriching Education.',
  description:
    'We are a dedicated non-profit focused on Arabic language education. Through a balanced blend of cultural enrichment and academic growth, we shape confident learners primed to contribute actively to society.',
}

export default function RootLayout({ children }) {
  const programs = getAllItems('programs')
  const programsArabic = getAllItems('programs-arabic')
  const contact = getItemData('contact', 'global')

  return (
    <LayoutComp
      programs={programs}
      programsArabic={programsArabic}
      contact={contact}
    >
      {children}
    </LayoutComp>
  )
}
