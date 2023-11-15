'use client'

import { useTranslation } from '@/app/useTranslation'
import { ArabicOnlyWarning } from '@/components/ArabicOnlyWarning'

import Image from 'next/image'
import flowchart from '/public/images/photos/flowchart.png'
import bodymap from '/public/images/photos/bodymap.png'

const Procedure = ({ language }) => (
  <div className="prose prose-lg mx-auto mt-14 pb-16 sm:mt-16">
    <h3 className="mb-12 text-center text-5xl font-bold">
      {language === 'ar' && <ArabicOnlyWarning />}
      Safeguarding Procedure
    </h3>
    <h4 className="text-2xl">Contents</h4>
    <ul>
      <li>
        1. <a href="#1-procedures">Introduction</a>
      </li>
      <li>
        2. <a href="#2-procedures">Purpose of the procedures</a>
      </li>
      <li>
        3. <a href="#3-procedures">Other related policies</a>
      </li>
      <li>
        4. <a href="#4-procedures">Recognising abuse and neglect</a>
      </li>
      <li>
        5.{' '}
        <a href="#5-procedures">Safeguarding pupils vulnerable to extremism</a>
      </li>
      <li>
        6. <a href="#6-procedures">Roles and responsibilities</a>
      </li>
      <li>
        7.{' '}
        <a href="#7-procedures">The role of the Designated Safeguarding Lead</a>
      </li>
      <li>
        8.{' '}
        <a href="#8-procedures">
          What to do if you have a safeguarding concern about a child or
          vulnerable adult
        </a>
      </li>
      <li>
        9.{' '}
        <a href="#9-procedures">
          Responding to Disclosures from children and vulnerable adults
        </a>
      </li>
      <li>
        10.{' '}
        <a href="#10-procedures">Allegations of abuse made against children</a>
      </li>
      <li>
        11.{' '}
        <a href="#11-procedures">
          Support for those involved in a child protection issue
        </a>
      </li>
      <li>
        12.{' '}
        <a href="#12-procedures">
          Allegations against staff members and personnel
        </a>
      </li>
      <li>
        13.{' '}
        <a href="#13-procedures">Local Authority Designated Officer (LADO)</a>
      </li>
      <li>
        14.{' '}
        <a href="#14-procedures">
          Privacy, Confidentiality and Information Sharing
        </a>
      </li>
      <li>
        15.{' '}
        <a href="#15-procedures">
          Safer Recruitment, induction and management support
        </a>
      </li>
      <li>
        16. <a href="#16-procedures">Good practice guidelines</a>
      </li>
      <li>
        17. <a href="#17-procedures">Abuse of position of trust</a>
      </li>
      <li>
        18. <a href="#18-procedures">Appendix 1: Useful contacts</a>
      </li>
      <li>
        19.{' '}
        <a href="#19-procedures">Appendix 2: Incident/Concern recording log</a>
      </li>
      <li>
        20.{' '}
        <a href="#20-procedures">
          Appendix 3: What to do if you are worried flowchart
        </a>
      </li>
      <li>
        21. <a href="#21-procedures">Appendix 4: Body Map</a>
      </li>
    </ul>
    <h4 className="mt-16 text-2xl" id="1-procedures">
      1. Introduction
    </h4>
    <p>
      This document sets out our procedures for safeguarding children, young
      people and vulnerable adults.
    </p>
    <p>
      We aim to create safe, supportive, learning environments for everyone
      attending our supplementary school, where children, young people and
      vulnerable adults are supported to participate fully and are able to
      express any concerns that they may have about safeguarding issues.
    </p>
    <h4 className="text-2xl" id="2-procedures">
      2. Purpose
    </h4>
    <p>
      <ul>
        <li>
          To protect children and young people and vulnerable adults who use our
          services and attend our supplementary schools.
        </li>
        <li>
          Make all staff, volunteers and trustees aware of what is expected of
          them in terms of their approach, behaviour and actions, roles and
          responsibilities.
        </li>
        <li>
          To provide all staff, volunteers and people who attend our
          supplementary school services with clear procedures to follow for
          reporting safeguarding concerns and responding to allegations.
        </li>
        <li>
          To set out roles and responsibilities for responding to safeguarding
          concerns and allegations against staff/volunteers.
        </li>
      </ul>
    </p>
    <h4 className="text-2xl" id="3-procedures">
      3. Related Policies and Procedures
    </h4>
    <p>These procedures should be read alongside these policies:</p>
    <p>
      <ul>
        <li>Safeguarding policy statement</li>
        <li>Safer recruitment policy and procedures </li>
        <li>Code of conduct for staff and volunteers </li>
        <li>Behaviour and Anti-bullying Policies </li>
        <li>Photography and image sharing guidance </li>
        <li>Whistleblowing policy</li>
        <li>Health & Safety Policy and Procedures</li>
        <li>Privacy Policy (including GDPR)</li>
      </ul>
    </p>
    <h4 className="text-2xl" id="4-procedures">
      4. Recognising abuse and neglect
    </h4>
    <p>
      A person may abuse or neglect a child or young person by inflicting harm,
      or by failing to act to prevent harm. Children and young people may be
      abused in a family, institutional or community setting; by those known to
      them or, more rarely, by a stranger.
    </p>
    <p>
      <b>Physical abuse:</b> may involve hitting, shaking, throwing, poisoning,
      burning or scalding, drowning, suffocating, or otherwise causing physical
      harm to a child, including by fabricating the symptoms of, or deliberately
      causing, ill health.
    </p>
    <p>
      <b>Emotional abuse:</b> persistent emotional ill-treatment of a child such
      as to cause severe and persistent adverse effects on the child’s emotional
      development. It may involve conveying to children that they are worthless
      or unloved, inadequate, or valued only insofar as they meet the needs of
      another person, age or developmentally inappropriate expectations being
      imposed on children, causing children frequently to feel frightened, or
      the exploitation or corruption of children.
    </p>
    <p>
      <b>Sexual abuse:</b> involves forcing or enticing a child or young person
      to take part in sexual activities, whether or not the child is aware of
      what is happening. The activities may involve physical contact, including
      penetrative or non-penetrative acts. They may include involving children
      in looking at, or in the production of, sexual images or videos, or
      encouraging children to behave in sexually inappropriate ways.
    </p>
    <p>
      <b>Neglect:</b> persistent failure to meet a child’s basic physical and/or
      psychological needs, likely to result in the serious impairment of the
      child’s health or development, such as failing to provide adequate food,
      shelter & clothing, or neglect of, or unresponsiveness to, a child’s basic
      emotional needs.
    </p>
    <p>
      <b>Abuse also includes:</b> Bullying, County Lines, Criminal Exploitation,
      Domestic Abuse, FGM, Grooming, Harmful sexual behaviour, Modern Slavery,
      Online Abuse, Radicalisation, Sexual Exploitation and Trafficking.
    </p>
    <p>
      <b>There are many signs of abuse and neglect including</b>
    </p>
    <ul>
      <li>
        regular flinching in response to sudden but harmless actions, for
        example someone raising a hand quickly
      </li>
      <li>
        showing an inexplicable fear of particular places or making excuses to
        avoid particular people
      </li>
      <li>
        knowledge of ‘adult issues’ for example alcohol, drugs and/or sexual
        behaviour which is inappropriate for their age or stage of development
      </li>
      <li>
        angry outbursts or behaving aggressively towards other children, adults,
        animals or toys
      </li>
      <li>becoming withdrawn or appearing anxious, clingy or depressed </li>
      <li>self-harming or thoughts about suicide </li>
      <li>changes in eating habits or developing eating disorders </li>
      <li>regularly experiencing nightmares or sleep problems </li>
      <li>regularly wetting the bed or soiling clothes </li>
      <li>
        in older children, risky behaviour such as substance misuse or criminal
        activity
      </li>
      <li>running away or regularly going missing from home or care </li>
      <li>not receiving adequate medical attention after injuries.</li>
    </ul>
    <p>
      Whilst these signs do not necessarily mean that a child or vulnerable
      person is being abused, they probably indicate that the child or family is
      having some problems which should be investigated.
    </p>
    <p>
      <b>Be Alert</b>
    </p>
    <p>
      Be aware that the following children, young people and adults may be
      particularly vulnerable if he/she:
    </p>
    <ul>
      <li>is disabled and has specific additional needs </li>
      <li>has special educational needs </li>
      <li>is a young carer </li>
      <li>
        is showing signs of being drawn into anti-social or criminal behaviour,
        including gang involvement and association with organised crime groups
      </li>
      <li>is frequently missing/goes missing from care or from home </li>
      <li>is at risk of modern slavery, trafficking or exploitation </li>
      <li>is at risk of being radicalised or exploited </li>
      <li>
        is in a family circumstance presenting challenges for the child, such as
        drug and alcohol misuse, adult mental health issues and domestic abuse
      </li>
      <li>is misusing drugs or alcohol themselves </li>
      <li>has returned home to their family from care </li>
      <li>is a privately fostered child</li>
    </ul>
    <h4 className="text-2xl" id="5-procedures">
      5. Safeguarding pupils who are vulnerable to extremism
    </h4>
    <p>
      Since 2010, when Government published the Prevent Strategy, there has been
      an awareness of the specific need to safeguard children, young people and
      families from violent extremism and gang violence. There have been several
      occasions both locally and nationally in which extremist groups have
      attempted to radicalise vulnerable children and young people to hold
      extreme views including views justifying political, religious, sexist,
      racist and other violence, or to steer them into a rigid and narrow
      ideology that is intolerant of diversity leaving them vulnerable to future
      radicalisation.
    </p>
    <p>
      We value freedom of speech and the expression of beliefs/ideology as
      fundamental rights underpinning our society’s values. Both pupils and
      teachers have the right to speak freely and voice their opinions. However,
      freedom comes with responsibility and free speech that is designed to
      manipulate the vulnerable or that leads to violence and harm of others
      goes against the moral principles in which freedom of speech is valued.
      Free speech is not an unqualified privilege; it is subject to laws and
      policies governing equality, human rights, community safety and cohesion.
    </p>
    <p>
      The current threat from terrorism in the United Kingdom may include the
      exploitation of vulnerable people, to involve them in terrorism or in
      activity in support of terrorism. The normalisation of extreme views may
      also make children and young people vulnerable to future manipulation and
      exploitation.
    </p>
    <p>
      We are clear that this exploitation and radicalisation should be viewed as
      a safeguarding concern.
    </p>
    <p>
      We recognise the potential use of ICT to groom a child, young person or
      vulnerable adult or to perpetrate abuse and we will support and encourage
      parents and carers to do what they can to keep their children and young
      people safe online and when using their mobile phones and game consoles.
    </p>
    <h4 className="text-2xl" id="6-procedures">
      6. Roles and responsibilities
    </h4>
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
    <p>
      All staff, trustees and volunteers have a duty to safeguard and promote
      the welfare of children, young people and adults.
    </p>
    <p>
      <b>
        Our supplementary school does not have statutory duties or powers under
        the Children Act to carry out investigations into suspicions or
        allegations of abuse.
      </b>
    </p>
    <p>
      Our role is to identify and report any concerns about the children and
      vulnerable adults that we work with.
    </p>
    <p>
      <b>
        All staff and volunteers have a duty to report concerns so that the
        agencies powered with investigative responsibility can do so.
      </b>
    </p>
    <p>
      <b>All staff, trustees and volunteers should:</b>
    </p>
    <p>
      <ul>
        <li>
          Be familiar with and follow our policy and procedures for safeguarding
        </li>
        <li>
          Know who to contact to express concerns about a child’s or adult’s
          welfare
        </li>
        <li>
          Remember that an allegation of abuse or neglect may lead to a criminal
          investigation and therefore you should not do anything that may
          jeopardise a police investigation, such as asking leading questions or
          attempting to investigate the allegations of abuse
        </li>
        <li>
          Attend training that raises awareness of safeguarding issues and
          equips them with the skills and knowledge needed
        </li>
      </ul>
    </p>
    <h4 className="text-2xl" id="7-procedures">
      7. The role of the Designated Safeguarding Lead is to:
    </h4>
    <p>
      <ul>
        <li>
          Make sure all staff and volunteers are aware of this policy and know
          how to raise safeguarding concerns
        </li>
        <li>
          Ensure all staff and volunteers understand the symptoms of abuse and
          neglect
        </li>
        <li>
          Oversee referrals and reporting of any concerns to RBKC Children’s
          Services or to the police
        </li>
        <li>
          Oversee monitoring of any children who are the subject of child
          protection plans
        </li>
        <li>Maintain accurate and secure safeguarding records</li>
      </ul>
    </p>
    <p>Maintain accurate and secure safeguarding records</p>
    <p>
      The board of trustees is responsible for regularly reviewing and approving
      the safeguarding policy and procedures.
    </p>
    <h4 className="text-2xl" id="8-procedures">
      8. What to do if you have a safeguarding concern about a child or
      vulnerable adult
    </h4>
    <p>
      <b>
        1. If you think that a child or vulnerable adult is at risk of immediate
        harm, please contact the police immediately on 999.
      </b>
    </p>
    <p>
      <b>
        2. If you have an urgent Safeguarding concern about a child or young
        person please call the Kensington and Chelsea Children’s Services Duty
        Line without delay and follow their instructions
      </b>{' '}
      – Tel: 020 7361 3013 (Out of hours – 0207 373 2227)
    </p>
    <p>
      <b>
        3. If you have an urgent Safeguarding concern about a vulnerable adult
        please contact
      </b>{' '}
      020 7361 3013 – Adult Social Care, socialservices@rbkc.gov.uk
    </p>
    <p>
      4. Where there is a concern about the welfare of a child, but no immediate
      risk, it should be discussed as soon as possible with the Designated
      Safeguarding Lead. The Designated Safeguarding lead will support the
      worker/volunteer to write their concerns, discuss a course of action and
      contact the Kensington and Chelsea Children’s Services Duty Line.
    </p>
    <p>
      5. The Designated Safeguarding Lead will respond as quickly as possible
      and will assess the concerns to determine whether an external referral to
      RBKC children’s services, to adult social care or the police should take
      place.
    </p>
    <p>
      6. The Designated Safeguarding Lead is usually responsible for making
      external referrals to RBKC children’s services, adult social care or the
      Police, except in an emergency.
    </p>
    <p>
      7. In the event that a staff member makes a referral, a copy must be
      provided immediately to the Designated Safeguarding Lead.
    </p>
    <p>
      8. In an emergency, where a child, young person or vulnerable adult makes
      a serious allegation, or if there has been an assault or a worker
      witnesses an incident which causes him/her to consider a child or
      vulnerable adult is in <b>immediate</b> risk of significant harm, then you
      will need to take action immediately so that the child or vulnerable adult
      is protected.
    </p>
    <p>
      9. If it is not possible to discuss the situation immediately with one of
      the Designated Safeguarding Leads, the worker will need to contact the
      police or RBKC children’s services.
    </p>
    <p>
      10. The Designated Safeguarding Lead is responsible for ensuring that
      incident reports, referrals and all information regarding safeguarding
      individual children and adults is securely stored in a password protected
      computer file.
    </p>
    <p>
      11. If possible and appropriate we will inform the child’s parents or the
      young person or vulnerable adult concerned of the need to make a referral
      and why it is being made. It is important that we work in partnership as
      much as possible with the families concerned.
    </p>
    <p>
      12. If you are concerned that a <b>member of staff or any other person</b>{' '}
      is harming or abusing a child or vulnerable adult, you must report your
      concerns immediately to the Designated Safeguarding Lead If your concern
      is about the Designated Lead then it should be reported immediately to the
      Deputy Designated Lead.
    </p>
    <p>
      13. If you have urgent concerns about the safety of a child and are unable
      to contact the Designated Safeguarding Lead, please contact the Deputy
      Designated Safeguarding Lead. If you cannot contact either the Designated
      Safeguarding Lead or the Deputy Designated Safeguarding Lead please do not
      hesitate to contact the Duty Officer or the police using the numbers
      above.
    </p>
    <p>
      <b>
        These external agencies will be able to advise you on your next steps.
      </b>
    </p>
    <p>
      14. In all situations, you may be asked to provide an outline of your
      concerns in writing. If the matter is referred to children or adult
      services or the police, you may be asked to provide a formal statement of
      your concerns for subsequent external investigations.
    </p>
    <h4 className="text-2xl" id="9-procedures">
      9. Responding to disclosures from children and vulnerable adults
    </h4>
    <p>
      <b>
        If you are approached by a child, young person or vulnerable adult, with
        a disclosure that s/he is being, or has been harmed or abused, or you
        are informed of such a disclosure by a staff member or member of the
        public.
      </b>
    </p>
    <p>
      <b>Do:</b>
      <ul>
        <li>Stay calm</li>
        <li>
          Listen to what is said, allowing the child to proceed at his or her
          own pace
        </li>
        <li>
          Explain to the child that this information will probably need to be
          shared with others and never promise to “keep a secret”
        </li>
        <li>
          Ask questions for clarification only, and not to elicit a particular
          answer.
        </li>
        <li>
          At the earliest opportunity, and within a maximum of 24 hours of the
          incident taking place, write down the facts, without your own opinion.
          (Use the incident report form Appendix 2)
        </li>
      </ul>
    </p>
    <p>
      <b>Don’t:</b>
      <ul>
        <li>
          Promise to keep the information secret. Make it clear that you have a
          duty to refer the matter on.
        </li>
        <li>
          Stop the individual who is recalling the events in their own words.
        </li>
        <li>
          Make the individual tell anyone else. S/he may have to be formally
          interviewed later and it is important to minimise the number of times
          information is repeated.
        </li>
        <li>
          Make any suggestions to the individual about how the incident may have
          happened.
        </li>
        <li>
          Question the individual, except to clarify what they are saying.
        </li>
        <li>
          Discuss the information with anyone other than your line manager, a
          Designated Safeguarding Lead or an appropriate external agency.
        </li>
      </ul>
    </p>
    <p>
      If concerns have arisen over a period of time from observations of a child
      or vulnerable adult’s behaviour or through observation of someone’s
      behaviour towards the child or vulnerable adult, the worker/volunteer
      should write a report with dates, about what has caused him/her concern.
      As with a verbal disclosure this report must be factual. (Use incident
      report form Appendix 2).
    </p>
    <h4 className="text-2xl" id="10-procedures">
      10. Allegations of abuse made against children
    </h4>
    <p>
      Please be aware that sometimes children of both genders can direct
      physical, sexual or emotional violence towards their parents, siblings, or
      other children.
    </p>
    <p>
      The harm caused to children by harmful or bullying behaviour of other
      children, either by a single child or groups of children can be
      significant. This may take the form of a single incident or ongoing
      harmful behaviours.
    </p>
    <p>
      Such abuse is subject to the same safeguarding procedures as apply in
      respect of children being abused by an adult.
    </p>
    <p>
      When it is alleged that a child has been abused by another child, this
      must be reported to the Designated Safeguarding Lead and referred to
      RBKC’s family services as set out in this Safeguarding Policy. Two
      separate referrals should be made – one for the child who is alleged to
      have been abused and a separate referral for the child who is alleged to
      be the abuser. This may result in investigation of each child’s needs
      separately or a identifying an alternative or more local strategy. More
      information can be found in the{' '}
      <a
        href=" https://www.londoncp.co.uk/chapters/ch_harm_others.html"
        target="_blank"
      >
        London Child Protection Procedures, Section 15.
      </a>
    </p>
    <p>
      Children who harm others should be held responsible for their harmful
      behaviour and professionals responding to them should be alert to the fact
      that they are likely to pose a risk to children other than the current
      victim.
    </p>
    <h4 className="text-2xl" id="11-procedures">
      11. Support for those involved in a child protection issue
    </h4>
    <p>
      Child abuse is devastating for the child and can also result in distress
      and anxiety for staff who become aware of the abuse.
    </p>
    <p>We will support children, their families, and staff by:</p>
    <p>
      <ul>
        <li>taking all suspicions and disclosures seriously;</li>
        <li>
          nominating a link person (Designated Safeguarding lead) who will keep
          everyone informed and be the main point of contact;
        </li>
        <li>
          where a member of staff is the subject of an allegation, separate link
          people will be nominated to avoid any conflict of interest;
        </li>
        <li>
          responding sympathetically to any request from child or member of
          staff for time out to deal with distress or anxiety;
        </li>
        <li>
          maintaining confidentiality and sharing information on a need-to-know
          basis only with relevant individuals and agencies;
        </li>
        <li>maintaining and storing records securely;</li>
        <li>
          offering details of helplines, counselling or other avenues of
          external support;
        </li>
        <li>
          following the procedures laid down in our whistleblowing, complaints
          and disciplinary procedures; and
        </li>
        <li>co-operating fully with relevant statutory agencies.</li>
      </ul>
    </p>
    <h4 className="text-2xl" id="12-procedures">
      12. Allegations against staff members
    </h4>
    <p>
      Allegations of abuse or concerns raised against members of staff,
      volunteers, trainers or trustees, will always be treated very seriously.
    </p>
    <p>
      <b>
        {' '}
        If you have concerns about a colleague or poor safeguarding practice
      </b>
    </p>
    <p>
      Staff and volunteers who are concerned about the conduct of a colleague or
      poor safeguarding practice at our supplementary school are placed in a
      very difficult situation.
    </p>
    <p>
      You must remember however, that the welfare of the child or vulnerable
      adult is paramount.
    </p>
    <p>
      Everyone working on behalf of our supplementary school should feel that
      they can report their concerns about a colleague or the safeguarding
      practice at the supplementary school.
    </p>
    <p>
      Our <b>whistleblowing policy</b> enables staff and volunteers to raise
      concerns or allegations in confidence and for a sensitive enquiry to take
      place.
    </p>
    <p>
      All concerns of poor practice or possible abuse by colleagues should be
      reported to the Designated Safeguarding Leads.
    </p>
    <p>
      Staff and volunteers may also report their concerns directly to the Local
      Authority or the police if they believe direct reporting is necessary to
      secure action.
    </p>
    <p>
      When an allegation is made against a member of staff, set procedures must
      be followed.
    </p>
    <p>A consultation with our DSL will happen if staff have:</p>
    <ul>
      <li>
        Behaved in a way which has harmed, or may have harmed a child or
        vulnerable adult.
      </li>
      <li>
        Possibly committed a criminal offence against or related to a child or
        vulnerable adult.
      </li>
      <li>
        Behaved towards a child or vulnerable adult in a way that indicates they
        would pose a risk of harm to children/ vulnerable adults.
      </li>
    </ul>
    <p>
      It is rare for a child or vulnerable adult to make an entirely false or
      malicious allegation, although misunderstandings and misinterpretations of
      events do happen.
    </p>
    <p>
      We recognise that a child or vulnerable adult may even make an allegation
      against an innocent party because they are too afraid to name the real
      perpetrator.
    </p>
    <p>
      However, staff who are the subject of an allegation have the right to have
      their case dealt with fairly, quickly and consistently and to be kept
      informed of its progress.
    </p>
    <p>
      Suspension is not the only option, and alternatives to suspension will
      always be considered. In some cases, staff may be suspended where this is
      deemed to be the best way to ensure that children and vulnerable adults
      are protected.
    </p>
    <p>
      Allegations against staff should be reported to the Designated
      Safeguarding Leads.
    </p>
    <p>
      The Designated Safeguarding Lead will pass on all concerns relating to
      staff to the Local Authority Designated Officer (LADO, see Appendix for
      contact details). To begin with, this can be verbal, but should be
      followed up by a written Childcare Concern.
    </p>
    <h4 className="text-2xl" id="13-procedures">
      13. Local Authority Designated Officer (LADO)
    </h4>
    <p>
      The LADO deals with allegations against staff within the children’s
      workforce in RBKC.
    </p>
    <p>
      Where one of the following allegations have been made, these must be
      reported to the LADO within one working day:{' '}
    </p>
    <ul>
      <li>behaved in a way that has harmed or may have harmed a child </li>
      <li>
        possibly committed a criminal offence against or related to a child{' '}
      </li>
      <li>
        behaved towards a child/children in a way that indicates he/she would
        pose a risk of harm if they work with children regularly or closely.{' '}
      </li>
    </ul>
    <p>
      The LADO can also be contacted for advice regarding concerns or suspicions
      about behaviour towards children by staff within RBKC’s children's
      workforce. This includes volunteers as well as paid staff and those in a
      position of trust for example faith leaders.
    </p>
    <p>
      The RBKC LADO can be contacted on:
      <br />
      Telephone: 020 7361 3013
      <br />
      Email: KCLADO.Enquiries@rbkc.gov.uk
    </p>
    <p>
      If a member of supplementary school team is asked to leave for
      safeguarding reasons, the Disclosure and Barring Service must be informed{' '}
      <a
        href="https://www.gov.uk/guidance/making-barring-referrals-to-the-dbs"
        target="_blank"
      >
        here
      </a>
    </p>
    <h4 className="text-2xl" id="14-procedures">
      14. Privacy, Confidentiality and Information Sharing
    </h4>
    <p>
      We will respect the privacy of the child, young person or vulnerable
      adult, by recognising that all information regarding possible or actual
      abuse within a setting should be kept confidential to the Designated
      Safeguarding Lead and the staff immediately involved with the child. The
      Designated Safeguarding Lead will disclose any information about an abused
      child on a need-to-know basis only.
    </p>
    <p>
      All staff, volunteers and trustees must be aware that they have a
      professional responsibility to share information with other agencies in
      order to safeguard children.
    </p>
    <p>
      We will ensure that data about children, young people or vulnerable adults
      will be stored securely.
    </p>
    <p>
      Our use of images policy and consent form for use of photographs ensures
      informed consent is given before images can be used.
    </p>
    <p>
      We will also respect the privacy of staff members, by following the
      procedures set out in our Disciplinary and Grievance procedures and by
      keeping this information confidential and secure. Information is shared on
      a need-to-know basis and the RBKC LADO will be informed of allegations
      against staff and we will follow any advice given by the LADO.
    </p>
    <p>
      We will take a balanced approach to confidentiality. This is based on the
      principles that information sharing must be: necessary and proportionate,
      relevant, adequate, accurate, timely, secure and recorded.
    </p>
    <h4 className="text-2xl" id="15-procedures">
      15. Safer Recruitment, induction and management support
    </h4>
    <p>
      We will ensure that thorough checks are made prior to appointment of
      staff, volunteers and freelance consultants, in order to prevent a person
      using their position to harm a child or vulnerable adults.
    </p>
    <p>
      <b>
        We will aim to ensure as far as is possible that anyone, paid or
        voluntary, who seeks to work with children and young people at the
        supplementary school and who gains substantial access to them is as safe
        to do so in child protection terms as can be guaranteed.{' '}
      </b>
    </p>
    <p>
      We recognise that in family-based community groups many volunteers are
      recruited informally on personal recommendation from members. We are aware
      that while the vast majority of staff and volunteers are wholly
      trustworthy and have the interests of the children at heart, informal
      recruitment can make groups extremely vulnerable to infiltration by people
      who mean children harm.
    </p>
    <p>
      In recruiting and appointing staff and volunteers we will be responsible
      for the following:
    </p>
    <ul>
      <li>
        All staff and volunteers will be appointed by at least two members of
        staff or management committee members.
      </li>
      <li>
        Most staff and all volunteers will work in teams, or in open
        environments where they are not alone with children. Staff will not work
        alone with children until they have completed a satisfactory
        probationary period.{' '}
      </li>
      <li>
        All staff and volunteers will:
        <ul>
          <li>
            be given a clear job description or role description setting out
            expectations for their work and conduct.
          </li>
          <li>
            show that they meet a person specification for the post or role.
          </li>
          <li>
            fill a form on appointment and annually at the start of each school
            year to update their personal details, previous and current
            work/volunteering experience and qualifications.
          </li>
          <li>
            supply the names of two referees who will be contacted personally.
          </li>
          <li>
            be required to complete an Enhanced DBS check on appointment and be
            required to sign up for the update service. This will give
            photographic and other evidence of identity, and includes a formal
            declaration of any criminal convictions.
          </li>
          <li>
            be taken through the safeguarding policy and procedure on induction.
            There will be annual training to remind them of procedures and
            important concepts.
          </li>
          <li>be supervised and observed at work by a named manager.</li>
        </ul>
      </li>
    </ul>
    <p>
      <b>
        For all posts at our school the following vetting checks are carried out
        prior to confirming the appointment:
      </b>
    </p>
    <ul>
      <li>
        A Self-Disclosure form to disclose previous spent/unspent convictions
        and disciplinary or capability procedures.
      </li>
      <li>Identity documents including photographic identity </li>
      <li>Proof of right to work in the UK</li>
      <li>
        References including a professional reference using our school reference
        template
      </li>
      <li>Qualification certificates if required for the role</li>
      <li>
        Disclosure and Barring Service (DBS) Check if eligible. All appointments
        to posts involving direct work with children and/or vulnerable adults
        will be subject to an Enhanced Disclosure from the DBS, and agreement to
        re-check every 3 years.
      </li>
    </ul>
    <p>
      Volunteers and freelance consultants post the same level of risk as paid
      staff. Vetting checks include:
    </p>
    <ul>
      <li>
        a self-disclosure form to disclose previous spent/unspent convictions{' '}
      </li>
      <li>
        References including a professional reference using our reference
        template
      </li>
      <li>
        DBS check if eligible. All volunteers and freelance consultants working
        directly with children and/or vulnerable adults will be subject to an
        Enhanced Disclosure from the DBS, and agreement to re-check every 3
        years.
      </li>
    </ul>
    <p>
      A criminal record does not prevent employment at our school. A thorough
      risk assessment will be carried out if convictions are revealed on the
      declaration form or criminal record check or if is not possible to obtain
      a criminal record check from abroad, prior to confirming or withdrawing an
      appointment.
    </p>
    <h4 className="text-2xl" id="16-procedures">
      16. Good practice guidelines
    </h4>
    <p>
      Everyone working on behalf of our school should be encouraged to
      demonstrate exemplary behaviour. The following are examples of how we aim
      to create a positive culture and climate at our supplementary school. We
      will treat everyone who attends our supplementary school with respect
      including respect for diversity.
    </p>
    <p>
      <b>Good practice means: </b>
    </p>
    <ul>
      <li>
        Always working in an open environment (for example, avoiding private or
        unobserved situations and encouraging open communication with no
        secrets).
      </li>
      <li>
        Treating all children and young people equally, and with respect and
        dignity. Always putting the welfare of each child and young person
        first.
      </li>
      <li>
        Maintaining a safe and appropriate distance with children and young
        people (for example, it is not appropriate for staff or volunteers to
        have an intimate relationship with a child or to share a room with
        them).
      </li>
      <li>
        Building balanced relationships based on mutual trust which empowers
        children and young people to share in the decision-making process;
      </li>
      <li>
        Making supplementary school activities and other off site activities
        fun, enjoyable and safe.
      </li>
      <li>
        Keeping up to date with technical skills, qualifications and insurance.
      </li>
      <li>
        Involving parents/carers wherever possible. For example, encouraging
        them to take responsibility for their children in the changing rooms. If
        groups have to be supervised in the changing rooms, always ensure
        parents, teachers, coaches or officials work in pairs.
      </li>
      <li>
        Ensuring that if mixed groups are taken away, they should always be
        accompanied by a male and female member of staff. However, remember that
        same gender abuse can also occur.
      </li>
      <li>
        Ensuring that at tournaments or residential events, adults should not
        enter children’s rooms or invite children into their rooms.
      </li>
      <li>
        Being an excellent role model – this includes not smoking or drinking
        alcohol in the company of children and young people.
      </li>
      <li>
        Giving enthusiastic and constructive feedback rather than negative
        criticism.
      </li>
      <li>
        Recognising the developmental needs and capacity of children and young
        people and not pushing them against their will.
      </li>
      <li>
        Securing parental consent in writing to act in loco parentis, if the
        need arises to administer emergency first aid and/or other medical
        treatment.
      </li>
      <li>
        Keeping a written record of any injury that occurs, along with the
        details of any treatment given.
      </li>
      <li>
        Requesting written parental consent if supplementary school staff have
        to transport children and young people in their cars.
      </li>
      <li>
        Following our school’s rules with regard to communication with children
        and vulnerable adults and use of social media and online networking.
      </li>
    </ul>
    <p>
      <b>Practices to be avoided </b>
    </p>
    <p>
      The following should be avoided except in emergencies. If cases arise
      where these situations are unavoidable it should be with the full
      knowledge and consent of your line manager, designated safeguarding lead
      and the child’s parents. For example, if a child sustains an injury and
      needs to go to hospital, or a parent fails to arrive to pick a child up at
      the end of a class or session:
    </p>
    <ul>
      <li>
        Avoid spending excessive amounts of time alone with children away from
        others.
      </li>
      <li>Avoid taking or dropping off a child to an event.</li>
      <li>
        Avoid the use of sexualised or derogatory language; ensuring language
        and conversation is appropriate when talking with or within hearing
        distance of children, young or vulnerable people
      </li>
    </ul>
    <p>
      <b>Practices never to be sanctioned</b>
    </p>
    <p>The following should never be sanctioned. You should never:</p>
    <ul>
      <li>
        Use physical restraint unless the restraint is to prevent physical
        injury of the child/vulnerable adult, other children, visitors or other
        staff or yourself.
      </li>
      <li>Engage in rough, physical or sexually provocative games.</li>
      <li>Use corporal/physical punishment to manage behaviour.</li>
      <li>Share a room with a child.</li>
      <li>Allow or engage in any form of inappropriate touching.</li>
      <li>Allow children to use inappropriate language unchallenged.</li>
      <li>Make sexually suggestive comments to a child, even in fun.</li>
      <li>Reduce a child to tears as a form of control.</li>
      <li>
        Allow disclosures and allegations made by a child to go unchallenged,
        unrecorded or not acted upon.
      </li>
      <li>
        Do things of a personal nature for children or disabled adults, that
        they can do for themselves.
      </li>
      <li>
        Invite or allow children to stay with you at your home unsupervised.
      </li>
    </ul>
    <p>
      <b>Please note </b>
    </p>
    <p>
      It may sometimes be necessary for staff or volunteers to do things of a
      personal nature for children, particularly if they are young or are
      disabled. These tasks should only be carried out with the full
      understanding and consent of parents and the child/young person involved.
      There is a need to be responsive to a person’s reactions. If a person is
      fully dependent on you, talk with him/her about what you are doing and
      give choices where possible. This is particularly so if you are involved
      in any dressing or undressing of outer clothing, or where there is
      physical contact, lifting or assisting a child to carry out particular
      activities. Avoid taking on the responsibility for tasks for which you are
      not appropriately trained.
    </p>
    <h4 className="text-2xl" id="17-procedures">
      17. Abuse of position of trust
    </h4>
    <p>
      Everyone working on behalf of our school is aware that inappropriate
      behaviour towards pupils is unacceptable and that their conduct towards
      children and vulnerable adults must be exemplary.
    </p>
    <p>
      Anyone working with children, young people or vulnerable adults at our
      school is considered to be acting in a position of trust. A relationship
      of trust can be described as one in which one party is in a position of
      power or influence over the other because of their work or the nature of
      their activity. It is vital for all those in positions of trust to
      understand the power this can give them over those they care for. Young
      people of 16 or 17 can legally consent to sexual activity but they may
      still be relatively immature emotionally. It is essential that those who
      may be in a position of responsibility and trust recognise this
      vulnerability and ensure that it is not exploited.
    </p>
    <p>
      Where a person aged 18 or over is in a specified position of trust with a
      child under 18, it is an offence for that person to engage in sexual
      activity with or in the presence of that child, or to cause or incite that
      child to engage in or watch sexual activity even if the young person is
      ostensibly consenting.
    </p>
    <p>
      Any behaviour, which might allow a sexual relationship to develop between
      the person in a position of trust and the children in their care, must be
      avoided. Any sexual relationship within a position of trust relationship
      is unacceptable so long as the relationship of trust continues.
    </p>
    <h4 className="text-2xl" id="18-procedures">
      18. Appendix 1: Useful Contacts
    </h4>
    <div>
      <p>
        <b>The Partnership of Supplementary Schools Contacts</b>
      </p>
      <p>
        The Partnership of Supplementary Schools Manager
        <br />
        Name: Muna Ali
        <br />
        Email: muna.ali@westway.org
        <br />
        Phone: 02089625720 or 07951114684
      </p>
    </div>
    <div>
      <p>
        <b>The Westway Trust</b>
      </p>
      <p>
        Designated Safeguarding Lead for Westway Trust:
        <br />
        Name: Martin Parker
        <br />
        Email: martin.parker@westway.org
        <br />
        Phone: 0208 962 5756
      </p>
    </div>
    <div>
      <p>
        <b>Deputy Designated Safeguarding Leads</b>
      </p>
      <p>
        Name: Joanna Atogdina
        <br />
        Email: joanna.atogdina@westway.org
        <br />
        Phone: 020 8962 5727 or 07824141412
      </p>
      <p>
        Name: Nicola Tedore
        <br />
        Email: nicola.tedore@westway.org
        <br />
        Phone: 020 8962 5778 or 07741248301
      </p>
    </div>
    <div>
      <p>
        <b>RBKC Safeguarding Contacts</b>
        <br />
        <b>
          Consultation and Advice about a child/young person resident in The
          Royal Borough of Kensington and Chelsea:
        </b>
        <br />
        <span>
          <b>Kensington and Chelsea Duty Line </b>– Tel: 020 7361 3013 9
          9am-5pm) Or outside these times the Emergency Duty Team on 0207 373
          2227
        </span>
      </p>
    </div>
    <div>
      <p>
        <b>
          For LADO consultations and referrals please contact the duty Child
          Protection Adviser on:
        </b>
        <br />
        Telephone: 020 7361 3013
        <br />
        Email: KCLADO.Enquiries@rbkc.gov.uk
      </p>
    </div>
    <div>
      <p>
        <b>Bi-borough PREVENT</b>
        <br />
        Telephone: 020 8753 5727
        <br />
        Email: prevent@lbhf.gov.uk
      </p>
    </div>
    <div>
      <p>
        <b>Adult Social Care</b>
        <br />
        020 7361 3013 – Adult Social Care Line
        <br />
        Email: socialservices@rbkc.gov.uk
      </p>
      <p>
        Here is a full list of{' '}
        <a
          href="https://www.rbkc.gov.uk/lscb/information-professionals-and-volunteers/contacts-safeguarding-kensington-and-chelsea"
          target="_blank"
        >
          Safeguarding contacts
        </a>{' '}
        for RBKC
      </p>
      <p>
        Here is{' '}
        <a href="https://www.rbkc.gov.uk/lscb/" target="_blank">
          Further information
        </a>{' '}
        from the Local Safeguarding Children Partnership
      </p>
    </div>
    <h4 className="text-2xl" id="19-procedures">
      19. Appendix 2: Incident/Concern recording log
    </h4>
    <IncidentLogTable />
    <h4 className="text-2xl" id="20-procedures">
      20. Appendix 3: What to do if you are worried about a child, young person
      or vulnerable adult
    </h4>
    <p>
      <b>A Flow Chart of procedures</b>
    </p>
    <div className="block">
      <Image
        src={flowchart}
        className="h-400 w-auto"
        alt="procedure flowchart"
      />
    </div>
    <h4 className="text-2xl" id="21-procedures">
      21. Appendix 4: Body Map
    </h4>
    <p>
      <b>
        If there are visible marks on the child or young person they should be
        recorded here.
      </b>
    </p>
    <div className="block">
      <Image src={bodymap} className="h-400 w-auto" alt="body map" />
    </div>
  </div>
)

