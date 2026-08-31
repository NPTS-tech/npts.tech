<template>
  <div class="bg-term-bg text-term-fg">
    <!-- Header -->
    <section class="max-w-7xl mx-auto px-6 sm:px-10 pt-16 pb-12 border-b border-term-line">
      <div class="flex items-center gap-3 mb-4 font-mono text-xs text-term-acc uppercase tracking-widest">
        <span class="h-px w-6 bg-term-acc"></span>
        Partners &amp; Case Studies
      </div>
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-sans font-semibold tracking-tight text-term-fg max-w-3xl leading-[1.1] mb-6">
        The community software we keep in production.
      </h1>
      <p class="text-lg text-term-mid font-sans leading-relaxed max-w-3xl">
        Fourteen applications maintained across community health, human services, volunteer coordination, and academic capstone teams. Here is how we build durable technical permanence.
      </p>
    </section>

    <!-- Flagship Institutional Partners -->
    <section class="border-b border-term-line bg-term-deep/40 py-10 px-6 sm:px-10">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div class="text-xs font-mono uppercase tracking-wider text-term-dim">
          Institutional &amp; Academic Affiliations
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full md:w-auto">
          <div class="p-4 rounded-lg bg-term-card/60 border border-term-line">
            <div class="font-mono text-xs text-term-acc font-semibold">UTDesign EPICS</div>
            <div class="font-sans text-xs text-term-mid mt-1">University of Texas at Dallas Capstone Partner</div>
          </div>
          <div class="p-4 rounded-lg bg-term-card/60 border border-term-line">
            <div class="font-mono text-xs text-term-fg font-medium">The Warren Center</div>
            <div class="font-sans text-xs text-term-mid mt-1">Early Childhood &amp; Family Services (DFW)</div>
          </div>
          <div class="p-4 rounded-lg bg-term-card/60 border border-term-line">
            <div class="font-mono text-xs text-term-fg font-medium">North Texas Civic Network</div>
            <div class="font-sans text-xs text-term-mid mt-1">Community Food &amp; Relief Coordination</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Case Studies & Supported Systems -->
    <section class="max-w-7xl mx-auto px-6 sm:px-10 py-16 border-b border-term-line">
      <div class="flex flex-col md:flex-row md:items-baseline justify-between mb-10 gap-4">
        <div>
          <div class="font-mono text-xs text-term-acc uppercase tracking-widest mb-2">Portfolio Overview</div>
          <h2 class="text-3xl font-sans font-semibold text-term-fg">
            Featured Production Systems
          </h2>
        </div>
        <div class="font-mono text-xs text-term-dim">
          14 Active Deployments · 12 in Production · 2 in Active Build
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Project 1 -->
        <div class="p-6 rounded-lg bg-term-card/60 border border-term-line flex flex-col justify-between hover:border-term-acc transition-colors">
          <div>
            <div class="flex items-center justify-between text-xs font-mono mb-3">
              <span class="text-term-dim">Family Services</span>
              <span class="px-2 py-0.5 rounded bg-term-deep border border-term-line text-term-acc">Production · 2y</span>
            </div>
            <h3 class="text-lg font-sans font-semibold text-term-fg mb-2">Client Intake &amp; Case Notes Portal</h3>
            <p class="text-term-mid font-sans text-xs sm:text-sm leading-relaxed mb-4">
              Replaced fragile shared spreadsheets with an authenticated PostgreSQL/Nuxt portal for a caseworker team of nine, securing sensitive intake records.
            </p>
          </div>
          <div class="pt-4 border-t border-term-line font-mono text-[11px] text-term-dim flex justify-between items-center">
            <span>Stack: Nuxt 3 · Node · PostgreSQL</span>
            <span class="text-term-acc">Adopted Post-EPICS</span>
          </div>
        </div>

        <!-- Project 2 -->
        <div class="p-6 rounded-lg bg-term-card/60 border border-term-line flex flex-col justify-between hover:border-term-acc transition-colors">
          <div>
            <div class="flex items-center justify-between text-xs font-mono mb-3">
              <span class="text-term-dim">Community Food Relief</span>
              <span class="px-2 py-0.5 rounded bg-term-deep border border-term-line text-term-acc">Production · 1y</span>
            </div>
            <h3 class="text-lg font-sans font-semibold text-term-fg mb-2">Volunteer Shift Scheduling Portal</h3>
            <p class="text-term-mid font-sans text-xs sm:text-sm leading-relaxed mb-4">
              Automated shift registration, attendance reminders, and group rosters for weekly meal packing and distribution, reducing volunteer no-shows by over 40%.
            </p>
          </div>
          <div class="pt-4 border-t border-term-line font-mono text-[11px] text-term-dim flex justify-between items-center">
            <span>Stack: React · Express · Redis</span>
            <span class="text-term-acc">Active On-Call</span>
          </div>
        </div>

        <!-- Project 3 -->
        <div class="p-6 rounded-lg bg-term-card/60 border border-term-line flex flex-col justify-between hover:border-term-acc transition-colors">
          <div>
            <div class="flex items-center justify-between text-xs font-mono mb-3">
              <span class="text-term-dim">Donation Logistics</span>
              <span class="px-2 py-0.5 rounded bg-term-deep border border-term-line text-term-acc">Production · 8mo</span>
            </div>
            <h3 class="text-lg font-sans font-semibold text-term-fg mb-2">Donation Inventory &amp; Barcode Intake</h3>
            <p class="text-term-mid font-sans text-xs sm:text-sm leading-relaxed mb-4">
              Real-time stock level tracking and barcode camera scanning for warehouse donation distribution, operating entirely on donated tablet hardware.
            </p>
          </div>
          <div class="pt-4 border-t border-term-line font-mono text-[11px] text-term-dim flex justify-between items-center">
            <span>Stack: Vue 3 · SQLite · Docker</span>
            <span class="text-term-acc">Nightly Backups</span>
          </div>
        </div>

        <!-- Project 4 -->
        <div class="p-6 rounded-lg bg-term-card/60 border border-term-line flex flex-col justify-between hover:border-term-acc transition-colors">
          <div>
            <div class="flex items-center justify-between text-xs font-mono mb-3">
              <span class="text-term-dim">Youth Programs</span>
              <span class="px-2 py-0.5 rounded bg-term-deep border border-term-line text-term-acc">Production · 6mo</span>
            </div>
            <h3 class="text-lg font-sans font-semibold text-term-fg mb-2">Grant Impact Reporting Dashboard</h3>
            <p class="text-term-mid font-sans text-xs sm:text-sm leading-relaxed mb-4">
              Aggregates program attendance and outcome metrics into automated tables for institutional funders, cutting quarterly grant reporting time from 15 hours to 1 hour.
            </p>
          </div>
          <div class="pt-4 border-t border-term-line font-mono text-[11px] text-term-dim flex justify-between items-center">
            <span>Stack: TypeScript · Fastify · SQL</span>
            <span class="text-term-acc">Fractional CTO Oversight</span>
          </div>
        </div>

        <!-- Project 5 -->
        <div class="p-6 rounded-lg bg-term-card/60 border border-term-line flex flex-col justify-between hover:border-term-acc transition-colors">
          <div>
            <div class="flex items-center justify-between text-xs font-mono mb-3">
              <span class="text-term-dim">Public Engagement</span>
              <span class="px-2 py-0.5 rounded bg-term-deep border border-term-line text-term-warn">In Build · Spring</span>
            </div>
            <h3 class="text-lg font-sans font-semibold text-term-fg mb-2">Public Portal &amp; Donor Flow Rebuild</h3>
            <p class="text-term-mid font-sans text-xs sm:text-sm leading-relaxed mb-4">
              Migrating a grassroots advocacy group away from an expensive proprietary site builder onto an open-source static framework with zero monthly software subscription fees.
            </p>
          </div>
          <div class="pt-4 border-t border-term-line font-mono text-[11px] text-term-dim flex justify-between items-center">
            <span>Stack: Nuxt 3 · Tailwind CSS</span>
            <span class="text-term-warn">EPICS Capstone Team</span>
          </div>
        </div>

        <!-- Project 6: Future Partner CTA -->
        <div class="p-6 rounded-lg border-2 border-dashed border-term-rule flex flex-col justify-between bg-term-card/20 hover:border-term-acc transition-colors">
          <div>
            <div class="text-xs font-mono text-term-dim mb-3">Open Capacity</div>
            <h3 class="text-lg font-sans font-semibold text-term-fg mb-2">Your Organization Here</h3>
            <p class="text-term-mid font-sans text-xs sm:text-sm leading-relaxed mb-4">
              Have an orphaned application or a new software requirement? We review incoming project requests on a rolling basis every semester.
            </p>
          </div>
          <NuxtLink to="/support" class="inline-flex items-center gap-1.5 text-sm font-medium text-term-acc hover:text-term-accHi transition-colors">
            Request Project Support &rarr;
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Partner Onboarding Lifecycle (4-Step) -->
    <section class="max-w-7xl mx-auto px-6 sm:px-10 py-16 border-b border-term-line">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div class="lg:col-span-5">
          <div class="font-mono text-xs text-term-acc uppercase tracking-widest mb-3">Onboarding Pathway</div>
          <h2 class="text-2xl sm:text-3xl font-sans font-semibold text-term-fg mb-4 leading-snug">
            Four straightforward steps to permanent hosting.
          </h2>
          <p class="text-term-mid font-sans text-sm sm:text-base leading-relaxed mb-6">
            There is no bureaucratic grant application window. We evaluate applications on fit, security posture, and our capacity to support them indefinitely.
          </p>
          <NuxtLink to="/support" class="inline-flex items-center gap-2 font-sans font-medium text-sm text-term-deep bg-term-acc px-5 py-2.5 rounded hover:bg-term-accHi transition-colors">
            Start Onboarding &rarr;
          </NuxtLink>
        </div>

        <div class="lg:col-span-7 space-y-3 font-mono">
          <div class="p-5 rounded-lg bg-term-card/60 border border-term-line flex items-start gap-4">
            <span class="text-term-acc font-semibold text-base">01</span>
            <div class="flex-1">
              <h4 class="font-sans font-semibold text-sm text-term-fg mb-1">Discovery &amp; Fit Call</h4>
              <p class="font-sans text-xs text-term-mid leading-relaxed">
                A 30-minute conversation to map what systems you have, what is broken or vulnerable, and who on your team interacts with the software.
              </p>
            </div>
          </div>

          <div class="p-5 rounded-lg bg-term-card/60 border border-term-line flex items-start gap-4">
            <span class="text-term-acc font-semibold text-base">02</span>
            <div class="flex-1">
              <h4 class="font-sans font-semibold text-sm text-term-fg mb-1">Architecture &amp; Security Review</h4>
              <p class="font-sans text-xs text-term-mid leading-relaxed">
                Our senior engineers inspect the code repository, database schema, credentials, and dependencies to verify that the application can be safely hosted.
              </p>
            </div>
          </div>

          <div class="p-5 rounded-lg bg-term-card/60 border border-term-line flex items-start gap-4">
            <span class="text-term-acc font-semibold text-base">03</span>
            <div class="flex-1">
              <h4 class="font-sans font-semibold text-sm text-term-fg mb-1">Plain-English Partnership Agreement</h4>
              <p class="font-sans text-xs text-term-mid leading-relaxed">
                A transparent document detailing covered support, response times, data privacy commitments, and a clean, no-lock-in exit guarantee.
              </p>
            </div>
          </div>

          <div class="p-5 rounded-lg bg-term-card/60 border border-term-line flex items-start gap-4">
            <span class="text-term-acc font-semibold text-base">04</span>
            <div class="flex-1">
              <h4 class="font-sans font-semibold text-sm text-term-fg mb-1">Container Migration &amp; Restore Verification</h4>
              <p class="font-sans text-xs text-term-mid leading-relaxed">
                We containerize the application, configure nightly offsite backups with a verified restore test, and deliver staff documentation — usually in under 14 days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom CTA Banner -->
    <section class="bg-term-card py-16 px-6 sm:px-10">
      <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
        <div>
          <h3 class="text-2xl sm:text-3xl font-sans font-semibold text-term-fg mb-2">
            Ready to give your software a permanent home?
          </h3>
          <p class="font-sans text-term-mid text-sm max-w-xl leading-relaxed">
            We take on a curated cohort of new partner projects each semester. Get in touch to schedule an architecture inspection.
          </p>
        </div>
        <NuxtLink to="/support" class="shrink-0 font-sans font-medium text-sm text-term-deep bg-term-acc px-6 py-3.5 rounded hover:bg-term-accHi transition-colors shadow-sm">
          Start the Conversation &rarr;
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Community Partners & Case Studies — NPTS',
  ogTitle: 'Community Partners & Case Studies — NPTS',
  description: 'Explore the 14+ active web applications maintained in production across community health, human services, and volunteer coordination.',
  ogDescription: 'Explore the 14+ active web applications maintained in production across community health, human services, and volunteer coordination.',
});
</script>
