<script setup lang="ts">
// Partner organizations shown in the scrolling logo strip.
// To add a partner: drop the logo in public/logos/ and add one entry here.
// Logos must have a transparent background; they're all shown as one light monochrome.
// `scale` enlarges square/round logos so they read at the same size as wide wordmarks.
// Leave out `logo` to show the organization's name as text instead.
const partners: { name: string; url: string; logo?: string; scale?: number }[] = [
  { name: 'The Shaken Baby Alliance', logo: '/logos/shaken-baby-alliance.png', url: 'https://shakenbaby.org', scale: 1.55 },
  { name: 'Kids-U', logo: '/logos/kids-u.png', url: 'https://kids-u.org', scale: 1.05 },
  { name: "Tomorrow's Leaders Today", url: 'https://www.tltleaders.org' },
  { name: 'The Warren Center', logo: '/logos/the-warren-center.svg', url: 'https://thewarrencenter.org' },
  { name: 'UTDesign', logo: '/logos/utdesign.png', url: 'https://utdesign.utdallas.edu' },
]

// Logo height (px) before `scale` is applied.
const LOGO_HEIGHT = 36

// The strip animates to -50%, so it needs two identical halves.
// Each half repeats the list enough times to fill a wide screen.
const COPIES_PER_HALF = 3
const marqueeCopies = COPIES_PER_HALF * 2

// Supported applications. To add one, add an object here.
type Status = 'in progress' | 'maintenance'
type Responsibility = 'Supported by NPTS' | 'Led by EPICS'
const projects: {
  slug: string
  title: string
  partner: string
  description: string
  tech: string
  status: Status
  responsibility: Responsibility
  liveUrl?: string
}[] = [
  {
    slug: 'cope-text-support',
    title: 'COPE Text Support',
    partner: 'The Shaken Baby Alliance',
    description: "Admin portal for the Alliance's text-message support line for caregivers: manage caregivers, message workflows, and reports.",
    tech: 'nuxt · twilio',
    status: 'in progress',
    responsibility: 'Supported by NPTS',
  },
  {
    slug: 'kids-u-reporting',
    title: 'Kids-U Reporting',
    partner: 'Kids-U',
    description: "Database and reporting system, now running as Kids-U's internal staff site.",
    tech: '.net',
    status: 'maintenance',
    responsibility: 'Supported by NPTS',
  },
  {
    slug: 'grant-finder',
    title: 'Grant Finder',
    partner: "Tomorrow's Leaders Today",
    description: 'Pulls grant opportunities from 7+ funding sources into one searchable dashboard, updated weekly.',
    tech: 'next.js · postgres',
    status: 'in progress',
    responsibility: 'Led by EPICS',
  },
  {
    slug: 'warren-center-inventory',
    title: 'Warren Center Inventory',
    partner: 'The Warren Center',
    description: 'Inventory tracking with secure email sign-in.',
    tech: 'nuxt · prisma',
    status: 'maintenance',
    responsibility: 'Supported by NPTS',
    liveUrl: 'https://twci.npts.tech',
  },
  {
    slug: 'utdesign-procurement',
    title: 'UTDesign Procurement',
    partner: 'UTDesign (UT Dallas)',
    description: 'Replaces email-and-spreadsheet purchasing for student teams: request parts, get mentor approval, track reimbursements.',
    tech: 'next.js · mysql',
    status: 'in progress',
    responsibility: 'Supported by NPTS',
  },
]

const maintenanceCount = projects.filter(p => p.status === 'maintenance').length
const inProgressCount = projects.filter(p => p.status === 'in progress').length
</script>

