<template lang="pug">
div.pb-48
  .flex.gap-4
    img.w-16.h-( src="/img/tmp_logo.webp")
    UHorizontalNavigation(:links)
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
    icon: 'i-heroicons-building-library',
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
</script>