<template>
  <main class="pt-4 space-y-12">
    <!-- Experiential Learning Partners Section -->
    <section class="border-2 border-terminal-dark p-6 max-w-4xl mx-auto">
      <h2 class="text-2xl font-bold text-terminal-accent mb-6">[ Experiential Learning Partners ]</h2>
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div class="flex flex-col gap-4" v-for="(partner, i) in learningPartners" :key="i">
          <a class="flex flex-col items-center h-full group" :href="partner.website" target="_blank">
            <div class="h-36 flex items-center justify-center w-full p-4 border border-terminal-dark bg-white transition-colors duration-300 hover:border-terminal-accent">
              <img class="max-h-full max-w-full object-contain" :src="partner.logo" :alt="partner.name" />
            </div>
            <div class="text-center mt-4 font-medium text-lg text-terminal-light">> {{ partner.name }}</div>
          </a>
        </div>
      </div>
    </section>

    <!-- Non-Profit Partners Section -->
    <section class="border-2 border-terminal-dark p-6 max-w-4xl mx-auto">
      <h2 class="text-2xl font-bold text-terminal-accent mb-6">[ Non-Profit Partners ]</h2>
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div class="flex flex-col gap-4" v-for="(partner, i) in nonProfitPartners" :key="i">
          <a class="flex flex-col items-center h-full group" :href="partner.website" target="_blank">
            <div class="h-36 flex items-center justify-center w-full p-4 border border-terminal-dark bg-white transition-colors duration-300 hover:border-terminal-accent">
              <img class="max-h-full max-w-full object-contain" :src="partner.logo" :alt="partner.name" />
            </div>
            <div class="text-center mt-4 font-medium text-lg text-terminal-light">> {{ partner.name }}</div>
          </a>
        </div>
      </div>
    </section>
  </main>
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