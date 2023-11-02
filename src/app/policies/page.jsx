'use client'
import { Tab } from '@headlessui/react'
import { Fragment } from 'react'
import clsx from 'clsx'

// export const metadata = {
//   title: 'School Policies - Azza Supplementary School',
//   description:
//     'Explore Azza Supplementary School’s policies to understand our standards, procedures, and guidelines that ensure a safe, organized, and fair educational environment for all members of our community.',
// }

const Policies = () => (
  <div className="prose prose-lg mx-auto mt-14 sm:mt-16">
    <h3 className="mb-12 text-center text-5xl font-bold">
      Safeguarding Policy Statement September {new Date().getFullYear()}
    </h3>
    <h4 className="text-2xl">1. The purpose of this policy statement is:</h4>
    <ul>
      <li>
        To protect children, young people and vulnerable adults who attend our
        supplementary school from harm.
      </li>
      <li>
        This policy applies to anyone working on behalf of our school including
        the board of trustees, paid staff, volunteers, sessional workers, agency
        staff and pupils.
      </li>
    </ul>
    <p>
      We recognise our moral and statutory responsibility to safeguard and
      promote the welfare of all children, young people and vulnerable adults.
    </p>
    <p>
      We aim to provide a safe and welcoming learning environment where everyone
      is respected and valued.
    </p>
    <p>
      We will act quickly and follow our procedures to ensure effective support
      and protection for the relevant people.
    </p>
    <h4 className="text-2xl">2. Policy aims</h4>
    <p>
      <ul>
        <li>
          To provide anyone working on behalf of our school with the necessary
          information to enable them to meet their safeguarding and child
          protection responsibilities.
        </li>
        <li>To ensure consistent good safeguarding practice</li>
        <li>To demonstrate our commitment to safeguarding issues.</li>
      </ul>
    </p>
    <h4 className="text-2xl">3. Policy principles</h4>
    <p>
      <ul>
        <li>
          The welfare of the child, young person or vulnerable adult is
          paramount.
        </li>
        <li>
          All children, young people and vulnerable adults, regardless of age,
          gender, ability, culture, race, language or religion have equal rights
          to protection.
        </li>
        <li>
          Everyone working on behalf of our school has an equal responsibility
          to act on any suspicion or disclosure that may suggest a child or
          vulnerable adult is at risk of harm.
        </li>
        <li>
          There is a culture of transparency, openness and, if needed, challenge
          with regards to maintaining high standards in safeguarding.
        </li>
        <li>
          Everyone working on behalf of our school and using our services
          involved in safeguarding and child protection issues will receive
          appropriate support.
        </li>
      </ul>
    </p>
    <h4 className="text-2xl">4. We believe that:</h4>
    <p>
      <ul>
        <li>
          Children and young people should never experience abuse of any kind.
        </li>
        <li>
          We have a responsibility to promote the welfare of all children and
          young people, to keep them safe and to practise in a way that protects
          them.
        </li>
      </ul>
    </p>
    <h4 className="text-2xl">5. We recognise that:</h4>
    <p>
      <ul>
        <li>
          The welfare of children and vulnerable adults is paramount in all the
          work we do and in all the decisions we take
        </li>
        <li>
          Some children and young people are additionally vulnerable because of
          the impact of previous experiences, their level of dependency,
          communication needs or other issues.
        </li>
        <li>
          Working in partnership with children, young people, their parents,
          carers and other agencies is essential in promoting children’s and
          young people’s welfare
        </li>
      </ul>
    </p>
    <h4 className="text-2xl">
      6. We aim to safeguard children/young people by:
    </h4>
    <p>
      <ul>
        <li>Valuing, listening to and respecting them.</li>
        <li>
          Appointing nominated designated safeguarding leads for children and
          young people and a lead trustee for safeguarding.
        </li>
        <li>
          Development and implementation of safeguarding policies and procedures
          including: child protection and health and safety policies and
          guidelines; a code of conduct for staff/volunteers, staff and
          volunteer procedures; complaints, whistleblowing and equal opportunity
          policies.
        </li>
        <li>
          Adopting child protection and safeguarding best practice through our
          policies, procedures and a code of conduct for staff and volunteers.
        </li>
        <li>
          Sharing information about child protection and good practice with
          children/young people, parents and carers and staff/volunteers
        </li>
        <li>
          Sharing information about concerns with agencies who need to know, and
          involving parents and children/young people appropriately
        </li>
        <li>
          Recruiting and selecting staff and volunteers safely, ensuring all
          necessary checks are made, recording, storing, and using information
          professionally and securely, in line with data protection legislation
          and guidance.
        </li>
        <li>
          Providing effective management for staff/volunteers through support,
          supervision and training so that all staff and volunteers know about
          and follow our policies, procedures and behaviour codes confidently
          and competently.
        </li>
        <li>
          Developing and implementing an effective online safety policy and
          related procedures.
        </li>
        <li>
          Sharing information about our safeguarding and good practice with
          children and their families via leaflets, posters, group work and
          one-to-one discussions.
        </li>
        <li>
          Making sure that children, young people and their families know where
          to go for help if they have a concern.
        </li>
        <li>
          Using our procedures to manage any allegations against staff and
          volunteers appropriately.
        </li>
        <li>
          Creating and maintaining an anti-bullying environment and ensuring
          that we have a policy and procedure to help us deal effectively with
          any bullying that does arise.
        </li>
        <li>
          Ensuring that we have effective complaints and whistleblowing measures
          in place.
        </li>
        <li>
          Ensuring that we provide a safe physical environment for our children,
          young people, staff and volunteers, by applying health and safety
          measures in accordance with the law and regulatory guidance.
        </li>
        <li>
          Building a safeguarding culture where staff and volunteers, children,
          young people and their families, treat each other with respect and are
          comfortable about sharing concerns.
        </li>
        <li>
          Involving children, where appropriate, in the development and
          implementation of safeguarding policies and procedures
        </li>
        <li>Reviewing our policy and good practice regularly.</li>
      </ul>
    </p>
    <h4 className="text-2xl">7. Legal framework </h4>
    <p>
      <b>
        <a
          href="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/fil e/779401/Working_Together_to_Safeguard-Children.pdf"
          target="_blank"
        >
          Working Together to Safeguard Children 2018
        </a>
      </b>{' '}
      covers the legislative requirements and expectations on individual
      services and inter-agency working to safeguard and promote the welfare of
      children. It also provides the framework for Local Safeguarding Children
      Partnerships (replacing Local Safeguarding Children Boards) to monitor the
      effectiveness of local services.
    </p>
    <p>
      <b>
        <a
          href="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/fil e/835733/Keeping_children_safe_in_education_2019.pdf"
          target="_blank"
        >
          Keeping Children Safe in Education 2022
        </a>
      </b>{' '}
      provides statutory guidance which schools and colleges must have due
      regard to when carrying out their duties to safeguard and promote the
      welfare of children.
    </p>
    <p>
      <b>
        <a
          href="https://www.gov.uk/government/publications/prevent-duty-guidance"
          target="_blank"
        >
          Prevent Duty Guidance – England and Wales
        </a>
      </b>{' '}
      covers the duty of schools and other providers in section 29 of the
      Counter Terrorism and Security Act 2015, to have due regard to the need to
      prevent people being drawn into terrorism.
    </p>
    <p>
      <b>The Care Act 2014</b> sets out a clear legal framework for how local
      authorities and other parts of the system should protect adults at risk of
      abuse or neglect.
    </p>
    <h4 className="text-2xl">8.Supporting documents</h4>
    <p>
      This policy statement should be read alongside our organisational
      policies, procedures, guidance and other related documents. this include:
    </p>
    <p>
      <ul>
        <li>Role description for the designated safeguarding officer.</li>
        <li>
          Dealing with disclosures and concerns about a child or young person.
        </li>
        <li>Managing allegations against staff and volunteers.</li>
        <li>Recording concerns and information sharing.</li>
        <li>Child protection records retention and storage.</li>
        <li>Code of conduct for staff and volunteers.</li>
        <li>Behaviour codes for children and young people.</li>
        <li>Photography and sharing images guidance.</li>
        <li>Safer recruitment.</li>
        <li>Online safety.</li>
        <li>Anti-bullying.</li>
        <li>Managing complaints.</li>
        <li>Whistleblowing</li>
        <li>Health and safety.</li>
        <li>Induction, training, supervision and support.</li>
        <li>Adult to child supervision ratios</li>
      </ul>
    </p>
    <h4 className="text-2xl">9. Definitions</h4>
    <p>
      A <b>child</b> is anyone under the age of 18, as set out in the Children
      Act.{' '}
      <b>
        Safeguarding concerns relate both to children at risk of abuse or
        neglect and to children who are at risk of not being able to thrive and
        meet positive outcomes in their lives.
      </b>{' '}
      Safeguarding and promotion of children’s welfare is defined in Working
      Together 2018 as:
    </p>
    <p>
      <ul>
        <li>protecting children from maltreatment; </li>
        <li>preventing impairment of children's health or development;</li>
        <li>
          ensuring that children are growing up in circumstances consistent with
          the provision of safe and effective care; and
        </li>
        <li>taking action to enable all children to have the best outcomes.</li>
      </ul>
    </p>
    <p>
      <b>Child protection is part of safeguarding and promoting welfare.</b>
      This refers to the activity that is undertaken to protect specific
      children who are suffering, or are likely to suffer, significant harm.
    </p>
    <p>
      <b>
        Adults aged 18 and over have the potential to be vulnerable for a
        variety of reasons and in different situations. An adult may be
        vulnerable if he/she:
      </b>
    </p>
    <ul>
      <li>Has a learning or physical disability</li>
      <li>
        Has a physical or mental illness, including addiction to alcohol or
        drugs
      </li>
      <li>Has a reduction in physical or mental health</li>
      <li>Is in the receipt of any form of healthcare</li>
      <li>Is detained in custody</li>
      <li>
        Is receiving community services because of age, health or disability
      </li>
      <li>Is living in sheltered or residential care home</li>
      <li>
        Is unable, for any reason, to protect themselves against significant
        harm or exploitation.
      </li>
    </ul>
    <p>
      We will therefore act within the framework set by the Children Acts 1989
      and 2004 and the Safeguarding Vulnerable Groups Act 2006. We will also
      implement guidance including:
    </p>
    <ul>
      <li>
        <a
          href="https://www.rbkc.gov.uk/lscb/information-professionals-and-volunteers"
          target="_blank"
        >
          Local Safeguarding Children Partnership Multi-agency Safeguarding
          Children Arrangements guidance
        </a>
      </li>
      <li>
        <a
          href="https://www.gov.uk/government/publications/working-together-to-safeguard-children--2"
          target="_blank"
        >
          Working Together to Safeguard Children 2018
        </a>
      </li>
      <li>
        <a href="https://www.londoncp.co.uk/" target="_blank">
          London Child Protection Procedures 2019, published by the London
          Safeguarding Children Board
        </a>
      </li>
      <li>
        <a href="https://safeguarding.culture.gov.uk/" target="_blank">
          Guidance on handling safeguarding allegations in a charity, DCMS, 2020
        </a>
      </li>
      <li>
        Social Care Institute for Excellence guidance on safeguarding for
        children and vulnerable adults.
      </li>
    </ul>
    <p>
      <b>Parent/Carer</b> refers to birth parents and other adults who are in a
      parenting/carer role, for example step-parents, foster carers and adoptive
      parents.
    </p>
    <p>
      <b>Staff</b> refers to all those working for or on behalf of our school
      either full time or part time, temporary or permanent, in either a paid or
      voluntary capacity
    </p>
    <p>
      <b>DBS</b> is the Disclosure and Barring Service – checks for any past
      convictions or cautions for those seeking to work with children or
      vulnerable adults.
    </p>
    <p>
      <b>DSL</b> is the Designated Safeguarding Lead{' '}
    </p>
    <p>
      <b>LSCB</b> is the Local Safeguarding Children Board (being replaced by
      Local Safeguarding Children Partnerships){' '}
    </p>
    <p>
      <b>Channel</b> is an early intervention multi-agency process designed to
      safeguard vulnerable people from being drawn into violent extremism and/or
      terrorism. Channel works in a similar way to other safeguarding
      partnerships such as case conferences for children in need. Channel is a
      pre criminal process that is designed to support vulnerable people at the
      earliest possible opportunity, before they become involved in illegal
      activity.{' '}
    </p>
    <p>
      <b>MASH</b> is a Multi-Agency Safeguarding Hub, designed to improve the
      quality of information sharing between professionals in order to make
      timely and informed decisions about risk, based on accurate and up-to-date
      information. With this information the MASH is able to provide a brief
      risk assessment and recommendation to services in Kensington and Chelsea,
      Hammersmith and Fulham and Westminster to assist in improving the quality
      of safeguarding decisions for children and their families and provide them
      with the most appropriate support and services as soon as possible
    </p>
    <h4 className="text-2xl">10. RBKC Safeguarding Contacts</h4>
    <p>
      Consultation and Advice about a child/young person resident in The Royal
      Borough of Kensington and Chelsea:
    </p>
    <p>
      <b>Kensington and Chelsea Duty Line</b> - Tel: 020 7361 3013
    </p>
    <p>
      <b>
        For LADO consultations and referrals please contact the duty Child
        Protection Adviser on:
      </b>
    </p>
    <p>
      Telephone: 020 7361 3013
      <br />
      Email: KCLADO.Enquiries@rbkc.gov.uk
    </p>
    <p>
      <b>Bi-borough PREVENT</b>
    </p>
    <p>
      Telephone: 020 8753 5727
      <br />
      Email: prevent@lbhf.gov.uk
    </p>
    <p>
      <b>Adult Social Care</b>
      <p>
        020 7361 3013 – Social Services Line
        <br />
        Email: socialservices@rbkc.gov.uk
      </p>
    </p>
    <p>
      Here is a{' '}
      <a
        href="https://www.rbkc.gov.uk/lscb/information-professionals-and-volunteers/contacts-safeguarding-kensington-and-chelsea"
        target="_blank"
      >
        full list of Safeguarding contacts for RBKC
      </a>
    </p>
    <p>
      Here is{' '}
      <a href="https://www.rbkc.gov.uk/lscb/" target="_blank">
        further information
      </a>{' '}
      from the Local Safeguarding Children Partnership
    </p>
    <h4 className="text-2xl">11. Supplementary School Contact details</h4>
    <p>
      <b>Designated Safeguarding Lead</b>
      <br />
      Name: Mona Deyab
      <br />
      Phone: 07957184601
      <br />
      Email: monadeyab@hotmail.com
    </p>
    <p>
      <b>Deputy Designated safeguarding Lead</b>
      <br />
      Name: Ikram Taha
      <br />
      Phone: 07984801072
      <br />
      Email: Ikramai2@hotmail.com
    </p>
    <p>
      <b>Trustee lead for safeguarding and child protection</b>
      <br />
      Name: : Intisar Omer Hassan
      <br />
      Phone: 07904916134
      <br />
      Email: Intisarhassan20092009@hotmail.co.uk
    </p>
    <h4 className="text-2xl">
      10. We are committed to reviewing our policy and good practice annually.
    </h4>
    <p>
      Date adopted: 29/09/{new Date().getFullYear()} <br />
      Date for review: 29/09/{new Date().getFullYear() + 1}
    </p>
  </div>
)

