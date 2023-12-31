import clsx from 'clsx'

import { Icon } from '@/components/Icon'
import { Button } from '@/components/Button'
import { language } from 'gray-matter'

export const ProgramPricing = ({ data, language }) => {
  return (
    <section className="relative w-full px-4 py-16 sm:px-6 sm:py-24 xl:px-8">
      {/* Container */}
      <div className="mx-auto max-w-xl lg:max-w-screen-xl">
        <div
          className={clsx(
            'md:gap-16 lg:grid lg:grid-cols-2 lg:gap-5',
            language === 'en' ? 'lg:text-left' : 'items-end text-right',
          )}
        >
          {/* Section content */}
          <div
            className={clsx(
              'flex flex-col justify-center pr-10 xl:pr-0',
              language === 'en' ? 'order-1' : 'order-2',
            )}
          >
            <div>
              <span className="- inline-block rounded-full bg-purple-200 px-4 py-2 font-medium text-purple-700 shadow-md">
                {data.tagline}
              </span>
            </div>
            <h2
              className={clsx(
                'h2 mt-3.5 max-w-xl text-purple-900 sm:mt-4',
                language === 'en' ? '' : 'ml-auto',
              )}
            >
              {data.headline}
            </h2>
            <p
              className={clsx(
                'mt-3 max-w-lg text-lg leading-relaxed text-purple-800',
                language === 'en' ? '' : 'ml-auto',
              )}
            >
              {data.text}
            </p>
            {/* Contact link */}
            <div className="mt-8 font-medium lg:mt-10">
              <p className="text-purple-800">
                {language === 'en'
                  ? 'Want to learn more about our programs?'
                  : 'هل تريد معرفة المزيد عن برامجنا؟'}
              </p>
              <a
                href="/contact"
                className={clsx(
                  'group mt-1.5 flex w-fit max-w-full cursor-pointer items-center border-b-2 border-solid border-purple-600 bg-transparent px-0 py-0.5 text-left text-purple-600 no-underline transition duration-300 ease-in-out hover:border-purple-400 hover:text-purple-500',
                  language === 'en' ? 'leading-6' : ' ml-auto text-right',
                )}
              >
                <span className="text-left text-base font-bold">
                  {language === 'en' ? 'Get in touch' : 'اتصل بنا'}
                </span>
                <Icon
                  icon="arrowNarrowRight"
                  className="ml-3 h-6 w-6 group-hover:animate-horizontal-bounce"
                  stroke={2}
                />
              </a>
            </div>
          </div>
          {/* Pricing cards */}
          <div
            key="pricing-card"
            className={clsx(
              'bg-purple-25',
              'mt-14 w-full rounded-xl px-6 py-10 lg:mt-20 lg:px-5 xl:px-10',
            )}
          >
            <div
              className={clsx(
                'relative',
                language === 'en' ? 'text-left' : 'text-right',
              )}
            >
              <div className="relative inline-block w-full">
                <h3 className="relative text-xl font-bold tracking-normal text-purple-900">
                  {data.pricing.name}
                </h3>
                <div className="mt-2">
                  {/* <h2 className="h1 text-purple-900">{data.pricing.price}</h2> */}
                  {/* <h2 className="h1 text-purple-900">
                    Parent Contribution Welcome
                  </h2> */}
                  <div className="mt-4">
                    <div className="inline-block h-6 rounded-xl bg-purple-200 px-3 align-top text-sm font-medium leading-6 text-purple-700">
                      {language === 'en'
                        ? 'Parent Contribution Welcome'
                        : 'نرحب بمساهماتكم'}
                    </div>
                  </div>
                  <p
                    className={clsx(
                      'mt-6 block w-full font-medium text-purple-900',
                    )}
                  >
                    {data.pricing.shortDescription}
                  </p>
                </div>
                {/* Features */}
                <ul className={clsx('mt-4 space-y-2 text-base')}>
                  {data.pricing.features.map((item, index) => (
                    <li
                      key={`pricing-feature-${index}`}
                      className={clsx(
                        'flex items-center',
                        language === 'en' ? '' : 'flex-row-reverse',
                      )}
                    >
                      <Icon
                        icon="check"
                        className="h-5 w-5 text-purple-600"
                        stroke={2}
                      />

                      <span className="ml-2 text-purple-800">
                        {item.feature}
                      </span>
                    </li>
                  ))}
                </ul>
                {/* CTA button */}
                <Button
                  href={data.pricing.action.href}
                  className="mt-6"
                  variant="accent"
                  size="sm"
                >
                  {data.pricing.action.label}
                  {data.pricing.action.icon && (
                    <Icon
                      icon="arrowNarrowRight"
                      className="ml-3 h-5 w-5 group-hover:animate-horizontal-bounce"
                      stroke={2}
                    />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
