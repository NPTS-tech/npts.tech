<script setup lang="ts">
// One section of a case study: label, heading, then paragraphs, photos, and highlight boxes in order.
import type { ArticleSection, ArticleBlock, ArticleImage, ArticleHighlight } from '~/data/case-studies/types'

defineProps<{
  section: ArticleSection
  imageBase: string // folder the section's photo file names live in
}>()

const isImage = (b: ArticleBlock): b is { image: ArticleImage } => typeof b === 'object' && 'image' in b
const isHighlight = (b: ArticleBlock): b is { highlight: ArticleHighlight } => typeof b === 'object' && 'highlight' in b
const isPlaceholder = (b: ArticleBlock): b is { placeholder: string } => typeof b === 'object' && 'placeholder' in b
</script>

<template>
  <section>
    <SectionLabel class="mb-5">{{ section.label }}</SectionLabel>
    <h2 class="text-[28px] font-medium leading-[1.25] m-0 mb-5">{{ section.heading }}</h2>
    <div class="flex flex-col gap-5">
      <template v-for="(block, b) in section.body" :key="b">
        <figure v-if="isImage(block)" class="m-0">
          <img :src="`${imageBase}/${block.image.src}`" :alt="block.image.alt" class="w-full border border-term-line" loading="lazy">
          <figcaption v-if="block.image.caption" class="font-sans text-[13px] text-term-dim mt-3">{{ block.image.caption }}</figcaption>
        </figure>
        <CaseStudyHighlight v-else-if="isHighlight(block)" :title="block.highlight.title" :items="block.highlight.items" />
        <CaseStudyPlaceholder v-else-if="isPlaceholder(block)" :label="block.placeholder" class="aspect-[16/9]" />
        <p v-else class="font-sans text-[17px] leading-[1.75] text-term-mid m-0">{{ block }}</p>
      </template>
    </div>
  </section>
</template>
