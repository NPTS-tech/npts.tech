<script setup lang="ts">
usePageSeo({
  title: 'About',
  description: 'NPTS was founded in 2024 to host and maintain the software student teams build for nonprofits, and to give students real experience along the way.',
})
</script>

<template>
  <div class="bg-term-bg text-term-fg font-mono">
    <div class="px-5 md:px-10 pt-14 md:pt-[76px] pb-14 border-b border-term-line">
      <div class="text-[13px] md:text-base text-term-acc tracking-[0.1em] mb-6">[ ABOUT ]</div>
      <h1 class="text-[34px] md:text-[52px] leading-[1.08] font-medium m-0 mb-6 -tracking-[0.02em] max-w-[26ch] text-pretty">Investing in the next generation of engineers.</h1>
      <p class="font-sans text-[17px] md:text-[19px] leading-[1.6] text-term-mid m-0 max-w-[64ch] text-pretty">NPTS keeps the software nonprofits depend on running, and gives students real experience along the way.</p>
    </div>
    <div class="px-5 md:px-10 py-14 md:py-[68px] border-b border-term-line grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
      <div>
        <div class="text-[13px] md:text-base text-term-acc tracking-[0.1em] mb-6">[ OUR MISSION ]</div>
        <p class="font-sans text-base leading-[1.7] text-term-mid m-0">The mission of NPTS is to invest in the next generation of engineers through integration with experiential learning programs building bespoke solutions for other non-profits, to provide hosting and support of those projects, and to provide volunteer programs and internships to students of those programs.</p>
      </div>
      <div>
        <div class="text-[13px] md:text-base text-term-acc tracking-[0.1em] mb-6">[ OUR STORY ]</div>
        <p class="font-sans text-base leading-[1.7] text-term-mid m-0 mb-4">NPTS was founded in 2024 by three friends who met through <a href="https://epics.utdallas.edu" class="text-term-acc border-b border-term-acc/40 tap-target">UTDesign EPICS</a>. While mentoring student teams building software for local nonprofits, they saw a gap: once a semester ended, no one was left to host and maintain what the students built. NPTS was created to fill that gap.</p>
        <p class="font-sans text-base leading-[1.7] text-term-mid m-0">Today, we support partner nonprofits across North Texas, and most of our volunteers came up through the same experiential learning programs.</p>
      </div>
    </div>
    <div class="px-5 md:px-10 py-14 md:py-[68px] border-b border-term-line">
      <div class="text-[13px] md:text-base text-term-acc tracking-[0.1em] mb-8">[ HOW WE HELP NONPROFITS ]</div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-px bg-term-line border border-term-line">
        <div class="bg-term-bg px-7 py-6">
          <div class="flex justify-between items-baseline gap-4 mb-2">
            <h4 class="m-0 text-[15px] font-semibold">Application hosting</h4>
          </div>
          <p class="font-sans m-0 text-sm leading-[1.65] text-term-mid">Hosting for custom software built for nonprofits by experiential learning programs such as UTDesign EPICS.</p>
        </div>
        <div class="bg-term-bg px-7 py-6">
          <div class="flex justify-between items-baseline gap-4 mb-2">
            <h4 class="m-0 text-[15px] font-semibold">Long-term support</h4>
          </div>
          <p class="font-sans m-0 text-sm leading-[1.65] text-term-mid">Ongoing maintenance and support after delivery, so each application remains reliable and in use. New partner projects are onboarded each semester.</p>
        </div>
        <div class="bg-term-bg px-7 py-6">
          <div class="flex justify-between items-baseline gap-4 mb-2">
            <h4 class="m-0 text-[15px] font-semibold">Accessible support</h4>
          </div>
          <p class="font-sans m-0 text-sm leading-[1.65] text-term-mid">In-person meetings most weeks, virtual meetings as needed, and email and Discord availability nearly 24/7.</p>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 border-b border-term-line">
      <div class="px-5 md:px-10 py-12 border-b md:border-b-0 md:border-r border-term-line">
        <h3 class="text-[21px] font-medium m-0 mb-3">Run a nonprofit?</h3>
        <p class="font-sans text-sm leading-[1.65] text-term-mid m-0 mb-5">We provide hosting and long-term support for projects built by experiential learning programs.</p>
        <NuxtLink to="/support" class="text-[13px] text-term-acc border-b border-term-acc/40 tap-target">Get in touch →</NuxtLink>
      </div>
      <div class="px-5 md:px-10 py-12 border-b md:border-b-0 md:border-r border-term-line">
        <h3 class="text-[21px] font-medium m-0 mb-3">Want to volunteer?</h3>
        <p class="font-sans text-sm leading-[1.65] text-term-mid m-0 mb-5">Volunteer programs and internships for students of the programs we work with.</p>
        <NuxtLink to="/careers" class="text-[13px] text-term-acc border-b border-term-acc/40 tap-target">Get involved →</NuxtLink>
      </div>
      <div class="px-5 md:px-10 py-12">
        <h3 class="text-[21px] font-medium m-0 mb-3">Want to support us?</h3>
        <p class="font-sans text-sm leading-[1.65] text-term-mid m-0 mb-5">Sponsorship keeps student-built tools running for nonprofits after the semester ends.</p>
        <NuxtLink to="/donate" class="text-[13px] text-term-acc border-b border-term-acc/40 tap-target">Support NPTS →</NuxtLink>
      </div>
    </div>
    <SponsorBanner />
  </div>
</template>
