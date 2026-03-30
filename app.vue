<template>
  <div class="min-h-screen p-4 sm:p-8 relative z-10">
    <div class="max-w-4xl mx-auto">
      <header class="mb-12 border-b-2 border-terminal-dark pb-6 flex flex-col gap-6">
        <div class="flex items-center gap-6">
          <img class="w-16 h-16" src="/img/logo.webp" alt="NPTS Logo" />
          <div>
            <h1 class="text-2xl font-bold text-terminal-accent">npts.tech</h1>
            <p class="text-sm opacity-80">root@npts:~$ ./start.sh</p>
          </div>
        </div>
        <nav class="flex flex-wrap gap-4 text-sm">
          <NuxtLink
            class="hover:text-terminal-light hover:underline text-terminal-text"
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            active-class="text-terminal-accent font-bold"
          >
            [ {{ link.label }} ]
          </NuxtLink>
        </nav>
      </header>
      <main>
        <NuxtPage />
      </main>
    </div>
  </div>
</template>
<script setup lang="ts">

const links = ref([
  {
    label: 'Home',
    to: '/'
  },
  {
    label: 'Our Story',
    to: '/story'
  },
  {
    label: 'Programs',
    to: '/programs'
  },
  {
    label: 'Partners',
    to: '/partners'
  },
  {
    label: 'Donors',
    to: '/donors'
  },
  {
    label: 'Contact',
    to: '/contact'
  },
]);

useSeoMeta({
  title: 'Non-Profit Technical Support',
  ogTitle: 'Non-Profit Technical Support',
  description: 'Providing technical support for non-profit organizations.',
  ogDescription: 'Providing technical support for non-profit organizations.',
  ogImage: '/img/logo_large.png',
  ogUrl: 'https://npts.tech',
});
</script>
