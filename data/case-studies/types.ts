// The shape of a case study article. Every article file in ./articles fills in these fields,
// and components/CaseStudyArticle.vue turns them into the page.

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

// One block of a section: a plain string is a paragraph; objects add a photo or a highlight box.
export type ArticleBlock = string | { image: ArticleImage } | { highlight: ArticleHighlight }

export interface ArticleSection {
  label: string // small green label, e.g. "The challenge"
  heading: string
  body: ArticleBlock[]
}

export interface CaseStudy {
  slug: string // page address: npts.tech/case-studies/<slug>
  date: string // YYYY-MM-DD, used to list the newest articles first
  partner: {
    name: string
    url?: string // the partner's website
    logo?: string // file name in public/img/case-studies/<slug>/
  }
  title: string // headline
  summary: string // paragraph under the headline
  card: {
    excerpt: string // short text on the Case studies and Partners page cards
    image: string // file name of the card photo
    imageAlt: string
  }
  shareImage?: string // .jpg or .png shown in LinkedIn/Facebook previews (webp isn't reliable there)
  facts: { label: string; value: string; highlight?: boolean }[] // the bar under the headline
  quote?: { text: string; author: string }
  sections: ArticleSection[]
  whyItMatters?: {
    heading: string
    intro: string
    steps: { title: string; body: string }[]
    closing?: string // shown above the "See all partners" link
  }
  sources?: string
}