const IncidentLogTable = () => (
  <div className="p-4">
    <div className="mb-8">
      <h2 className="mb-4 text-xl font-semibold">
        Section 1: Details of the child and their parent/carer
      </h2>
      <table className="w-full">
        <tbody>
          <tr>
            <td className="border p-2" colSpan={3}>
              Name of child / young person:
            </td>
          </tr>
          <tr>
            <td className="border p-2">Gender:</td>
            <td className="border p-2" width={100}>
              <label className="mr-2">
                <input type="radio" name="gender" className="mr-1" /> Male
              </label>
            </td>
            <td className="border p-2" width={100}>
              <label>
                <input type="radio" name="gender" className="mr-1" /> Female
              </label>
            </td>
          </tr>
          <tr>
            <td className="border p-2" colSpan={3}>
              Age:
            </td>
          </tr>
          <tr>
            <td className="border p-2" colSpan={3}>
              Date of Birth:
            </td>
          </tr>
          <tr>
            <td className="border p-2" colSpan={3}>
              Ethnicity:
            </td>
          </tr>
          <tr>
            <td className="border p-2" colSpan={3}>
              Religion:
            </td>
          </tr>
          <tr>
            <td className="border p-2" colSpan={3}>
              Child’s First Language:
            </td>
          </tr>
          <tr>
            <td className="border p-2 pb-24" colSpan={3}>
              Home Address (including postcode and address of parent/carer if
              different from child:
            </td>
          </tr>
          <tr>
            <td className="border p-2 pb-36" colSpan={3}>
              Communication Needs (interpreter/signer/other):
            </td>
          </tr>
          <tr>
            <td className="border p-2 pb-36" colSpan={3}>
              Additional Needs:
            </td>
          </tr>
          <tr>
            <td className="border p-2 pb-24" colSpan={3}>
              Sibling Information:
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="mb-8">
      <h2 className="mb-4 text-xl font-semibold">Section 2: Your Details</h2>
      <table className="w-full">
        <tbody>
          <tr>
            <td className="border p-2" colSpan={2}>
              Your Name:
            </td>
          </tr>
          <tr>
            <td className="border p-2" colSpan={2}>
              Your Position:
            </td>
          </tr>
          <tr>
            <td className="border p-2" colSpan={2}>
              Date and Time of Incident:
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="mb-8">
      <h2 className="mb-4 text-xl font-semibold">Section 3: Your Report</h2>
      <table className="w-full">
        <tbody>
          <tr>
            <td className="border p-2">
              Are you reporting your own concerns or responding to concerns
              raised by someone else?
            </td>
            <td className="border p-2" width={100}>
              <label className="block">
                <input type="radio" name="reportingConcerns" className="mr-1" />{' '}
                my own concerns
              </label>
            </td>
            <td className="border p-2" width={100}>
              <label className="block">
                <input type="radio" name="reportingConcerns" className="mr-1" />{' '}
                concerns raised by someone else
              </label>
            </td>
          </tr>
          <tr>
            <td className="border p-2 pb-48" colSpan={3}>
              If responding to concerns raised by someone else, please provide
              their name and position within the organisation:
            </td>
          </tr>
          <tr>
            <td className="border p-2 pb-48" colSpan={3}>
              Please provide details of the incident or concerns you have,
              including times, dates or other relevant information (such as a
              description of any injuries, whether you are recording fact,
              opinion or hearsay):
            </td>
          </tr>
          <tr>
            <td className="border p-2 pb-48" colSpan={3}>
              The child/young person’s account, if it can be given, of what has
              happened and how:
            </td>
          </tr>
          <tr>
            <td className="border p-2 pb-48" colSpan={3}>
              Please provide details of the person alleged to have caused the
              incident/injury including. Where possible, their name, address and
              date of birth (or approximate age):
            </td>
          </tr>
          <tr>
            <td className="border p-2 pb-48" colSpan={3}>
              Please provide details of any witnesses to the incident(s):
            </td>
          </tr>
          <tr>
            <td className="border p-2 pb-24" colSpan={3}>
              Your signature:
            </td>
          </tr>
          <tr>
            <td className="border p-2 pb-12" colSpan={3}>
              Designated Safeguarding Lead received this information
            </td>
          </tr>
          <tr>
            <td className="border p-2" colSpan={3}>
              Date:
            </td>
          </tr>
          <tr>
            <td className="border p-2" colSpan={3}>
              Time:
            </td>
          </tr>
          <tr>
            <td className="border p-2" colSpan={3}>
              DSL’s signature:
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)

export default function PolicyPage() {
  const { language } = useTranslation()

  return (
    <section className="bg-purple-25 px-4 pt-16 sm:px-6 lg:px-8">
      {/* Container */}
      <div className="mx-auto max-w-screen-xl">
        <Procedure language={language} />
      </div>
    </section>
  )
}
