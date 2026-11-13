<script setup lang="ts">
// Top of a case study: back link, label, headline, summary, publish date, share buttons, and partner logo.
defineProps<{ title: string; summary: string; date: string; updated?: string; partnerName: string; logo?: string }>()

// '2026-10-01' → 'October 1, 2026'. Read as UTC so the day never shifts with the visitor's time zone.
function formatDate(d: string) {
  return new Date(`${d}T00:00:00Z`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' })
}
</script>

<template>
  <div class="px-5 md:px-10 pt-14 md:pt-[76px] pb-14 border-b border-term-line">
    <NuxtLink to="/case-studies" class="text-[13px] text-term-dim hover:text-term-acc tap-target">← All case studies</NuxtLink>
    <div class="flex flex-col md:flex-row md:items-end gap-10 mt-8">
      <div class="flex-1">
        <SectionLabel class="mb-6">Case study · {{ partnerName }}</SectionLabel>
        <h1 class="text-[32px] md:text-[48px] leading-[1.1] font-medium m-0 mb-6 -tracking-[0.02em] max-w-[26ch] text-pretty">{{ title }}</h1>
        <p class="font-sans text-[17px] md:text-[19px] leading-[1.6] text-term-mid m-0 max-w-[62ch] text-pretty">{{ summary }}</p>
        <p class="text-[13px] text-term-dim m-0 mt-6">
          Published <time :datetime="date">{{ formatDate(date) }}</time>
          <template v-if="updated"> · Updated <time :datetime="updated">{{ formatDate(updated) }}</time></template>
        </p>
        <ShareLinks :title="title" class="mt-6" />
      </div>
      <img v-if="logo" :src="logo" :alt="`${partnerName} logo`" class="w-[120px] h-[120px] md:w-[180px] md:h-[180px] shrink-0 border border-term-line object-contain">
    </div>
  </div>
</template>
