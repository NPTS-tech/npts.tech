<template lang="pug">
main.flex.flex-col.gap-5
  .relative
    img.filter.blur-sm.mx-auto.max-h-96(src="/img/stock_hero.webp" fit="fill")
    .absolute.-bottom-4.bg-gradient-to-b.from-transparent.to-black.text-lg.w-full(class="h-full sm:h-3/4")
      .text-center.text-strong.text-lg.mt-20(class="sm:mt-24 sm:text-4xl") Non-Profit Technical Support
      .text-center.text-strong.text-4xs(class="sm:mt-4") Technology for community service
  .grid.grid-cols-1.gap-5.mt-4.px-4(class="md:grid-cols-3")
    UCard(class="basis-1/3")
      template(#header)
        p.text-center.text-strong.text-lg Experiential Learning
      p.text-center NPTS works with experiential learning programs to provide project management and technical guidance
    UCard(class="basis-1/3")
      template(#header)
        p.text-center.text-strong.text-lg Technical Consulting
      p.text-center NPTS works with non profits to provide technical solutions support for partners
    UCard(class="basis-1/3")
      template(#header)
        p.text-center.text-strong.text-lg Community Workshops
      p.text-center NPTS works with makerspaces and hobbyist organizations to provide support for prototyping and project ideation

</template>
