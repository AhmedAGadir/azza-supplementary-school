'use client'
import React, { useMemo } from 'react'
import { useTranslation } from '@/app/useTranslation'
import clsx from 'clsx'

import { Icon } from '@/components/Icon'

export const ContactInformation = ({ email, contact }) => {
  const { translation, language } = useTranslation()

  const t = useMemo(
    () => translation?.contact?.information ?? {},
    [translation],
  )

  return (
    <section className="relative -mb-52 w-full -translate-y-52 bg-white px-4 pt-56 sm:px-6 sm:pt-64 lg:px-8 lg:pt-72">
      {/* Contact information container */}
      <div className="mx-auto max-w-xl lg:max-w-screen-xl">
        {/* Section header */}
        <div className={clsx('lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-32')}>
          <div
            className={clsx(
              'flex items-center',
              language === 'en' ? 'order-1' : 'order-2 ml-auto',
            )}
          >
            <h2
              className={clsx(
                'h2 max-w-4xl text-purple-900',
                language === 'ar' && 'ml-auto',
              )}
            >
              {t.title}
            </h2>
          </div>
          <div
            className={clsx(
              'mt-3 flex items-center sm:mt-4 lg:mt-0',
              language === 'en' ? 'order-2' : 'order-1 ml-auto text-right',
            )}
          >
            <p className="text-lg text-purple-800 text-opacity-90 sm:text-xl">
              {t.description}
            </p>
          </div>
        </div>
        {/* Contact information cards */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-4 sm:gap-6 lg:mt-20 lg:grid-cols-3 xl:gap-12">
          {/* Address card */}
          <div className="rounded-3xl bg-yellow-200 px-4 py-8 sm:col-span-2 sm:p-8 lg:col-span-1">
            <div
              className={clsx(
                'flex sm:flex-col ',
                language === 'en'
                  ? 'lg:flex-row'
                  : 'flex-row-reverse text-right lg:flex-row-reverse',
              )}
            >
              <div className={language === 'ar' && 'ml-auto'}>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400">
                  <Icon icon="mapPin" className="h-8 w-8 text-purple-700" />
                </span>
              </div>
              <div
                className={clsx(
                  'flex-1  sm:mt-3 lg:mt-0',
                  language === 'en'
                    ? 'ml-6 sm:ml-0 lg:ml-6'
                    : 'mr-6 sm:mr-0 lg:mr-6',
                )}
              >
                <h5
                  className={clsx(
                    'flex items-center text-xl font-semibold text-purple-900',
                    language === 'ar' && 'justify-end',
                  )}
                >
                  {t.labels?.address}
                </h5>
                <p className="mt-1.5 text-base leading-relaxed text-purple-800">
                  {contact.address}
                  <br />
                  {t.labels?.addressTimes}
                </p>
              </div>
            </div>
          </div>
          {/* Email card */}
          <div className="rounded-3xl bg-purple-50 px-4 py-8 sm:col-span-2 sm:p-8 sm:py-10 lg:col-span-1">
            <div
              className={clsx(
                'flex sm:flex-col ',
                language === 'en'
                  ? 'lg:flex-row'
                  : 'flex-row-reverse text-right lg:flex-row-reverse',
              )}
            >
              <div className={language === 'ar' && 'ml-auto'}>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-200">
                  <Icon icon="mail" className="h-8 w-8 text-purple-700" />
                </span>
              </div>
              <div
                className={clsx(
                  'flex-1  sm:mt-3 lg:mt-0',
                  language === 'en'
                    ? 'ml-6 sm:ml-0 lg:ml-6'
                    : 'mr-6 sm:mr-0 lg:mr-6',
                )}
              >
                <h5
                  className={clsx(
                    'flex items-center text-xl font-semibold text-purple-900',
                    language === 'ar' && 'justify-end',
                  )}
                >
                  {t.labels?.email}
                </h5>
                <p className="mt-1.5 text-base leading-relaxed text-purple-800">
                  {email}
                </p>
              </div>
            </div>
          </div>
          {/* Phone number card */}
          <div className="rounded-3xl bg-rose-50 px-4 py-8 sm:col-span-2 sm:col-start-2 sm:p-8 sm:py-10 lg:col-span-1 lg:col-start-3">
            <div
              className={clsx(
                'flex sm:flex-col ',
                language === 'en'
                  ? 'lg:flex-row'
                  : 'flex-row-reverse text-right lg:flex-row-reverse',
              )}
            >
              <div className={language === 'ar' && 'ml-auto'}>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-200">
                  <Icon icon="phone" className="h-8 w-8 text-purple-700" />
                </span>
              </div>
              <div
                className={clsx(
                  'flex-1  sm:mt-3 lg:mt-0',
                  language === 'en'
                    ? 'ml-6 sm:ml-0 lg:ml-6'
                    : 'mr-6 sm:mr-0 lg:mr-6',
                )}
              >
                <h5
                  className={clsx(
                    'flex items-center text-xl font-semibold text-purple-900',
                    language === 'ar' && 'justify-end',
                  )}
                >
                  {t.labels?.phone}
                </h5>
                <p className="mt-1.5 text-base leading-relaxed text-purple-800">
                  {contact.phoneA}
                </p>
                <p className="mt-1.5 text-base leading-relaxed text-purple-800">
                  {contact.phoneB}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Google map widget */}
      {process.env.NEXT_PUBLIC_API_KEY && (
        <div className="mt-16 rounded-3xl lg:mx-auto lg:mt-24 lg:max-w-screen-xl">
          <iframe
            className="w-full rounded-3xl"
            height={600}
            style={{ border: 0 }}
            src={`https://www.google.com/maps/embed/v1/place?${
              language === 'ar' && 'language=ar&'
            }q=place_id:ChIJ_-A3f98PdkgR5Qn6SpOkZs0&key=${
              process.env.NEXT_PUBLIC_API_KEY
            }`}
            allowFullScreen
            loading="lazy"
          />
        </div>
      )}
    </section>
  )
}
