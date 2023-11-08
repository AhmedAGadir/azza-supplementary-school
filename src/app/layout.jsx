import '@/styles/tailwind.css'
import clsx from 'clsx'
import { Roboto_Flex } from 'next/font/google'

import { Header } from '@/components/Header'
import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'

import { getAllItems, getItemData } from '@/lib/getItems'

const roboto = Roboto_Flex({
  subsets: ['latin'],
  variable: '--font-roboto',
})

export const metadata = {
  title:
    'Azza Supplementary School - Empowering Communities, Enriching Education.',
  description:
    'We are a dedicated non-profit focused on Arabic language education. Through a balanced blend of cultural enrichment and academic growth, we shape confident learners primed to contribute actively to society.',
}

export default function RootLayout({ children }) {
  const programs = getAllItems('programs')
  const contact = getItemData('contact', 'global')

  return (
    <html lang="en">
      <body className={clsx('font-sans', roboto.variable)}>
        <Header programs={programs} contact={contact} />
        {children}
        <CallToAction />
        <Footer programs={programs} contact={contact} />
      </body>
    </html>
  )
}
