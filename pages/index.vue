<template>
  <div class="bg-term-bg text-term-fg">
    <!-- Hero Section -->
    <section class="max-w-7xl mx-auto px-6 sm:px-10 pt-20 pb-16 text-center">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-term-card border border-term-rule text-xs font-mono text-term-acc mb-8">
        <span class="w-2 h-2 rounded-full bg-term-acc animate-pulse"></span>
        501(c)(3) PUBLIC CHARITY · EST. 2023 · RICHARDSON, TX
      </div>
      <h1 class="text-4xl sm:text-6xl lg:text-7xl font-sans font-semibold tracking-tight text-term-fg max-w-4xl mx-auto leading-[1.08] text-balance mb-6">
        Your nonprofit shouldn't need a CTO.
      </h1>
      <p class="text-lg sm:text-xl text-term-mid font-sans leading-relaxed max-w-3xl mx-auto mb-10 text-pretty">
        We host, maintain, and provide ongoing technical leadership for the software community organizations rely on — powered and maintained by university engineering students gaining real production experience.
      </p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <NuxtLink to="/support" class="w-full sm:w-auto text-center font-sans font-medium text-sm text-term-deep bg-term-acc px-6 py-3.5 rounded hover:bg-term-accHi transition-colors shadow-sm shadow-term-acc/10">
          Get Technical Help &rarr;
        </NuxtLink>
        <NuxtLink to="/services" class="w-full sm:w-auto text-center font-sans text-sm text-term-fg border border-term-rule px-6 py-3.5 rounded hover:border-term-acc hover:text-term-acc transition-colors">
          See What We Support
        </NuxtLink>
      </div>
    </section>

    <!-- Trust & Affiliation Bar -->
    <section class="border-y border-term-line bg-term-deep/60">
      <div class="max-w-7xl mx-auto px-6 sm:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="text-[11px] font-mono tracking-wider uppercase text-term-dim shrink-0 text-center md:text-left">
          Trusted by Community Nonprofits &amp; Learning Programs
        </div>
        <div class="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-term-mid">
          <div class="flex items-center gap-2 px-3 py-1.5 rounded bg-term-card/60 border border-term-line">
            <span class="text-term-acc font-semibold">UTDesign EPICS</span>
            <span class="text-term-dim text-[10px]">UT Dallas</span>
          </div>
          <div class="flex items-center gap-2 px-3 py-1.5 rounded bg-term-card/60 border border-term-line">
            <span class="text-term-fg font-medium">The Warren Center</span>
            <span class="text-term-dim text-[10px]">DFW</span>
          </div>
          <div class="flex items-center gap-2 px-3 py-1.5 rounded bg-term-card/60 border border-term-line">
            <span class="text-term-fg font-medium">Community Food Initiatives</span>
            <span class="text-term-dim text-[10px]">Active Hosting</span>
          </div>
          <div class="flex items-center gap-2 px-3 py-1.5 rounded bg-term-card/60 border border-term-line">
            <span class="text-term-fg font-medium">North Texas Civic Tech</span>
            <span class="text-term-dim text-[10px]">Network</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Impact Metrics (4-up) -->
    <section class="border-b border-term-line">
      <div class="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-term-line font-mono">
        <div class="px-6 py-8 sm:px-8 sm:py-10 text-center md:text-left">
          <div class="text-3xl sm:text-4xl text-term-acc font-medium tracking-tight">14+</div>
          <div class="text-xs text-term-dim mt-2 tracking-wide font-sans">Active applications maintained</div>
        </div>
        <div class="px-6 py-8 sm:px-8 sm:py-10 text-center md:text-left">
          <div class="text-3xl sm:text-4xl text-term-acc font-medium tracking-tight">65+</div>
          <div class="text-xs text-term-dim mt-2 tracking-wide font-sans">Engineering students mentored</div>
        </div>
        <div class="px-6 py-8 sm:px-8 sm:py-10 text-center md:text-left">
          <div class="text-3xl sm:text-4xl text-term-acc font-medium tracking-tight">~$10<span class="text-lg text-term-dim">/mo</span></div>
          <div class="text-xs text-term-dim mt-2 tracking-wide font-sans">Average compute cost (100% fee waivers available)</div>
        </div>
        <div class="px-6 py-8 sm:px-8 sm:py-10 text-center md:text-left">
          <div class="text-3xl sm:text-4xl text-term-acc font-medium tracking-tight">99.9%</div>
          <div class="text-xs text-term-dim mt-2 tracking-wide font-sans">Platform uptime commitment</div>
        </div>
      </div>
    </section>

    <!-- Three Audience Gateways ("Who Are You?") -->
    <section class="max-w-7xl mx-auto px-6 sm:px-10 py-20">
      <div class="flex items-center gap-3 mb-10 font-mono text-xs text-term-acc uppercase tracking-widest">
        <span class="h-px w-6 bg-term-acc"></span>
        Who Are You?
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Card 1: Nonprofits -->
        <div class="rounded-lg border border-term-line bg-term-card/60 p-8 flex flex-col justify-between hover:border-term-acc transition-colors group">
          <div>
            <div class="inline-block text-[11px] font-mono uppercase tracking-wider text-term-acc bg-term-deep px-2.5 py-1 rounded border border-term-line mb-5">
              For Nonprofit Leaders
            </div>
            <h3 class="text-xl font-sans font-semibold text-term-fg mb-3 leading-snug">
              "I run a nonprofit and our tech is vulnerable."
            </h3>
            <p class="text-term-mid font-sans text-sm leading-relaxed mb-6">
              From "who owns our domain?" to server outages and custom software handoffs, we give your team permanent technical continuity, managed hosting, and fractional leadership.
            </p>
          </div>
          <NuxtLink to="/support" class="inline-flex items-center gap-1.5 text-sm font-medium text-term-acc group-hover:text-term-accHi transition-colors">
            Request Technical Support &rarr;
          </NuxtLink>
        </div>

        <!-- Card 2: Students -->
        <div class="rounded-lg border border-term-line bg-term-card/60 p-8 flex flex-col justify-between hover:border-term-acc transition-colors group">
          <div>
            <div class="inline-block text-[11px] font-mono uppercase tracking-wider text-term-info bg-term-deep px-2.5 py-1 rounded border border-term-line mb-5">
              For Student Engineers
            </div>
            <h3 class="text-xl font-sans font-semibold text-term-fg mb-3 leading-snug">
              "I'm an engineer looking for real production reps."
            </h3>
            <p class="text-term-mid font-sans text-sm leading-relaxed mb-6">
              Work on live systems with real stakes, review code with working tech leads, and build a verifiable track record of production software before you graduate.
            </p>
          </div>
          <NuxtLink to="/careers" class="inline-flex items-center gap-1.5 text-sm font-medium text-term-acc group-hover:text-term-accHi transition-colors">
            Join the Team &rarr;
          </NuxtLink>
        </div>

        <!-- Card 3: Donors -->
        <div class="rounded-lg border border-term-line bg-term-card/60 p-8 flex flex-col justify-between hover:border-term-acc transition-colors group">
          <div>
            <div class="inline-block text-[11px] font-mono uppercase tracking-wider text-term-warn bg-term-deep px-2.5 py-1 rounded border border-term-line mb-5">
              For Funders &amp; Donors
            </div>
            <h3 class="text-xl font-sans font-semibold text-term-fg mb-3 leading-snug">
              "I want to fund durable community infrastructure."
            </h3>
            <p class="text-term-mid font-sans text-sm leading-relaxed mb-6">
              One contribution achieves two outcomes: covers server bills for essential community nonprofits and funds stipends for the next generation of engineers.
            </p>
          </div>
          <NuxtLink to="/donate" class="inline-flex items-center gap-1.5 text-sm font-medium text-term-acc group-hover:text-term-accHi transition-colors">
            Support Our Mission &rarr;
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- The 4 Service Pillars Summary -->
    <section class="border-t border-term-line bg-term-deep/40 py-20">
      <div class="max-w-7xl mx-auto px-6 sm:px-10">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div class="flex items-center gap-3 mb-3 font-mono text-xs text-term-acc uppercase tracking-widest">
              <span class="h-px w-6 bg-term-acc"></span>
              Core Offerings
            </div>
            <h2 class="text-3xl sm:text-4xl font-sans font-semibold text-term-fg">
              What We Actually Deliver
            </h2>
          </div>
          <NuxtLink to="/services" class="text-sm font-medium text-term-acc hover:text-term-accHi transition-colors">
            View complete service specifications &rarr;
          </NuxtLink>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Pillar 1 -->
          <div class="p-8 rounded-lg bg-term-card/50 border border-term-line flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="font-mono text-xs text-term-dim uppercase">Pillar 01</span>
                <span class="font-mono text-xs text-term-acc px-2 py-0.5 rounded bg-term-deep border border-term-line">Managed Hosting</span>
              </div>
              <h3 class="text-xl font-sans font-semibold text-term-fg mb-2">Managed Application Hosting</h3>
              <p class="text-term-mid font-sans text-sm leading-relaxed mb-4">
                We run your web applications, databases, and background tasks on isolated cloud infrastructure with automatic SSL/TLS certificates, nightly encrypted backups, and custom domain configuration.
              </p>
            </div>
            <div class="text-xs font-mono text-term-dim pt-4 border-t border-term-line">
              Standard Compute: $120/yr (~$10/mo) · 100% Fee Waivers Available
            </div>
          </div>

          <!-- Pillar 2 -->
          <div class="p-8 rounded-lg bg-term-card/50 border border-term-line flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="font-mono text-xs text-term-dim uppercase">Pillar 02</span>
                <span class="font-mono text-xs text-term-acc px-2 py-0.5 rounded bg-term-deep border border-term-line">Continuity</span>
              </div>
              <h3 class="text-xl font-sans font-semibold text-term-fg mb-2">Ongoing Maintenance &amp; On-Call</h3>
              <p class="text-term-mid font-sans text-sm leading-relaxed mb-4">
                Dependency updates, security patches, 24-hour outage response SLA, uptime monitoring alerts, and quarterly disaster recovery restore drills so software never rots.
              </p>
            </div>
            <div class="text-xs font-mono text-term-dim pt-4 border-t border-term-line">
              Target Uptime: 99.9% · Outage Response: &lt; 24h
            </div>
          </div>

          <!-- Pillar 3 -->
          <div class="p-8 rounded-lg bg-term-card/50 border border-term-line flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="font-mono text-xs text-term-dim uppercase">Pillar 03</span>
                <span class="font-mono text-xs text-term-acc px-2 py-0.5 rounded bg-term-deep border border-term-line">Strategic Leadership</span>
              </div>
              <h3 class="text-xl font-sans font-semibold text-term-fg mb-2">Fractional CTO &amp; Systems Ownership</h3>
              <p class="text-term-mid font-sans text-sm leading-relaxed mb-4">
                A dedicated senior technical partner to map your tools, verify domain ownership, oversee access posture (Google Workspace / M365), and maintain a 3-month technical roadmap.
              </p>
            </div>
            <div class="text-xs font-mono text-term-dim pt-4 border-t border-term-line">
              Living Systems Inventory · Plain-English Technical Log
            </div>
          </div>

          <!-- Pillar 4 -->
          <div class="p-8 rounded-lg bg-term-card/50 border border-term-line flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="font-mono text-xs text-term-dim uppercase">Pillar 04</span>
                <span class="font-mono text-xs text-term-acc px-2 py-0.5 rounded bg-term-deep border border-term-line">Academic Scoping</span>
              </div>
              <h3 class="text-xl font-sans font-semibold text-term-fg mb-2">Capstone Scoping &amp; Adoption</h3>
              <p class="text-term-mid font-sans text-sm leading-relaxed mb-4">
                We translate community problems into achievable university capstone milestones (like UTDesign EPICS), review pull requests weekly, and formally adopt the software post-graduation.
              </p>
            </div>
            <div class="text-xs font-mono text-term-dim pt-4 border-t border-term-line">
              14-Day Production Migration · Staff Hand-off Training
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Case Study -->
    <section class="border-t border-term-line">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-term-line">
        <div class="p-8 sm:p-14 flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-3 mb-4 font-mono text-xs text-term-acc uppercase tracking-widest">
              <span class="h-px w-6 bg-term-acc"></span>
              Featured Case Study
            </div>
            <h3 class="text-2xl sm:text-3xl font-sans font-semibold text-term-fg mb-4 leading-snug">
              A semester capstone became permanent community infrastructure.
            </h3>
            <p class="text-term-mid font-sans text-base leading-relaxed mb-6">
              An EPICS student team built an intake and case management platform to replace fragile shared spreadsheets. NPTS took over hosting and maintenance the week classes concluded — it has now run reliably in production for over two years without requiring the nonprofit to hire internal IT.
            </p>
            <blockquote class="border-l-2 border-term-acc pl-4 py-1 text-term-fg font-sans italic text-sm leading-relaxed mb-6">
              "Having NPTS manage our database and hosting means our caseworkers can focus 100% of their energy on families rather than worrying about server errors."
              <div class="not-italic text-xs font-mono text-term-dim mt-2">— Community Partner Director, Dallas Metroplex</div>
            </blockquote>
          </div>
          <NuxtLink to="/partners" class="text-sm font-medium text-term-acc hover:text-term-accHi transition-colors">
            Explore all partner case studies &rarr;
          </NuxtLink>
        </div>

        <div class="p-8 sm:p-14 bg-term-deep/60 flex flex-col justify-between font-mono">
          <div>
            <div class="text-xs text-term-dim uppercase tracking-wider mb-6">
              What the Production Handoff Included
            </div>
            <div class="space-y-4 text-sm">
              <div class="flex items-start gap-4">
                <span class="text-term-acc font-semibold">01</span>
                <div>
                  <div class="text-term-fg font-sans font-medium">Repository Transfer &amp; CI/CD Pipeline</div>
                  <div class="text-term-dim text-xs font-sans mt-0.5">Automated linting, tests, and isolated production deploy environments.</div>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <span class="text-term-acc font-semibold">02</span>
                <div>
                  <div class="text-term-fg font-sans font-medium">Nightly Encrypted Database Backups</div>
                  <div class="text-term-dim text-xs font-sans mt-0.5">Point-in-time recovery testing and 30-day offsite retention.</div>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <span class="text-term-acc font-semibold">03</span>
                <div>
                  <div class="text-term-fg font-sans font-medium">24/7 Automated Monitoring &amp; On-Call</div>
                  <div class="text-term-dim text-xs font-sans mt-0.5">Health checks with proactive alerts to NPTS maintainers.</div>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <span class="text-term-acc font-semibold">04</span>
                <div>
                  <div class="text-term-fg font-sans font-medium">Plain-English Staff Training &amp; Runbooks</div>
                  <div class="text-term-dim text-xs font-sans mt-0.5">Custom documentation for non-technical administrative operators.</div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-8 pt-6 border-t border-term-line flex flex-wrap items-center justify-between text-xs text-term-dim gap-2">
            <span>// Migration completed in 9 days</span>
            <span>// Zero downtime recorded</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Recurring Donation Callout Banner -->
    <section class="bg-term-card border-t border-term-line py-16 px-6 sm:px-10">
      <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        <div class="max-w-2xl">
          <div class="inline-block text-[11px] font-mono uppercase tracking-wider text-term-acc bg-term-deep px-2.5 py-1 rounded border border-term-line mb-3">
            Direct Community Impact
          </div>
          <h3 class="text-2xl sm:text-3xl font-sans font-semibold text-term-fg mb-2">
            $50 a month keeps a community nonprofit online for an entire year.
          </h3>
          <p class="text-term-mid font-sans text-sm leading-relaxed">
            100% of public donations fund infrastructure, domain fees, and student stipends. Zero executive salaries.
          </p>
        </div>
        <div class="flex flex-wrap items-center gap-3">
          <NuxtLink to="/donate" class="px-4 py-3 rounded bg-term-deep border border-term-rule font-mono text-sm text-term-fg hover:border-term-acc hover:text-term-acc transition-colors">
            $25
          </NuxtLink>
          <NuxtLink to="/donate" class="px-4 py-3 rounded bg-term-acc text-term-deep font-mono text-sm font-semibold hover:bg-term-accHi transition-colors shadow-sm">
            $50/mo
          </NuxtLink>
          <NuxtLink to="/donate" class="px-4 py-3 rounded bg-term-deep border border-term-rule font-mono text-sm text-term-fg hover:border-term-acc hover:text-term-acc transition-colors">
            $250
          </NuxtLink>
          <NuxtLink to="/donate" class="px-6 py-3 rounded bg-term-deep border border-term-acc font-sans text-sm font-medium text-term-acc hover:bg-term-acc hover:text-term-deep transition-colors">
            Donate Online &rarr;
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "NPTS — Your Nonprofit Shouldn't Need a CTO",
  ogTitle: "NPTS — Your Nonprofit Shouldn't Need a CTO",
  description: "We host, maintain, and provide ongoing technical leadership for community software — powered by engineering students gaining real production experience.",
  ogDescription: "We host, maintain, and provide ongoing technical leadership for community software — powered by engineering students gaining real production experience.",
});
</script>
