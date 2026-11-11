import type { CaseStudy } from '~/data/case-studies/types'

const article: CaseStudy = {
  slug: 'hope-restored-missions',
  date: '2026-10-01',
  partner: {
    name: 'Hope Restored Missions',
    url: 'https://hoperestoredmissions.org',
    logo: 'logo.jpg',
  },
  title: '3,500 garments, counted by hand. Until a student team built a better way.',
  summary: 'Hope Restored Missions used to track roughly 3,500 donated garments by hand. A UTDesign EPICS team built an inventory system to replace that, and NPTS hosts and maintains it so HRM can keep relying on it long after the semester ended. Today it is fully in use.',
  card: {
    excerpt: 'Hope Restored Missions used to track ~3,500 donated garments by hand. A UTDesign EPICS team built an inventory system, and NPTS hosts and maintains it so HRM can keep relying on it.',
    image: 'warehouse.webp',
    imageAlt: 'Racks of donated clothing in the Hope Restored Missions warehouse',
  },
  shareImage: 'warehouse.jpg',
  facts: [
    { label: 'Partner', value: 'Hope Restored Missions', url: 'https://hoperestoredmissions.org' },
    { label: 'Built by', value: 'UTDesign EPICS students' },
    { label: 'Hosted & maintained by', value: 'NPTS', highlight: true },
    { label: 'Status', value: 'fully in use', highlight: true },
  ],
  quote: {
    text: 'Now having a simple, accurate, & easy to maintain electronic Inventory Control System designed by UTD’s EPICS students has been a HUGE help! … Every university should have an EPICS program like UTD’s to help local 501c3 orgs!',
    author: 'Jim Alexander, Hope Restored Missions point of contact for the UTD EPICS team',
  },
  sections: [
    {
      label: 'The partner',
      heading: 'Help for anyone who walks through the door.',
      body: [
        'Hope Restored Missions (HRM) began in the spring of 2019 as a grassroots effort led by Dr. Tamara Monroe and three other servant leaders. Based in Plano, HRM serves people experiencing poverty and homelessness across Collin County and North Texas, and since 2019 has supported over 8,100 people on their journey to securing housing, accessing medical and mental healthcare, building employability skills, and regaining stability.',
        'HRM is zero-barrier by design: “We do not have any service eligibility requirements; we will help anyone who comes through our doors.” Its work spans street outreach, a resource center for emergency needs, the Bridge to Hope housing program, and See Me, which has helped over 140 people obtain the identification they need to access shelter, government assistance, and medical care.',
      ],
    },
    {
      label: 'The challenge',
      heading: 'A warehouse that never stops moving.',
      body: [
        'One way HRM restores dignity is by replacing clients’ tattered clothing. HRM receives about 100 clothing donations a day and distributes about 85, with roughly 3,500 garments on hand at any time, all in a warehouse of about 600 square feet.',
        {
          image: {
            src: 'warehouse.webp',
            alt: 'Racks of donated clothing and stacked bins in the Hope Restored Missions warehouse',
            caption: 'Hope Restored Missions’ clothing warehouse in Plano. Photo: Hope Restored Missions.',
          },
        },
        'For years, HRM tracked that inventory by hand. The counting and logging took staff time, and the results weren’t reliably accurate.',
      ],
    },
    {
      label: 'What the students built',
      heading: 'Designed with the people who use it.',
      body: [
        'A UTDesign EPICS team took on the problem. The students and their mentors listened to HRM’s needs and adjusted the design based on feedback. Some came onsite to see the issues first-hand, and used what they saw to refine each beta version. The result is an electronic inventory control system built specifically for HRM that is simple, accurate, and easy to maintain.',
      ],
    },
    {
      label: 'NPTS’s role',
      heading: 'Without long-term support, a semester’s work disappears.',
      body: [
        'A student project has a built-in end date. When the semester is over, the team graduates or moves on to new work. If no one hosts and maintains what they built, the application stops being usable, and the nonprofit loses a tool it has come to depend on.',
        'NPTS exists to close that gap. Hosting and support of projects built by experiential learning programs is a core part of our mission, and HRM’s inventory system is exactly that kind of project.',
        {
          highlight: {
            title: 'What NPTS does for HRM',
            items: [
              'Hosts the inventory system so it stays online for HRM’s staff and volunteers.',
              'Maintains the application now that the EPICS team’s semester is over.',
              'Keeps the students’ work usable, so HRM can rely on it day to day. Today it is fully in use.',
              'Does this with volunteers, most of whom came up through UTDesign EPICS themselves.',
            ],
          },
        },
      ],
    },
    {
      label: 'The impact',
      heading: 'Less counting, better data.',
      body: [
        'According to HRM, the system has eased its staffing constraints. Because its inventory and service data is now granular and accurate, it may also help HRM secure future grants. None of that would last without someone keeping the system running, and that is the work NPTS does.',
      ],
    },
  ],
  whyItMatters: {
    heading: 'One investment, two kinds of impact.',
    intro: 'HRM’s inventory system is one example of the model NPTS is built around. Supporting NPTS keeps tools like this running for the communities they serve, and creates volunteer and internship opportunities for the students of the programs that build them.',
    steps: [
      { title: 'Build', body: 'UTDesign EPICS students design a bespoke solution with the nonprofit, like HRM’s inventory system.' },
      { title: 'Sustain', body: 'NPTS hosts and supports the project once the semester ends, so the work doesn’t disappear.' },
      { title: 'Serve', body: 'The nonprofit keeps using the tool to serve its community, with less time spent on manual work.' },
    ],
    closing: 'NPTS gains new partners every semester through our relationship with UTDesign EPICS. Alongside HRM, we support projects for The Shaken Baby Alliance, Kids-U, Tomorrow’s Leaders Today, The Warren Center, and UTDesign.',
  },
  sources: 'Sources: testimonial and warehouse figures provided by Hope Restored Missions; organization history, impact figures, and program details from HRM’s website.',
}

export default article
