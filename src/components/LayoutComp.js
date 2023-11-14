'use client'

import React from 'react'
import clsx from 'clsx'
import { Roboto_Flex } from 'next/font/google'
import { IBM_Plex_Sans_Arabic } from 'next/font/google'

import { Header } from '@/components/Header'
import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import { LanguageProvider } from '@/app/languageContext'

const roboto = Roboto_Flex({
  subsets: ['latin'],
  variable: '--font-roboto',
})

const plex = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-plex',
})

const LayoutComp = ({ programs, programsArabic, contact, children }) => {
  return (
    <LanguageProvider>
      {({ language }) => {
        const isArabic = language === 'ar'
        const fontVariable = isArabic ? plex.variable : roboto.variable
        const fontName = isArabic ? 'font-arabic' : 'font-sans'
        const htmlLang = isArabic ? 'ar' : 'en'

        return (
          <html lang={htmlLang}>
            <body className={clsx(fontName, fontVariable)}>
              <Header
                programs={isArabic ? programsArabic : programs}
                contact={contact}
              />
              {children}
              <CallToAction language={language} />
              <Footer
                programs={isArabic ? programsArabic : programs}
                contact={contact}
              />
            </body>
          </html>
        )
      }}
    </LanguageProvider>
  )
}

export default LayoutComp
