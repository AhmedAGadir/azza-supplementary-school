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

const enrollmentFields = [
  {
    section: 'Personal Details',
    description:
      'This section gathers basic personal information required for identification and contact purposes.',
    fields: [
      { name: 'firstName', label: 'First Name', type: 'text', required: true },
      {
        name: 'lastName',
        label: 'Last Name',
        type: 'text',
        required: true,
      },
      {
        name: 'gender',
        label: 'Gender',
        type: 'radio',
        options: ['Male', 'Female'],
        required: true,
      },
      {
        name: 'dateOfBirth',
        label: 'Date of Birth',
        type: 'date',
        required: true,
      },
      {
        name: 'address1',
        label: 'Address Line 1',
        type: 'text',
        required: true,
      },
      {
        name: 'address2',
        label: 'Address Line 2',
        type: 'text',
        required: false,
      },
      { name: 'postcode', label: 'Postcode', type: 'text', required: true },
      {
        name: 'borough',
        label: 'Borough of Residence',
        type: 'select',
        options: [
          'Kensington and Chelsea',
          'Hammersmith and Fulham',
          'Brent',
          'Wandsworth',
          'Westminster',
        ],
        required: true,
        other: true,
      },
    ],
  },
  {
    section: 'Parent or Guardian Details',
    description:
      "This section collects contact details of the student's parent or guardian.",
    fields: [
      {
        name: 'parentFullName',
        label: 'Full Name',
        type: 'text',
        required: true,
      },
      {
        name: 'relationshipToStudent',
        label: 'Relationship to Student',
        type: 'text',
        required: true,
      },
      {
        name: 'parentTelephoneNumber',
        label: 'Telephone Number',
        type: 'tel',
        pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}',
        required: true,
      },
      {
        name: 'mobileTelephoneNumber',
        label: 'Mobile Number',
        type: 'tel',
        pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}',
        required: true,
      },
      {
        name: 'parentEmail',
        label: 'Email Address',
        type: 'email',
        required: true,
      },
      {
        name: 'agreeToOnlineSurvey',
        label:
          'Please tick if you are happy to receive an online survey through our reporting IT programme, Upshot. This helps with obtaining funding for supplementary schools.',
        type: 'checkbox',
        required: false,
      },
    ],
  },
  {
    section: 'Education Background',
    description:
      "This section requests information about the student's educational history to understand their academic background.",
    fields: [
      {
        name: 'mainstreamSchool',
        label: 'Mainstream School',
        type: 'text',
        required: true,
      },
      {
        name: 'schoolYear',
        label: 'Current School Year',
        type: 'text',
        required: true,
      },
    ],
  },
  {
    section: 'Ethnicity',
    description:
      'Information on ethnicity helps in understanding the diverse backgrounds of students.',
    fields: [
      {
        name: 'ethnicOrigin',
        label: 'Ethnic Origin',
        type: 'select',
        options: [
          'Algerian',
          'Egyptian',
          'Iraqi',
          'Lebanese',
          'Moroccan',
          'Palestinian',
          'Syrian',
          'Yemeni',
          'Kurdish',
          'Turkish',
          'Any other Arab background',
          'White British',
          'White Irish',
          'White Gypsy or Irish Traveller',
          'Kosovan',
          'Any other White background',
          'Indian',
          'Pakistani',
          'Bangladeshi',
          'Chinese',
          'Malaysian',
          'Any other Asian background',
          'Sudanese',
          'Somali',
          'Eritrean',
          'Ethiopian',
          'Nigerian',
          'Ghanaian',
          'Any other Black/African/Caribbean background',
          'Mixed/Multiple ethnic background',
          'Any other ethnic group',
          'Prefer not to say',
        ],
        required: true,
      },
    ],
  },
  {
    section: 'Additional Information',
    description:
      'Any additional information that might be helpful for the enrollment process.',
    fields: [
      {
        name: 'learningDifficultyOrDisability',
        label: 'Do you have a learning difficulty or disability?',
        type: 'radio',
        options: ['Yes', 'No'],
        required: true,
      },
      {
        name: 'registeredForFreeSchoolMeals',
        label:
          'Is your child registered for free school meals at their mainstream school?',
        type: 'radio',
        options: ['Yes', 'No'],
        required: true,
      },
    ],
  },
  {
    section: 'Emergency Contact',
    description:
      'Details of the individual to contact in case of an emergency.',
    fields: [
      {
        name: 'emergencyContactName',
        label: 'Emergency Contact Name',
        type: 'text',
        required: true,
      },
      {
        name: 'emergencyContactNumber',
        label: 'Emergency Contact Number',
        type: 'tel',
        required: true,
      },
      {
        name: 'emergencyContactRelationship',
        label: 'Relationship to Contact',
        type: 'text',
        required: true,
      },
    ],
  },
  {
    section: 'Classes',
    description: 'Select the classes that the student will be allocated to.',
    fields: [
      {
        label: 'Select Classes',
        name: 'classes',
        type: 'checkboxGroup',
        options: ['English', 'Maths', 'Arabic', 'Science', 'Other'],
        required: false,
      },
    ],
  },
  {
    section: 'Lunchtime Agreements',
    description:
      'Parent or guardian to indicate lunchtime preferences for the child.',
    fields: [
      {
        name: 'lunchTimeAgreement',
        type: 'radio',
        options: [
          'I want my child to stay in the school building  at lunchtime',
          'I give my child permission for my child to leave the school building at lunchtime',
        ],
        required: true,
      },
    ],
  },
  {
    section: 'Permission for Photographs',
    description:
      'Parent or guardian to provide permission for the student’s photographs to be used in displays or publicity.',
    fields: [
      {
        name: 'photoPermission',
        label: 'Permission for photographs to be used in displays or publicity',
        type: 'radio',
        options: ['Yes', 'No'],
        required: false,
      },
    ],
  },
  {
    section: 'Data Protection Statement',
    description: [
      "The personal information that you provide will be handled by the Royal Borough of Kensington and Chelsea (RBKC) and by Westway Trust (WT) in accordance with the Data Protection Act 1998 and the General Data Protection Regulation (GDPR) 2018 and will be used for the purposes of handling children's, young persons and adults monitoring information on behalf of the Local Authority.",
      'We use your information for research and analysis so we can develop and improve our services for your benefit. Your information will be kept in hard copy and on Upshot, a database used by WT and the Integrated Youth Services database system used by RBKC. Paper copies will be kept for 6 years after which they will be shredded or burnt. Online data will be subject to suitable destruction software tools to erase data from hard drives.',
      'If you have any queries regarding the handling of your personal information or if you would like to see personal information held on you by RBKC, please contact the Data Protection and FOI Team (020 7938 8287) or WT at datacontroller@westway.org.',
      "Parent/carer’s consent is required for the processing of the student's personal data.",
    ],
    fields: [
      {
        name: 'contactFor',
        label: 'Contact me for:',
        type: 'checkboxGroup',
        options: ['Courses or learning opportunities', 'Surveys and research'],
        required: false,
      },
      {
        name: 'contactBy',
        label: 'Contact me by:',
        type: 'checkboxGroup',
        options: ['phone', 'post', 'email'],
        required: false,
      },
      {
        name: 'parentCarerConsent',
        label: "Parent/Carer's Consent",
        type: 'checkbox',
        required: true,
      },
    ],
  },
]

