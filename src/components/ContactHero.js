'use client'
import Image from 'next/image'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import dotsLargeGrid from '/public/images/illustrations/dots-large-grid.svg'
import dotsGrid from '/public/images/illustrations/dots-grid.svg'
import dotsStrip from '/public/images/illustrations/dots-strip.svg'

import checkmark from '/public/images/illustrations/checkmark.svg'

import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const fields = [
  {
    name: 'from_name',
    label: 'Name',
    type: 'text',
    placeholder: 'Your name',
    required: true,
  },
  {
    name: 'from_email',
    label: 'Email',
    type: 'email',
    placeholder: 'Your email address',
    required: true,
  },
  {
    name: 'from_phone',
    label: 'Phone',
    type: 'text',
    placeholder: 'Your phone number',
    required: true,
  },
  {
    name: 'message',
    label: 'Message',
    type: 'textarea',
    placeholder: 'Message',
    required: true,
  },
]

export const ContactHero = () => {
  const [submitted, setSubmitted] = React.useState(false)
  const [message, setMessage] = React.useState('')
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_CONTACT_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log(result.text)
          setSubmitted(true)
          setMessage(
            'Thank you for your message. We will get back to you shortly.',
          )
        },
        (error) => {
          console.log(error.text)
          setMessage(
            'Sorry, there was an error sending your message. Please try again.',
          )
        },
      )
  }

  return (
    <section className="overflow-hidden bg-gradient-to-b from-purple-25 to-purple-50 px-4 pb-12 sm:px-6 lg:px-8 lg:pt-24">
      {/* Container */}
      <div className="mx-auto max-w-xl lg:grid lg:max-w-screen-xl lg:grid-cols-2 lg:gap-10 xl:gap-32 ">
        {/* Hero header */}
        <div className="py-16 lg:py-32">
          <div>
            <span className="- inline-block rounded-full bg-purple-200 px-4 py-2 font-medium text-purple-700 shadow-md">
              Contact us today
            </span>
          </div>
          <h1 className="h1 mt-4 max-w-md text-purple-900">
            We'd love to hear from you
          </h1>
          <p className="mt-3 max-w-lg text-xl leading-relaxed text-purple-800">
            Whether you have questions, feedback, or stories to share, we're
            here for you. Our community thrives on your insights, and we're
            committed to ensuring your experience with us is positive,
            impactful, and meaningful.
          </p>
        </div>
        {/* Contact form container */}
        <div className="relative">
          {/* Background decorations */}
          <Image
            src={dotsLargeGrid}
            className="absolute -right-16 -top-12 w-80 opacity-60 sm:-top-16 lg:-top-16 lg:left-14 lg:hidden lg:w-36"
            alt=""
            priority
          />
          <Image
            src={dotsGrid}
            className="absolute -right-16 -top-16 hidden w-40 opacity-75 lg:-top-16 lg:left-14 lg:block lg:w-36"
            alt=""
          />
          <Image
            src={dotsStrip}
            className="absolute -right-16 top-1/2 hidden w-20 rotate-90 opacity-75 lg:block"
            alt=""
          />
          {/* Contact form card */}
          <div className="relative z-10 mx-auto w-full rounded-3xl bg-white px-4 py-10 shadow-xl sm:p-16 lg:ml-auto lg:mr-0 lg:p-12 xl:p-14">
            {submitted && (
              <div className="mb-6">
                <h3 className="h3 text-purple-800">
                  <Image
                    className="mb-3 mr-3 block h-20 w-20 flex-shrink-0"
                    src={checkmark}
                    alt=""
                  />
                  {message}
                </h3>
              </div>
            )}
            {!submitted && (
              <>
                <div>
                  <h3 className="text-2xl font-bold text-purple-900">
                    Send us a message
                  </h3>
                  <p className="mt-0.5 text-purple-800 text-opacity-90">
                    We'll get back to you within 24 hours.
                  </p>
                </div>
                <form className="mt-8" ref={form} onSubmit={sendEmail}>
                  {fields.map((field, index) => (
                    <div
                      key={`contact-form-field-${index}}`}
                      className={clsx(index > 0 && 'mt-6')}
                    >
                      <label
                        htmlFor={field.name}
                        className="ml-0.5 text-sm font-medium text-purple-900"
                      >
                        {field.label}{' '}
                        {field.required && (
                          <span className="text-red-500">*</span>
                        )}
                      </label>
                      {field.type == 'textarea' && (
                        <textarea
                          id={field.name}
                          name={field.name}
                          placeholder={field.placeholder}
                          rows={5}
                          className="mt-2 w-full rounded-2xl border-2 border-purple-50 p-4 text-sm font-medium text-purple-700 placeholder-purple-700 placeholder-opacity-70 outline-none duration-300 ease-in-out focus:border-purple-200 focus:outline-none focus:ring-purple-200"
                          required={field.required}
                        />
                      )}

                      {['text', 'email'].includes(field.type) && (
                        <input
                          id={field.name}
                          type={field.type}
                          name={field.name}
                          placeholder={field.placeholder}
                          className="mt-2 h-14 w-full rounded-2xl border-2 border-purple-50 p-4 text-sm font-medium text-purple-700 placeholder-purple-700 placeholder-opacity-70 outline-none duration-300 ease-in-out focus:border-purple-200 focus:outline-none focus:ring-purple-200"
                          required={field.required}
                        />
                      )}
                    </div>
                  ))}
                  {message.length > 0 && (
                    <div className="mb-6">
                      <p className="text-sm text-red-600">{message}</p>
                    </div>
                  )}

                  <div className="mt-6 flex justify-end">
                    <Button type="submit">Send message</Button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
