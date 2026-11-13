import type { CaseStudy } from '~/data/case-studies/types'

const article: CaseStudy = {
  slug: 'carsons-village',
  date: '2026-11-08',
  partner: {
    name: 'Carson’s Village',
    url: 'https://carsonsvillage.org',
    logo: 'logo.png',
  },
  title: 'Turning a moment of loss into a village of support.',
  seoTitle: 'Carson’s Village: family support page platform case study',
  summary: 'Carson’s Village has helped 9,806 grieving families since 2018. Its family support pages raise tens of thousands of dollars a year, but staff build every one by hand inside the organization’s website. A UTDesign EPICS team started a platform to change that, and NPTS took it over and is bringing it to launch.',
  card: {
    excerpt: 'Carson’s Village raised $60,406 for grieving families in 2025 through pages its staff build by hand. NPTS is bringing a self-service platform to launch so any family can build one.',
    image: 'family-page.jpg',
    imageAlt: 'A Carson’s Village family support page on a laptop, showing a photo of the loved one, donations raised, and service details',
  },
  shareImage: 'family-page.jpg',
  facts: [
    { label: 'Partner', value: 'Carson’s Village', url: 'https://carsonsvillage.org' },
    { label: 'Built by', value: 'UTDesign EPICS students' },
    { label: 'Led & maintained by', value: 'NPTS', highlight: true },
    { label: 'Status', value: 'in development', highlight: true },
  ],
  quote: {
    text: 'If I can give them the tools to do it themselves, that would save us some time and give them the ability to raise money on their own.',
    author: 'Jason Dyke, Founder and CEO, Carson’s Village',
  },
  sections: [
    {
      label: 'The partner',
      heading: 'No one should journey through grief alone.',
      body: [
        'Jason Dyke founded Carson’s Village after losing his 11-year-old son, Carson. Friends helped him through the funeral home visit and everything else that had to happen that week, and he saw that many families have no one to do that for them, and don’t know which questions to ask.',
        'Today, Carson’s Village “builds the ecosystem to help navigate the journey from loss to healthy grieving.” Since 2018 it has helped 9,806 families, 75% of them low income and 54% people of color. In 2025 alone, it helped 1,807 families across 48 U.S. states and territories, made 430 counseling referrals, and raised $60,406 in support of families.',
        'It reaches families through partner hospital systems, school districts, municipalities, and companies that together serve more than 500,000 employees, patients, residents, and students.',
      ],
    },
    {
      label: 'The challenge',
      heading: 'Support pages built one at a time, by hand.',
      body: [
        'When a family needs to raise money for funeral expenses or a cause their loved one cared about, Carson’s Village builds a family support page: a photo, a warm write-up of who the person was (“not an obituary”), funeral and service details, a guestbook for messages, and a way to donate.',
        {
          image: {
            src: 'family-page.jpg',
            alt: 'A Carson’s Village family support page on a laptop, showing a photo of the loved one, a donation progress bar, and service details',
            caption: 'A family support page on Carson’s Village’s current website. Image: Carson’s Village.',
          },
        },
        'Staff build every page by hand in the back end of the organization’s WordPress website, about 30 minutes each by Jason’s estimate. That adds up to 30–40 pages and $50,000–$70,000 in donations a year, and the volume is rising as Carson’s Village adds partners. It also means giving staff access to the entire website just to publish a page.',
        'Families referred from outside Carson’s Village’s partner network receive an automated response, with no way to create a page of their own.',
      ],
    },
    {
      label: 'What the students built',
      heading: 'A support page any family can create.',
      body: [
        'A UTDesign EPICS team set out to build a dedicated platform for family support pages. Carson’s Village Advocates can create and manage pages for partner families, invite family members, and turn pages on or off, while families from outside the partner network can build a page themselves.',
        'Each page brings together the write-up, service details, a photo gallery, sharing, and donations with goals, and Carson’s Village staff get reports on donations across families.',
        { placeholder: 'Demo to be added' },
      ],
    },
    {
      label: 'NPTS’s role',
      heading: 'Carrying a complex project across the finish line.',
      body: [
        'The platform proved more technically challenging than a typical student project, and it needed more time than a single team’s timeline allows. Instead of letting that work stall between semesters, NPTS took over the project.',
        'NPTS now leads development and has the platform running as a working demo on its own infrastructure. Once it launches, NPTS will host and maintain it for the long term, so Carson’s Village never loses a tool its families depend on.',
        {
          highlight: {
            title: 'What NPTS does for Carson’s Village',
            items: [
              'Took over the project from the student team and leads its development.',
              'Hosts the platform, already running as a working demo.',
              'Will maintain it after launch, so it keeps working for families long after it ships.',
              'Defined, together with Carson’s Village, how the platform’s impact will be measured.',
            ],
          },
        },
      ],
    },
    {
      label: 'The impact',
      heading: 'Built to be measured from day one.',
      body: [
        'The platform gives Carson’s Village two things it doesn’t have today: a way to publish pages without staff working in the website’s back end, and a self-service option for families outside its partner network.',
        'Because the platform isn’t live yet, NPTS and Carson’s Village agreed on how its impact will be measured before launch. Jason has offered to review the metrics and complete an impact survey once it is in use.',
        {
          highlight: {
            title: 'Metrics tracked after launch',
            items: [
              'Family support pages created, compared with today’s 30–40 a year.',
              'Donations raised through the platform, compared with today’s $50,000–$70,000 a year.',
              'Pages built by families outside the partner network, a capability that doesn’t exist today.',
              'Staff time and website access no longer needed to publish each page.',
            ],
          },
        },
      ],
    },
  ],
  whyItMatters: {
    heading: 'Keeping student-built work alive for the families it serves.',
    intro: 'Carson’s Village’s platform shows why long-term support matters. A student team laid the foundation, and NPTS makes sure that work reaches the families it was built for instead of stalling between semesters.',
    steps: [
      { title: 'Build', body: 'UTDesign EPICS students designed the family support page platform with Carson’s Village.' },
      { title: 'Sustain', body: 'NPTS took over development, hosts the platform, and will maintain it after launch.' },
      { title: 'Serve', body: 'Grieving families, including those outside the partner network, can create a page and raise support.' },
    ],
    closing: 'NPTS gains new partners every semester through our relationship with UTDesign EPICS. Alongside Carson’s Village, we support projects for Hope Restored Missions, The Shaken Baby Alliance, Kids-U, and The Warren Center.',
  },
  sources: 'Sources: organization history, mission, and 2025 figures from Carson’s Village’s 2025 Annual Review; current family support page volume, donations, and staff time are estimates from Carson’s Village’s founder.',
}

export default article
