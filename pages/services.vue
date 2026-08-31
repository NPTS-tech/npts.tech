<template>
  <div class="bg-term-bg text-term-fg">
    <!-- Header -->
    <section class="max-w-7xl mx-auto px-6 sm:px-10 pt-16 pb-12 border-b border-term-line">
      <div class="flex items-center gap-3 mb-4 font-mono text-xs text-term-acc uppercase tracking-widest">
        <span class="h-px w-6 bg-term-acc"></span>
        Service Specifications
      </div>
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-sans font-semibold tracking-tight text-term-fg max-w-3xl leading-[1.1] mb-6">
        Reliable technical infrastructure, priced for the nonprofit reality.
      </h1>
      <p class="text-lg text-term-mid font-sans leading-relaxed max-w-3xl">
        No corporate consulting retainers, no surprise invoices, and no abandoned code. Below is exactly what we take on, what it costs, and how we keep your mission-critical systems running.
      </p>
    </section>

    <!-- Key SLA & Commitments -->
    <section class="border-b border-term-line bg-term-deep/50 font-mono">
      <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-term-line">
        <div class="px-6 py-6 sm:px-10 sm:py-8">
          <div class="text-xs text-term-dim uppercase tracking-wider mb-1 font-sans">Outage Response SLA</div>
          <div class="text-2xl sm:text-3xl text-term-acc font-medium">&lt; 24 Hours</div>
          <div class="text-xs text-term-dim mt-1 font-sans">Direct engineer on-call assignment</div>
        </div>
        <div class="px-6 py-6 sm:px-10 sm:py-8">
          <div class="text-xs text-term-dim uppercase tracking-wider mb-1 font-sans">Target Platform Uptime</div>
          <div class="text-2xl sm:text-3xl text-term-acc font-medium">99.9%</div>
          <div class="text-xs text-term-dim mt-1 font-sans">Automated uptime health checks</div>
        </div>
        <div class="px-6 py-6 sm:px-10 sm:py-8">
          <div class="text-xs text-term-dim uppercase tracking-wider mb-1 font-sans">Base Compute Cost</div>
          <div class="text-2xl sm:text-3xl text-term-acc font-medium">~$10<span class="text-base text-term-dim">/mo</span></div>
          <div class="text-xs text-term-dim mt-1 font-sans">100% fee waiver guarantee for qualifying orgs</div>
        </div>
      </div>
    </section>

    <!-- Pillar 01: Application Hosting -->
    <section class="max-w-7xl mx-auto px-6 sm:px-10 py-16 border-b border-term-line">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div class="lg:col-span-5">
          <div class="font-mono text-xs text-term-acc uppercase tracking-widest mb-3">Pillar 01 — Infrastructure</div>
          <h2 class="text-2xl sm:text-3xl font-sans font-semibold text-term-fg mb-4 leading-snug">
            We run your software so your staff doesn't have to.
          </h2>
          <p class="text-term-mid font-sans text-sm sm:text-base leading-relaxed mb-6">
            Your web application, database, and background workers run in secure, isolated containers on our managed infrastructure. You get automated deployments, SSL/TLS encryption, and a single point of technical contact.
          </p>
          <NuxtLink to="/support" class="inline-flex items-center gap-2 text-sm font-sans font-medium text-term-deep bg-term-acc px-5 py-2.5 rounded hover:bg-term-accHi transition-colors">
            Request Hosting &rarr;
          </NuxtLink>
        </div>
        <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="p-6 rounded-lg bg-term-card/60 border border-term-line">
            <h4 class="text-sm font-mono font-semibold text-term-fg uppercase tracking-wider mb-3 flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-term-acc"></span> Included In Scope
            </h4>
            <ul class="font-sans text-sm text-term-mid space-y-2 leading-relaxed">
              <li>• Managed container deployments &amp; CI/CD</li>
              <li>• Automated SSL/TLS certificates</li>
              <li>• Custom domain &amp; DNS routing</li>
              <li>• Nightly encrypted database backups</li>
              <li>• 30-day centralized log retention</li>
            </ul>
          </div>
          <div class="p-6 rounded-lg bg-term-deep border border-term-line">
            <h4 class="text-sm font-mono font-semibold text-term-dim uppercase tracking-wider mb-3">
              Partner Prerequisites
            </h4>
            <ul class="font-sans text-sm text-term-mid space-y-2 leading-relaxed">
              <li>• Source code repository access</li>
              <li>• Designated staff liaison</li>
              <li>• Domain DNS delegation</li>
              <li>• Written data ownership designation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Pillar 02: Maintenance & On-Call -->
    <section class="max-w-7xl mx-auto px-6 sm:px-10 py-16 border-b border-term-line">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div class="lg:col-span-5">
          <div class="font-mono text-xs text-term-acc uppercase tracking-widest mb-3">Pillar 02 — Continuity</div>
          <h2 class="text-2xl sm:text-3xl font-sans font-semibold text-term-fg mb-4 leading-snug">
            Someone answers when something breaks.
          </h2>
          <p class="text-term-mid font-sans text-sm sm:text-base leading-relaxed mb-6">
            Software rots without attention. We patch dependencies, monitor uptime, and step in immediately when errors occur — avoiding ticket queues that lead to silence.
          </p>
          <NuxtLink to="/support" class="inline-flex items-center gap-2 text-sm font-sans font-medium text-term-fg border border-term-rule px-5 py-2.5 rounded hover:border-term-acc hover:text-term-acc transition-colors">
            Talk to an Engineer &rarr;
          </NuxtLink>
        </div>
        <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="p-6 rounded-lg bg-term-card/60 border border-term-line">
            <h4 class="text-sm font-mono font-semibold text-term-fg uppercase tracking-wider mb-3 flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-term-acc"></span> Included In Scope
            </h4>
            <ul class="font-sans text-sm text-term-mid space-y-2 leading-relaxed">
              <li>• Dependency &amp; security CVE patching</li>
              <li>• Automated uptime monitoring &amp; alerts</li>
              <li>• Quarterly disaster recovery restore drills</li>
              <li>• Minor bug fixes &amp; copy adjustments</li>
              <li>• Annual system health &amp; risk report</li>
            </ul>
          </div>
          <div class="p-6 rounded-lg bg-term-deep border border-term-line">
            <h4 class="text-sm font-mono font-semibold text-term-dim uppercase tracking-wider mb-3">
              Explicitly Out of Scope
            </h4>
            <ul class="font-sans text-sm text-term-mid space-y-2 leading-relaxed">
              <li>• General IT/desktop helpdesk or printers</li>
              <li>• 24/7 immediate phone hotline</li>
              <li>• Continuous major feature development</li>
              <li>• Applications processing direct PCI/HIPAA data</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Pillar 03: Fractional CTO & Systems Ownership -->
    <section class="max-w-7xl mx-auto px-6 sm:px-10 py-16 border-b border-term-line bg-term-card/20">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div class="lg:col-span-5">
          <div class="font-mono text-xs text-term-acc uppercase tracking-widest mb-3">Pillar 03 — Strategic Leadership</div>
          <h2 class="text-2xl sm:text-3xl font-sans font-semibold text-term-fg mb-4 leading-snug">
            Never wonder "Who owns our tech?" again.
          </h2>
          <p class="text-term-mid font-sans text-sm sm:text-base leading-relaxed mb-6">
            Most nonprofits suffer from fragmented tools and lost passwords when staff rotate. We assign a dedicated technical lead providing ~4 hours/month of high-level systems oversight.
          </p>
          <NuxtLink to="/support" class="inline-flex items-center gap-2 text-sm font-sans font-medium text-term-acc hover:text-term-accHi transition-colors">
            Inquire about Fractional CTO Support &rarr;
          </NuxtLink>
        </div>
        <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div class="p-5 rounded-lg bg-term-card border border-term-line flex flex-col justify-between">
            <div>
              <div class="font-mono text-xs text-term-acc mb-2">Artifact 01</div>
              <h4 class="font-sans font-semibold text-sm text-term-fg mb-2">Living Systems Inventory</h4>
              <p class="font-sans text-xs text-term-mid leading-relaxed">Complete mapping of tools, hosting accounts, domain renewals, and API credentials.</p>
            </div>
          </div>
          <div class="p-5 rounded-lg bg-term-card border border-term-line flex flex-col justify-between">
            <div>
              <div class="font-mono text-xs text-term-acc mb-2">Artifact 02</div>
              <h4 class="font-sans font-semibold text-sm text-term-fg mb-2">3-Month Tech Roadmap</h4>
              <p class="font-sans text-xs text-term-mid leading-relaxed">Prioritized guidance on migrations, vendor upgrades, and cost-reduction opportunities.</p>
            </div>
          </div>
          <div class="p-5 rounded-lg bg-term-card border border-term-line flex flex-col justify-between">
            <div>
              <div class="font-mono text-xs text-term-acc mb-2">Artifact 03</div>
              <h4 class="font-sans font-semibold text-sm text-term-fg mb-2">Plain-English Decision Log</h4>
              <p class="font-sans text-xs text-term-mid leading-relaxed">Documenting why technical choices were made so institutional memory is never lost.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pillar 04: Capstone Scoping & Adoption -->
    <section class="max-w-7xl mx-auto px-6 sm:px-10 py-16 border-b border-term-line">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div class="lg:col-span-5">
          <div class="font-mono text-xs text-term-acc uppercase tracking-widest mb-3">Pillar 04 — Academic Scoping</div>
          <h2 class="text-2xl sm:text-3xl font-sans font-semibold text-term-fg mb-4 leading-snug">
            Turn university student projects into durable software.
          </h2>
          <p class="text-term-mid font-sans text-sm sm:text-base leading-relaxed mb-6">
            We partner with university experiential learning programs (such as UTDesign EPICS) to define achievable milestones, mentor student developers, and execute permanent production handoffs upon graduation.
          </p>
          <NuxtLink to="/programs" class="inline-flex items-center gap-2 text-sm font-sans font-medium text-term-acc hover:text-term-accHi transition-colors">
            See Capstone Lifecycle &rarr;
          </NuxtLink>
        </div>
        <div class="lg:col-span-7 space-y-3 font-mono">
          <div class="p-4 rounded border border-term-line bg-term-card/40 flex items-start gap-4">
            <span class="text-term-acc font-semibold text-sm">01</span>
            <div class="font-sans text-sm text-term-mid">
              <strong class="text-term-fg">Scope Translation:</strong> We convert your organizational workflow pain points into a realistic 1-to-2 semester technical specification.
            </div>
          </div>
          <div class="p-4 rounded border border-term-line bg-term-card/40 flex items-start gap-4">
            <span class="text-term-acc font-semibold text-sm">02</span>
            <div class="font-sans text-sm text-term-mid">
              <strong class="text-term-fg">Mentored Build:</strong> Student teams build the solution with weekly architectural reviews and PR oversight from working senior engineers.
            </div>
          </div>
          <div class="p-4 rounded border border-term-line bg-term-card/40 flex items-start gap-4">
            <span class="text-term-acc font-semibold text-sm">03</span>
            <div class="font-sans text-sm text-term-mid">
              <strong class="text-term-fg">Formal Adoption:</strong> Repositories, DNS, and server infrastructure transfer to NPTS within 14 days of final presentations.
            </div>
          </div>
          <div class="p-4 rounded border border-term-line bg-term-card/40 flex items-start gap-4">
            <span class="text-term-acc font-semibold text-sm">04</span>
            <div class="font-sans text-sm text-term-mid">
              <strong class="text-term-fg">Staff Runbooks:</strong> Your administrative team receives straightforward written operating guides and permanent on-call access.
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Transparent Pricing & Fee Waiver Policy -->
    <section class="max-w-7xl mx-auto px-6 sm:px-10 py-16 border-b border-term-line">
      <div class="max-w-3xl mb-12">
        <div class="font-mono text-xs text-term-acc uppercase tracking-widest mb-3">Transparent Cost Structure</div>
        <h2 class="text-3xl font-sans font-semibold text-term-fg mb-4">
          At-cost pricing with a 100% fee waiver guarantee.
        </h2>
        <p class="text-term-mid font-sans text-base leading-relaxed">
          As a 501(c)(3) public charity, NPTS charges only pass-through compute infrastructure costs. If your organization cannot cover these fees, our community donor fund covers 100% of the cost.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="p-8 rounded-lg bg-term-card/60 border border-term-line flex flex-col justify-between">
          <div>
            <div class="font-mono text-xs text-term-dim uppercase mb-2">Standard Hosting</div>
            <div class="text-3xl font-mono text-term-acc font-medium mb-1">$120<span class="text-base text-term-dim">/year</span></div>
            <div class="text-xs font-mono text-term-dim mb-4">(~$10 / month)</div>
            <p class="font-sans text-sm text-term-mid leading-relaxed">
              Directly covers cloud server compute (up to $8/mo baseline), isolated database container, and automated offsite backup storage.
            </p>
          </div>
        </div>

        <div class="p-8 rounded-lg bg-term-card/60 border border-term-line flex flex-col justify-between">
          <div>
            <div class="font-mono text-xs text-term-dim uppercase mb-2">Mobile Application Compliance</div>
            <div class="text-3xl font-mono text-term-acc font-medium">$35<span class="text-base text-term-dim">/year</span></div>
            <div class="text-xs font-mono text-term-dim mb-4">(per active app)</div>
            <p class="font-sans text-sm text-term-mid leading-relaxed">
              Administrative and certificate maintenance for iOS applications published via our nonprofit Apple App Store organization account.
            </p>
          </div>
        </div>

        <div class="p-8 rounded-lg bg-term-deep border-2 border-term-acc flex flex-col justify-between relative">
          <div class="absolute -top-3 right-6 font-mono text-[10px] uppercase font-semibold bg-term-acc text-term-deep px-2.5 py-0.5 rounded">
            Community Commitment
          </div>
          <div>
            <div class="font-mono text-xs text-term-acc uppercase mb-2">100% Fee Waiver Guarantee</div>
            <div class="text-3xl font-mono text-term-fg font-medium mb-1">$0<span class="text-base text-term-dim">/eligible org</span></div>
            <div class="text-xs font-mono text-term-acc mb-4">Subsidized by Donor Fund</div>
            <p class="font-sans text-sm text-term-mid leading-relaxed">
              Any community 501(c)(3) or fiscally sponsored group unable to cover compute costs is granted full fee waivers. No organization is turned away due to lack of funds.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Eligibility Check ("Who We Support") -->
    <section class="max-w-7xl mx-auto px-6 sm:px-10 py-16 border-b border-term-line">
      <div class="font-mono text-xs text-term-acc uppercase tracking-widest mb-3">Eligibility &amp; Fit</div>
      <h2 class="text-2xl sm:text-3xl font-sans font-semibold text-term-fg mb-8">
        Who We Are Built to Support
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-6 rounded-lg bg-term-card/40 border border-term-line">
          <h3 class="text-lg font-sans font-semibold text-term-fg mb-4 flex items-center gap-2">
            <span class="text-term-acc font-mono">&check;</span> Excellent Fit
          </h3>
          <ul class="space-y-3 font-sans text-sm text-term-mid leading-relaxed">
            <li class="flex items-start gap-2">
              <span class="text-term-acc">&bull;</span>
              <span>Registered 501(c)(3) public charities or fiscally sponsored mission initiatives.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-term-acc">&bull;</span>
              <span>Small-to-midsize staff without in-house software engineers.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-term-acc">&bull;</span>
              <span>Custom web applications, intake portals, or volunteer systems vital to community operations.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-term-acc">&bull;</span>
              <span>Able to designate one responsive administrative staff member as the primary liaison.</span>
            </li>
          </ul>
        </div>

        <div class="p-6 rounded-lg bg-term-deep border border-term-line">
          <h3 class="text-lg font-sans font-semibold text-term-dim mb-4 flex items-center gap-2">
            <span class="text-term-warn font-mono">&times;</span> Outside Our Scope
          </h3>
          <ul class="space-y-3 font-sans text-sm text-term-mid leading-relaxed">
            <li class="flex items-start gap-2">
              <span class="text-term-warn">&bull;</span>
              <span>For-profit businesses or commercial SaaS ventures.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-term-warn">&bull;</span>
              <span>Applications handling direct credit card storage (PCI) or HIPAA-regulated medical records.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-term-warn">&bull;</span>
              <span>General desktop IT troubleshooting, printer configuration, or office hardware repair.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-term-warn">&bull;</span>
              <span>High-frequency enterprise contracts requiring guaranteed 15-minute response SLAs.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Bottom CTA Banner -->
    <section class="bg-term-card py-16 px-6 sm:px-10">
      <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
        <div>
          <h3 class="text-2xl sm:text-3xl font-sans font-semibold text-term-fg mb-2">
            Tell us what's breaking — or what you need built.
          </h3>
          <p class="font-sans text-term-mid text-sm max-w-xl leading-relaxed">
            One straightforward intake form. A technical lead will review your request and reply within two business days.
          </p>
        </div>
        <NuxtLink to="/support" class="shrink-0 font-sans font-medium text-sm text-term-deep bg-term-acc px-6 py-3.5 rounded hover:bg-term-accHi transition-colors shadow-sm">
          Request Support &rarr;
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Services & Transparent Pricing — NPTS',
  ogTitle: 'Services & Transparent Pricing — NPTS',
  description: 'Managed application hosting, ongoing maintenance, Fractional CTO leadership, and student capstone scoping with 100% community fee waivers.',
  ogDescription: 'Managed application hosting, ongoing maintenance, Fractional CTO leadership, and student capstone scoping with 100% community fee waivers.',
});
</script>
