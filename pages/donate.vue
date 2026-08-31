<template>
  <div class="bg-term-bg text-term-fg">
    <!-- Header -->
    <section class="max-w-7xl mx-auto px-6 sm:px-10 pt-16 pb-12 border-b border-term-line">
      <div class="flex items-center gap-3 mb-4 font-mono text-xs text-term-acc uppercase tracking-widest">
        <span class="h-px w-6 bg-term-acc"></span>
        Philanthropic Support
      </div>
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-sans font-semibold tracking-tight text-term-fg max-w-3xl leading-[1.1] mb-6">
        Fund one organization. Strengthen dozens.
      </h1>
      <p class="text-lg text-term-mid font-sans leading-relaxed max-w-3xl">
        Your tax-deductible contribution keeps essential community software online and funds stipends for talented engineering students building public digital infrastructure.
      </p>
    </section>

    <!-- Giving Form & Fund Allocations -->
    <section class="border-b border-term-line">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-term-line">
        <!-- Left: Giving Selection -->
        <div class="lg:col-span-7 p-6 sm:p-12">
          <div class="font-mono text-xs text-term-acc uppercase tracking-widest mb-6">Select Your Impact Level</div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div class="p-6 rounded-lg bg-term-card/60 border border-term-line hover:border-term-acc transition-colors flex flex-col justify-between">
              <div>
                <div class="text-2xl font-mono text-term-fg font-medium mb-1">$25<span class="text-xs text-term-dim">/mo</span></div>
                <div class="text-xs font-mono text-term-dim mb-3">($300 / year)</div>
                <p class="font-sans text-xs text-term-mid leading-relaxed">
                  Fully covers cloud compute, databases, and nightly offsite backups for two community nonprofits.
                </p>
              </div>
            </div>

            <div class="p-6 rounded-lg bg-term-card border-2 border-term-acc relative flex flex-col justify-between shadow-sm shadow-term-acc/10">
              <div class="absolute -top-3 right-4 font-mono text-[10px] uppercase font-semibold bg-term-acc text-term-deep px-2 py-0.5 rounded">
                Most Impactful
              </div>
              <div>
                <div class="text-2xl font-mono text-term-acc font-semibold mb-1">$50<span class="text-xs text-term-mid">/mo</span></div>
                <div class="text-xs font-mono text-term-dim mb-3">($600 / year)</div>
                <p class="font-sans text-xs text-term-mid leading-relaxed">
                  Covers hosting, domain renewals, security patching, and on-call monitoring for five partner organizations.
                </p>
              </div>
            </div>

            <div class="p-6 rounded-lg bg-term-card/60 border border-term-line hover:border-term-acc transition-colors flex flex-col justify-between">
              <div>
                <div class="text-2xl font-mono text-term-fg font-medium mb-1">$250</div>
                <div class="text-xs font-mono text-term-dim mb-3">(One-Time / Term)</div>
                <p class="font-sans text-xs text-term-mid leading-relaxed">
                  Directly funds a student engineering intern stipend for a full semester of active maintenance and PR reviews.
                </p>
              </div>
            </div>
          </div>

          <div class="p-6 rounded-lg bg-term-deep border border-term-line mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div class="text-sm font-sans font-semibold text-term-fg mb-1">Custom or Institutional Contribution</div>
              <p class="text-xs font-sans text-term-mid">Support multiple cohorts, endowment grants, or donor-advised funds (DAF).</p>
            </div>
            <a :href="stripeLink" target="_blank" rel="noopener" class="shrink-0 font-sans font-medium text-xs text-term-fg border border-term-rule px-4 py-2 rounded hover:border-term-acc hover:text-term-acc transition-colors">
              Custom Amount &rarr;
            </a>
          </div>

          <div class="space-y-4">
            <a :href="stripeLink" target="_blank" rel="noopener" class="w-full text-center block font-sans font-medium text-base text-term-deep bg-term-acc py-4 rounded hover:bg-term-accHi transition-colors shadow-sm shadow-term-acc/10">
              Donate Securely via Stripe &rarr;
            </a>
            <div class="flex items-center justify-between text-xs font-mono text-term-dim">
              <span>501(c)(3) Tax-Deductible</span>
              <span>Instant Email Receipt</span>
              <span>Cancel Anytime</span>
            </div>
          </div>
        </div>

        <!-- Right: Fund Allocation Transparency -->
        <div class="lg:col-span-5 p-6 sm:p-12 bg-term-deep/40 flex flex-col justify-between">
          <div>
            <div class="font-mono text-xs text-term-acc uppercase tracking-widest mb-6">Financial Transparency</div>
            <h3 class="text-xl font-sans font-semibold text-term-fg mb-6">Where Every Dollar Goes</h3>

            <div class="space-y-5 font-sans">
              <div class="pb-4 border-b border-term-line">
                <div class="flex items-center justify-between mb-1">
                  <span class="font-semibold text-sm text-term-fg">Cloud Servers &amp; Hosting</span>
                  <span class="font-mono text-sm text-term-acc">~55%</span>
                </div>
                <p class="text-xs text-term-mid leading-relaxed">Direct server compute, databases, isolated containers, encrypted backup storage, and monitoring tools.</p>
              </div>

              <div class="pb-4 border-b border-term-line">
                <div class="flex items-center justify-between mb-1">
                  <span class="font-semibold text-sm text-term-fg">Student Engineering Stipends</span>
                  <span class="font-mono text-sm text-term-acc">~35%</span>
                </div>
                <p class="text-xs text-term-mid leading-relaxed">Direct stipends for student engineering interns managing partner maintenance and deployments.</p>
              </div>

              <div class="pb-4 border-b border-term-line">
                <div class="flex items-center justify-between mb-1">
                  <span class="font-semibold text-sm text-term-fg">Compliance &amp; Domains</span>
                  <span class="font-mono text-sm text-term-acc">~10%</span>
                </div>
                <p class="text-xs text-term-mid leading-relaxed">Domain registrations, 501(c)(3) legal filings, liability insurance, and banking fees.</p>
              </div>

              <div class="p-3 rounded bg-term-card border border-term-line flex items-center justify-between">
                <span class="font-semibold text-xs text-term-fg">Executive Salaries</span>
                <span class="font-mono text-xs text-term-acc font-semibold">$0 (100% Volunteer)</span>
              </div>
            </div>
          </div>

          <div class="mt-8 pt-6 border-t border-term-line text-xs font-mono text-term-dim">
            View our governance and public filings: <NuxtLink to="/about" class="text-term-acc hover:underline">Form 990 &amp; IRS Letter &rarr;</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Corporate Partnerships & In-Kind Giving -->
    <section class="max-w-7xl mx-auto px-6 sm:px-10 py-16 border-b border-term-line">
      <div class="mb-10">
        <div class="font-mono text-xs text-term-acc uppercase tracking-widest mb-3">Corporate &amp; In-Kind Sponsorships</div>
        <h2 class="text-3xl font-sans font-semibold text-term-fg mb-3">
          Beyond Financial Contributions
        </h2>
        <p class="text-term-mid font-sans text-sm sm:text-base max-w-2xl">
          Tech companies and foundations partner with NPTS through cloud sponsorships, software credits, and talent recruitment pipelines.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="p-6 rounded-lg bg-term-card/50 border border-term-line">
          <div class="font-mono text-xs text-term-acc mb-2">In-Kind 01</div>
          <h3 class="font-sans font-semibold text-base text-term-fg mb-2">Cloud Credits &amp; Infrastructure</h3>
          <p class="font-sans text-xs text-term-mid leading-relaxed">
            Donated AWS, Google Cloud, DigitalOcean, or GitHub credits directly subsidize hosting capacity for partner nonprofits.
          </p>
        </div>

        <div class="p-6 rounded-lg bg-term-card/50 border border-term-line">
          <div class="font-mono text-xs text-term-info mb-2">In-Kind 02</div>
          <h3 class="font-sans font-semibold text-base text-term-fg mb-2">Software Licenses &amp; Tools</h3>
          <p class="font-sans text-xs text-term-mid leading-relaxed">
            Sponsorship of monitoring, analytics, and security tools directly equips student engineers with enterprise development toolchains.
          </p>
        </div>

        <div class="p-6 rounded-lg bg-term-card/50 border border-term-line">
          <div class="font-mono text-xs text-term-warn mb-2">In-Kind 03</div>
          <h3 class="font-sans font-semibold text-base text-term-fg mb-2">Hiring Network Membership</h3>
          <p class="font-sans text-xs text-term-mid leading-relaxed">
            Companies gain early recruitment access to our highest-performing student interns and Junior CTO alumni.
          </p>
        </div>
      </div>
    </section>

    <!-- Impact Verified (4-up) -->
    <section class="max-w-7xl mx-auto px-6 sm:px-10 py-16">
      <div class="font-mono text-xs text-term-acc uppercase tracking-widest mb-6">Cumulative Impact</div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 font-mono">
        <div class="p-6 rounded-lg bg-term-card/40 border border-term-line">
          <div class="text-3xl text-term-acc font-semibold mb-1">14+</div>
          <div class="text-xs text-term-dim font-sans">Applications maintained in production</div>
        </div>
        <div class="p-6 rounded-lg bg-term-card/40 border border-term-line">
          <div class="text-3xl text-term-acc font-semibold mb-1">65+</div>
          <div class="text-xs text-term-dim font-sans">Student engineers mentored</div>
        </div>
        <div class="p-6 rounded-lg bg-term-card/40 border border-term-line">
          <div class="text-3xl text-term-acc font-semibold mb-1">99.9%</div>
          <div class="text-xs text-term-dim font-sans">Platform uptime record</div>
        </div>
        <div class="p-6 rounded-lg bg-term-card/40 border border-term-line">
          <div class="text-3xl text-term-acc font-semibold mb-1">0%</div>
          <div class="text-xs text-term-dim font-sans">Spent on executive salaries</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const stripeLink = computed(() => config.public.stripeDonationLink || 'https://donate.stripe.com/aFacN50j55vF9lt1Zk04800');

useSeoMeta({
  title: 'Donate & Support Community Infrastructure — NPTS',
  ogTitle: 'Donate & Support Community Infrastructure — NPTS',
  description: 'Fund one organization, strengthen dozens. 100% of public contributions directly fund cloud servers, domain compliance, and student stipends.',
  ogDescription: 'Fund one organization, strengthen dozens. 100% of public contributions directly fund cloud servers, domain compliance, and student stipends.',
});
</script>
