<script setup lang="ts">
defineProps<{ label: string }>()

// Partner organizations shown in the scrolling logo strip.
// To add a partner: drop the logo in public/logos/ and add one entry here.
// Logos must have a transparent background; they're all shown as one light monochrome.
// `scale` enlarges square/round logos so they read at the same size as wide wordmarks.
// Leave out `logo` to show the organization's name as text instead.
const partners: { name: string; url: string; logo?: string; scale?: number }[] = [
  { name: 'The Shaken Baby Alliance', logo: '/logos/shaken-baby-alliance.png', url: 'https://shakenbaby.org', scale: 1.55 },
  { name: 'Kids-U', logo: '/logos/kids-u.png', url: 'https://kids-u.org', scale: 1.05 },
  { name: 'March to the Polls', logo: '/logos/march-to-the-polls.png', url: 'https://www.marchtothepolls.org', scale: 1.25 },
  { name: 'The Warren Center', logo: '/logos/the-warren-center.svg', url: 'https://thewarrencenter.org' },
  { name: 'UTDesign EPICS', logo: '/logos/utdesign-epics.png', url: 'https://epics.utdallas.edu', scale: 1.45 },
  { name: "Carson's Village", logo: '/logos/carsons-village.png', url: 'https://carsonsvillage.org', scale: 1.4 },
]

// Logo height (px) before `scale` is applied.
const LOGO_HEIGHT = 36

// The strip animates to -50%, so it needs two identical halves.
// Each half repeats the list enough times to fill a wide screen.
const COPIES_PER_HALF = 3
const marqueeCopies = COPIES_PER_HALF * 2
</script>

<template>
  <div class="flex items-center gap-4 md:gap-10 px-10 py-6">
    <div class="text-[11px] tracking-[0.14em] uppercase text-term-dim shrink-0 w-24 md:w-auto">{{ label }}</div>
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
