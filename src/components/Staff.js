'use client'

import React, { useMemo } from 'react'
import { useTranslation } from '@/app/useTranslation'

import Image from 'next/image'
import Link from 'next/link'

import { Icon } from '@/components/Icon'
import clsx from 'clsx'

export const Staff = ({ staff, staffArabic }) => {
  const { translation, language } = useTranslation()

  const t = useMemo(() => translation?.about?.staff ?? {}, [translation])

  const staffArr = useMemo(
    () => (language === 'en' ? staff : staffArabic ?? []),
    [language, staff, staffArabic],
  )

  return (
    <section id="team">
      {/* Top purple background section */}
      <div className="bg-purple-600 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        {/* Section header text */}
        <div className="mx-auto max-w-2xl lg:max-w-screen-xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <div className="flex items-center">
              <h3 className="h2 max-w-4xl text-white sm:text-center lg:text-left">
                {t.title}
              </h3>
            </div>
            <div className="flex items-center">
              <p className="mt-5 text-xl leading-relaxed text-purple-50 sm:text-center lg:mt-0 lg:text-left">
                {t.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* background to create overlay effect */}
      <div className="h-32 w-full bg-purple-600" />
      {/* Team section */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl -translate-y-32 lg:max-w-screen-xl">
          <div className="grid gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8">
            {staffArr.map((member, i) => (
              <div key={`member-${i}`}>
                <div
                  className={clsx(
                    'mx-auto h-[130px] max-w-sm rounded-lg border border-gray-200 bg-gray-100 p-6 shadow',
                  )}
                >
                  <h5
                    className={clsx(
                      'mb-2 text-2xl font-semibold tracking-tight text-purple-600',
                      language === 'ar' && 'text-right',
                    )}
                  >
                    {member.data.name}
                  </h5>
                  <p
                    className={clsx(
                      'mb-3 font-normal text-gray-400',
                      language === 'ar' && 'text-right',
                    )}
                  >
                    {member.data.role}
                  </p>
                </div>

                {/* Staff member image */}
                {/* <div className="aspect-h-2 aspect-w-3">
                  <Image
                    src={member.data.image}
                    className="rounded-2xl object-cover"
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    alt={member.data.name}
                  />
                </div> */}
                {/* Staff member info */}
                {/* <div
                  className={clsx(
                    'flex items-center',
                    language === 'en'
                      ? 'justify-between text-left'
                      : 'justify-end text-right',
                  )}
                >
                  <div className="mt-3 text-xl font-medium">
                    <p className="font-semibold tracking-wide text-purple-900">
                      {member.data.name}
                    </p>
                    <p className="text-lg text-purple-600">
                      {member.data.role}
                    </p>
                  </div>
                  <div className="flex space-x-1.5">
                    {member.data.social.map((socialLink, j) => (
                      <Link
                        key={`member-${i}-social-link-${j}`}
                        href={socialLink.href}
                      >
                        <Icon
                          icon={socialLink.name}
                          className="durarion-300 h-[22px] w-[22px] text-purple-600 transition ease-in-out hover:text-purple-500"
                        />
                      </Link>
                    ))}
                  </div>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
