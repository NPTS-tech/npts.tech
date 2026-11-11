<template>
  <div class="bg-term-bg text-term-fg font-mono">
    <div class="px-10 pt-[76px] pb-14 border-b border-term-line">
      <div class="text-base text-term-acc tracking-[0.1em] mb-6">[ PROGRAMS ]</div>
      <h1 class="text-[52px] leading-[1.08] font-medium m-0 mb-6 -tracking-[0.02em] max-w-[26ch] text-pretty">Students build it. We keep it alive.</h1>
      <p class="font-sans text-[19px] leading-[1.6] text-term-mid m-0 max-w-[64ch] text-pretty">Most student software dies at the end of the semester. We exist to bridge that gap: we mentor the teams building it, then take ownership so the nonprofit on the other end can rely on it.</p>
    </div>
    <div class="px-10 py-[68px] border-b border-term-line">
      <div class="text-base text-term-acc tracking-[0.1em] mb-8">[ EXPERIENTIAL LEARNING PARTNERSHIPS ]</div>
      <div class="max-w-[64ch]">
          <h2 class="text-[30px] font-medium leading-[1.2] m-0 mb-5">We work with UTDesign EPICS.</h2>
          <p class="font-sans text-base leading-[1.65] text-term-mid m-0 mb-5">At UT Dallas, <a href="https://epics.utdallas.edu" class="text-term-acc border-b border-term-acc/40">UTDesign EPICS</a> student teams build web and mobile applications for community organizations. We support each project from start to finish: we help scope work the team can actually finish, review the code as it's written, and take over the finished project.</p>
          <p class="font-sans text-base leading-[1.65] text-term-mid m-0">That way, a project doesn't go dark after final presentations. The nonprofit keeps a tool it can rely on.</p>
      </div>
    </div>
    <div class="px-10 py-[68px] border-b border-term-line">
      <div class="text-base text-term-acc tracking-[0.1em] mb-8">[ INTERNSHIPS &amp; VOLUNTEERING ]</div>
      <div class="grid grid-cols-[1fr_1fr] gap-16">
        <div>
          <h2 class="text-[30px] font-medium leading-[1.2] m-0 mb-5">EPICS students can keep building with us.</h2>
          <p class="font-sans text-base leading-[1.65] text-term-mid m-0 mb-6">Interns and volunteers take on live partner projects and our internal systems. You'll own something real, review other people's code, and mentor the students coming up behind you.</p>
          <NuxtLink to="/careers" class="text-sm font-semibold text-term-bg bg-term-acc px-5 py-3 inline-block hover:bg-term-accHi">See open positions →</NuxtLink>
        </div>
        <div class="grid grid-cols-1 gap-px bg-term-line border border-term-line">
          <div class="bg-term-bg px-7 py-5">
            <h4 class="m-0 mb-2 text-[15px] font-semibold">Real production experience</h4>
            <p class="font-sans m-0 text-sm leading-[1.6] text-term-mid">Work on systems with real users and real consequences — not a sandbox exercise.</p>
          </div>
          <div class="bg-term-bg px-7 py-5">
            <h4 class="m-0 mb-2 text-[15px] font-semibold">Leadership practice</h4>
            <p class="font-sans m-0 text-sm leading-[1.6] text-term-mid">Mentor current capstone students. Running a review is a skill you can't fake later.</p>
          </div>
          <div class="bg-term-bg px-7 py-5">
            <h4 class="m-0 mb-2 text-[15px] font-semibold">A professional network</h4>
            <p class="font-sans m-0 text-sm leading-[1.6] text-term-mid">We introduce alumni to hiring partners. Closing that loop is part of the mission.</p>
          </div>
        </div>
      </div>
    </div>
    <SponsorBanner />
  </div>
</template>
