'use client'

import React, { useMemo } from 'react'
import Image from 'next/image'
// import { useState, Fragment } from 'react'
// import { Dialog, Transition } from '@headlessui/react'
import clsx from 'clsx'

import { Icon } from '@/components/Icon'
import { Button } from '@/components/Button'

import heroImage1 from '/public/images/photos/certificates-1-cropped-2.jpg'
import heroImage2 from '/public/images/photos/gardening-cropped.jpg'

import { useTranslation } from '@/app/useTranslation'

// import alifbata from '/public/images/illustrations/alifbata.svg'

export const HomeHero = () => {
  const { translation, language } = useTranslation()

  const t = useMemo(() => translation?.home?.hero ?? {}, [translation])

  const ratings = useMemo(
    () => [
      // { label: 'Great Schools', stars: 5 },
      { label: t.arabicSchoolReviewLabel, stars: 5 },
      // { label: 'Google Reviews', stars: 5 },
    ],
    [t.arabicSchoolReviewLabel],
  )

  return (
    <section className="from-orange-25 bg-gradient-to-b to-orange-50 px-4 pt-16 sm:px-6 lg:px-8">
      {/* Hero container */}
      <div className="mx-auto max-w-screen-xl lg:grid lg:grid-cols-12 lg:gap-8">
        {/* Hero text content */}
        <div
          className={clsx(
            'flex flex-col items-center lg:col-span-6',
            language === 'en'
              ? 'order-1 justify-center lg:items-start'
              : 'order-2 lg:items-end',
          )}
        >
          <div>
            <div
              className={clsx(
                'inline-block rounded-full bg-orange-200 px-4 py-2 font-medium text-slate-800 shadow-md',
              )}
            >
              {t.title}
            </div>
          </div>
          <h1
            className={clsx(
              'h1 relative mt-4 max-w-xl text-center text-slate-800 sm:mt-5 lg:max-w-none',
              language === 'en' ? 'lg:text-left' : 'lg:text-right',
            )}
          >
            {t.subtitle}
          </h1>
          <p
            className={clsx(
              'relative mt-3 max-w-2xl text-center text-xl leading-loose text-purple-800',
              language === 'en' ? 'lg:text-left' : 'lg:text-right',
            )}
          >
            {t.description1}
            <br />
            {t.description2}
          </p>
          {/* Hero buttons */}
          <div className="mt-8 flex flex-col items-center overflow-hidden sm:flex-row">
            <Button href="/enroll">
              {t.cta}
              <Icon
                icon="arrowNarrowRight"
                className="ml-3 h-6 w-6 group-hover:animate-horizontal-bounce"
                stroke={2}
              />
            </Button>
            {/* <Button
              variant="secondary"
              className="mt-6 sm:ml-6 sm:mt-0"
              onClick={() => openModal()}
            >
              <Icon
                icon="playFilled"
                className="mr-3 h-7 w-7 text-purple-600 duration-300 ease-in-out group-hover:text-purple-50"
              />
              Watch video
            </Button> */}
          </div>
          {/* Social proof */}
          <p className="mt-14 hidden text-sm font-medium uppercase tracking-wider text-purple-900 sm:block lg:hidden xl:block">
            {t.rating1}{' '}
            <span className="font-semibold text-purple-600">{t.rating2}</span>
          </p>
          <div className="mt-8 hidden flex-col divide-y divide-purple-400/20 overflow-hidden sm:mt-5 sm:flex sm:flex-row sm:divide-x sm:divide-y-0 lg:hidden xl:flex">
            {ratings.map((rating, index) => (
              <div
                key={`primary-${rating.label}`}
                className={clsx(
                  index == 0 && 'pb-5 sm:pb-0 sm:pr-10',
                  index == 1 && 'py-5 sm:px-10 sm:py-0',
                  index == 2 && 'pt-5 sm:pl-10 sm:pt-0',
                  'flex flex-col items-center',
                )}
              >
                <div className="flex w-full justify-center space-x-1">
                  {[...Array(rating.stars)].map((e, i) => (
                    <Icon
                      icon="starFilled"
                      className="h-4 w-4 text-yellow-500"
                      key={`primary-${rating.label}-star-${i}`}
                    />
                  ))}
                </div>
                <p className="mt-2.5 text-xs font-bold uppercase tracking-wide text-purple-700">
                  {rating.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Hero image & video */}
        <div
          className={clsx(
            'relative lg:col-span-6',
            language === 'en' ? 'order-2' : 'order-1',
          )}
        >
          <div
            className={clsx(
              'relative pt-16',
              language === 'en'
                ? 'sm:pl-36 sm:pt-0 lg:pl-20 xl:pl-32'
                : 'sm:pr-36 sm:pt-0 lg:pr-20 xl:pr-32',
            )}
          >
            <div className="aspect-h-4 aspect-w-3 relative rounded-2xl">
              <Image
                className="absolute inset-0 rounded-2xl object-cover"
                src={heroImage1}
                fill
                alt="classroom"
                sizes="(min-width: 1280px) 29.5rem, (min-width: 1024px) calc(50vw - 8.75rem), (min-width: 640px) 27rem, calc(100vw - 2rem)"
              />
            </div>
            <div
              className={clsx(
                'absolute bottom-0 hidden rounded-3xl sm:block sm:h-72 sm:w-72 sm:translate-y-1/3 lg:h-64 lg:w-64 xl:h-72 xl:w-72 2xl:h-80 2xl:w-80',
                language === 'en' ? 'left-0' : 'right-0',
              )}
            >
              <Image
                className={clsx(
                  'absolute inset-0 h-full w-full rounded-3xl object-cover',
                )}
                src={heroImage2}
                fill
                alt="classroom"
                sizes="(min-width: 1536px) 20rem, (min-width: 1280px) 18rem, (min-width: 1024px) 16rem, (min-width: 640px) 18rem"
              />
            </div>
          </div>
        </div>
        {/* Visible only on sm screens ( <= 640px ) and lg screens ( >= 1024px	< 1280px ) */}
        <div className="mt-20 flex flex-col items-center sm:hidden lg:mt-24 lg:hidden">
          {/* Social proof */}
          <p className="text-sm font-semibold uppercase tracking-wider text-purple-900">
            {t.rating1}{' '}
            <span className="font-semibold text-purple-600">{t.rating2}</span>
          </p>
          <div className="mt-8 flex flex-col divide-y divide-purple-400/20 overflow-hidden sm:flex-row sm:divide-x sm:divide-y-0">
            {ratings.map((rating, index) => (
              <div
                key={`secondary-${rating.label}`}
                className={clsx(
                  index == 0 && 'pb-5 sm:pb-0 sm:pr-10',
                  index == 1 && 'py-5 sm:px-10 sm:py-0',
                  index == 2 && 'pt-5 sm:pl-10 sm:pt-0',
                  'flex flex-col items-center',
                )}
              >
                <div className="flex w-full justify-center space-x-1">
                  {[...Array(rating.stars)].map((e, i) => (
                    <Icon
                      icon="starFilled"
                      className="h-4.5 w-4.5 text-yellow-500 lg:h-5 lg:w-5"
                      key={`secondary-${rating.label}-star-${i}`}
                    />
                  ))}
                </div>

                <p className="mt-2.5 text-xs font-bold uppercase tracking-wide text-purple-700">
                  {rating.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