export const Procedures = () => (
  <div className="prose prose-lg mx-auto mt-14 sm:mt-16">
    <h3 className="mb-12 text-center text-5xl font-bold">
      Safeguarding Procedure
    </h3>
    <h4 className="text-2xl">test:</h4>
    <ul>
      <li>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        expedita eos debitis molestias veniam, quasi ipsa pariatur incidunt
        necessitatibus! Earum, ad libero molestias porro doloremque cumque
        officia corrupti quis consequatur.
      </li>
    </ul>
  </div>
)

export default function PolicyPage() {
  return (
    <section className="bg-purple-25 px-4 pt-16 sm:px-6 lg:px-8">
      {/* Container */}
      <div className="mx-auto max-w-screen-xl">
        {/* <div className="relative z-20"> */}
        {/* <h2 className="h1 mx-auto max-w-3xl text-center text-purple-900">
            Safeguarding Policy and Procedures
          </h2> */}
        {/* </div> */}
        <Tab.Group>
          <Tab.List className="mx-auto block text-center">
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={clsx({
                    'bg-indigo-100 text-indigo-700': selected,
                    'text-gray-500 hover:text-gray-700': !selected,
                    'rounded-md px-3 py-2 text-lg font-medium': true,
                  })}
                >
                  Policies
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={clsx({
                    'bg-indigo-100 text-indigo-700': selected,
                    'text-gray-500 hover:text-gray-700': !selected,
                    'rounded-md px-3 py-2 text-lg font-medium': true,
                  })}
                >
                  Procedures
                </button>
              )}
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <Policies />
            </Tab.Panel>
            <Tab.Panel>
              <Procedures />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
        {/* Page header */}
      </div>
    </section>
  )
}
