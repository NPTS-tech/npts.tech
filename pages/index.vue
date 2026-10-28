<template>
  <div class="bg-term-bg text-term-fg font-mono">
    <div class="px-10 pt-[104px] pb-[88px] text-center">
      <div class="text-base text-term-acc tracking-[0.1em] mb-7">[ NON-PROFIT TECHNICAL SUPPORT ]</div>
      <h1 class="text-[68px] leading-[1.06] font-medium m-0 mb-7 -tracking-[0.025em] text-pretty">The technical backbone for your nonprofit.</h1>
      <p class="font-sans text-[20px] leading-[1.6] text-term-mid m-0 mx-auto mb-10 max-w-[60ch] text-pretty">NPTS hosts and supports the software your nonprofit relies on, including tools built by student engineering teams, so it keeps working long after launch.</p>
      <div class="flex gap-[14px] justify-center">
        <NuxtLink to="/support" class="text-[15px] font-semibold text-term-bg bg-term-acc px-6 py-4 hover:bg-term-accHi">Get in touch →</NuxtLink>
        <NuxtLink to="/programs" class="text-[15px] text-term-fg border border-term-rule px-6 py-4 hover:border-term-acc">See our programs</NuxtLink>
      </div>
    </div>

    <PartnerMarquee label="Working with" class="border-y border-term-line" />

    <div class="grid grid-cols-1 md:grid-cols-3 border-b border-term-line">
      <div class="px-10 py-9 border-b md:border-b-0 md:border-r border-term-line">
        <div class="text-[40px] leading-none font-medium text-term-acc -tracking-[0.02em]">19</div>
        <div class="font-sans text-[15px] leading-[1.5] text-term-mid mt-3">Apps hosted for nonprofits</div>
      </div>
      <div class="px-10 py-9 border-b md:border-b-0 md:border-r border-term-line">
        <div class="text-[40px] leading-none font-medium text-term-acc -tracking-[0.02em]">63</div>
        <div class="font-sans text-[15px] leading-[1.5] text-term-mid mt-3">Students mentored</div>
      </div>
      <div class="px-10 py-9">
        <div class="text-[40px] leading-none font-medium text-term-acc -tracking-[0.02em]">99.96%</div>
        <div class="font-sans text-[15px] leading-[1.5] text-term-mid mt-3">90-day uptime</div>
      </div>
    </div>

    <div class="px-10 py-[68px]">
      <div class="text-base text-term-acc tracking-[0.1em] mb-[26px]">[ WHAT WE DO ]</div>
      <div class="grid grid-cols-2 gap-px bg-term-line border border-term-line">
        <NuxtLink to="/programs" class="group bg-term-bg hover:bg-term-card px-7 py-[26px] flex flex-col">
          <div class="flex justify-between items-baseline mb-[10px]">
            <h4 class="m-0 text-base font-semibold group-hover:text-term-acc">Long-term support</h4>
            <span class="text-xs text-term-acc">active</span>
          </div>
          <p class="font-sans text-sm leading-[1.6] text-term-mid m-0 mb-4">Hosting and long-term support for the software nonprofits rely on, including tools built by student engineering teams.</p>
          <span class="mt-auto self-start text-[13px] text-term-acc border-b border-term-acc/40">See our programs →</span>
        </NuxtLink>
        <NuxtLink to="/careers#interest-form" class="group bg-term-bg hover:bg-term-card px-7 py-[26px] flex flex-col">
          <div class="flex justify-between items-baseline mb-[10px]">
            <h4 class="m-0 text-base font-semibold group-hover:text-term-acc">Volunteer programs &amp; internships</h4>
            <span class="text-xs text-term-acc">active</span>
          </div>
          <p class="font-sans text-sm leading-[1.6] text-term-mid m-0 mb-4">Opportunities for students of the experiential learning programs we work with.</p>
          <span class="mt-auto self-start text-[13px] text-term-acc border-b border-term-acc/40">Fill out the interest form →</span>
        </NuxtLink>
      </div>
    </div>

    <SponsorBanner />
  </div>
</template>
