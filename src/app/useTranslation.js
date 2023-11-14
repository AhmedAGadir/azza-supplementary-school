'use client'

import { useLanguageContext } from '@/app/languageContext'
import dictionary from '@/data/dictionary.json'

export const useTranslation = () => {
  const { language } = useLanguageContext()

  const translation = dictionary[language] || {}

  return {
    translation,
    language,
  }
}
