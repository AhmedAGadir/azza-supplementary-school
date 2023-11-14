'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Fragment } from 'react'
import { Menu, Transition, Popover } from '@headlessui/react'
import clsx from 'clsx'

// import logo from '/public/images/azza-logo.png'
import logo from '/public/images/logo-icon.png'
import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'

import { useLanguageContext } from '@/app/languageContext'

import LanguageToggle from '@/components/LanguageToggle'
import english from '/public/images/vectors/english.png'
import arabic from '/public/images/vectors/arabic.png'

import kaaf from '/public/images/illustrations/kaaf-purple.svg'
import sheen from '/public/images/illustrations/sheen-purple.svg'

const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Programs' },
  // { label: 'Activities', href: '/activities' },
  { label: 'School Calendar', href: '/calendar' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar({ programs }) {
  const { language, changeLanguage } = useLanguageContext()
  const pathname = usePathname()

  const toggleLanguage = () => {
    if (language === 'en') {
      changeLanguage('ar')
    } else {
      changeLanguage('en')
    }
  }

  function MenuIcon({ open }) {
    return (
      <>
        <span
          className={clsx(
            'absolute block h-1 rotate-0 transform rounded-full opacity-100 transition-all duration-300 ease-in-out',
            open
              ? 'left-1/2 top-2 w-0 bg-purple-50 group-hover:bg-white'
              : 'left-0 top-0 w-full bg-purple-900 group-hover:bg-purple-600',
          )}
        />
        <span
          className={clsx(
            'absolute left-0 top-2 block h-1 w-full transform rounded-full opacity-100 transition-all duration-300 ease-in-out group-hover:bg-purple-600',
            open
              ? 'rotate-45 bg-purple-50 group-hover:bg-white'
              : 'rotate-0 bg-purple-900 group-hover:bg-purple-600',
          )}
        />
        <span
          className={clsx(
            'absolute left-0 top-2 block h-1 w-full transform rounded-full opacity-100 transition-all duration-300 ease-in-out group-hover:bg-purple-600',
            open
              ? '-rotate-45 bg-purple-50 group-hover:bg-white'
              : 'rotate-0 bg-purple-900 group-hover:bg-purple-600',
          )}
        />
        <span
          className={clsx(
            'absolute block h-1 rotate-0 transform rounded-full opacity-100 transition-all duration-300 ease-in-out group-hover:bg-purple-600',
            open
              ? 'left-1/2 top-2 w-0 bg-purple-50 group-hover:bg-white'
              : 'left-0 top-4 w-full bg-purple-900 group-hover:bg-purple-600',
          )}
        />
      </>
    )
  }

  function MobileNav() {
    return (
      <div className="flex items-center lg:hidden">
        <div className="mr-1 pt-2">
          <LanguageToggle
            languages={[
              { label: 'English', value: 'en', img: english },
              { label: 'عربي', value: 'ar', img: arabic },
            ]}
            selectedLanguage={language}
            toggleLanguage={toggleLanguage}
          />
        </div>
        <Popover>
          <Popover.Button
            className="group relative z-50 mx-2 h-5 w-6 rotate-0 transform cursor-pointer transition duration-500 ease-in-out focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {({ open }) => <MenuIcon open={open} />}
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="duration-300 ease-out"
            enterFrom="opacity-0 -translate-y-full"
            enterTo="opacity-100 translate-y-0"
            leave="duration-200 ease-in"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-full"
          >
            <Popover.Panel
              as="div"
              className="absolute inset-x-0 top-0 z-40 w-screen overflow-y-scroll bg-gradient-to-tr from-purple-600 to-purple-600 px-4 py-16 sm:px-8"
            >
              <Image
                className=" absolute left-0 top-0 -z-20 h-auto w-2/3 md:w-80 2xl:block"
                src={kaaf}
                alt=""
              />
              <Image
                className=" absolute -bottom-20 right-0 -z-20 h-auto w-3/4 md:w-80 2xl:block"
                src={sheen}
                alt=""
              />
              <div className="flex h-full w-full flex-col items-center justify-center">
                <div className="mx-auto flex w-full flex-col items-center justify-evenly space-y-6">
                  {navigation.map((link) => (
                    <Fragment key={`mobile-link-${link.label}`}>
                      {link.label !== 'Programs' && (
                        <Link href={link.href}>
                          <div className="group relative p-0.5">
                            <span className="relative z-10 text-2xl font-medium text-purple-50 duration-300 ease-in-out group-hover:text-white">
                              {link.label}
                            </span>
                            <span className="absolute -left-1 -right-1 bottom-0 h-1.5 origin-bottom scale-x-0 transform rounded-lg bg-yellow-400 duration-300 ease-in-out group-hover:scale-x-100" />
                          </div>
                        </Link>
                      )}
                    </Fragment>
                  ))}

                  <Button href="/enroll">Enroll today</Button>
                </div>

                <hr className="my-8 w-full border-purple-200 border-opacity-30 sm:my-10" />

                <div className="mx-auto w-full max-w-md">
                  <p className="text-center text-lg font-semibold uppercase tracking-wider text-purple-200 sm:text-left">
                    Programs
                  </p>
                  <div className="mt-4 grid justify-items-center gap-4 sm:grid-cols-2 sm:justify-items-start sm:gap-x-8">
                    {programs
                      .sort((a, b) => a.data.order - b.data.order)
                      .map((program, index) => (
                        <Link
                          href={`/programs/${program.slug}`}
                          key={`mobile-dropdown-${program.data.name}`}
                          className={clsx(
                            index % 2 == 1 && 'sm:justify-self-end',
                          )}
                        >
                          <div className="group relative p-0.5">
                            <span className="relative z-10 text-xl font-medium text-purple-50 duration-300 ease-in-out group-hover:text-white">
                              {program.data.name}
                            </span>
                            <span className="absolute -left-1 -right-1 bottom-0 h-1.5 origin-bottom scale-x-0 transform rounded-lg bg-yellow-400 duration-300 ease-in-out group-hover:scale-x-100" />
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    )
  }

  return (
    <div className="px-4 sm:px-6">
      <nav className="mx-auto flex max-w-screen-xl items-center pt-5">
        <div className="flex w-full items-center justify-between">
          {/* Main navigation menu for large screens */}
          <div className="hidden items-center justify-between md:space-x-6 lg:flex lg:space-x-10">
            {navigation.map((link) => (
              <Fragment key={`desktop-link-${link.label}`}>
                {link.label == 'Programs' ? (
                  <Menu as="div" className="relative z-30">
                    {({ open }) => (
                      <>
                        <Menu.Button className="outline-none focus:outline-none">
                          <div className="group relative p-0.5">
                            <span
                              className={clsx(
                                'relative z-10 flex items-center text-lg font-medium duration-300 ease-in-out group-hover:text-purple-600',
                                open ? 'text-purple-600' : 'text-purple-700',
                              )}
                            >
                              Programs
                              {/* Heroicon name: solid/chevron-down */}
                              {/* Toggle class 'rotate-180' on dropdown open and close */}
                              <Icon
                                icon="chevronDown"
                                className={clsx(
                                  'h-4.5 ml-1.5 w-4.5 transform duration-300 ease-in-out',
                                  open && 'rotate-180',
                                )}
                                stroke={2}
                              />
                            </span>
                            <span className="absolute -left-1 -right-1 bottom-0 h-1.5 origin-bottom scale-x-0 transform rounded-lg bg-yellow-400 duration-300 ease-in-out group-hover:scale-x-100" />
                          </div>
                        </Menu.Button>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-300"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-200"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute left-1/2 z-20 mt-3 w-screen max-w-xs -translate-x-1/2 rounded-2xl border border-gray-50 bg-white p-4 shadow-lg outline-none focus:outline-none">
                            {programs.map((program, index) => (
                              <Menu.Item
                                key={`desktop-dropdown-link-${program.data.name}`}
                                as="div"
                              >
                                {({ close }) => (
                                  <>
                                    <Link
                                      href={`/programs/${program.slug}`}
                                      className={clsx(
                                        'group block w-full rounded-xl py-4 sm:p-5',
                                        pathname === `/programs/${program.slug}`
                                          ? 'bg-purple-25'
                                          : 'transition duration-200 ease-in-out hover:bg-purple-25/60',
                                      )}
                                      onClick={close}
                                    >
                                      <h5 className="text-lg font-semibold text-purple-600">
                                        {program.data.name}
                                      </h5>
                                      <p className="mt-1 text-sm text-purple-800 opacity-90">
                                        {program.data.dropdownDescription}
                                      </p>
                                    </Link>
                                    {index != programs.length - 1 && (
                                      <>
                                        <hr className="my-1 border-purple-200/30 sm:my-2" />
                                      </>
                                    )}
                                  </>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu>
                ) : (
                  <Link href={link.href}>
                    <div className="group relative p-0.5">
                      <span
                        className={clsx(
                          'relative z-10 text-lg font-medium',
                          pathname === link.href
                            ? 'text-purple-600'
                            : 'text-purple-700 duration-300 ease-in-out group-hover:text-purple-600',
                        )}
                      >
                        {link.label}
                      </span>
                      <span
                        className={clsx(
                          'absolute -left-1 -right-1 bottom-0 h-1.5 origin-bottom scale-x-0 transform rounded-lg bg-yellow-400',
                          pathname == link.href
                            ? 'scale-x-100'
                            : 'duration-300 ease-in-out group-hover:scale-x-100',
                        )}
                      />
                    </div>
                  </Link>
                )}
              </Fragment>
            ))}
          </div>

          {/* Call to action button */}
          <div className="hidden items-center gap-2 lg:flex">
            <LanguageToggle
              languages={[
                { label: 'English', value: 'en', img: english },
                { label: 'عربي', value: 'ar', img: arabic },
              ]}
              selectedLanguage={language}
              toggleLanguage={toggleLanguage}
            />
            <Button href="/enroll">Enroll today</Button>
          </div>
          {/* Logo on smaller screens: < lg */}
          <div className="block w-20 flex-shrink-0 flex-grow-0 sm:w-24 lg:hidden">
            <Link href="/">
              <div className="flex items-center gap-2">
                <Image
                  src={logo}
                  alt="Azza Supplementary School"
                  className="h-auto"
                />
                <h1 className="h5">Azza Supplementary School</h1>
              </div>
            </Link>
          </div>

          <MobileNav />
        </div>
      </nav>
    </div>
  )
}
