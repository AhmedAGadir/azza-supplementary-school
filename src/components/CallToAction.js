import Image from 'next/image'

import { Icon } from '@/components/Icon'
import { Button } from '@/components/Button'
// import sunrise from '/public/images/illustrations/sunrise.svg'
import crestLogo from 'public/images/logo-icon.png'
import highlight from '/public/images/illustrations/underline-simple-light-purple.svg'

export const CallToAction = () => {
  return (
    <section className="bg-white py-24 sm:py-32">
      {/* Container */}
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* crestLogo image */}
        <Image className="mx-auto w-72" src={crestLogo} alt="" />
        {/* Header */}
        <h2 className="h1 mx-auto mt-6 max-w-3xl text-center text-purple-900">
          <span className="block">Join us</span>
          {/* Underlined text */}
          <span className="relative block">
            <span className="relative">
              <Image
                className="absolute inset-0 translate-y-9 transform sm:translate-y-11 xl:translate-y-14"
                src={highlight}
                alt=""
              />
              <span className="relative">today</span>
            </span>
          </span>
        </h2>
        {/* CTA button */}
        <div className="mt-12 flex justify-center xl:mt-14">
          <Button href="#0">
            Enroll today
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
