// Case study cards shown on /case-studies and the partners page.
// They come from the article files in data/case-studies/articles, so there's nothing to edit here.
import { caseStudies, imagePath } from './case-studies'

export interface Story {
  to: string
  partner: string
  title: string
  excerpt: string
  image: string
  imageAlt: string
}

export const stories: Story[] = caseStudies.map(s => ({
  to: `/case-studies/${s.slug}`,
  partner: s.partner.name,
  title: s.title,
  excerpt: s.card.excerpt,
  image: imagePath(s, s.card.image),
  imageAlt: s.card.imageAlt,
}))
