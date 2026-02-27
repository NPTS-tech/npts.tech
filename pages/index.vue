<template lang="pug">
main.flex.flex-col.gap-10.pb-10
  // Hero Section
  .relative
    img.filter.blur-sm.mx-auto.w-full(src="/img/stock_hero.webp" fit="cover" style="max-height:700px;")
    .absolute.-bottom-4.bg-gradient-to-b.from-transparent.to-black.text-lg.w-full(class="h-full sm:h-3/4")
      .text-center.text-strong.text-lg.mt-20(class="sm:mt-24 sm:text-4xl") Non-Profit Technical Support
      .text-center.text-strong.text-4xs(class="sm:mt-4") Powering your mission.

  // Mission Statement
  section.px-4.mx-auto.max-w-6xl
    h2.text-3xl.text-center.mb-6.font-bold Our Mission
    .text-center.max-w-4xl.mx-auto.text-lg.leading-relaxed
      p At NPTS, our mission is two-fold: empowering non-profits with reliable technical infrastructure and cultivating the next generation of engineering talent. We bridge the gap between technical needs and educational growth, creating a sustainable ecosystem of support and learning.

  // Supporting Other Non Profits
  section.px-4.mx-auto.max-w-6xl
    h2.text-3xl.text-center.mb-6.font-bold Supporting Our Partners
    .grid.grid-cols-1.gap-6(class="md:grid-cols-2")
      UCard
        template(#header)
          p.text-center.text-xl.font-semibold Custom Solutions
        p.text-center We host and support custom software developed by experiential learning programs, ensuring non-profits have the tools they need to succeed. By handling the technical overhead, we allow our partners to focus entirely on their core mission.
      UCard
        template(#header)
          p.text-center.text-xl.font-semibold Accessible SaaS
        p.text-center Beyond bespoke software, we are building a suite of essential SaaS services designed specifically for the non-profit sector. Our goal is to provide high-quality, affordable alternatives to commercial platforms, keeping resources where they belong—in the community.

  // Investing in the Next Generation
  section.px-4.mx-auto.max-w-6xl
    h2.text-3xl.text-center.mb-6.font-bold Future Engineers
    UCard
      .p-4.text-center.space-y-4
        p We believe in learning by doing. NPTS partners with experiential learning organizations to provide students with real-world mentorship and technical guidance.
        p Through internships and volunteer positions, aspiring engineers gain proven track records by working on live partner projects and internal initiatives. We complete the circle by connecting these skilled individuals with companies offering networking and employment opportunities, launching careers while serving the community.
</template>
