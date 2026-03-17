<template lang="pug">
main.flex.flex-col.gap-10.pb-10.px-4.mx-auto.max-w-4xl.mt-10
  h1.text-4xl.text-center.font-bold Support NPTS
  .text-center.max-w-3xl.mx-auto.text-lg.leading-relaxed
    p Your donation helps us provide reliable technical infrastructure to non-profits and cultivate the next generation of engineering talent. 
  
  .flex.justify-center.mt-8
    UButton(
      :to="config.public.stripeDonationLink"
      target="_blank"
      size="xl"
      color="primary"
      icon="i-heroicons-heart"
      class="px-8 py-4 text-lg"
    ) Donate via Stripe

  .mt-16.text-center.max-w-2xl.mx-auto
    p.text-sm.text-gray-400 NPTS is a 501(c)(3) non-profit organization. All donations are securely processed through Stripe.
</template>

<script setup lang="ts">
const config = useRuntimeConfig()

useSeoMeta({
  title: 'Donate - Non-Profit Technical Support',
  ogTitle: 'Donate - Non-Profit Technical Support',
  description: 'Support NPTS in empowering non-profits with reliable technical infrastructure.',
  ogDescription: 'Support NPTS in empowering non-profits with reliable technical infrastructure.'
})
</script>