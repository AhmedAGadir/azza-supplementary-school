'use client'
import Image from 'next/image'
import Link from 'next/link'

import { Icon } from '@/components/Icon'
// import logo from '/public/images/azza-logo.png'
import logo from '/public/images/logo-icon.png'

import React, { useMemo } from 'react'
import { useTranslation } from '@/app/useTranslation'

export function ContactHeader({ contact }) {
  const { translation, language } = useTranslation()

  const t = useMemo(
    () => translation?.header?.contactHeader ?? {},
    [translation],
  )

  return (
    <div className="hidden px-4 sm:px-6 lg:block">
      {/* Container */}
      <div className="relative mx-auto max-w-screen-xl border-b border-purple-200/30 py-5">
        <div className="flex items-center justify-between">
          {/* Site branding */}
          <div className="flex-shrink-0 flex-grow-0">
            <Link href="/">
              <div className="flex w-32 items-center gap-2">
                <Image
                  src={logo}
                  alt="Azza Supplementary School"
                  className="h-auto"
                  width={120}
                />
                <h1 className="h5">{t.name}</h1>
              </div>
            </Link>
          </div>
          {/* Contact information */}
          <ul className="ml-8 flex lg:space-x-6 xl:space-x-16">
            {/* Address */}
            <li className="flex max-w-xs flex-shrink">
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-yellow-400">
                  <Icon icon="mapPin" className="h-6 w-6 text-purple-700" />
                </span>
              </div>
              <div className="ml-3 mt-0 flex-1 xl:ml-4">
                <h5 className="flex items-center text-base font-semibold text-purple-900">
                  {t.labels?.address}
                </h5>
                <p className="mt-0.5 text-sm leading-relaxed text-purple-800 text-opacity-90">
                  {contact.address}
                  <br />
                  {t.labels?.addressTimes}
                </p>
              </div>
            </li>

            {/* Phone number */}
            <li className="flex flex-shrink-0">
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-200">
                  <Icon icon="phone" className="h-6 w-6 text-purple-700" />
                </span>
              </div>
              <div className="ml-3 flex-1 xl:ml-4">
                <h5 className="flex items-center text-base font-semibold text-purple-900">
                  {t.labels?.phone}
                </h5>
                <p className="mt-0.5 text-sm leading-relaxed text-purple-800 text-opacity-90">
                  {contact.phoneA}
                </p>
                <p className="mt-0.5 text-sm leading-relaxed text-purple-800 text-opacity-90">
                  {contact.phoneB}
                </p>
              </div>
            </li>

            {/* Email */}
            <li className="flex flex-shrink-0">
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-200">
                  <Icon icon="mail" className="h-6 w-6 text-purple-700" />
                </span>
              </div>
              <div className="ml-3 flex-1 xl:ml-4">
                <h5 className="flex items-center text-base font-semibold text-purple-900">
                  {t.labels?.email}
                </h5>
                <p className="mt-0.5 text-sm leading-relaxed text-purple-800 text-opacity-90">
                  {contact.email}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