<template>
  <div class="bg-term-bg text-term-fg font-mono">
    <div class="px-10 pt-[76px] pb-14 border-b border-term-line">
      <div class="text-[13px] text-term-acc tracking-[0.1em] mb-6">[ PARTNERS ]</div>
      <h1 class="text-[52px] leading-[1.08] font-medium m-0 mb-6 -tracking-[0.02em] max-w-[24ch] text-pretty">The nonprofits we support.</h1>
      <p class="font-sans text-[19px] leading-[1.6] text-term-mid m-0 max-w-[62ch] text-pretty">Every app here was built for a nonprofit partner, most by UTDesign EPICS student teams. NPTS hosts and maintains them at no cost to keep serving the community.</p>
    </div>
    <div class="flex items-center gap-4 md:gap-10 px-10 py-6 border-b border-term-line">
      <div class="text-[11px] tracking-[0.14em] uppercase text-term-dim shrink-0 w-24 md:w-auto">Partner organizations</div>
      <div class="marquee flex-1 min-w-0 overflow-hidden">
        <div class="marquee-track flex w-max">
          <template v-for="copy in marqueeCopies" :key="copy">
            <a
              v-for="partner in partners"
              :key="`${copy}-${partner.name}`"
              :href="partner.url"
              target="_blank"
              rel="noopener"
              :aria-hidden="copy > 1 ? 'true' : undefined"
              :tabindex="copy > 1 ? -1 : undefined"
              class="partner-tile h-16 w-[160px] md:w-[200px] mr-4 shrink-0 border border-dashed border-term-rule flex items-center justify-center"
            >
              <img
                v-if="partner.logo"
                :src="partner.logo"
                :alt="partner.name"
                class="partner-logo max-w-[80%] object-contain"
                :style="{ height: `${LOGO_HEIGHT * (partner.scale ?? 1)}px` }"
                loading="lazy"
              >
              <span v-else class="partner-logo text-[13px] leading-tight text-center text-term-fg px-3">{{ partner.name }}</span>
            </a>
          </template>
        </div>
      </div>
    </div>
    <div class="px-10 py-[68px] border-b border-term-line">
      <div class="flex flex-wrap gap-2 items-baseline justify-between mb-8">
        <div class="text-[13px] text-term-acc tracking-[0.1em]">[ OUR WORK ]</div>
        <div class="text-[13px] text-term-dim">{{ projects.length }} total · {{ maintenanceCount }} in maintenance · {{ inProgressCount }} in progress</div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div v-for="project in projects" :key="project.slug" class="flex flex-col border border-term-line bg-term-card px-7 py-6 hover:border-term-acc">
          <div class="flex justify-between items-baseline gap-3 mb-3">
            <div class="text-xs text-term-dim">./{{ project.slug }}</div>
            <div class="text-xs whitespace-nowrap shrink-0" :class="project.status === 'maintenance' ? 'text-term-acc' : 'text-term-warn'">{{ project.status }}</div>
          </div>
          <h3 class="text-[19px] font-medium m-0 mb-3 leading-[1.3]">{{ project.title }}</h3>
          <p class="font-sans text-sm leading-[1.65] text-term-mid m-0 mb-3">{{ project.description }}</p>
          <div class="text-xs text-term-dim lowercase mb-4">{{ project.tech }}</div>
          <div class="mt-auto">
            <div class="text-xs text-term-dim">{{ project.partner }}</div>
            <div class="flex justify-between items-baseline gap-3 h-4 mt-1">
              <div class="text-xs text-term-dim">{{ project.responsibility }}</div>
              <a
                v-if="project.liveUrl"
                :href="project.liveUrl"
                target="_blank"
                rel="noopener"
                class="text-[13px] text-term-acc border-b border-term-acc/40 whitespace-nowrap"
              >view live →</a>
            </div>
          </div>
        </div>
        <div class="border border-dashed border-term-rule px-7 py-6 flex flex-col justify-center items-start">
          <div class="text-xs text-term-dim mb-3">./your-project</div>
          <h3 class="text-[19px] font-medium m-0 mb-3 leading-[1.3] text-term-mid">This could be your organization</h3>
          <NuxtLink to="/support" class="text-[13px] text-term-acc border-b border-term-acc/40">Request support →</NuxtLink>
        </div>
      </div>
    </div>
    <div class="px-10 py-[68px] border-b border-term-line grid grid-cols-[1fr_1.1fr] gap-16">
      <div>
        <div class="text-[13px] text-term-acc tracking-[0.1em] mb-7">[ WORK WITH US ]</div>
        <h2 class="text-[30px] font-medium leading-[1.2] m-0 mb-5">Four steps to get started.</h2>
        <p class="font-sans text-base leading-[1.65] text-term-mid m-0 max-w-[44ch]">Most of the work is on our end. You'll know within a week if we're a match.</p>
      </div>
      <div class="border border-term-line">
        <div class="px-7 py-5 border-b border-term-line flex gap-5">
          <span class="text-term-acc">01</span>
          <div class="flex-1"><h4 class="m-0 mb-1 text-[15px] font-semibold">Intro call</h4><p class="font-sans m-0 text-sm leading-[1.6] text-term-mid">30 minutes to talk through your needs.</p></div>
        </div>
        <div class="px-7 py-5 border-b border-term-line flex gap-5">
          <span class="text-term-acc">02</span>
          <div class="flex-1"><h4 class="m-0 mb-1 text-[15px] font-semibold">Technical review</h4><p class="font-sans m-0 text-sm leading-[1.6] text-term-mid">We assess your app, data, and hosting.</p></div>
        </div>
        <div class="px-7 py-5 border-b border-term-line flex gap-5">
          <span class="text-term-acc">03</span>
          <div class="flex-1"><h4 class="m-0 mb-1 text-[15px] font-semibold">Agreement</h4><p class="font-sans m-0 text-sm leading-[1.6] text-term-mid">Clear terms on scope, data, and exit.</p></div>
        </div>
        <div class="px-7 py-5 flex gap-5">
          <span class="text-term-acc">04</span>
          <div class="flex-1"><h4 class="m-0 mb-1 text-[15px] font-semibold">We take it from here</h4><p class="font-sans m-0 text-sm leading-[1.6] text-term-mid">We move your app, test it, and keep it running, usually within two weeks.</p></div>
        </div>
      </div>
    </div>
    <div class="bg-term-acc text-term-bg px-10 py-14 grid grid-cols-[1fr_auto] gap-10 items-center">
      <div>
        <h3 class="text-[30px] font-semibold m-0 mb-3 -tracking-[0.01em]">Does your nonprofit need tech support?</h3>
        <p class="font-sans text-base leading-[1.6] m-0 max-w-[54ch] opacity-80">Limited spots each semester.</p>
      </div>
      <NuxtLink to="/support" class="text-sm font-semibold bg-term-bg text-term-acc px-[22px] py-[14px]">Request support →</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.marquee {
  -webkit-mask-image: linear-gradient(to right, transparent, #000 48px, #000 calc(100% - 48px), transparent);
  mask-image: linear-gradient(to right, transparent, #000 48px, #000 calc(100% - 48px), transparent);
}

.marquee-track {
  animation: marquee-scroll 60s linear infinite;
}

/* One monochrome treatment for every logo so the strip reads as a set. */
.partner-logo {
  opacity: 0.7;
  transition: opacity 300ms ease;
}

img.partner-logo {
  filter: brightness(0) invert(1);
}

.partner-tile:hover .partner-logo,
.partner-tile:focus-visible .partner-logo {
  opacity: 1;
}

.marquee:hover .marquee-track,
.marquee:focus-within .marquee-track {
  animation-play-state: paused;
}

@keyframes marquee-scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@media (prefers-reduced-motion: reduce) {
  .marquee-track {
    animation: none;
  }
}
</style>
