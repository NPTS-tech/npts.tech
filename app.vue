<template lang="pug">
div.pb-48
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
    label: 'Partners',
    to:'/partners'
  },
  {
    label: 'Donors',
    to:'/donors'
  },
  {
    label: 'Contact',
    to:'/contact'
  },
])
</script>