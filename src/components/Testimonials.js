'use client'

import React, { useMemo } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

import { Icon } from '@/components/Icon'
import { useTranslation } from '@/app/useTranslation'

// import qaaf from '/public/images/illustrations/qaaf-purple.svg'

const bgColorsClassName = [
  'bg-yellow-200',
  'bg-purple-25',
  'bg-rose-50',
  'bg-blue-50',
]

export const Testimonials = ({ testimonials, testimonialsArabic }) => {
  const { translation, language } = useTranslation()

  const t = useMemo(() => translation?.home?.testimonials ?? {}, [translation])

  const testimonialsArr = useMemo(
    () => (language === 'en' ? testimonials : testimonialsArabic ?? []),
    [language, testimonials, testimonialsArabic],
  )

  return (
    <section className="bg-purple-600 py-20 sm:py-28 md:-mt-48 lg:py-32">
      {/* Container */}
      <div className="mx-auto px-4 sm:px-6 lg:max-w-screen-2xl">
        {/* Section header title and subheader */}
        <div className="flex flex-col items-center justify-center">
          <h2 className="h2 relative z-10 max-w-2xl text-center text-white">
            {/* <Image
              className=" absolute -bottom-40 -right-10 h-auto w-72 -rotate-6 2xl:block"
              src={qaaf}
              alt=""
            /> */}
            <span className="relative z-20">{t.title}</span>
          </h2>
          <p className="z-10 mx-auto mt-4 max-w-3xl text-center text-xl leading-relaxed text-purple-50">
            {t.description}
          </p>
        </div>

        {/* Testimonials */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 sm:gap-6 md:mt-14 md:gap-8 lg:mt-16 lg:gap-6 xl:mt-20 xl:grid-cols-4 2xl:mt-24 2xl:gap-12">
          {testimonialsArr.map((item, index) => (
            <blockquote
              key={`testimonial-${index}`}
              className={clsx(
                bgColorsClassName[index % 4],
                'relative z-20 rounded-3xl px-8 py-8 transition duration-300 ease-in-out sm:px-6 md:px-8 lg:px-5 2xl:px-8',
              )}
            >
              {/* <Image
                src={item.data.image}
                width={80}
                height={80}
                className="h-20 w-20 rounded-full border-2 border-yellow-300 object-cover drop-shadow-2xl filter"
                alt={item.data.name}
              /> */}
              <p
                className={clsx(
                  'mt-3 text-lg font-bold text-purple-900',
                  language === 'en' ? 'text-left' : 'text-right',
                )}
              >
                {item.data.name}
              </p>
              {/* Rating */}
              <div
                className={clsx(
                  'mt-1 flex w-full justify-start space-x-1',
                  language === 'en' ? 'justify-start' : 'justify-end',
                )}
              >
                {[...Array(item.data.stars)].map((e, i) => (
                  <Icon
                    key={`${item.data.name}-star-${i}`}
                    icon="starFilled"
                    className="h-5 w-5 text-yellow-500"
                  />
                ))}
              </div>
              <p
                className={clsx(
                  'mt-5 text-lg text-purple-800',
                  language === 'en' ? 'text-left' : 'text-right',
                )}
              >
                "{item.data.testimonial}"
              </p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
