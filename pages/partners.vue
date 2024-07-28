<template lang="pug">
main.pt-4
  UCard(class="w-3/4 mx-auto")
    template(#header)
      .text-center.text-4xl Partners
    //.grid.grid-cols-1.gap-5(class="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4")
    .grid.grid-cols-2.gap-5
      .flex.flex-col.gap-5(v-for="partner, i in partners" :key="i" :partner)
        a.self-center(:href="partner.website", target="_blank")
          img.h-36.self-center.object-contain(:src="partner.logo")
          .self-center.grow.text-center {{ partner.name }}
</template>
<script setup lang="ts">
definePageMeta({ documentDriven: { page: false, } });

const partners = [
  {
    name: "UTD EPICS",
    logo: "/img/partner-logos/epics-logo.webp",
    website: "https://epics.utdallas.edu"
  },
  {
    name: "Warren Center",
    logo: "/img/partner-logos/warren_center.png",
    website: "https://thewarrencenter.org"
  }
];
</script>