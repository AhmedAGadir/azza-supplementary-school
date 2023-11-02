import Image from 'next/image'
import clsx from 'clsx'

import { Icon } from '@/components/Icon'
import { Button } from '@/components/Button'
import checkmark from '/public/images/illustrations/checkmark.svg'

import { getAllItems } from '@/lib/getItems'

const assurances = [
  'Over three years of hands-on teaching experience',
  'Genuine passion for guiding and inspiring children',
  'Devotion to ensuring a positive and supportive classroom for every student',
  'Fluent in Arabic and English',
  'Training working with children with special needs',
]

export const StaffAssurances = () => {
  const featuredStaff = getAllItems('staff').filter(
    (member) => member.data.featured,
  )

  return (
    <section className="relative w-full px-4 py-16 sm:px-6 sm:py-24 xl:px-8">
      {/* Container */}
      <div className="mx-auto max-w-xl lg:max-w-screen-xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
          {/* Text content */}
          <div className="flex flex-col justify-center lg:col-span-1 ">
            <div>
              <span className="- inline-block rounded-full bg-purple-200 px-4 py-2 font-medium text-purple-700 shadow-md">
                Your children are in good hands
              </span>
            </div>
            <h2 className="h2 mt-4 text-purple-900 sm:mt-5">
              Meet the teachers behind Azza
            </h2>
            <p className="mt-4 max-w-xl text-xl leading-relaxed text-purple-800 md:mt-5">
              Our teachers are the heart and soul of Azza. They are the ones who
              make our school a safe, fun, and engaging place for your children
              to learn and grow. We are proud to have a strong team of
              experienced, passionate, and dedicated individuals.
            </p>
          </div>
          {/* Teacher qualifications box */}
          <div className="mx-auto w-full sm:mx-0 sm:max-w-none ">
            <div className="relative mt-16 max-w-4xl rounded-xl bg-yellow-100 sm:mt-14">
              <span className="absolute -top-7 left-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-purple-600 shadow-md sm:left-10">
                <Icon icon="certificate" className="h-8 w-8 text-purple-50" />
              </span>
              <div className="mt-2 px-4 py-10 sm:px-10 sm:py-12">
                <p className="text-lg font-semibold text-purple-900 sm:text-xl">
                  What Sets Our Teachers Apart: Promises We Keep
                </p>
                {/* Teacher qualifications list */}
                <ul className="mt-5 space-y-5 text-lg text-purple-800">
                  {assurances.map((assurance, index) => (
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
                  Meet the team
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
