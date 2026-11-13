<script setup lang="ts">
// The bar of facts under a case study's headline (Partner, Built by, ...).
import type { ArticleFact } from '~/data/case-studies/types'

const props = defineProps<{ facts: ArticleFact[] }>()

// Divider lines: 2 columns on phones, 1 row on wider screens.
function borders(i: number) {
  const last = i === props.facts.length - 1
  return [
    i % 2 === 0 && !last ? 'border-r' : '',
    !last ? 'md:border-r' : 'md:border-r-0',
    i >= 2 ? 'border-t md:border-t-0' : '',
  ]
}
</script>

<template>
  <div class="grid grid-cols-2 md:grid-cols-4 border-b border-term-line text-[13px]">
    <div v-for="(fact, i) in facts" :key="i" class="px-5 md:px-10 py-6 border-term-line" :class="borders(i)">
      <div class="text-term-dim mb-1">{{ fact.label }}</div>
      <a v-if="fact.url" :href="fact.url" target="_blank" rel="noopener" class="text-term-fg hover:text-term-acc">{{ fact.value }}</a>
      <div v-else :class="fact.highlight ? 'text-term-acc' : 'text-term-fg'">{{ fact.value }}</div>
    </div>
  </div>
</template>
