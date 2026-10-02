<script setup lang="ts">
import { stories } from '~/data/stories'

// Project summaries, built only from facts we have on record for each project.
// To add one, add an object here.
type Status = 'in progress' | 'maintenance'
const caseStudies: {
  slug: string
  title: string
  partner: string
  partnerUrl: string
  summary: string
  status: Status
  liveUrl?: string
}[] = [
  {
    slug: 'cope-text-support',
    title: 'COPE Text Support',
    partner: 'The Shaken Baby Alliance',
    partnerUrl: 'https://shakenbaby.org',
    summary: "An admin portal for the Alliance's text-message support line for caregivers. Staff use it to manage caregivers, message workflows, and reports.",
    status: 'in progress',
  },
  {
    slug: 'kids-u-reporting',
    title: 'Kids-U Reporting',
    partner: 'Kids-U',
    partnerUrl: 'https://kids-u.org',
    summary: "A database and reporting system, now running as Kids-U's internal staff site.",
    status: 'maintenance',
  },
  {
    slug: 'warren-center-inventory',
    title: 'Warren Center Inventory',
    partner: 'The Warren Center',
    partnerUrl: 'https://thewarrencenter.org',
    summary: 'Inventory tracking with secure email sign-in.',
    status: 'maintenance',
    liveUrl: 'https://twci.npts.tech',
  },
]
</script>

<template>
  <div class="bg-term-bg text-term-fg font-mono">
    <div class="px-10 pt-[76px] pb-14 border-b border-term-line">
      <div class="text-[13px] text-term-acc tracking-[0.1em] mb-6">[ CASE STUDIES ]</div>
      <h1 class="text-[52px] leading-[1.08] font-medium m-0 mb-6 -tracking-[0.02em] max-w-[24ch] text-pretty">Projects built for our partners.</h1>
      <p class="font-sans text-[19px] leading-[1.6] text-term-mid m-0 max-w-[62ch] text-pretty">Bespoke solutions built for nonprofit partners through experiential learning programs, and the hosting and support that keeps them running.</p>
    </div>
    <div class="px-10 py-[68px] border-b border-term-line">
      <div class="text-[13px] text-term-acc tracking-[0.1em] mb-8">[ STORIES ]</div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <NuxtLink
          v-for="story in stories"
          :key="story.to"
          :to="story.to"
          class="group border border-term-line bg-term-card hover:border-term-acc flex flex-col"
        >
          <img :src="story.image" :alt="story.imageAlt" class="w-full aspect-[16/9] object-cover border-b border-term-line" loading="lazy">
          <div class="px-7 py-6 flex flex-col flex-1">
            <div class="text-xs text-term-dim mb-3">{{ story.partner }}</div>
            <h2 class="text-[21px] font-medium leading-[1.3] m-0 mb-3">{{ story.title }}</h2>
            <p class="font-sans text-sm leading-[1.65] text-term-mid m-0 mb-5">{{ story.excerpt }}</p>
            <span class="mt-auto self-start text-[13px] text-term-acc border-b border-term-acc/40">Read the case study →</span>
          </div>
        </NuxtLink>
      </div>
    </div>
    <div class="px-10 py-[68px] border-b border-term-line">
      <div class="text-[13px] text-term-acc tracking-[0.1em] mb-8">[ PROJECTS ]</div>
      <div class="border border-term-line">
        <div
          v-for="(study, i) in caseStudies"
          :key="study.slug"
          class="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-6 md:gap-16 px-8 py-9"
          :class="{ 'border-t border-term-line': i > 0 }"
        >
          <div>
            <div class="flex items-baseline gap-4 mb-3">
              <div class="text-xs text-term-dim">./{{ study.slug }}</div>
              <div class="text-xs whitespace-nowrap" :class="study.status === 'maintenance' ? 'text-term-acc' : 'text-term-warn'">{{ study.status }}</div>
            </div>
            <h2 class="text-[26px] font-medium leading-[1.25] m-0 mb-2">{{ study.title }}</h2>
            <a :href="study.partnerUrl" target="_blank" rel="noopener" class="text-sm font-semibold text-term-mid hover:text-term-acc">{{ study.partner }}</a>
          </div>
          <div>
            <p class="font-sans text-base leading-[1.65] text-term-mid m-0">{{ study.summary }}</p>
            <a
              v-if="study.liveUrl"
              :href="study.liveUrl"
              target="_blank"
              rel="noopener"
              class="inline-block mt-5 text-[13px] text-term-acc border-b border-term-acc/40"
            >view live →</a>
          </div>
        </div>
      </div>
    </div>
    <SponsorBanner />
  </div>
</template>
