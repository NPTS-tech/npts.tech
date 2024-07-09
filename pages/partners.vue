<template lang="pug">
Content
  template(#title)
    | Partners
  template(#content)
    .grid.grid-cols-1.gap-5(class="sm:grid-cols-2")
      .flex.gap-5.h-24(v-for="partner, i in partners" :key="i" :partner)
        .self-center.grow {{partner.name}}
        img.self-end.h-full.object-contain(:src="partner.logo")
</template>
<script setup lang="ts">
const partners = [
  {
    name: "UTD EPICS",
    logo: "/img/epics.png"
  },
  {
    name: "",
    logo: ""
  }
]
</script>