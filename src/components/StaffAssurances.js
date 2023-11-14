'use client'

import Image from 'next/image'
import clsx from 'clsx'

import React, { useMemo } from 'react'
import { useTranslation } from '@/app/useTranslation'

import { Icon } from '@/components/Icon'
import { Button } from '@/components/Button'
import checkmark from '/public/images/illustrations/checkmark.svg'

export const StaffAssurances = () => {
  const { translation, language } = useTranslation()

  const t = useMemo(
    () => translation?.home?.staffAssurances ?? {},
    [translation],
  )

  return (
    <section className="relative w-full px-4 py-16 sm:px-6 sm:py-24 xl:px-8">
      {/* Container */}
      <div className="mx-auto max-w-xl lg:max-w-screen-xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
          {/* Text content */}
          <div
            className={clsx(
              'flex flex-col justify-center lg:col-span-1 ',
              language === 'en' ? 'lg:text-left' : 'items-end text-right',
            )}
          >
            <div>
              <span className="- inline-block rounded-full bg-purple-200 px-4 py-2 font-medium text-purple-700 shadow-md">
                {t.title}
              </span>
            </div>
            <h2 className="h2 mt-4 text-purple-900 sm:mt-5">{t.subtitle}</h2>
            <p className="mt-4 max-w-xl text-xl leading-relaxed text-purple-800 md:mt-5">
              {t.description}
            </p>
          </div>
          {/* Teacher qualifications box */}
          <div className={clsx('mx-auto w-full sm:mx-0 sm:max-w-none ')}>
            <div className="relative mt-16 max-w-4xl rounded-xl bg-yellow-100 sm:mt-14">
              <span className="absolute -top-7 left-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-purple-600 shadow-md sm:left-10">
                <Icon icon="certificate" className="h-8 w-8 text-purple-50" />
              </span>
              <div className="mt-2 px-4 py-10 sm:px-10 sm:py-12">
                <p className="text-lg font-semibold text-purple-900 sm:text-xl">
                  {t.title2}
                </p>
                {/* Teacher qualifications list */}
                <ul className="mt-5 space-y-5 text-lg text-purple-800">
                  {t.assurances?.map((assurance, index) => (
                    <li
                      key={`assurance-${index}`}
                      className="flex items-center"
                    >
                      <Image
                        className="mr-3 h-7 w-7 flex-shrink-0"
                        src={checkmark}
                        alt=""
                      />
                      <span>{assurance}</span>
                    </li>
                  ))}
                </ul>
                {/* Link to team section */}
                <Button
                  href="/about#team"
                  variant="accent"
                  size="sm"
                  className="mt-10"
                >
                  {t.action}
                  <Icon
                    icon="arrowNarrowRight"
                    className="ml-3 h-5 w-5 group-hover:animate-horizontal-bounce"
                    stroke={2}
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
