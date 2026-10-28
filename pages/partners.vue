<script setup lang="ts">
import { stories } from '~/data/stories'

// Supported applications. To add one, add an object here.
type Status = 'in progress' | 'maintenance'
const projects: {
  slug: string
  title: string
  partner: string
  description: string
  status: Status
  liveUrl?: string
}[] = [
  {
    slug: 'support-our-scrubs',
    title: 'Noble Award Nominations',
    partner: 'Support Our Scrubs',
    description: 'Lets the community nominate frontline healthcare and emergency workers for The Noble Award, with a searchable nominee database for reviewers.',
    status: 'in progress',
    liveUrl: 'https://sos-noble-awards.npts.tech',
  },
  {
    slug: 'carsons-village',
    title: 'Family Memorial Pages',
    partner: "Carson's Village",
    description: 'Automates memorial pages for grieving families (obituary, service details, photos, and donations) to ease the load on Advocates and families.',
    status: 'in progress',
    liveUrl: 'https://carsons-village.npts.tech',
  },
  {
    slug: 'kids-u-reporting',
    title: 'Kids-U Reporting',
    partner: 'Kids-U',
    description: "Database and reporting system, now running as Kids-U's internal staff site.",
    status: 'maintenance',
  },
  {
    slug: 'warren-center-inventory',
    title: 'Warren Center Inventory',
    partner: 'The Warren Center',
    description: 'Inventory tracking with secure email sign-in.',
    status: 'maintenance',
    liveUrl: 'https://twci.npts.tech',
  },
  {
    slug: 'cope-text-support',
    title: 'COPE Text Support',
    partner: 'The Shaken Baby Alliance',
    description: "Admin portal for the Alliance's text-message support line for caregivers: manage caregivers, message workflows, and reports.",
    status: 'in progress',
  },
]

// Latest case study, featured in the impact section.
const featuredStories = stories.slice(0, 1)

const maintenanceCount = projects.filter(p => p.status === 'maintenance').length
const inProgressCount = projects.filter(p => p.status === 'in progress').length
</script>

<template>
  <div class="bg-term-bg text-term-fg font-mono">
    <div class="px-10 pt-[76px] pb-14 border-b border-term-line">
      <div class="text-base text-term-acc tracking-[0.1em] mb-6">[ PARTNERS ]</div>
      <h1 class="text-[52px] leading-[1.08] font-medium m-0 mb-6 -tracking-[0.02em] max-w-[24ch] text-pretty">The nonprofits we support.</h1>
      <p class="font-sans text-[19px] leading-[1.6] text-term-mid m-0 max-w-[62ch] text-pretty">Every app here was built for a nonprofit partner, most by UTDesign EPICS student teams. NPTS student interns, guided by volunteers, host and maintain them long after the project ends.</p>
    </div>
    <PartnerMarquee label="Partner organizations" class="border-b border-term-line" />
    <div class="px-10 py-[68px] border-b border-term-line">
      <div class="flex flex-wrap gap-2 items-baseline justify-between mb-8">
        <div class="text-base text-term-acc tracking-[0.1em]">[ OUR WORK ]</div>
        <div class="text-[13px] text-term-dim">{{ projects.length }} total · {{ maintenanceCount }} in maintenance · {{ inProgressCount }} in progress</div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div v-for="project in projects" :key="project.slug" class="flex flex-col border border-term-line bg-term-card px-7 py-6 hover:border-term-acc">
          <div class="flex justify-between items-baseline gap-3 mb-3">
            <div class="text-xs text-term-dim">./{{ project.slug }}</div>
            <div class="text-xs whitespace-nowrap shrink-0" :class="project.status === 'maintenance' ? 'text-term-acc' : 'text-term-warn'">{{ project.status }}</div>
          </div>
          <h3 class="text-[19px] font-medium m-0 mb-3 leading-[1.3]">{{ project.title }}</h3>
          <p class="font-sans text-sm leading-[1.65] text-term-mid m-0 mb-4">{{ project.description }}</p>
          <div class="mt-auto flex justify-between items-baseline gap-3 h-5">
            <div class="text-sm font-semibold text-term-mid">{{ project.partner }}</div>
            <a
              v-if="project.liveUrl"
              :href="project.liveUrl"
              target="_blank"
              rel="noopener"
              class="text-[13px] text-term-acc border-b border-term-acc/40 whitespace-nowrap"
            >view live →</a>
          </div>
        </div>
        <div class="border border-dashed border-term-rule px-7 py-6 flex flex-col justify-center items-start">
          <div class="text-xs text-term-dim mb-3">./your-project</div>
          <h3 class="text-[19px] font-medium m-0 mb-3 leading-[1.3] text-term-mid">This could be your organization</h3>
          <NuxtLink to="/support" class="text-[13px] text-term-acc border-b border-term-acc/40">Request support →</NuxtLink>
        </div>
      </div>
    </div>
    <div class="px-10 py-[68px] border-b border-term-line grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
      <div>
        <div class="text-base text-term-acc tracking-[0.1em] mb-7">[ OUR IMPACT ]</div>
        <h2 class="text-[30px] font-medium leading-[1.2] m-0 mb-5">Read more about our impact.</h2>
        <p class="font-sans text-base leading-[1.65] text-term-mid m-0 mb-6 max-w-[44ch]">See how student-built tools are helping our partners, and what it takes to keep them running.</p>
        <NuxtLink to="/case-studies" class="text-[13px] text-term-acc border-b border-term-acc/40">All case studies →</NuxtLink>
      </div>
      <NuxtLink
        v-for="story in featuredStories"
        :key="story.to"
        :to="story.to"
        class="border border-term-line bg-term-card hover:border-term-acc grid grid-cols-1 md:grid-cols-[1fr_1.2fr]"
      >
        <img :src="story.image" :alt="story.imageAlt" class="w-full h-full min-h-[200px] object-cover border-b md:border-b-0 md:border-r border-term-line" loading="lazy">
        <div class="px-7 py-6 flex flex-col">
          <div class="text-xs text-term-dim mb-3">{{ story.partner }}</div>
          <h3 class="text-[19px] font-medium leading-[1.3] m-0 mb-3">{{ story.title }}</h3>
          <p class="font-sans text-sm leading-[1.65] text-term-mid m-0 mb-5">{{ story.excerpt }}</p>
          <span class="mt-auto self-start text-[13px] text-term-acc border-b border-term-acc/40">Read the case study →</span>
        </div>
      </NuxtLink>
    </div>
    <SponsorBanner />
  </div>
</template>
