<template>
  <div class="bg-term-bg text-term-fg">
    <!-- Header -->
    <section class="max-w-7xl mx-auto px-6 sm:px-10 pt-16 pb-12 border-b border-term-line">
      <div class="flex items-center gap-3 mb-4 font-mono text-xs text-term-acc uppercase tracking-widest">
        <span class="h-px w-6 bg-term-acc"></span>
        Program Architecture
      </div>
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-sans font-semibold tracking-tight text-term-fg max-w-3xl leading-[1.1] mb-6">
        Students build it. We keep it running. Everyone gains a track record.
      </h1>
      <p class="text-lg text-term-mid font-sans leading-relaxed max-w-3xl">
        Most student software dies at the end of the semester. We exist in the gap: we mentor teams through the build, then formally adopt the resulting codebase so community nonprofits can permanently rely on it.
      </p>
    </section>

    <!-- Section 1: Experiential Learning Partnerships -->
    <section class="max-w-7xl mx-auto px-6 sm:px-10 py-16 border-b border-term-line">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div class="lg:col-span-5">
          <div class="font-mono text-xs text-term-acc uppercase tracking-widest mb-3">University Collaborations</div>
          <h2 class="text-2xl sm:text-3xl font-sans font-semibold text-term-fg mb-4 leading-snug">
            Bridging academic capstones and live production realities.
          </h2>
          <p class="text-term-mid font-sans text-sm sm:text-base leading-relaxed mb-4">
            Today, our primary academic collaboration is with <a href="https://epics.utdallas.edu" target="_blank" rel="noopener" class="text-term-acc hover:underline font-medium">UTDesign EPICS</a> at the University of Texas at Dallas, where multi-disciplinary student teams build software for community organizations.
          </p>
          <p class="text-term-mid font-sans text-sm sm:text-base leading-relaxed mb-6">
            We sit on both sides of the handshake: helping faculty scope achievable semester goals, reviewing architecture weekly, and adopting the system post-graduation.
          </p>
          <NuxtLink to="/support" class="inline-flex items-center gap-2 text-sm font-sans font-medium text-term-deep bg-term-acc px-5 py-2.5 rounded hover:bg-term-accHi transition-colors">
            Partner Your Academic Program &rarr;
          </NuxtLink>
        </div>

        <div class="lg:col-span-7 space-y-4 font-sans">
          <div class="p-6 rounded-lg bg-term-card/60 border border-term-line">
            <div class="font-mono text-xs text-term-acc uppercase tracking-wider mb-2">For the University &amp; Faculty</div>
            <h3 class="text-base font-semibold text-term-fg mb-2">Industry Code Reviews &amp; Production Environments</h3>
            <p class="text-sm text-term-mid leading-relaxed">
              We provide students with safe, isolated CI/CD staging environments, enforce automated linting/tests, and run pull-request reviews so faculty don't have to carry grading and deployment infrastructure alone.
            </p>
          </div>

          <div class="p-6 rounded-lg bg-term-card/60 border border-term-line">
            <div class="font-mono text-xs text-term-info uppercase tracking-wider mb-2">For the Nonprofit Partner</div>
            <h3 class="text-base font-semibold text-term-fg mb-2">Feasible Scopes &amp; Guaranteed Post-Graduation Hosting</h3>
            <p class="text-sm text-term-mid leading-relaxed">
              We prevent students from over-promising unachievable AI or mobile features. At semester conclusion, our senior engineers adopt the codebase, domain, and backups with zero abandoned software.
            </p>
          </div>

          <div class="p-6 rounded-lg bg-term-card/60 border border-term-line">
            <div class="font-mono text-xs text-term-warn uppercase tracking-wider mb-2">For the Student Engineer</div>
            <h3 class="text-base font-semibold text-term-fg mb-2">Consequential Code &amp; Verified Industry References</h3>
            <p class="text-sm text-term-mid leading-relaxed">
              Students graduate with verifiable Git commits serving real daily users, direct mentorship from senior engineers, and a direct recruitment pipeline into NPTS internships and junior leadership roles.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2: The 5-Stage Project Lifecycle -->
    <section class="max-w-7xl mx-auto px-6 sm:px-10 py-16 border-b border-term-line">
      <div class="mb-12">
        <div class="font-mono text-xs text-term-acc uppercase tracking-widest mb-3">Operating Lifecycle</div>
        <h2 class="text-3xl font-sans font-semibold text-term-fg mb-3">
          How a Project Becomes Permanent Infrastructure
        </h2>
        <p class="text-term-mid font-sans text-base max-w-2xl">
          A structured five-phase pipeline engineered to eliminate the "semester cliff" where student software traditionally gets abandoned.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-5 gap-4 font-mono">
        <div class="p-6 rounded-lg bg-term-card/60 border border-term-line flex flex-col justify-between">
          <div>
            <div class="text-2xl text-term-acc font-semibold mb-3">01</div>
            <h3 class="font-sans text-base font-semibold text-term-fg mb-2">Scoping</h3>
            <p class="font-sans text-xs text-term-mid leading-relaxed">
              We translate the nonprofit's manual workflow into an achievable 1-to-2 semester technical specification with realistic database models.
            </p>
          </div>
          <div class="text-[11px] text-term-dim pt-4 mt-4 border-t border-term-line font-sans">
            Weeks 1–3 of Semester
          </div>
        </div>

        <div class="p-6 rounded-lg bg-term-card/60 border border-term-line flex flex-col justify-between">
          <div>
            <div class="text-2xl text-term-acc font-semibold mb-3">02</div>
            <h3 class="font-sans text-base font-semibold text-term-fg mb-2">Build &amp; Review</h3>
            <p class="font-sans text-xs text-term-mid leading-relaxed">
              Student teams write code while NPTS engineers conduct weekly PR reviews, enforcing security, automated testing, and clean architecture.
            </p>
          </div>
          <div class="text-[11px] text-term-dim pt-4 mt-4 border-t border-term-line font-sans">
            Mid-Semester Sprints
          </div>
        </div>

        <div class="p-6 rounded-lg bg-term-card/60 border border-term-line flex flex-col justify-between">
          <div>
            <div class="text-2xl text-term-acc font-semibold mb-3">03</div>
            <h3 class="font-sans text-base font-semibold text-term-fg mb-2">Adoption</h3>
            <p class="font-sans text-xs text-term-mid leading-relaxed">
              Repositories, DNS records, isolated production containers, and nightly encrypted backup schedules transfer to NPTS in &lt; 14 days.
            </p>
          </div>
          <div class="text-[11px] text-term-dim pt-4 mt-4 border-t border-term-line font-sans">
            Post-Graduation Handoff
          </div>
        </div>

        <div class="p-6 rounded-lg bg-term-card/60 border border-term-line flex flex-col justify-between">
          <div>
            <div class="text-2xl text-term-acc font-semibold mb-3">04</div>
            <h3 class="font-sans text-base font-semibold text-term-fg mb-2">Staff Training</h3>
            <p class="font-sans text-xs text-term-mid leading-relaxed">
              Nonprofit operators receive concise, human-readable runbooks and video documentation to manage daily administrative tasks with confidence.
            </p>
          </div>
          <div class="text-[11px] text-term-dim pt-4 mt-4 border-t border-term-line font-sans">
            Operator Empowerment
          </div>
        </div>

        <div class="p-6 rounded-lg bg-term-card/60 border border-term-line flex flex-col justify-between">
          <div>
            <div class="text-2xl text-term-acc font-semibold mb-3">05</div>
            <h3 class="font-sans text-base font-semibold text-term-fg mb-2">Stewardship</h3>
            <p class="font-sans text-xs text-term-mid leading-relaxed">
              Continuous security patching, automated uptime monitoring, and 24-hour outage response continue permanently under NPTS stewardship.
            </p>
          </div>
          <div class="text-[11px] text-term-dim pt-4 mt-4 border-t border-term-line font-sans">
            Ongoing Continuity
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3: Leadership & Learning Tracks -->
    <section class="max-w-7xl mx-auto px-6 sm:px-10 py-16 border-b border-term-line">
      <div class="mb-12">
        <div class="font-mono text-xs text-term-acc uppercase tracking-widest mb-3">Student Development Tracks</div>
        <h2 class="text-3xl font-sans font-semibold text-term-fg mb-3">
          Growing Engineers into Technical Leaders
        </h2>
        <p class="text-term-mid font-sans text-base max-w-2xl">
          The top engineering students from university capstone programs advance into structured internal tracks with increasing levels of autonomy and strategic responsibility.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="p-8 rounded-lg bg-term-card/50 border border-term-line flex flex-col justify-between">
          <div>
            <div class="inline-block text-[11px] font-mono uppercase tracking-wider text-term-acc bg-term-deep px-2 py-0.5 rounded border border-term-line mb-4">
              Full-Stack Engineering
            </div>
            <h3 class="text-xl font-sans font-semibold text-term-fg mb-3">Engineering Internships</h3>
            <p class="text-sm text-term-mid font-sans leading-relaxed mb-4">
              Interns own live partner applications end to end. You design PostgreSQL schemas, build responsive Vue/Nuxt interfaces, and resolve production bugs under the guidance of senior technical leads.
            </p>
          </div>
          <NuxtLink to="/careers" class="text-sm font-medium text-term-acc hover:text-term-accHi transition-colors pt-4 border-t border-term-line">
            View Intern Roles &rarr;
          </NuxtLink>
        </div>

        <div class="p-8 rounded-lg bg-term-card/50 border border-term-line flex flex-col justify-between">
          <div>
            <div class="inline-block text-[11px] font-mono uppercase tracking-wider text-term-info bg-term-deep px-2 py-0.5 rounded border border-term-line mb-4">
              Systems Leadership
            </div>
            <h3 class="text-xl font-sans font-semibold text-term-fg mb-3">Junior Fractional CTO Track</h3>
            <p class="text-sm text-term-mid font-sans leading-relaxed mb-4">
              Advanced students learn systems stewardship: conducting partner tool audits, managing domain/vendor relationships, assessing cybersecurity posture, and drafting quarterly technology roadmaps.
            </p>
          </div>
          <NuxtLink to="/careers" class="text-sm font-medium text-term-acc hover:text-term-accHi transition-colors pt-4 border-t border-term-line">
            Learn About the CTO Track &rarr;
          </NuxtLink>
        </div>

        <div class="p-8 rounded-lg bg-term-card/50 border border-term-line flex flex-col justify-between">
          <div>
            <div class="inline-block text-[11px] font-mono uppercase tracking-wider text-term-warn bg-term-deep px-2 py-0.5 rounded border border-term-line mb-4">
              Mentorship &amp; Review
            </div>
            <h3 class="text-xl font-sans font-semibold text-term-fg mb-3">Capstone Student Mentors</h3>
            <p class="text-sm text-term-mid font-sans leading-relaxed mb-4">
              Alumni and seasoned student leads coach active undergraduate capstone teams, leading weekly pull-request reviews, teaching git etiquette, and coaching agile project delivery.
            </p>
          </div>
          <NuxtLink to="/careers" class="text-sm font-medium text-term-acc hover:text-term-accHi transition-colors pt-4 border-t border-term-line">
            Become a Mentor &rarr;
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Dual Call-to-Action Grid -->
    <section class="max-w-7xl mx-auto px-6 sm:px-10 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-term-line rounded-lg border border-term-line bg-term-card/30">
        <div class="p-8 sm:p-12">
          <div class="font-mono text-xs text-term-acc uppercase tracking-widest mb-3">For Nonprofit Leaders</div>
          <h3 class="text-2xl font-sans font-semibold text-term-fg mb-3">
            Have a problem a student team could solve?
          </h3>
          <p class="text-term-mid font-sans text-sm leading-relaxed mb-6">
            Bring us your organizational bottleneck. We will evaluate whether an experiential learning team can build a durable, production-ready solution.
          </p>
          <NuxtLink to="/support" class="inline-flex items-center gap-2 font-sans font-medium text-sm text-term-deep bg-term-acc px-5 py-2.5 rounded hover:bg-term-accHi transition-colors">
            Request Project Scoping &rarr;
          </NuxtLink>
        </div>

        <div class="p-8 sm:p-12">
          <div class="font-mono text-xs text-term-info uppercase tracking-widest mb-3">For University Programs</div>
          <h3 class="text-2xl font-sans font-semibold text-term-fg mb-3">
            Run an experiential engineering program?
          </h3>
          <p class="text-term-mid font-sans text-sm leading-relaxed mb-6">
            Partner with NPTS to provide your students with code mentorship, safe CI/CD environments, and a permanent adoption home for finished software.
          </p>
          <NuxtLink to="/support" class="inline-flex items-center gap-2 font-sans font-medium text-term-fg border border-term-rule px-5 py-2.5 rounded hover:border-term-acc hover:text-term-acc transition-colors">
            Start a Program Conversation &rarr;
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Experiential Learning & Capstone Programs — NPTS',
  ogTitle: 'Experiential Learning & Capstone Programs — NPTS',
  description: 'How NPTS partners with university engineering programs (like UTDesign EPICS) to mentor student teams and adopt software into permanent production.',
  ogDescription: 'How NPTS partners with university engineering programs (like UTDesign EPICS) to mentor student teams and adopt software into permanent production.',
});
</script>
