import type { CaseStudy } from './types'

// Every file in ./articles is picked up automatically, newest first.
// To publish a new case study, copy _template.ts into ./articles (see README.md).
const files = import.meta.glob<CaseStudy>('./articles/*.ts', { eager: true, import: 'default' })

export const caseStudies: CaseStudy[] = Object.values(files).sort((a, b) => b.date.localeCompare(a.date))

// The slug decides the page address and the photo folder, so it must match the file name.
if (import.meta.dev) {
  for (const [path, study] of Object.entries(files)) {
    const fileSlug = path.split('/').pop()!.replace(/\.ts$/, '')
    if (study.slug !== fileSlug) {
      console.warn(`[case studies] ${path} has slug '${study.slug}'. Rename the file or the slug so they match.`)
    }
  }
}

export function findCaseStudy(slug: string) {
  return caseStudies.find(s => s.slug === slug)
}

// Folder for an article's photos: public/img/case-studies/<slug>/
export function imagePath(study: CaseStudy, file: string) {
  return `/img/case-studies/${study.slug}/${file}`
}
