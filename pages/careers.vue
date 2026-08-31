<template>
  <div class="bg-term-bg text-term-fg">
    <!-- Header -->
    <section class="max-w-7xl mx-auto px-6 sm:px-10 pt-16 pb-12 border-b border-term-line">
      <div class="flex items-center gap-3 mb-4 font-mono text-xs text-term-acc uppercase tracking-widest">
        <span class="h-px w-6 bg-term-acc"></span>
        Student &amp; Mentor Pipeline
      </div>
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-sans font-semibold tracking-tight text-term-fg max-w-3xl leading-[1.1] mb-6">
        Ship software people depend on. Before you graduate.
      </h1>
      <p class="text-lg text-term-mid font-sans leading-relaxed max-w-3xl">
        Most student projects die in a GitHub repo. At NPTS, your commits go straight to production for organizations serving real people every day — with rigorous code review from senior tech leads.
      </p>
    </section>

    <!-- Open Roles Grid -->
    <section class="max-w-7xl mx-auto px-6 sm:px-10 py-16 border-b border-term-line">
      <div class="flex flex-col md:flex-row md:items-baseline justify-between mb-10 gap-4">
        <div>
          <div class="font-mono text-xs text-term-acc uppercase tracking-widest mb-2">Active Openings</div>
          <h2 class="text-3xl font-sans font-semibold text-term-fg">
            Student Internships &amp; Volunteer Roles
          </h2>
        </div>
        <div class="font-mono text-xs text-term-dim">
          Rolling Applications · Remote-First (DFW Preferred)
        </div>
      </div>

      <div class="space-y-4 font-mono">
        <!-- Role 1: Full-Stack Intern -->
        <div class="p-6 sm:p-8 rounded-lg bg-term-card/60 border border-term-line hover:border-term-acc transition-colors flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div class="max-w-3xl">
            <div class="flex flex-wrap items-center gap-3 mb-2">
              <h3 class="text-xl font-sans font-semibold text-term-fg">Full-Stack Engineering Intern</h3>
              <span class="text-xs px-2.5 py-0.5 rounded bg-term-deep border border-term-acc text-term-acc font-semibold">Stipend Available</span>
            </div>
            <p class="font-sans text-sm text-term-mid leading-relaxed mb-3">
              Own features and bug fixes on live partner applications end to end. You will write PostgreSQL migrations, design Vue/Nuxt interfaces, write tests, and participate in incident response rotations.
            </p>
            <div class="text-xs text-term-dim font-sans">
              10–15 hrs/week · One semester minimum · TypeScript, PostgreSQL, Nuxt / React, Docker
            </div>
          </div>
          <NuxtLink to="/support" class="shrink-0 font-sans font-medium text-sm text-term-deep bg-term-acc px-5 py-2.5 rounded hover:bg-term-accHi transition-colors">
            Apply for Role &rarr;
          </NuxtLink>
        </div>

        <!-- Role 2: Junior Fractional CTO -->
        <div class="p-6 sm:p-8 rounded-lg bg-term-card/60 border border-term-line hover:border-term-acc transition-colors flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div class="max-w-3xl">
            <div class="flex flex-wrap items-center gap-3 mb-2">
              <h3 class="text-xl font-sans font-semibold text-term-fg">Junior Fractional CTO (Co-op Track)</h3>
              <span class="text-xs px-2.5 py-0.5 rounded bg-term-deep border border-term-info text-term-info font-semibold">Leadership Track</span>
            </div>
            <p class="font-sans text-sm text-term-mid leading-relaxed mb-3">
              Learn high-level software management. Audit partner systems, map domain/hosting dependencies, review access control policies, and produce quarterly technical roadmaps under mentor direction.
            </p>
            <div class="text-xs text-term-dim font-sans">
              5–8 hrs/week · Systems architecture, security review, client communication &amp; scoping
            </div>
          </div>
          <NuxtLink to="/support" class="shrink-0 font-sans font-medium text-sm text-term-fg border border-term-rule px-5 py-2.5 rounded hover:border-term-acc hover:text-term-acc transition-colors">
            Apply for Role &rarr;
          </NuxtLink>
        </div>

        <!-- Role 3: Infrastructure & On-Call -->
        <div class="p-6 sm:p-8 rounded-lg bg-term-card/60 border border-term-line hover:border-term-acc transition-colors flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div class="max-w-3xl">
            <div class="flex flex-wrap items-center gap-3 mb-2">
              <h3 class="text-xl font-sans font-semibold text-term-fg">Infrastructure &amp; On-Call Volunteer</h3>
              <span class="text-xs px-2.5 py-0.5 rounded bg-term-deep border border-term-line text-term-dim">Volunteer</span>
            </div>
            <p class="font-sans text-sm text-term-mid leading-relaxed mb-3">
              Maintain the host platform for all 14+ partner systems: CI/CD deployment pipelines, automated monitoring, encrypted backups, and disaster recovery restore testing.
            </p>
            <div class="text-xs text-term-dim font-sans">
              5–10 hrs/week · Shared rotation (never alone on call) · Linux, Docker, Bash, GitHub Actions
            </div>
          </div>
          <NuxtLink to="/support" class="shrink-0 font-sans font-medium text-sm text-term-fg border border-term-rule px-5 py-2.5 rounded hover:border-term-acc hover:text-term-acc transition-colors">
            Apply for Role &rarr;
          </NuxtLink>
        </div>

        <!-- Role 4: Capstone Student Mentor -->
        <div class="p-6 sm:p-8 rounded-lg bg-term-card/60 border border-term-line hover:border-term-acc transition-colors flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div class="max-w-3xl">
            <div class="flex flex-wrap items-center gap-3 mb-2">
              <h3 class="text-xl font-sans font-semibold text-term-fg">Capstone Student Mentor</h3>
              <span class="text-xs px-2.5 py-0.5 rounded bg-term-deep border border-term-line text-term-dim">Volunteer / Alumni</span>
            </div>
            <p class="font-sans text-sm text-term-mid leading-relaxed mb-3">
              Guide an active university capstone team (like UTDesign EPICS): run weekly check-ins, conduct code reviews, and help students maintain realistic architectural scope.
            </p>
            <div class="text-xs text-term-dim font-sans">
              3–5 hrs/week · One semester commitment · Prior experience shipping production software
            </div>
          </div>
          <NuxtLink to="/support" class="shrink-0 font-sans font-medium text-sm text-term-fg border border-term-rule px-5 py-2.5 rounded hover:border-term-acc hover:text-term-acc transition-colors">
            Apply for Role &rarr;
          </NuxtLink>
        </div>

        <!-- Role 5: General Contributor -->
        <div class="p-6 sm:p-8 rounded-lg bg-term-deep border border-dashed border-term-rule flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div class="max-w-3xl">
            <h3 class="text-xl font-sans font-semibold text-term-fg mb-1">Open Application (UI/UX, Docs, Grants)</h3>
            <p class="font-sans text-sm text-term-mid leading-relaxed">
              We always need technical writers, product designers, and grant coordinators. Tell us what you're great at and how many hours you can contribute.
            </p>
          </div>
          <NuxtLink to="/support" class="shrink-0 font-sans font-medium text-sm text-term-acc border border-term-line px-5 py-2.5 rounded hover:border-term-acc transition-colors">
            Get In Touch &rarr;
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- What You Get vs What We Expect -->
    <section class="max-w-7xl mx-auto px-6 sm:px-10 py-16 border-b border-term-line">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div class="p-8 rounded-lg bg-term-card/40 border border-term-line">
          <div class="font-mono text-xs text-term-acc uppercase tracking-widest mb-3">Value Proposition</div>
          <h3 class="text-2xl font-sans font-semibold text-term-fg mb-6">What You Gain at NPTS</h3>
          <ul class="space-y-4 font-sans text-sm text-term-mid leading-relaxed">
            <li class="flex items-start gap-3">
              <span class="text-term-acc font-mono text-base">&check;</span>
              <div><strong class="text-term-fg">Verifiable Production Commits:</strong> Work with real users, live databases, and production deployments you can demonstrate in job interviews.</div>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-term-acc font-mono text-base">&check;</span>
              <div><strong class="text-term-fg">Rigorous Code Reviews:</strong> Learn software craftsmanship from working senior architects who review every PR.</div>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-term-acc font-mono text-base">&check;</span>
              <div><strong class="text-term-fg">Named Professional References:</strong> Technical leadership willing to take calls from corporate recruiters and hiring managers.</div>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-term-acc font-mono text-base">&check;</span>
              <div><strong class="text-term-fg">Hiring Partner Network:</strong> Direct introductions to tech companies seeking verified early-career engineering talent.</div>
            </li>
          </ul>
        </div>

        <div class="p-8 rounded-lg bg-term-deep border border-term-line">
          <div class="font-mono text-xs text-term-warn uppercase tracking-widest mb-3">Commitment Standards</div>
          <h3 class="text-2xl font-sans font-semibold text-term-fg mb-6">What We Expect From You</h3>
          <ul class="space-y-4 font-sans text-sm text-term-mid leading-relaxed">
            <li class="flex items-start gap-3">
              <span class="text-term-warn font-mono text-base">&bull;</span>
              <div><strong class="text-term-fg">Full Semester Reliability:</strong> Show up consistently for the entire term you committed to.</div>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-term-warn font-mono text-base">&bull;</span>
              <div><strong class="text-term-fg">Proactive Communication:</strong> Ask for unblocking help before deadlines, never after.</div>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-term-warn font-mono text-base">&bull;</span>
              <div><strong class="text-term-fg">Partner Data Privacy:</strong> Treat partner databases and community records with strict confidentiality and security.</div>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-term-warn font-mono text-base">&bull;</span>
              <div><strong class="text-term-fg">Clear Documentation:</strong> Leave clean runbooks and comments so the next engineering cohort can build on your work.</div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 4-Step Hiring & Onboarding Flow -->
    <section class="max-w-7xl mx-auto px-6 sm:px-10 py-16 border-b border-term-line">
      <div class="mb-10">
        <div class="font-mono text-xs text-term-acc uppercase tracking-widest mb-3">Recruitment Process</div>
        <h2 class="text-3xl font-sans font-semibold text-term-fg mb-3">
          How We Onboard Engineers
        </h2>
        <p class="text-term-mid font-sans text-sm sm:text-base max-w-2xl">
          No generic cover letters or abstract leetcode puzzles. We care about software you've built and how you reason through real bugs.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 font-mono">
        <div class="p-6 rounded-lg bg-term-card/60 border border-term-line flex flex-col justify-between">
          <div>
            <div class="text-2xl text-term-acc font-semibold mb-3">01</div>
            <h4 class="font-sans text-base font-semibold text-term-fg mb-1">Submit Profile</h4>
            <p class="font-sans text-xs text-term-mid leading-relaxed">
              Share a short summary and links to your GitHub or projects you've deployed.
            </p>
          </div>
          <div class="text-[11px] text-term-dim pt-4 mt-4 border-t border-term-line font-sans">
            Step 1 · Online Form
          </div>
        </div>

        <div class="p-6 rounded-lg bg-term-card/60 border border-term-line flex flex-col justify-between">
          <div>
            <div class="text-2xl text-term-acc font-semibold mb-3">02</div>
            <h4 class="font-sans text-base font-semibold text-term-fg mb-1">Technical Chat</h4>
            <p class="font-sans text-xs text-term-mid leading-relaxed">
              A 30-minute discussion about how you built previous apps and how you fixed stubborn issues.
            </p>
          </div>
          <div class="text-[11px] text-term-dim pt-4 mt-4 border-t border-term-line font-sans">
            Step 2 · 30 Minutes
          </div>
        </div>

        <div class="p-6 rounded-lg bg-term-card/60 border border-term-line flex flex-col justify-between">
          <div>
            <div class="text-2xl text-term-acc font-semibold mb-3">03</div>
            <h4 class="font-sans text-base font-semibold text-term-fg mb-1">Pairing Session</h4>
            <p class="font-sans text-xs text-term-mid leading-relaxed">
              Collaborative debug session working through a real issue or architectural challenge together.
            </p>
          </div>
          <div class="text-[11px] text-term-dim pt-4 mt-4 border-t border-term-line font-sans">
            Step 3 · Real Context
          </div>
        </div>

        <div class="p-6 rounded-lg bg-term-card/60 border border-term-line flex flex-col justify-between">
          <div>
            <div class="text-2xl text-term-acc font-semibold mb-3">04</div>
            <h4 class="font-sans text-base font-semibold text-term-fg mb-1">Scoped Onboarding</h4>
            <p class="font-sans text-xs text-term-mid leading-relaxed">
              Role-scoped production access, assigned mentor, and your first PR assigned in week one.
            </p>
          </div>
          <div class="text-[11px] text-term-dim pt-4 mt-4 border-t border-term-line font-sans">
            Step 4 · Active Reps
          </div>
        </div>
      </div>

      <div class="mt-6 p-4 rounded bg-term-deep border border-term-line text-xs font-mono text-term-dim text-center">
        Security Notice: No student is granted unsupervised access to partner production data. Access is role-scoped, audited, and revoked upon term completion.
      </div>
    </section>

    <!-- Bottom CTA Banner -->
    <section class="bg-term-card py-16 px-6 sm:px-10">
      <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
        <div>
          <h3 class="text-2xl sm:text-3xl font-sans font-semibold text-term-fg mb-2">
            Ready to build consequential software?
          </h3>
          <p class="font-sans text-term-mid text-sm max-w-xl leading-relaxed">
            We review candidate profiles on a weekly rolling basis. Tell us what you want to build and learn.
          </p>
        </div>
        <NuxtLink to="/support" class="shrink-0 font-sans font-medium text-sm text-term-deep bg-term-acc px-6 py-3.5 rounded hover:bg-term-accHi transition-colors shadow-sm">
          Submit Your Application &rarr;
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Student Internships & Mentorship Roles — NPTS',
  ogTitle: 'Student Internships & Mentorship Roles — NPTS',
  description: 'Ship software people depend on before you graduate. Explore full-stack internships, Junior CTO tracks, on-call volunteering, and mentorship openings.',
  ogDescription: 'Ship software people depend on before you graduate. Explore full-stack internships, Junior CTO tracks, on-call volunteering, and mentorship openings.',
});
</script>
