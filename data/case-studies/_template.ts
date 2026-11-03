// ─────────────────────────────────────────────────────────────────────────────
// CASE STUDY TEMPLATE
//
// 1. Copy this file into the `articles` folder next to it and rename it to the
//    article's slug, e.g. articles/carsons-village.ts
// 2. Replace every "..." below. Keep the quote marks and commas around the text.
// 3. Put the photos in public/img/case-studies/<slug>/ and use their file names below.
// 4. Delete any optional part you don't need (each is marked "optional").
// 5. Commit and sync. The article appears at npts.tech/case-studies/<slug>
//    and on the Case studies and Partners pages automatically.
//
// Writing tip: if your text contains an apostrophe ('), use the curly one (’)
// or wrap the text in double quotes ("...") instead of single quotes.
// ─────────────────────────────────────────────────────────────────────────────
import type { CaseStudy } from '~/data/case-studies/types'

const article: CaseStudy = {
  // Page address: npts.tech/case-studies/<slug>. Lowercase words joined by hyphens,
  // matching this file's name and the photo folder's name.
  slug: 'partner-name',

  // Date published, YYYY-MM-DD. Newest articles are listed first.
  date: '2026-01-01',

  partner: {
    name: '...',
    url: 'https://...', // optional: the partner's website
    logo: 'logo.png', // optional: file name in the photo folder
  },

  // Headline and the paragraph under it.
  title: '...',
  summary: '...',

  // The card on the Case studies and Partners pages.
  card: {
    excerpt: '...', // one or two sentences
    image: 'photo.webp', // file name in the photo folder
    imageAlt: '...', // describe the photo, e.g. "Volunteers sorting donations"
  },

  // optional: a .jpg or .png for LinkedIn/Facebook previews. If left out, the card image is used.
  shareImage: 'photo.jpg',

  // The bar of facts under the headline. Up to 4 work best.
  // `highlight: true` shows the value in green.
  facts: [
    { label: 'Partner', value: '...' },
    { label: 'Built by', value: 'UTDesign EPICS students' },
    { label: 'Hosted & maintained by', value: 'NPTS', highlight: true },
    { label: 'Status', value: '...', highlight: true },
  ],

  // optional: a quote from the partner, shown near the top.
  quote: {
    text: '...', // no quote marks needed, they're added automatically
    author: 'Name, Title, Organization',
  },

  // The article itself. Each section has a small green label, a heading, and a body.
  // In the body:
  //   - a plain '...' line is a paragraph
  //   - { image: { ... } } adds a photo
  //   - { highlight: { ... } } adds a green-bordered box with a list
  sections: [
    {
      label: 'The partner',
      heading: '...',
      body: [
        '...',
        '...',
      ],
    },
    {
      label: 'The challenge',
      heading: '...',
      body: [
        '...',
        {
          image: {
            src: 'photo.webp',
            alt: '...',
            caption: '...', // optional
          },
        },
      ],
    },
    {
      label: 'NPTS’s role',
      heading: '...',
      body: [
        '...',
        {
          highlight: {
            title: 'What NPTS does for ...',
            items: [
              '...',
              '...',
            ],
          },
        },
      ],
    },
    {
      label: 'The impact',
      heading: '...',
      body: [
        '...',
      ],
    },
  ],

  // optional: the "Why it matters" section with three numbered steps.
  whyItMatters: {
    heading: '...',
    intro: '...',
    steps: [
      { title: 'Build', body: '...' },
      { title: 'Sustain', body: '...' },
      { title: 'Serve', body: '...' },
    ],
    closing: '...', // optional: shown before the "See all partners" link
  },

  // optional: where the facts came from.
  sources: 'Sources: ...',
}

export default article
