<script setup lang="ts">
// "Who are you?" menu: sends each kind of visitor to the page meant for them.
const audiences = [
  { label: "I'm a nonprofit", hint: 'Keep your software running', to: '/programs' },
  { label: "I'm a student", hint: 'Volunteer or intern with us', to: '/careers#interest-form' },
  { label: "I'm a sponsor or donor", hint: 'Support our work', to: '/donate' },
]

const open = ref(false)
const menu = ref<HTMLElement | null>(null)
const route = useRoute()

watch(() => route.fullPath, () => { open.value = false })

function onDocClick(e: MouseEvent) {
  if (open.value && menu.value && !menu.value.contains(e.target as Node)) open.value = false
}
function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape') open.value = false
}
onMounted(() => {
  document.addEventListener('click', onDocClick)
  document.addEventListener('keydown', onKey)
})
onBeforeUnmount(() => {
  document.removeEventListener('click', onDocClick)
  document.removeEventListener('keydown', onKey)
})
</script>

<template>
  <nav class="flex items-center justify-between px-10 py-[18px] border-b border-term-line bg-term-bg text-term-fg font-mono relative z-20">
    <NuxtLink to="/" class="flex items-baseline gap-[2px]">
      <span class="text-term-acc font-semibold">npts</span><span class="text-term-dim">.tech</span>
    </NuxtLink>
    <div class="flex items-center gap-7 text-[13px] text-term-mid">
      <NuxtLink to="/" class="hover:text-term-acc">home</NuxtLink>
      <div ref="menu" class="relative">
        <button
          type="button"
          class="flex items-center gap-1 hover:text-term-acc"
          :class="{ 'text-term-acc': open }"
          :aria-expanded="open"
          aria-haspopup="true"
          @click="open = !open"
        >
          who are you? <span class="text-[10px]">{{ open ? '▲' : '▼' }}</span>
        </button>
        <div
          v-if="open"
          class="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[260px] border border-term-line bg-term-card shadow-lg"
        >
          <NuxtLink
            v-for="a in audiences"
            :key="a.to"
            :to="a.to"
            class="block px-5 py-4 border-b border-term-line last:border-b-0 hover:bg-term-bg group"
          >
            <div class="text-[13px] text-term-fg group-hover:text-term-acc">{{ a.label }}</div>
            <div class="font-sans text-xs text-term-dim mt-1">{{ a.hint }} →</div>
          </NuxtLink>
        </div>
      </div>
      <NuxtLink to="/programs" class="hover:text-term-acc">programs</NuxtLink>
      <NuxtLink to="/partners" class="hover:text-term-acc">partners</NuxtLink>
      <NuxtLink to="/case-studies" class="hover:text-term-acc">case studies</NuxtLink>
      <NuxtLink to="/about" class="hover:text-term-acc">about</NuxtLink>
    </div>
    <div class="flex items-center gap-[10px]">
      <NuxtLink to="/support" class="text-[13px] text-term-mid border border-term-rule px-[14px] py-[9px] hover:border-term-acc hover:text-term-acc">Request support</NuxtLink>
      <NuxtLink to="/donate" class="text-[13px] font-semibold text-term-bg bg-term-acc px-[15px] py-[10px] hover:bg-term-accHi">Donate</NuxtLink>
    </div>
  </nav>
</template>
