<script setup lang="ts">
// Sources line at the end of a case study, with a link to the partner's website.
const props = defineProps<{ sources?: string; partnerName: string; partnerUrl?: string }>()

const partnerHost = computed(() => props.partnerUrl?.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, ''))
</script>

<template>
  <div class="px-5 md:px-10 py-10 border-b border-term-line">
    <div class="max-w-[72ch] mx-auto font-sans text-[13px] leading-[1.7] text-term-dim">
      <template v-if="sources">{{ sources }} </template>
      <template v-if="partnerUrl">
        Learn more about {{ partnerName }} or support its work at
        <a :href="partnerUrl" target="_blank" rel="noopener" class="text-term-mid border-b border-term-rule hover:text-term-acc">{{ partnerHost }}</a>.
      </template>
    </div>
  </div>
</template>
