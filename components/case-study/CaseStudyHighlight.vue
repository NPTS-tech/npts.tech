<script setup lang="ts">
// Green-bordered box with a short list, e.g. "What NPTS does for HRM".
defineProps<{ title: string; items: string[] }>()
</script>

<template>
  <div class="border border-term-acc bg-term-card px-7 py-6">
    <div class="text-[13px] md:text-base text-term-acc tracking-[0.1em] mb-4 uppercase">{{ title }}</div>
    <div class="grid gap-3">
      <div v-for="(item, n) in items" :key="n" class="flex gap-4">
        <span class="text-term-acc" aria-hidden="true">→</span>
        <span class="font-sans text-[16px] leading-[1.6] text-term-fg flex-1">{{ item }}</span>
      </div>
    </div>
  </div>
</template>
