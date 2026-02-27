<template lang="pug">
main.pt-4.space-y-8
  // Experiential Learning Partners Section
  UCard(class="w-3/4 mx-auto")
    template(#header)
      .text-center.text-3xl.font-semibold Experiential Learning Partners
    .grid.grid-cols-1.gap-8(class="sm:grid-cols-2 lg:grid-cols-3")
      .flex.flex-col.gap-4(v-for="(partner, i) in learningPartners" :key="i")
        a.flex.flex-col.items-center.h-full.group(:href="partner.website" target="_blank")
          .h-36.flex.items-center.justify-center.w-full.p-4.rounded-lg.bg-white.transition-transform.duration-300(class="group-hover:scale-105")
            img.max-h-full.max-w-full.object-contain(:src="partner.logo" :alt="partner.name")
          .text-center.mt-4.font-medium.text-lg {{ partner.name }}

  // Non-Profit Partners Section
  UCard(class="w-3/4 mx-auto")
    template(#header)
      .text-center.text-3xl.font-semibold Non-Profit Partners
    .grid.grid-cols-1.gap-8(class="sm:grid-cols-2 lg:grid-cols-3")
      .flex.flex-col.gap-4(v-for="(partner, i) in nonProfitPartners" :key="i")
        a.flex.flex-col.items-center.h-full.group(:href="partner.website" target="_blank")
          .h-36.flex.items-center.justify-center.w-full.p-4.rounded-lg.bg-white.transition-transform.duration-300(class="group-hover:scale-105")
            img.max-h-full.max-w-full.object-contain(:src="partner.logo" :alt="partner.name")
          .text-center.mt-4.font-medium.text-lg {{ partner.name }}
</template>

<script setup lang="ts">
definePageMeta({ documentDriven: { page: false, } });

const learningPartners = [
  {
    name: "UTDesign® EPICS",
    logo: "/img/partner-logos/epics-logo.webp",
    website: "https://epics.utdallas.edu"
  }
];

const nonProfitPartners = [
  {
    name: "The Warren Center",
    logo: "/img/partner-logos/warren_center.webp",
    website: "https://thewarrencenter.org"
  }
];
</script>
