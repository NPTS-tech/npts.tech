<script setup lang="ts">
// The Stripe link comes from the STRIPE_DONATION_LINK setting (see STRIPE_DONATION_SETUP.md),
// falling back to NPTS's current link set in nuxt.config.ts.
const { stripeDonationLink } = useRuntimeConfig().public

usePageSeo({
  title: 'Donate',
  description: 'Sponsor the software nonprofits depend on. A gift to NPTS helps keep the software running for every nonprofit partner we support.',
})
</script>

<template>
  <div class="bg-term-bg text-term-fg font-mono">
    <div class="px-5 md:px-10 pt-14 md:pt-[76px] pb-12 md:pb-14 border-b border-term-line">
      <div class="text-[13px] md:text-base text-term-acc tracking-[0.1em] mb-6">[ DONATE ]</div>
      <h1 class="text-[34px] md:text-[52px] leading-[1.08] font-medium m-0 mb-6 -tracking-[0.02em] max-w-[26ch] text-pretty">Sponsor the software nonprofits depend on.</h1>
      <p class="font-sans text-[17px] md:text-[19px] leading-[1.6] text-term-mid m-0 max-w-[64ch] text-pretty">Your support keeps the tools nonprofits rely on hosted and supported long after the student teams who built them move on.</p>
    </div>
    <div class="border-b border-term-line">
      <div class="px-5 md:px-10 py-12 md:py-14">
        <div class="text-[13px] md:text-base text-term-acc tracking-[0.1em] mb-7">[ GIVE ]</div>
        <h2 class="text-[26px] md:text-[30px] font-medium leading-[1.2] m-0 mb-4">A force multiplier for nonprofits.</h2>
        <p class="font-sans text-base leading-[1.65] text-term-mid m-0 mb-4 max-w-[56ch]">A gift to NPTS doesn't help just one organization. It helps keep the software running for every nonprofit partner we support.</p>
        <p class="font-sans text-base leading-[1.65] text-term-mid m-0 mb-8 max-w-[56ch]">Donations support our mission: hosting and support for projects built by experiential learning programs, and volunteer programs and internships for their students.</p>
        <a :href="stripeDonationLink" class="text-[15px] font-semibold text-term-bg bg-term-acc px-7 py-4 inline-block hover:bg-term-accHi">Donate</a>
        <p class="font-sans text-sm leading-[1.65] text-term-dim mt-8 m-0 max-w-[56ch]">Interested in corporate sponsorship or a larger gift? Email <a href="mailto:info@npts.tech" class="text-term-mid border-b border-term-rule hover:text-term-acc tap-target">info@npts.tech</a>.</p>
      </div>
    </div>
  </div>
</template>
