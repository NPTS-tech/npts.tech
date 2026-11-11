<script setup lang="ts">
// "Why it matters" block: a heading, intro, and numbered steps, ending with a link to the partners page.
defineProps<{
  heading: string
  intro: string
  steps: { title: string; body: string }[]
  closing?: string
}>()
</script>

<template>
  <div class="px-10 py-[68px] border-b border-term-line">
    <div class="max-w-[1100px] mx-auto">
      <SectionLabel class="mb-5">Why it matters</SectionLabel>
      <h2 class="text-[28px] font-medium leading-[1.25] m-0 mb-5 max-w-[36ch]">{{ heading }}</h2>
      <p class="font-sans text-[17px] leading-[1.75] text-term-mid m-0 mb-10 max-w-[72ch]">{{ intro }}</p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-px bg-term-line border border-term-line mb-10">
        <div v-for="(step, i) in steps" :key="i" class="bg-term-bg px-7 py-7">
          <div class="text-term-acc text-[22px] mb-3">{{ String(i + 1).padStart(2, '0') }}</div>
          <h3 class="m-0 mb-2 text-[17px] font-semibold">{{ step.title }}</h3>
          <p class="font-sans m-0 text-[15px] leading-[1.6] text-term-mid">{{ step.body }}</p>
        </div>
      </div>
      <p class="font-sans text-[15px] leading-[1.7] text-term-mid m-0 max-w-[72ch]">
        <template v-if="closing">{{ closing }} </template>
        <NuxtLink to="/partners" class="text-term-acc border-b border-term-acc/40">See all partners →</NuxtLink>
      </p>
    </div>
  </div>
</template>
