<script setup lang="ts">
// Box marking where a photo or demo screenshot will go, e.g. "Picture to be added".
// `bordered: false` drops the dashed outline when the box sits inside something that already has one.
withDefaults(defineProps<{ label: string; bordered?: boolean }>(), { bordered: true })
</script>

<template>
  <div
    class="bg-term-deep flex items-center justify-center text-[13px] text-term-dim tracking-[0.1em] uppercase"
    :class="{ 'border border-dashed border-term-rule': bordered }"
  >
    [ {{ label }} ]
  </div>
</template>
