<script setup lang="ts">
// One person on the About page's board section. Data comes from data/team.ts.
import type { TeamMember } from '~/data/team'

const props = defineProps<{ member: TeamMember }>()
const initials = computed(() => props.member.name.split(/\s+/).map(w => w[0]).join('').slice(0, 2).toUpperCase())
</script>

<template>
  <div class="bg-term-bg border border-term-line p-4 md:p-6">
    <img
      v-if="member.photo"
      :src="`/img/team/${member.photo}`"
      :alt="`${member.name}, ${member.title}`"
      loading="lazy"
      class="w-full aspect-square object-cover border border-term-line mb-5"
    >
    <div v-else class="w-full aspect-square border border-term-line bg-term-card mb-5 flex items-center justify-center text-[40px] text-term-acc">{{ initials }}</div>
    <h3 class="m-0 text-[17px] font-semibold">{{ member.name }}</h3>
    <div class="text-[13px] text-term-acc mt-1">{{ member.title }}</div>
    <p v-if="member.bio" class="font-sans m-0 mt-3 text-sm leading-[1.6] text-term-mid">{{ member.bio }}</p>
    <a v-if="member.linkedin" :href="member.linkedin" target="_blank" rel="noopener" class="inline-block mt-3 text-[13px] text-term-acc border-b border-term-acc/40 tap-target">LinkedIn →</a>
  </div>
</template>