export const EnrollmentHero = () => {
  const [submitted, setSubmitted] = React.useState(false)
  const [message, setMessage] = React.useState('')
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_ENROLLMENT_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log(result.text)
          setSubmitted(true)
          setMessage(
            'Thank you for your application. We will get back to you shortly.',
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
      {/* <div className="mx-auto max-w-xl lg:grid lg:max-w-screen-2xl lg:grid-cols-3 lg:gap-8 xl:gap-16 "> */}
      <div className="mx-auto lg:max-w-7xl">
        {/* <div className="py-16 lg:py-32">< */}
        <div className="pb-16 lg:pb-32">
          <div>
            <span className="- inline-block rounded-full bg-purple-200 px-4 py-2 font-medium text-purple-700 shadow-md">
              Enroll Today
            </span>
          </div>
          <h1 className="h1 mt-4 max-w-xl text-purple-900">
            Begin Your Educational Journey
          </h1>
          <p className="mt-3 max-w-3xl text-xl leading-relaxed text-purple-800">
            Ready to take the next step in your education? We’re here to guide
            you through the enrollment process. Our team is dedicated to
            providing a smooth transition into our community, ensuring that your
            academic journey is enriching, engaging, and rewarding from the very
            start.
          </p>
        </div>
        {/* Contact form container */}
        <div className="relative col-span-2 mx-auto max-w-5xl">
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
                <div className="mb-4">
                  <h3 className="text-3xl font-bold text-purple-900">
                    Student Registration Form
                  </h3>
                  {/* <p className="mt-0.5 text-purple-800 text-opacity-90">
                    Fill out the form below to begin your enrollment process.
                  </p> */}
                </div>
                <form className="mt-8" ref={form} onSubmit={sendEmail}>
                  <div className="space-y-12">
                    {enrollmentFields.map((section, ind) => (
                      <div
                        key={section.section}
                        className={clsx(
                          'grid grid-cols-1 gap-x-8 gap-y-10 border-gray-900/10 pb-12 lg:grid-cols-5',
                          ind < enrollmentFields.length - 1 && 'border-b',
                        )}
                      >
                        <div class="lg:col-span-2">
                          <h2 className="text-base font-semibold leading-7 text-gray-900">
                            {section.section}
                          </h2>
                          {typeof section.description === 'string' ? (
                            <p className="mt-3 text-sm leading-6 text-gray-600">
                              {section.description}
                            </p>
                          ) : (
                            section.description.map((paragraph, index) => (
                              <p
                                key={paragraph.slice(0, 10) + index}
                                className="mt-3 text-sm leading-6 text-gray-600"
                              >
                                {paragraph}
                              </p>
                            ))
                          )}
                        </div>

                        <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 lg:col-span-3">
                          {section.fields.map((field) => (
                            <div
                              key={`contact-form-field-${field}}`}
                              className="sm:col-span-full"
                            >
                              <label
                                htmlFor={field.name}
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                {field.label}{' '}
                                {field.required && (
                                  <span className="text-red-500">*</span>
                                )}
                              </label>
                              <div className="mt-2">
                                {field.type === 'text' && (
                                  <input
                                    id={field.name}
                                    type="text"
                                    name={field.name}
                                    className="mt-2 w-full rounded-2xl border-2 border-purple-50 p-4 text-sm font-medium text-purple-700 placeholder-purple-700 placeholder-opacity-70 outline-none duration-300 ease-in-out focus:border-purple-200 focus:outline-none focus:ring-purple-200"
                                    required={field.required}
                                  />
                                )}

                                {field.type === 'email' && (
                                  <input
                                    id={field.name}
                                    type="email"
                                    name={field.name}
                                    className="mt-2 w-full rounded-2xl border-2 border-purple-50 p-4 text-sm font-medium text-purple-700 placeholder-purple-700 placeholder-opacity-70 outline-none duration-300 ease-in-out focus:border-purple-200 focus:outline-none focus:ring-purple-200"
                                    required={field.required}
                                  />
                                )}

                                {field.type === 'number' && (
                                  <input
                                    id={field.name}
                                    type="number"
                                    name={field.name}
                                    className="mt-2 w-full rounded-2xl border-2 border-purple-50 p-4 text-sm font-medium text-purple-700 placeholder-purple-700 placeholder-opacity-70 outline-none duration-300 ease-in-out focus:border-purple-200 focus:outline-none focus:ring-purple-200"
                                    required={field.required}
                                  />
                                )}

                                {field.type === 'tel' && (
                                  <input
                                    id={field.name}
                                    type="tel"
                                    name={field.name}
                                    className="mt-2 w-full rounded-2xl border-2 border-purple-50 p-4 text-sm font-medium text-purple-700 placeholder-purple-700 placeholder-opacity-70 outline-none duration-300 ease-in-out focus:border-purple-200 focus:outline-none focus:ring-purple-200"
                                    required={field.required}
                                  />
                                )}

                                {field.type === 'date' && (
                                  <input
                                    id={field.name}
                                    type="date"
                                    name={field.name}
                                    className="mt-2 w-full rounded-2xl border-2 border-purple-50 p-4 text-sm font-medium text-purple-700 outline-none duration-300 ease-in-out focus:border-purple-200 focus:outline-none focus:ring-purple-200"
                                    required={field.required}
                                  />
                                )}

                                {field.type === 'textarea' && (
                                  <textarea
                                    id={field.name}
                                    name={field.name}
                                    placeholder={field.placeholder}
                                    rows={5}
                                    className="mt-2 w-full rounded-2xl border-2 border-purple-50 p-4 text-sm font-medium text-purple-700 placeholder-purple-700 placeholder-opacity-70 outline-none duration-300 ease-in-out focus:border-purple-200 focus:outline-none focus:ring-purple-200"
                                    required={field.required}
                                  />
                                )}

                                {field.type === 'radio' &&
                                  field.options.map((option, optIndex) => (
                                    <div
                                      key={`radio-${field.name}-${optIndex}`}
                                      className="mt-2"
                                    >
                                      <input
                                        id={`radio-${field.name}-${option}`}
                                        type="radio"
                                        name={field.name}
                                        value={option}
                                        className="mr-2 border-2 text-purple-600 focus:ring-purple-200"
                                        required={field.required}
                                      />
                                      <label
                                        htmlFor={`radio-${field.name}-${option}`}
                                        className="text-sm font-medium text-purple-700"
                                      >
                                        {option}
                                      </label>
                                    </div>
                                  ))}

                                {field.type === 'checkbox' && (
                                  <input
                                    id={field.name}
                                    type="checkbox"
                                    name={field.name}
                                    className="ml-2 mt-2 h-6 w-6 border-2 align-middle text-purple-600 focus:ring-purple-200"
                                    required={field.required}
                                  />
                                )}

                                {field.type === 'select' && (
                                  <select
                                    id={field.name}
                                    name={field.name}
                                    className="mt-2 w-full rounded-2xl border-2 border-purple-50 p-4 text-sm font-medium text-purple-700 outline-none duration-300 ease-in-out focus:border-purple-200 focus:outline-none focus:ring-purple-200"
                                    required={field.required}
                                  >
                                    {field.options.map((option, optIndex) => (
                                      <option
                                        key={`select-${field.name}-${optIndex}`}
                                        value={option}
                                      >
                                        {option}
                                      </option>
                                    ))}
                                    {field.other && (
                                      <option value="other">Other</option>
                                    )}
                                  </select>
                                )}

                                {field.type === 'checkboxGroup' && (
                                  <div
                                    className={clsx(
                                      'lg:grid lg:gap-2 xl:gap-4',
                                      field.options.length > 4 &&
                                        'lg:grid-cols-2 ',
                                    )}
                                  >
                                    {field.options.map((option, optIndex) => (
                                      <div
                                        key={`checkbox-${field.name}-${optIndex}`}
                                        className="mt-2"
                                      >
                                        <input
                                          id={`checkbox-${field.name}-${option}`}
                                          type="checkbox"
                                          name={`${field.name}[]`}
                                          value={option}
                                          className="mr-2 border-2 text-purple-600 focus:ring-purple-200"
                                        />
                                        <label
                                          htmlFor={`checkbox-${field.name}-${option}`}
                                          className="text-sm font-medium text-purple-700"
                                        >
                                          {option}
                                        </label>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                    {message.length > 0 && (
                      <div className="mb-6">
                        <p className="text-md text-red-600">{message}</p>
                      </div>
                    )}

                    <div className="mt-6 flex justify-end">
                      <Button type="submit">Submit Application</Button>
                    </div>
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
