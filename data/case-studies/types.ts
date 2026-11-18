// The shape of a case study article. Every article file in ./articles fills in these fields,
// and components/case-study/CaseStudyArticle.vue turns them into the page.

// A photo inside a section. `src` is a file name in public/img/case-studies/<slug>/.
export interface ArticleImage {
  src: string
  alt: string // describes the photo for screen readers
  caption?: string
}

// A green-bordered box with a short list, e.g. "What NPTS does for HRM".
export interface ArticleHighlight {
  title: string
  items: string[]
}

// One block of a section: a plain string is a paragraph; objects add a photo, a highlight box,
// or a placeholder box (e.g. "Demo to be added") that marks where a photo will go later.
export type ArticleBlock = string | { image: ArticleImage } | { highlight: ArticleHighlight } | { placeholder: string }

// One item in the bar under the headline. `url` makes the value a link; `highlight` shows it in green.
export interface ArticleFact {
  label: string
  value: string
  url?: string
  highlight?: boolean
}

// The "Why it matters" block with numbered steps.
export interface ArticleWhyItMatters {
  heading: string
  intro: string
  steps: { title: string; body: string }[]
  closing?: string // shown above the "See all partners" link
}

export interface ArticleSection {
  label: string // small green label, e.g. "The challenge"
  heading: string
  body: ArticleBlock[]
}

export interface CaseStudy {
  slug: string // page address: npts.tech/case-studies/<slug>
  date: string // YYYY-MM-DD publish date, shown on the article and used to list the newest first
  updated?: string // YYYY-MM-DD, set when the article is meaningfully revised
  partner: {
    name: string
    url?: string // the partner's website
    logo?: string // file name in public/img/case-studies/<slug>/
  }
  title: string // headline
  seoTitle?: string // title in Google results and the browser tab, if it should differ from the headline. Aim for under 60 characters with the partner's name and what was built.
  summary: string // paragraph under the headline
  card: {
    excerpt: string // short text on the Case studies and Partners page cards
    image?: string // file name of the card photo. Leave out to show "Picture to be added".
    imageAlt?: string
  }
  shareImage?: string // .jpg or .png for LinkedIn/Facebook previews (webp isn't reliable there). Defaults to the card image.
  facts: ArticleFact[] // the bar under the headline
  quote?: { text: string; author: string }
  sections: ArticleSection[]
  whyItMatters?: ArticleWhyItMatters
  sources?: string
}
