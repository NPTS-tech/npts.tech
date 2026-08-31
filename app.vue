<template>
  <div class="min-h-screen bg-term-bg text-term-fg font-sans">
    <NavBar />
    <main>
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'NPTS — Non-Profit Technical Support',
  ogTitle: 'NPTS — Non-Profit Technical Support',
  description: 'Managed hosting, ongoing maintenance, and fractional CTO leadership for community nonprofits — powered by engineering students gaining real production experience.',
  ogDescription: 'Managed hosting, ongoing maintenance, and fractional CTO leadership for community nonprofits — powered by engineering students gaining real production experience.',
  ogImage: '/img/logo_large.png',
  ogUrl: 'https://npts.tech',
  twitterCard: 'summary_large_image',
});
</script>
