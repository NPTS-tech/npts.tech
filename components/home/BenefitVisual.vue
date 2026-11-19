<script setup lang="ts">
// The picture or mini dashboard shown for each benefit on the homepage ("What changes" section).
defineProps<{ index: number }>()
</script>

<template>
  <template v-if="index === 0">
  <div class="hm-photo"><img src="/img/case-studies/hope-restored-missions/warehouse.jpg" alt="Donated clothing on racks in the Hope Restored Missions warehouse" loading="lazy"><span class="hm-ba-tag">3,500 garments, once counted by hand</span></div>
  </template>
  <template v-else-if="index === 1">
  <BeforeAfter
    before="/img/case-studies/carsons-village/family-page.jpg"
    after="/img/case-studies/carsons-village/platform-demo.jpg"
    before-label="Before · built by staff"
    after-label="After · any family"
    alt="a Carson’s Village family support page"
  />
  </template>
  <template v-else-if="index === 2">
  <div class="hm-mini">
    <div class="hm-mini-head"><span class="hm-cap">Example · family page</span><span class="hm-live">Live</span></div>
    <div class="hm-big" style="margin-top: 20px">$4,820</div>
    <div class="hm-cap" style="margin-bottom: 16px">of $6,000 goal</div>
    <div class="hm-prog"><i style="--w: 80%" /></div>
    <div class="hm-ch" style="margin-top: 14px"><span>Anonymous</span><span>$250</span></div>
    <div class="hm-ch"><span>A friend</span><span>$100</span></div>
    <div class="hm-ch"><span>Coworkers</span><span>$500</span></div>
  </div>
  </template>
  <template v-else-if="index === 3">
  <div class="hm-mini">
    <div class="hm-mini-head"><span class="hm-cap">Example · impact report</span><span class="hm-cap">This year</span></div>
    <div class="hm-report"><i v-for="(h, n) in [32, 45, 40, 58, 66, 74, 92]" :key="n" :style="{ '--h': `${h}%`, '--n': n }" /></div>
    <div class="hm-ch"><span>Families served</span><span>Exact</span></div>
    <div class="hm-ch"><span>Donations raised</span><span>Exact</span></div>
    <div class="hm-ch"><span>Ready for grant reports</span><span>✓</span></div>
  </div>
  </template>
  <template v-else-if="index === 4">
  <div class="hm-photo"><img src="/img/case-studies/carsons-village/platform-demo.jpg" alt="A family support page on the new Carson’s Village platform" loading="lazy"><span class="hm-ba-tag">A page any family can create</span></div>
  </template>
  <template v-else-if="index === 5">
  <div class="hm-mini">
    <div class="hm-mini-head"><span class="hm-cap">[ Hosting ]</span><span class="hm-live">All systems running</span></div>
    <div class="hm-big" style="margin: 22px 0 18px">99.96%</div>
    <div class="is-in"><UptimeBars :count="40" :dip="24" /></div>
    <div class="hm-cap" style="margin-top: 12px">Uptime · last 90 days</div>
  </div>
  </template>
</template>
