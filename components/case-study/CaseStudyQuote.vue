<script setup lang="ts">
// The partner quote near the top of a case study.
defineProps<{ text: string; author: string }>()
</script>

<template>
  <div class="px-5 md:px-10 py-12 md:py-[60px] border-b border-term-line bg-term-deep">
    <figure class="max-w-[72ch] mx-auto m-0">
      <blockquote class="m-0 text-[20px] md:text-[24px] leading-[1.45] font-medium text-term-fg text-pretty">“{{ text }}”</blockquote>
      <figcaption class="font-sans text-[15px] text-term-mid mt-6">{{ author }}</figcaption>
    </figure>
  </div>
</template>
