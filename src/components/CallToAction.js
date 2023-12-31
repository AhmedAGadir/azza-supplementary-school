import Image from 'next/image'

import { Icon } from '@/components/Icon'
import { Button } from '@/components/Button'
// import sunrise from '/public/images/illustrations/sunrise.svg'
import logo from 'public/images/logo-icon.png'
// import logo from 'public/images/azza-logo-square-no-english.png'
import highlight from '/public/images/illustrations/underline-simple-light-purple.svg'

export const CallToAction = ({ language }) => {
  return (
    <section className="bg-white py-24 sm:py-32">
      {/* Container */}
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* logo image */}
        <Image className="mx-auto w-72" src={logo} alt="" />
        {/* Header */}
        <h2 className="h1 mx-auto mt-6 max-w-3xl text-center text-purple-900">
          <span className="inline">
            {language === 'en' ? 'Enroll ' : 'سجل '}
          </span>{' '}
          {/* Underlined text */}
          <span className="relative">
            <span className="relative">
              <Image
                className="absolute inset-0 translate-y-9 transform sm:translate-y-11 xl:translate-y-14"
                src={highlight}
                alt=""
              />
              <span className="relative">
                {language === 'en' ? 'today' : 'اليوم'}
              </span>
            </span>
          </span>
        </h2>
        {/* CTA button */}
        <div className="mt-12 flex justify-center xl:mt-14">
          <Button href="/enroll">
            {language === 'en' ? 'Enroll today' : 'التسجيل'}
            <Icon
              icon="arrowNarrowRight"
              className="ml-3 h-6 w-6 group-hover:animate-horizontal-bounce"
              stroke={2}
            />
          </Button>
        </div>
      </div>
    </section>
  )
}
