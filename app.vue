<template lang="pug">
div
  .flex.gap-4
    img.w-16.h-( src="/img/tmp_logo.jpg")
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
    label: 'About',
    to:'/about'
  },
  {
    label: 'Programs',
    to:'/programs'
  },
  {
    label: 'Contact',
    to:'/contact'
  },
])
</script>