import { Icon } from '@/components/Icon'
import Image from 'next/image'
import picture from '/public/images/vectors/girl-with-globe.png'

export function Maintenance() {
  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-yellow-100/20">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <Icon icon="tool" className="h-16 w-16 text-purple-700" />
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Down for maintenance
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Azza is down for planned maintenance. We'll be back with the
                  latest components and sections this week. Follow us on{' '}
                  <span className="text-purple-700">
                    <a
                      href="https://twitter.com/AzzaSupplement1"
                      target="_blank"
                      className="underline"
                    >
                      Twitter
                    </a>
                  </span>{' '}
                  for our latest updates.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div
              className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-yellow-600/10 ring-1 ring-yellow-50 md:-mr-20 lg:-mr-36"
              aria-hidden="true"
            />
            <div className="shadow-lg md:rounded-3xl">
              <div className="bg-yellow-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                <div
                  className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-yellow-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                  aria-hidden="true"
                />
                <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                  <Image
                    // className="absolute inset-0 translate-y-9 transform sm:translate-y-11 xl:translate-y-14"
                    src={picture}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
    </div>
  )
}
