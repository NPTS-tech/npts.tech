<script setup lang="ts">
// Top of a case study: back link, label, headline, summary, share buttons, and partner logo.
defineProps<{ title: string; summary: string; partnerName: string; logo?: string }>()
</script>

<template>
  <div class="px-10 pt-[76px] pb-14 border-b border-term-line">
    <NuxtLink to="/case-studies" class="text-[13px] text-term-dim hover:text-term-acc">← All case studies</NuxtLink>
    <div class="flex flex-col md:flex-row md:items-end gap-10 mt-8">
      <div class="flex-1">
        <SectionLabel class="mb-6">Case study · {{ partnerName }}</SectionLabel>
        <h1 class="text-[48px] leading-[1.1] font-medium m-0 mb-6 -tracking-[0.02em] max-w-[26ch] text-pretty">{{ title }}</h1>
        <p class="font-sans text-[19px] leading-[1.6] text-term-mid m-0 max-w-[62ch] text-pretty">{{ summary }}</p>
        <ShareLinks :title="title" class="mt-8" />
      </div>
      <img v-if="logo" :src="logo" :alt="`${partnerName} logo`" class="w-[180px] h-[180px] shrink-0 border border-term-line object-contain">
    </div>
  </div>
</template>
