<script setup lang="ts">
// A number that counts up the first time it scrolls into view.
// The page is generated with the final number, so search engines and no-JavaScript visitors see it.
const props = defineProps<{ value: number; decimals?: number; prefix?: string; suffix?: string; duration?: number }>()
const el = ref<HTMLElement | null>(null)
const shown = ref(props.value)
const text = computed(() => (props.prefix ?? '') + shown.value.toLocaleString('en-US', { minimumFractionDigits: props.decimals ?? 0, maximumFractionDigits: props.decimals ?? 0 }) + (props.suffix ?? ''))

onMounted(() => {
  if (!el.value || matchMedia('(prefers-reduced-motion: reduce)').matches) return
  shown.value = 0
  const io = new IntersectionObserver(([e]) => {
    if (!e.isIntersecting) return
    io.disconnect()
    const start = performance.now(), dur = props.duration ?? 1600
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur)
      shown.value = props.value * (1 - Math.pow(1 - p, 4))
      if (p < 1) requestAnimationFrame(tick)
      else shown.value = props.value
    }
    requestAnimationFrame(tick)
  }, { threshold: 0.6 })
  io.observe(el.value)
})
</script>

<template>
  <span ref="el" class="tabular-nums">{{ text }}</span>
</template>
