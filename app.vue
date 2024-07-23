<template lang="pug">
div.pb-48
  .flex.gap-4.justify-between
    img.w-16.h-(src="/img/logo.webp")
    UHorizontalNavigation.hidden(:links class="sm:block")
    UPopover.self-center.mr-4(class="sm:hidden")
      UButton(color='white' trailing-icon="i-heroicons-bars-3")
      template(#panel)
        UVerticalNavigation(:links)
  NuxtPage
</template>
<script setup lang="ts">

const links = ref([
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to:'/'
  },
  {
    label: 'Our Story',
    icon: 'i-heroicons-book-open',
    to:'/story'
  },
  {
    label: 'Programs',
    icon: 'i-heroicons-academic-cap',
    to:'/programs'
  },
  {
    label: 'Partners',
    icon: 'i-heroicons-globe-europe-africa',
    to:'/partners'
  },
  // {
  //   label: 'Donors',
  //   to:'/donors'
  // },
  {
    label: 'Contact',
    icon: 'i-heroicons-phone',
    to:'/contact'
  },
])

useSeoMeta({
  title: 'Non-Profit Technical Support',
  ogTitle: 'Non-Profit Technical Support',
  description: 'Providing technical support for non-profit organizations.',
  ogDescription: 'Providing technical support for non-profit organizations.',
  ogImage: '/img/logo_large.png',
  ogUrl: 'https://npts.tech',
})
</script>