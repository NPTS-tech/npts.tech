<template>
  <div class="bg-term-bg text-term-fg font-mono">
    <div class="px-5 md:px-10 pt-14 md:pt-[76px] pb-12 md:pb-14 border-b border-term-line">
      <div class="text-[13px] md:text-base text-term-acc tracking-[0.1em] mb-6">[ PROGRAMS ]</div>
      <h1 class="text-[34px] md:text-[52px] leading-[1.08] font-medium m-0 mb-6 -tracking-[0.02em] max-w-[26ch] text-pretty">Software that keeps working for nonprofits.</h1>
      <p class="font-sans text-[17px] md:text-[19px] leading-[1.6] text-term-mid m-0 max-w-[64ch] text-pretty">Nonprofits often rely on software built by student teams and volunteers, and it can stop working once the people who built it move on. NPTS hosts and supports that software for the long term, and gives students real-world experience along the way.</p>
    </div>
    <div class="px-5 md:px-10 py-14 md:py-[68px] border-b border-term-line">
      <div class="text-[13px] md:text-base text-term-acc tracking-[0.1em] mb-8">[ HOSTING &amp; LONG-TERM SUPPORT ]</div>
      <div class="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16">
        <div>
          <h2 class="text-[26px] md:text-[30px] font-medium leading-[1.2] m-0 mb-5">For the nonprofits we partner with.</h2>
          <p class="font-sans text-base leading-[1.65] text-term-mid m-0 mb-5">NPTS provides hosting and long-term support for software built for nonprofits by experiential learning programs. We help shape each project so it can be finished, review the work as it is built, and take over the finished application.</p>
          <p class="font-sans text-base leading-[1.65] text-term-mid m-0 mb-6">That way, a project doesn't go dark when a semester or a volunteer's time ends. Our partner projects include applications started by student teams at UTDesign EPICS, as well as projects NPTS develops and maintains directly.</p>
          <NuxtLink to="/support" class="text-sm font-semibold text-term-bg bg-term-acc px-5 py-3 inline-block hover:bg-term-accHi">Get in touch →</NuxtLink>
        </div>
        <div class="grid grid-cols-1 gap-px bg-term-line border border-term-line self-start">
          <div class="bg-term-bg px-6 md:px-7 py-5">
            <h4 class="m-0 mb-2 text-[15px] font-semibold">Application hosting</h4>
            <p class="font-sans m-0 text-sm leading-[1.6] text-term-mid">A stable home for the software, so it stays online for staff and the people they serve.</p>
          </div>
          <div class="bg-term-bg px-6 md:px-7 py-5">
            <h4 class="m-0 mb-2 text-[15px] font-semibold">Ongoing maintenance</h4>
            <p class="font-sans m-0 text-sm leading-[1.6] text-term-mid">Fixes and updates after launch, so each application stays reliable and in use.</p>
          </div>
          <div class="bg-term-bg px-6 md:px-7 py-5">
            <h4 class="m-0 mb-2 text-[15px] font-semibold">A team you can reach</h4>
            <p class="font-sans m-0 text-sm leading-[1.6] text-term-mid">A responsive team that supports you every step of the way and explains the technical side in plain language.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="px-5 md:px-10 py-14 md:py-[68px] border-b border-term-line">
      <div class="text-[13px] md:text-base text-term-acc tracking-[0.1em] mb-8">[ INTERNSHIPS &amp; VOLUNTEERING ]</div>
      <div class="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16">
        <div>
          <h2 class="text-[26px] md:text-[30px] font-medium leading-[1.2] m-0 mb-5">Keep building after the semester ends.</h2>
          <p class="font-sans text-base leading-[1.65] text-term-mid m-0 mb-6">Students from the experiential learning programs we work with can volunteer or intern with NPTS. Interns and volunteers take on live partner projects and our internal systems: you'll own something real, review other people's code, and help the students coming up behind you.</p>
          <NuxtLink to="/careers#interest-form" class="text-sm font-semibold text-term-bg bg-term-acc px-5 py-3 inline-block hover:bg-term-accHi">Get involved →</NuxtLink>
        </div>
        <div class="grid grid-cols-1 gap-px bg-term-line border border-term-line self-start">
          <div class="bg-term-bg px-6 md:px-7 py-5">
            <h4 class="m-0 mb-2 text-[15px] font-semibold">Real production experience</h4>
            <p class="font-sans m-0 text-sm leading-[1.6] text-term-mid">Work on systems with real users and real consequences — not a sandbox exercise.</p>
          </div>
          <div class="bg-term-bg px-6 md:px-7 py-5">
            <h4 class="m-0 mb-2 text-[15px] font-semibold">Leadership practice</h4>
            <p class="font-sans m-0 text-sm leading-[1.6] text-term-mid">Mentor students on active projects. Running a review is a skill you can't fake later.</p>
          </div>
          <div class="bg-term-bg px-6 md:px-7 py-5">
            <h4 class="m-0 mb-2 text-[15px] font-semibold">Work that serves the community</h4>
            <p class="font-sans m-0 text-sm leading-[1.6] text-term-mid">The software you maintain keeps nonprofits running, and you'll leave with shipped work you can point to.</p>
          </div>
        </div>
      </div>
    </div>
    <SponsorBanner />
  </div>
</template>
