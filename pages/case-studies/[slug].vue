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

const url = `https://npts.tech/case-studies/${study.slug}`
const shareImage = study.shareImage ?? study.card.image

// Title, summary, and photo shown in the preview card when the post is shared.
useSeoMeta({
  title: `${study.partner.name} case study · NPTS`,
  description: study.summary,
  ogTitle: study.title,
  ogDescription: study.summary,
  ogType: 'article',
  ogUrl: url,
  ogImage: `https://npts.tech${imagePath(study, shareImage)}`,
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <CaseStudyArticle :study="study!" />
</template>
