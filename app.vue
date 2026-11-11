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
  title: 'Non-Profit Technical Support',
  ogTitle: 'Non-Profit Technical Support',
  description: 'Providing technical support for non-profit organizations.',
  ogDescription: 'Providing technical support for non-profit organizations.',
  ogImage: '/img/logo_large.png',
  ogUrl: 'https://npts.tech',
});
</script>
