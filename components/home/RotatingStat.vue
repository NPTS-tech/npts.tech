<script setup lang="ts">
// A hero stat card that flips through a few numbers every few seconds.
// Pauses while hovered, and doesn't rotate at all for visitors who've turned on "reduce motion".
// Screen readers get the full list instead of the rotation.
const props = withDefaults(defineProps<{
  label: string
  items: { value: string; caption: string }[]
  interval?: number // ms between flips
  offset?: number // ms before the first flip, so cards don't all flip at once
}>(), { interval: 4500, offset: 0 })

const i = ref(0)
const paused = ref(false)
let timer: ReturnType<typeof setInterval> | undefined
let start: ReturnType<typeof setTimeout> | undefined

onMounted(() => {
  if (props.items.length < 2 || matchMedia('(prefers-reduced-motion: reduce)').matches) return
  start = setTimeout(() => {
    timer = setInterval(() => {
      if (!paused.value && !document.hidden) i.value = (i.value + 1) % props.items.length
    }, props.interval)
  }, props.offset)
})
onBeforeUnmount(() => { clearTimeout(start); clearInterval(timer) })
</script>

<template>
  <div class="hm-chip hm-rot" @mouseenter="paused = true" @mouseleave="paused = false">
    <div class="hm-rot-label">{{ label }}</div>
    <div class="hm-rot-stage" aria-hidden="true">
      <Transition name="hm-flip" mode="out-in">
        <div :key="i">
          <b>{{ items[i].value }}</b>
          <span>{{ items[i].caption }}</span>
        </div>
      </Transition>
    </div>
    <div v-if="items.length > 1" class="hm-rot-dots" aria-hidden="true">
      <i v-for="(x, n) in items" :key="n" :class="{ on: n === i }" />
    </div>
    <ul class="sr-only">
      <li v-for="x in items" :key="x.value">{{ x.value }} {{ x.caption }}</li>
    </ul>
  </div>
</template>
