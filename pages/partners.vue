<template lang="pug">
Content
  template(#title)
    | Partners
  template(#content)
    .grid.grid-cols-1.gap-5(class="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4")
      .flex.flex-col.gap-5(v-for="partner, i in partners" :key="i" :partner)
        img.h-36.self-center.object-contain(:src="partner.logo")
        .self-center.grow {{partner.name}}
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