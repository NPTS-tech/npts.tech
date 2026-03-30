<template>
  <main class="flex flex-col gap-10 pb-10 px-4 mx-auto max-w-4xl mt-10">
    <div>
      <h1 class="text-3xl font-bold text-terminal-accent">
        [ Support NPTS ]
      </h1>
    </div>
    <div class="max-w-3xl text-lg leading-relaxed space-y-4">
      <p>> Your donation helps us provide reliable technical infrastructure to non-profits and cultivate the next generation of engineering talent. </p>
    </div>
    
    <div class="flex mt-8">
      <a
        :href="config.public.stripeDonationLink"
        target="_blank"
        class="border-2 border-terminal-accent text-terminal-accent px-8 py-4 text-lg hover:bg-terminal-accent hover:text-terminal-bg font-bold uppercase tracking-widest transition-all inline-flex items-center gap-2 shadow-[0_0_10px_#A77B4E] hover:shadow-[0_0_20px_#A77B4E] hover:scale-105"
      >
        <span>> EXECUTE_DONATION</span>
        <span class="animate-blink">_</span>
      </a>
    </div>

    <div class="mt-16 max-w-2xl border-t border-terminal-dark pt-4">
      <p class="text-sm text-terminal-dark">// NPTS is a 501(c)(3) non-profit organization.</p>
      <p class="text-sm text-terminal-dark">// All donations are securely processed through Stripe.</p>
    </div>
  </main>
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