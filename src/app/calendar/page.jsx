'use client'

import React, { useMemo } from 'react'
import clsx from 'clsx'
import { useTranslation } from '@/app/useTranslation'

// export const metadata = {
//   title: 'School Calendar - Azza Supplementary School',
//   description:
//     'Access the comprehensive school calendar of Azza Supplementary School to keep up-to-date with upcoming events, holidays, examinations, and other important academic dates throughout the year.',
// }

export const Overview = () => {
  const terms = [
    {
      term: 'Autumn Term',
      startDate: '23/09/2023',
      halfTermHoliday: '28/10/2023',
      lastDate: '16/12/2023',
    },
    {
      term: 'Spring Term',
      startDate: '06/01/2024',
      halfTermHoliday: '17/02/2024',
      lastDate: '23/03/2024',
    },
    {
      term: 'Summer Term',
      startDate: '20/04/2024',
      halfTermHoliday: '01/06/2024',
      lastDate: '06/07/2024',
    },
  ]

  return (
    <div className="my-16">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-lg font-semibold text-gray-900 sm:pl-0"
                    >
                      Term
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-lg font-semibold text-gray-900"
                    >
                      Start Date
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-lg font-semibold text-gray-900"
                    >
                      Half Term Holiday
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-lg font-semibold text-gray-900"
                    >
                      Last Date
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {terms.map((termDetail) => (
                    <tr key={termDetail.term}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg font-medium text-gray-900 sm:pl-0">
                        {termDetail.term}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                        {termDetail.startDate}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                        {termDetail.halfTermHoliday}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                        {termDetail.lastDate}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Weekly = () => (
  <div className="">
    <iframe
      src="https://calendar.google.com/calendar/embed?src=azzasupplementaryschool%40gmail.com&ctz=Europe%2FLondon"
      style={{ border: 0, margin: 'auto' }}
      width={'100%'}
      height={600}
      frameborder="0"
      scrolling="no"
    />
  </div>
)

export default function CalendarPage() {
  const { translation, language } = useTranslation()

  const t = useMemo(() => translation?.calendar ?? {}, [translation])

  return (
    <section className="bg-purple-25 px-4 pb-24 pt-16 sm:px-6 lg:px-8">
      <div className="prose prose-lg mx-auto mt-14 pb-16  sm:mt-16">
        <h3 className="mb-12 text-center text-5xl font-bold">{t.title}</h3>
        <p>{t.description}</p>
      </div>
      <div className="mx-auto max-w-screen-xl">
        {/* <Overview /> */}
        {/* <Weekly /> */}
        <div className="">
          <iframe
            src={`https://calendar.google.com/calendar/embed?src=azzasupplementaryschool%40gmail.com&ctz=Europe%2FLondon${
              language === 'ar' ? '&hl=ar' : ''
            }`}
            style={{ border: 0, margin: 'auto' }}
            width={'100%'}
            height={600}
            frameborder="0"
            scrolling="no"
          />
        </div>
      </div>
    </section>
  )
}
