import { Gochi_Hand } from 'next/font/google'
import clsx from 'clsx'

const gochiHand = Gochi_Hand({
  subsets: ['latin'],
  variable: '--font-gochi-hand',
  weight: '400',
})

const stats = [
  { label: 'Teachers', value: '12+' },
  { label: 'Average years of teacher experience', value: '3+' },
  { label: 'Student to teacher ratio', value: '15:1' },
  {
    label: 'Students at Russel Group Universities',
    value: '20+',
  },
  { label: 'Years in Operation', value: '28+' },
  { label: 'Children Supported', value: '100+' },
]

export const Stats = () => {
  return (
    <section
      className={clsx(
        'relative w-full bg-purple-600 px-4 py-16 sm:px-6 sm:py-24 lg:px-8',
        gochiHand.variable,
      )}
    >
      {/* Container */}
      <div className="mx-auto max-w-screen-xl">
        {/* Section header text */}
        <div>
          <h2 className="h2 mx-auto max-w-4xl text-center text-white">
            Where Your Child's Academic Success Begins
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-xl leading-relaxed text-purple-50">
            Every aspect of our environment is thoughtfully designed with your
            child's success in mind.
          </p>
        </div>
        {/* Stats */}
        <div className="mt-12 gap-y-16 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 md:gap-x-8 lg:gap-x-12">
          {stats.map((stat, index) => (
            <div
              key={`stat-${index}`}
              className={clsx('text-center', index > 0 && 'mt-12 sm:mt-0')}
            >
              <h4 className="font-written text-8xl leading-none text-white lg:text-9xl">
                {stat.value}
              </h4>
              <p className="mt-0.5 text-lg font-medium text-purple-50 sm:mt-1.5 lg:text-xl">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
