<script setup lang="ts">
// Shows any case study from data/case-studies/articles, based on the page address.
import { findCaseStudy, imagePath } from '~/data/case-studies'

// Re-run this page when moving from one article straight to another.
definePageMeta({ key: route => route.fullPath })

const route = useRoute()
const study = findCaseStudy(String(route.params.slug))
if (!study) {
  throw createError({ statusCode: 404, statusMessage: 'Case study not found', fatal: true })
}

const url = siteUrl(`/case-studies/${study.slug}`)
const shareImage = study.shareImage ?? study.card.image
const imageUrl = shareImage ? `${SITE}${imagePath(study, shareImage)}` : undefined

// Search result title and description, plus the preview card shown when the post is shared.
// og:title stays the headline, which reads better in a social feed than the search title.
useSeoMeta({
  title: study.seoTitle ?? `${study.partner.name} case study`,
  description: study.summary,
  ogTitle: study.title,
  ogDescription: study.summary,
  ogType: 'article',
  ogImage: imageUrl,
  ogImageAlt: shareImage ? study.card.imageAlt : undefined,
  articlePublishedTime: study.date,
  articleModifiedTime: study.updated ?? study.date,
})

// Describes the article to search engines and AI assistants (schema.org structured data).
const npts = { '@type': 'NGO', '@id': `${SITE}/#organization`, name: 'Non-Profit Technical Support', url: `${SITE}/` }
useHead({
  script: [{
    key: 'article-jsonld',
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: study.title,
      description: study.summary,
      datePublished: study.date,
      dateModified: study.updated ?? study.date,
      image: imageUrl ? [imageUrl] : undefined,
      author: npts,
      publisher: { ...npts, logo: { '@type': 'ImageObject', url: `${SITE}/img/logo_large.webp` } },
      about: { '@type': 'NGO', name: study.partner.name, url: study.partner.url },
      mainEntityOfPage: url,
    }),
  }],
})
</script>

<template>
  <CaseStudyArticle :study="study!" />
</template>
