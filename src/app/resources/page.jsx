'use client'

import { useTranslation } from '@/app/useTranslation'
import { ArabicOnlyWarning } from '@/components/ArabicOnlyWarning'
import { Icon } from '@/components/Icon'
import Link from 'next/link'

export default function PolicyPage() {
  const { language } = useTranslation()

  return (
    <section className="bg-purple-25 px-4 pt-16 sm:px-6 lg:px-8">
      {/* Container */}
      <div className="mx-auto max-w-screen-xl">
        <div className="prose prose-lg mx-auto mt-14 pb-16  sm:mt-16">
          <h3 className="mb-12 text-center text-5xl font-bold">
            {language === 'ar' && <ArabicOnlyWarning />}
            Resources
          </h3>
          <p>
            Please feel free to download and read the following resource packs.
          </p>
          <div>
            <div className="my-8 flex items-center justify-center gap-3">
              <h4 className="my-0 text-2xl">
                Welcome Pack for Parents and Carers
              </h4>
              <a href="/welcome-pack-for-parents.zip">
                <Icon
                  icon="download"
                  className="h-8 w-8 hover:text-purple-300"
                />
              </a>
            </div>
            <div>
              <p>The welcome pack includes:</p>
              <ul>
                <li>Parent handbook</li>
                <li>Safeguarding statement</li>
                <li>School agreement (English)</li>
                <li>School agreement (Arabic)</li>
                <li>School Term Dates</li>
                <li>Consent forms</li>
                <li>Code of behaviour</li>
                <li>Anti-bullying policy</li>
                <li>E-learning</li>
              </ul>
              <p>You can also view more relevant information below:</p>
              <ul>
                <li>
                  Click to see our{' '}
                  <Link href="./enroll"> Registration Form</Link>
                </li>
                <li>
                  Click to see our{' '}
                  <Link href="./about">
                    {' '}
                    School details and statement of aims
                  </Link>
                </li>
                <li>
                  Click to see our{' '}
                  <Link href="./policy"> Safeguarding policy statement</Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="my-8 mt-16 flex items-center justify-center gap-3">
              <h4 className="my-0 text-2xl">Staff and Volunteer Handbook</h4>
              <a href="/staff-and-volunteer-handbook.zip">
                <Icon
                  icon="download"
                  className="h-8 w-8 hover:text-purple-300"
                />
              </a>
            </div>
            <div>
              <p>
                The staff and volunteer handbook is still under construction,
                the completed version will include:
              </p>
              <ul>
                <li>Code of practice for teachers</li>
                <li>Voluntary role description</li>
                <li>Staff volunteers policy</li>
                <li>Pupil registers</li>
                <li>Offsite procedures</li>
                <li>List of staff</li>
                <li>Health and safety</li>
              </ul>
              <p>You can also view more relevant information below:</p>
              <ul>
                <li>
                  Click to see our{' '}
                  <Link href="./about#team">List of staff and volunteers</Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="my-8 mt-16 flex items-center justify-center gap-3">
              <h4 className="my-0 text-2xl">Management Committee Guide</h4>
            </div>
            <div>
              <p>
                The management committee guide is still under construction, the
                completed version will include:
              </p>
              <ul>
                <li>List of management committee</li>
                <li>Equalities statement</li>
                <li>All policies in other packs</li>
                <li>Risk Assessments</li>
                <li>Financial and petty cash rules</li>
                <li>Accounts</li>
                <li>
                  Appropriate insurance including public liability insurance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
