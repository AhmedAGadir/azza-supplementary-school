import Image from 'next/image'
import clsx from 'clsx'

import { Icon } from '@/components/Icon'
import { Button } from '@/components/Button'
import curvedDottedLine from '/public/images/illustrations/curved-dotted-line.svg'
import loopedDottedLine from '/public/images/illustrations/looped-dotted-line.svg'
import { getAllItems } from '@/lib/getItems'

import meem from '/public/images/illustrations/meem-lightpurple.svg'
import ya from '/public/images/illustrations/ya-lightgreen.svg'
import za from '/public/images/illustrations/za-lightyellow.svg'
import dha from '/public/images/illustrations/dha-lightblue.svg'

const ProgramCard = ({ program, index }) => (
  <div
    className={clsx(
      index == 1 &&
        'mt-12 w-full rounded-3xl bg-green-50 px-8 py-10 sm:p-12 md:mt-0 md:px-8 md:py-10 lg:p-12',
      index == 2 &&
        'mt-12 w-full rounded-3xl bg-blue-50 px-8 py-10 sm:p-12 md:col-start-1 md:mt-0 md:-translate-y-60 md:px-8 md:py-10 lg:p-12',
      'relative',
      index == 3 &&
        'mt-12 w-full rounded-3xl bg-yellow-100 px-8 py-10 sm:p-12 md:mt-0 md:px-8 md:py-10 lg:p-12',
    )}
  >
    {index == 0 && (
      <Image
        src={curvedDottedLine}
        className="absolute left-1/2 top-0 hidden -translate-y-1/2 translate-x-1/2 -scale-x-100 md:block"
        style={{ width: 'calc(50% + 4rem)' }}
        alt=""
      />
    )}
    <div
      className={clsx(
        index == 0 &&
          'relative z-10 w-full rounded-3xl bg-purple-25 px-8 py-10 sm:p-12 md:-translate-y-60 md:px-8 md:py-10 lg:p-12',
      )}
    >
      <div className="relative flex flex-col justify-between">
        <Image
          className={clsx(
            'absolute top-0 z-10 h-auto w-56 -rotate-8 2xl:block ',
            index % 2 == 0 ? 'left-0' : 'right-0',
          )}
          // purple green blue yellow
          src={index === 0 ? meem : index === 1 ? ya : index === 2 ? dha : za}
          alt=""
        />
        <div className="z-20 flex-1">
          <h3 className="h3 text-purple-900">{program.data.name}</h3>
          <p className="mt-3 max-w-2xl text-lg leading-loose text-purple-800">
            {program.data.hero.text}
          </p>
          <div className="aspect-h-2 aspect-w-3 relative mt-8">
            <Image
              className="absolute inset-0 rounded-2xl object-cover"
              fill
              src={program.data.hero.image.src}
              alt={program.data.name}
              sizes="(min-width: 1280px) 32rem, (min-width: 768px) calc(50vw - 6.5rem), (min-width: 640px) 30rem, calc(100vw - 6rem)"
            />
          </div>
        </div>
        <div className="mt-8">
          <Button href={`/programs/${program.slug}`} variant="accent" size="sm">
            Learn more
            <Icon
              icon="arrowNarrowRight"
              className="ml-3 h-5 w-5 group-hover:animate-horizontal-bounce"
              stroke={2}
            />
          </Button>
        </div>
      </div>
    </div>
    {index == 0 && (
      <Image
        src={loopedDottedLine}
        className="absolute bottom-0 left-1/2 hidden translate-x-1/2 translate-y-[90%] -scale-x-100 md:block"
        style={{ width: 'calc(50% + 4rem)' }}
        alt=""
      />
    )}
  </div>
)

export const FeaturedPrograms = () => {
  const featuredPrograms = getAllItems('programs')
    .filter((program) => program.data.featured)
    .sort((a, b) => a.data.order - b.data.order)
  // .slice(0, 3)

  return (
    <section className="overflow-hidden px-4 pb-24 pt-16 sm:px-6 sm:pb-28 sm:pt-24 md:pb-72 lg:px-8">
      {/* Container */}
      <div className="mx-auto max-w-xl md:max-w-screen-xl">
        {/* Section header title and subtext  */}
        <div className="md:grid md:grid-cols-2 md:gap-12 lg:gap-16">
          <div>
            <h2 className="h2 max-w-4xl text-purple-900">
              The best programs for your child
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-xl leading-relaxed text-purple-800 sm:mt-5 lg:text-left">
              We offer a core curriculum of programs for children of all ages.
              Our programs are designed to help your child grow and develop in a
              safe and nurturing environment.
            </p>
          </div>
        </div>
        {/* School programs */}
        <div className="mt-16 md:mt-72 md:grid md:grid-cols-2 md:gap-8 lg:gap-16">
          {featuredPrograms.map((program, index) => (
            <ProgramCard
              key={`featured-program-${program.data.name}`}
              program={program}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
