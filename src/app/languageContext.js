'use client'

import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en') // default language

  let sharedState = {
    language,
    changeLanguage: (newLanguage) => setLanguage(newLanguage),
  }

  return (
    <LanguageContext.Provider value={sharedState}>
      {children(sharedState)}
    </LanguageContext.Provider>
  )
}

export function useLanguageContext() {
  return useContext(LanguageContext)
}
