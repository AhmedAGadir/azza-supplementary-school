'use client'

import React, { useMemo } from 'react'
import { useTranslation } from '@/app/useTranslation'

import Image from 'next/image'
import { Fragment } from 'react'

// import image1 from '/public/images/stock/school-grid-01.jpg'
// import image2 from '/public/images/stock/school-grid-02.jpg'
// import image3 from '/public/images/stock/school-grid-03.jpg'
// import image4 from '/public/images/stock/school-grid-04.jpg'
// import image5 from '/public/images/stock/school-grid-05.jpg'
import teachersImg from '/public/images/photos/stand.jpg'
import lightRoseBlob from '/public/images/illustrations/blob-light-rose.svg'
import dotsStrip from '/public/images/illustrations/dots-large-strip.svg'
import dots from '/public/images/illustrations/dots.svg'
import clsx from 'clsx'

// const images = [
//   { src: image1, alt: 'Child laughing with teacher' },
//   { src: image2, alt: 'Teacher portrait' },
//   { src: image3, alt: 'Teacher reading to students' },
//   { src: image4, alt: 'Child writing on board with teacher' },
//   { src: image5, alt: 'Classroom' },
// ]

export function AboutHero() {
  const { translation, language } = useTranslation()

  const t = useMemo(() => translation?.about?.hero ?? {}, [translation])

  return (
    <section className="bg-purple-25 px-4 pt-16 sm:px-6 lg:px-8">
      {/* Container */}
      <div className="mx-auto max-w-screen-xl">
        {/* Page header */}
        <div className="relative z-20">
          <h2 className="h1 mx-auto max-w-3xl text-center text-purple-900">
            {t.title}
          </h2>
          <p
            className="mx-auto mt-4 max-w-2xl text-center text-xl leading-relaxed text-purple-800 sm:mt-5"
            dangerouslySetInnerHTML={{ __html: t.description }}
          ></p>
        </div>
        {/* School image */}
        <div
          className={clsx(
            'relative mx-auto mt-24 w-full max-w-xl lg:col-span-6 lg:mx-0 lg:flex lg:max-w-none lg:items-center',
            // index % 2 == 0 && 'lg:order-2',
          )}
        >
          {/* Blob background decoration on large screens */}
          <div className="hidden lg:block">
            <Image
              src={lightRoseBlob}
              className="absolute inset-0 h-full w-full transform"
              alt=""
            />
          </div>
          {/* Grid background decoration on small screens */}
          <Image
            src={dotsStrip}
            className="absolute left-1/2 top-0 origin-top -translate-x-1/2 -translate-y-8 scale-80 transform sm:scale-100 lg:hidden"
            alt=""
          />
          <div
            className={clsx(
              'relative mx-auto w-full rounded-3xl shadow-lg lg:max-w-lg',
              // index % 2 == 0 ? 'lg:ml-auto lg:mr-0' : 'lg:mx-0',
            )}
          >
            <div className="relative block w-full">
              {/* Corner dots decoration */}
              <Image
                className={clsx(
                  '-top-30 xl:-top-30 absolute z-10 hidden w-40 transform lg:block xl:w-48',
                  // index % 2 == 0 ? '-left-20' : '-right-20',
                )}
                src={dots}
                alt=""
              />
              {/* Block image */}
              <figure className="relative z-20 aspect-[12/10] md:order-1">
                <Image
                  src={teachersImg}
                  className="absolute inset-0 h-full w-full rounded-3xl object-cover object-center shadow-xl"
                  fill
                  sizes="(min-width: 1024px) 32rem, (min-width: 576px) 36rem, 100vw"
                  alt={'school stand'}
                />
              </figure>
            </div>
          </div>
        </div>
        {/* About school */}
        <div
          className={clsx(
            'prose prose-lg mx-auto mt-14 sm:prose-xl sm:mt-16 lg:mt-24',
            language === 'ar' && 'text-right',
          )}
          dangerouslySetInnerHTML={{ __html: t.description2 }}
        />
      </div>
    </section>
  )
}
