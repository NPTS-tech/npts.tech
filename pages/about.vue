<template>
  <div class="bg-term-bg text-term-fg font-mono">
    <div class="px-10 pt-[76px] pb-14 border-b border-term-line">
      <div class="text-base text-term-acc tracking-[0.1em] mb-6">[ ABOUT ]</div>
      <h1 class="text-[52px] leading-[1.08] font-medium m-0 mb-6 -tracking-[0.02em] max-w-[26ch] text-pretty">Investing in the next generation of engineers.</h1>
      <p class="font-sans text-[19px] leading-[1.6] text-term-mid m-0 max-w-[64ch] text-pretty">Non-Profit Technical Support (NPTS) works alongside experiential learning programs that build bespoke solutions for nonprofits.</p>
    </div>
    <div class="px-10 py-[68px] border-b border-term-line grid grid-cols-2 gap-16">
      <div>
        <div class="text-base text-term-acc tracking-[0.1em] mb-6">[ OUR MISSION ]</div>
        <p class="font-sans text-base leading-[1.7] text-term-mid m-0">The mission of NPTS is to invest in the next generation of engineers through integration with experiential learning programs building bespoke solutions for other non-profits, to provide hosting and support of those projects, and to provide volunteer programs and internships to students of those programs.</p>
      </div>
      <div>
        <div class="text-base text-term-acc tracking-[0.1em] mb-6">[ OUR STORY ]</div>
        <p class="font-sans text-base leading-[1.7] text-term-mid m-0 mb-4">NPTS has legally existed for a while. Our long-term support program acquires new partners every semester through our relationship with the <a href="https://epics.utdallas.edu" class="text-term-acc border-b border-term-acc/40">UTDesign EPICS</a> program, and most of our volunteers came up through that program.</p>
        <p class="font-sans text-base leading-[1.7] text-term-mid m-0">We've only recently begun building a donor base and branching out into our other planned programs.</p>
      </div>
    </div>
    <div class="px-10 py-[68px] border-b border-term-line">
      <div class="text-base text-term-acc tracking-[0.1em] mb-8">[ HOW WE HELP NONPROFITS ]</div>
      <div class="grid grid-cols-3 gap-px bg-term-line border border-term-line">
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
    <div class="grid grid-cols-3 border-b border-term-line">
      <div class="px-10 py-12 border-r border-term-line">
        <h3 class="text-[21px] font-medium m-0 mb-3">Have an EPICS project</h3>
        <p class="font-sans text-sm leading-[1.65] text-term-mid m-0 mb-5">We provide hosting and long-term support for projects built by experiential learning programs.</p>
        <NuxtLink to="/support" class="text-[13px] text-term-acc border-b border-term-acc/40">Get in touch →</NuxtLink>
      </div>
      <div class="px-10 py-12 border-r border-term-line">
        <h3 class="text-[21px] font-medium m-0 mb-3">Want to volunteer</h3>
        <p class="font-sans text-sm leading-[1.65] text-term-mid m-0 mb-5">Volunteer programs and internships for students of the programs we work with.</p>
        <NuxtLink to="/careers" class="text-[13px] text-term-acc border-b border-term-acc/40">Get involved →</NuxtLink>
      </div>
      <div class="px-10 py-12">
        <h3 class="text-[21px] font-medium m-0 mb-3">Want to support us</h3>
        <p class="font-sans text-sm leading-[1.65] text-term-mid m-0 mb-5">Sponsorship keeps student-built tools running for nonprofits after the semester ends.</p>
        <NuxtLink to="/donate" class="text-[13px] text-term-acc border-b border-term-acc/40">Support NPTS →</NuxtLink>
      </div>
    </div>
    <SponsorBanner />
  </div>
</template>
