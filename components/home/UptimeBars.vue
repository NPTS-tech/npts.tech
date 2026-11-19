<script setup lang="ts">
// 90 days of uptime as bars that grow in one after another. 99.96% is about 52 minutes down, shown as one lighter day.
withDefaults(defineProps<{ count?: number; dip?: number }>(), { count: 45, dip: 27 })
</script>

<template>
  <div class="hm-bars" aria-hidden="true">
    <i v-for="i in count" :key="i" :class="{ dip: i === dip }" :style="{ '--i': i }" />
  </div>
</template>
