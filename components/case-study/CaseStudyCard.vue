<script setup lang="ts">
// Preview card linking to a case study.
// "stacked": photo on top (Case studies page). "side": photo on the left (Partners page).
import type { Story } from '~/data/stories'

withDefaults(defineProps<{ story: Story; layout?: 'stacked' | 'side' }>(), { layout: 'stacked' })
</script>

<template>
  <NuxtLink
    :to="story.to"
    class="border border-term-line bg-term-card hover:border-term-acc"
    :class="layout === 'side' ? 'grid grid-cols-1 md:grid-cols-[1fr_1.2fr]' : 'group flex flex-col'"
  >
    <img
      v-if="story.image"
      :src="story.image"
      :alt="story.imageAlt"
      class="w-full object-cover border-term-line"
      :class="layout === 'side' ? 'h-full min-h-[200px] border-b md:border-b-0 md:border-r' : 'aspect-[16/9] border-b'"
      loading="lazy"
    >
    <CaseStudyPlaceholder
      v-else
      label="Picture to be added"
      :bordered="false"
      class="w-full border-term-line"
      :class="layout === 'side' ? 'h-full min-h-[200px] border-b md:border-b-0 md:border-r' : 'aspect-[16/9] border-b'"
    />
    <div class="px-7 py-6 flex flex-col" :class="{ 'flex-1': layout === 'stacked' }">
      <div class="text-xs text-term-dim mb-3">{{ story.partner }}</div>
      <h2 v-if="layout === 'stacked'" class="text-[21px] font-medium leading-[1.3] m-0 mb-3">{{ story.title }}</h2>
      <h3 v-else class="text-[17px] md:text-[19px] font-medium leading-[1.3] m-0 mb-3">{{ story.title }}</h3>
      <p class="font-sans text-sm leading-[1.65] text-term-mid m-0 mb-5">{{ story.excerpt }}</p>
      <span class="mt-auto self-start text-[13px] text-term-acc border-b border-term-acc/40">Read the case study →</span>
    </div>
  </NuxtLink>
</template>
