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

usePageSeo({
  title: 'Case studies',
  description: 'How NPTS and student teams build, host, and maintain software for nonprofits, and the difference it makes for the communities they serve.',
})
</script>

<template>
  <div class="hm">
    <!-- Header -->
    <section class="hm-hero" style="padding-bottom: 72px">
      <div class="hm-wrap">
        <div class="hm-label hm-in" style="--d: 0ms">[ Case studies ]</div>
        <h1>
          <span class="line"><span style="--d: 0">Projects built for</span></span>
          <span class="line"><span style="--d: 1">our <em>partners.</em></span></span>
        </h1>
        <p class="sub hm-in" style="--d: 450ms">See how nonprofits save time, reach more people, and keep their software running with NPTS.</p>
      </div>
    </section>

    <!-- Stories -->
    <section class="hm-section" style="padding-top: 0">
      <div class="hm-wrap">
        <div v-reveal class="hm-label">[ Stories ]</div>
        <div class="hm-cases" style="margin-top: 28px">
          <NuxtLink v-for="(s, i) in stories" :key="s.to" v-reveal="i * 140" :to="s.to" class="hm-case">
            <div class="hm-case-img">
              <img v-if="s.image" :src="s.image" :alt="s.imageAlt ?? ''" loading="lazy">
              <CaseStudyPlaceholder v-else label="Picture to be added" :bordered="false" class="w-full h-full" />
            </div>
            <div class="hm-case-body">
              <div class="hm-label">{{ s.partner }}</div>
              <h2 class="hm-case-title">{{ s.title }}</h2>
              <p>{{ s.excerpt }}</p>
              <span class="hm-link">Read the story <span class="arr">→</span></span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Other projects -->
    <section class="hm-section">
      <div class="hm-wrap">
        <div v-reveal class="hm-label">[ More projects ]</div>
        <h2 v-reveal="80" class="hm-h2" style="margin-top: 18px">Other software we <em>support.</em></h2>
        <div class="hm-projects">
          <div v-for="(study, i) in caseStudies" :key="study.slug" v-reveal="i * 100" class="hm-project">
            <div>
              <span class="hm-tag" :class="{ amber: study.status === 'in progress' }">{{ study.status === 'maintenance' ? 'Maintained' : 'In progress' }}</span>
              <h3>{{ study.title }}</h3>
              <a :href="study.partnerUrl" target="_blank" rel="noopener" class="hm-project-partner">{{ study.partner }} ↗</a>
            </div>
            <div>
              <p>{{ study.summary }}</p>
              <a v-if="study.liveUrl" :href="study.liveUrl" target="_blank" rel="noopener" class="hm-link">View live <span class="arr">→</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SponsorBanner />
  </div>
</template>
