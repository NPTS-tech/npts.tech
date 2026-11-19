<script setup lang="ts">
// Before/after comparison: drag the handle (or use arrow keys) to compare two images.
// It sweeps across once on its own the first time it scrolls into view, to show it can be dragged.
const props = defineProps<{ before: string; after: string; beforeLabel: string; afterLabel: string; alt: string }>()
const pos = ref(50)
const root = ref<HTMLElement | null>(null)
let demoed = false

onMounted(() => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || !root.value) return
  const io = new IntersectionObserver(([e]) => {
    if (!e.isIntersecting || demoed) return
    demoed = true
    io.disconnect()
    const frames = [50, 82, 18, 50]
    const start = performance.now(), dur = 2600
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur)
      const seg = Math.min(frames.length - 2, Math.floor(p * (frames.length - 1)))
      const local = p * (frames.length - 1) - seg
      const ease = local < .5 ? 2 * local * local : 1 - Math.pow(-2 * local + 2, 2) / 2
      pos.value = frames[seg] + (frames[seg + 1] - frames[seg]) * ease
      if (p < 1) requestAnimationFrame(tick)
    }
    setTimeout(() => requestAnimationFrame(tick), 400)
  }, { threshold: 0.6 })
  io.observe(root.value)
})
</script>

<template>
  <div ref="root" class="hm-ba" :style="{ '--pos': `${pos}%` }">
    <img :src="props.before" :alt="`Before: ${props.alt}`" loading="lazy">
    <img class="hm-ba-after" :src="props.after" :alt="`After: ${props.alt}`" loading="lazy">
    <span class="hm-ba-tag" style="left: 12px">{{ beforeLabel }}</span>
    <span class="hm-ba-tag is-after" style="right: 12px">{{ afterLabel }}</span>
    <div class="hm-ba-line" aria-hidden="true"><span>◂ ▸</span></div>
    <input v-model.number="pos" type="range" min="0" max="100" step="0.5" aria-label="Drag to compare before and after">
  </div>
</template>
