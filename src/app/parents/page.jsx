import { ParentsHero } from '@/components/ParentsHero'
import { Events } from '@/components/Events'
import { Newsletter } from '@/components/Newsletter'

export const metadata = {
  title: 'Parent information - Azza Supplementary School',
  description:
    'Stay connected with Azza Supplementary School through our Parents Portal - your go-to source for school news, events, and updates.',
}

export default function ParentsPage() {
  return (
    <>
      <ParentsHero />
      <Events />
      <Newsletter />
    </>
  )
}
