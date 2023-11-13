'use client'

import React from 'react'
import clsx from 'clsx'
import { Roboto_Flex } from 'next/font/google'
import { Cairo } from 'next/font/google'

import { Header } from '@/components/Header'
import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import { LanguageProvider } from '@/app/languageContext'

const roboto = Roboto_Flex({
  subsets: ['latin'],
  variable: '--font-roboto',
})

const cairo = Cairo({
  subsets: ['arabic'],
  variable: '--font-cairo',
})

const LayoutComp = ({ programs, contact, children }) => {
  return (
    <LanguageProvider>
      {({ language }) => {
        const isArabic = language === 'ar'
        const fontVariable = isArabic ? cairo.variable : roboto.variable
        const fontName = isArabic ? 'font-arabic' : 'font-sans'
        const htmlLang = isArabic ? 'ar' : 'en'

        return (
          <html lang={htmlLang}>
            <body className={clsx(fontName, fontVariable)}>
              <Header programs={programs} contact={contact} />
              {children}
              <CallToAction />
              <Footer programs={programs} contact={contact} />
            </body>
          </html>
        )
      }}
    </LanguageProvider>
  )
}

export default LayoutComp
