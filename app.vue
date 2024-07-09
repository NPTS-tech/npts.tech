<template lang="pug">
div.pb-48
  .flex.gap-4.justify-between
    img.w-16.h-(src="/img/logo.png")
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