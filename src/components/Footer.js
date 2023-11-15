'use client'

import React, { useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'

// import logo from '/public/images/azza-logo.png'
import logo from '/public/images/logo-icon.png'
import { Icon } from '@/components/Icon'

import { useTranslation } from '@/app/useTranslation'

function SocialLink({ className, href, icon }) {
  return (
    <Link
      className={clsx(
        'flex h-10 w-10 items-center justify-center rounded-full bg-purple-500 duration-300 ease-in-out hover:bg-purple-600',
        className,
      )}
      href={href}
    >
      <Icon icon={icon} className="h-5 w-5 text-white" />
    </Link>
  )
}

export const Footer = ({ programs, contact }) => {
  const { translation, language } = useTranslation()

  const t = useMemo(() => translation?.footer ?? {}, [translation])

  return (
    <footer className="space-y-8 divide-y divide-purple-400/20 bg-yellow-100 px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8">
      {/* Top section: blocks */}
      <div className="mx-auto grid max-w-md gap-y-8 sm:max-w-none sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 md:gap-x-12 lg:max-w-screen-2xl lg:grid-cols-11 lg:gap-8 xl:gap-12">
        {/* Block 1 */}
        <div
          className={clsx(
            'flex flex-col lg:col-span-4 lg:mx-auto',
            language === 'en'
              ? 'items-start text-left'
              : 'items-end text-right',
          )}
        >
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-40 flex-shrink-0 flex-grow-0">
              <Link href="/">
                <Image
                  src={logo}
                  alt="Azza Supplementary School"
                  className="h-auto"
                />
              </Link>
            </div>
          </div>
          {/* Mission statement */}
          <div className="mt-6 text-lg text-purple-800">{t.title}</div>
          {/* Social links */}
          <div className="mt-5 w-full lg:mt-6">
            <div
              className={clsx(
                'flex space-x-4',
                language === 'en' ? 'justify-start' : 'justify-end',
              )}
            >
              <SocialLink
                href="https://www.instagram.com/azzasupplementaryschool/"
                icon="instagram"
              />
              <SocialLink
                href="https://www.facebook.com/azza.supplementary"
                icon="facebook"
              />
              <SocialLink href="  " icon="twitter" />
            </div>
          </div>
        </div>
        {/* Block 2 */}
        <div
          className={clsx(
            'flex-shrink sm:order-3 lg:order-none lg:col-span-2',
            language === 'en' ? 'text-left' : 'text-right',
          )}
        >
          <h6 className="relative text-xl font-bold tracking-wide text-purple-900">
            <span className="relative z-20">{t.labels?.programs}</span>
            <span
              className={clsx(
                'absolute -bottom-1 z-10 h-1 w-12 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500',
                language === 'en' ? 'left-0' : 'right-0',
              )}
            />
          </h6>
          {/* Program links */}
          <ul className="mt-6 divide-y divide-purple-400/20 text-lg">
            {programs.map((program, index) => (
              <li
                key={`footer-program-link-${program.data.name}`}
                className={clsx(
                  'font-medium text-purple-700 duration-300 ease-in-out hover:text-purple-600',
                  index == 0 && 'pb-2',
                  index == programs.length && 'pt-2',
                  index > 0 && index < programs.length && 'py-2',
                )}
              >
                <Link href={program.slug}>{program.data.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Block 3 */}
        <div
          className={clsx(
            'flex-shrink sm:order-4 lg:order-none lg:col-span-2',
            language === 'en' ? 'text-left' : 'text-right',
          )}
        >
          <h6 className="relative text-xl font-bold tracking-wide text-purple-900">
            <span className="relative z-20">{t.labels?.siteLinks}</span>
            <span
              className={clsx(
                'absolute -bottom-1 z-10 h-1 w-12 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500',
                language === 'en' ? 'left-0' : 'right-0',
              )}
            />
          </h6>
          {/* Site links */}
          <ul className="mt-6 divide-y divide-purple-400/20 text-lg">
            {t?.siteLinksDropdown?.map((link, index) => (
              <li
                key={`footer-site-link-${link.label}`}
                className={clsx(
                  'font-medium text-purple-700 duration-300 ease-in-out hover:text-purple-600',
                  index == 0 && 'pb-2',
                  index == t.siteLinksDropdown?.length && 'pt-2',
                  index > 0 && index < t.siteLinksDropdown?.length && 'py-2',
                )}
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Block 4 */}
        <div
          className={clsx(
            'sm:order-2 lg:order-none lg:col-span-3   lg:mx-auto',
            language === 'en' ? 'text-left' : 'text-right',
          )}
        >
          <h6 className="relative text-xl font-bold tracking-wide text-purple-900">
            <span className="relative z-20">{t.labels?.contactUs}</span>
            <span
              className={clsx(
                'absolute -bottom-1 z-10 h-1 w-12 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500',
                language === 'en' ? 'left-0' : 'right-0',
              )}
            />
          </h6>
          {/* Contact information */}
          <ul className={clsx('mt-6 flex flex-col space-y-5')}>
            {/* Address */}
            <li
              className={clsx(
                'flex max-w-xs flex-shrink',
                language === 'en' ? 'flex-row' : 'ml-auto flex-row-reverse',
              )}
            >
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-yellow-400">
                  <Icon icon="mapPin" className="h-6 w-6 text-purple-700" />
                </span>
              </div>
              <div
                className={clsx(
                  'flex-1 xl:ml-4',
                  language === 'en' ? 'ml-3' : 'mr-3',
                )}
              >
                <h5
                  className={clsx(
                    'flex items-center text-base font-semibold text-purple-900',
                    language === 'en' ? 'justify-start' : 'justify-end',
                  )}
                >
                  {t.labels?.address}
                </h5>
                <p className="mt-0.5 text-sm leading-relaxed text-purple-800 text-opacity-90">
                  {contact.address}
                  <br />
                  {t.labels?.addressTimes}
                </p>
              </div>
            </li>
            {/* Email */}
            <li
              className={clsx(
                'flex max-w-xs flex-shrink',
                language === 'en' ? 'flex-row' : 'ml-auto flex-row-reverse',
              )}
            >
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-200">
                  <Icon icon="mail" className="h-6 w-6 text-purple-700" />
                </span>
              </div>
              <div
                className={clsx(
                  'flex-1 xl:ml-4',
                  language === 'en' ? 'ml-3' : 'mr-3',
                )}
              >
                <h5
                  className={clsx(
                    'flex items-center text-base font-semibold text-purple-900',
                    language === 'en' ? 'justify-start' : 'justify-end',
                  )}
                >
                  {t.labels?.email}
                </h5>
                <p className="mt-0.5 text-sm leading-relaxed text-purple-800 text-opacity-90">
                  {contact.email}
                </p>
              </div>
            </li>
            {/* Phone number */}
            <li
              className={clsx(
                'flex max-w-xs flex-shrink',
                language === 'en' ? 'flex-row' : 'ml-auto flex-row-reverse',
              )}
            >
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-200">
                  <Icon icon="phone" className="h-6 w-6 text-purple-700" />
                </span>
              </div>
              <div
                className={clsx(
                  'flex-1 xl:ml-4',
                  language === 'en' ? 'ml-3' : 'mr-3',
                )}
              >
                <h5
                  className={clsx(
                    'flex items-center text-base font-semibold text-purple-900',
                    language === 'en' ? 'justify-start' : 'justify-end',
                  )}
                >
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
          </ul>
        </div>
      </div>
      {/* Bottom section */}
      <div className="mx-auto flex max-w-md flex-col justify-between py-8 sm:max-w-none sm:flex-row lg:max-w-screen-2xl">
        {/* Copyright note */}
        <span className="text-base text-purple-800/90">
          © {new Date().getFullYear()} Azza Supplementary School. All rights
          reserved.
        </span>
      </div>
    </footer>
  )
}
