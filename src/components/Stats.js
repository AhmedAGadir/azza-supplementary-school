'use client'

import React, { useMemo } from 'react'
import { useTranslation } from '@/app/useTranslation'

import { Gochi_Hand } from 'next/font/google'
import clsx from 'clsx'

const gochiHand = Gochi_Hand({
  subsets: ['latin'],
  variable: '--font-gochi-hand',
  weight: '400',
})

export const Stats = () => {
  const { translation, language } = useTranslation()

  const t = useMemo(() => translation?.about?.stats ?? {}, [translation])

  return (
    <section
      className={clsx(
        'relative w-full bg-purple-600 px-4 py-16 sm:px-6 sm:py-24 lg:px-8',
        gochiHand.variable,
      )}
    >
      {/* Container */}
      <div className="mx-auto max-w-screen-xl">
        {/* Section header text */}
        <div>
          <h2 className="h2 mx-auto max-w-4xl text-center text-white">
            {t.title}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-xl leading-relaxed text-purple-50">
            {t.description}
          </p>
        </div>
        {/* Stats */}
        <div className="mt-12 gap-y-16 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 md:gap-x-8 lg:gap-x-12">
          {t.stats?.map((stat, index) => (
            <div
              key={`stat-${index}`}
              className={clsx('text-center', index > 0 && 'mt-12 sm:mt-0')}
            >
              <h4 className="font-written text-8xl leading-none text-white lg:text-9xl">
                {stat.value}
              </h4>
              <p className="mt-0.5 text-lg font-medium text-purple-50 sm:mt-1.5 lg:text-xl">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
