'use client'

import React, { useMemo } from 'react'

import { useTranslation } from '@/app/useTranslation'

import { ProgramHero } from '@/components/ProgramHero'
import { ProgramInformation } from '@/components/ProgramInformation'
import { ProgramDescription } from '@/components/ProgramDescription'
import { ProgramPricing } from '@/components/ProgramPricing'

const ProgramPageContent = ({ program, programArabic }) => {
  const { translation, language } = useTranslation()

  //   const t = useMemo(() => translation?.home?.hero ?? {}, [translation])

  const programData = useMemo(
    () => (language === 'en' ? program : programArabic ?? []),
    [language, program, programArabic],
  )

  return (
    <>
      {programData?.hero && (
        <ProgramHero hero={programData.hero} language={language} />
      )}
      {programData?.infoSection && (
        <ProgramInformation
          data={programData.infoSection}
          language={language}
        />
      )}
      {programData?.descriptionSection && (
        <ProgramDescription
          data={programData.descriptionSection}
          language={language}
        />
      )}
      {programData?.pricingSection && (
        <ProgramPricing data={programData.pricingSection} language={language} />
      )}
    </>
  )
}

export default ProgramPageContent
