<script setup lang="ts">
const TITLE = '3,500 garments, counted by hand. Until a student team built a better way.'
const DESCRIPTION = 'UTDesign EPICS students built an inventory system for Hope Restored Missions. NPTS hosts and maintains it so it keeps serving the community after the semester.'
const IMG = '/img/case-studies/hope-restored-missions'

// Title, summary, and photo shown in the preview card when the post is shared.
useSeoMeta({
  title: 'Hope Restored Missions case study · NPTS',
  description: DESCRIPTION,
  ogTitle: TITLE,
  ogDescription: DESCRIPTION,
  ogType: 'article',
  ogUrl: 'https://npts.tech/case-studies/hope-restored-missions',
  ogImage: `https://npts.tech${IMG}/warehouse.jpg`,
  twitterCard: 'summary_large_image',
})

const nptsRole = [
  'Hosts the inventory system so it stays online for HRM’s staff and volunteers.',
  'Maintains the application now that the EPICS team’s semester is over.',
  'Keeps the students’ work usable, so HRM can rely on it day to day. Today it is fully in use.',
  'Does this with volunteers, most of whom came up through UTDesign EPICS themselves.',
]

const model = [
  { step: '01', title: 'Build', body: 'UTDesign EPICS students design a bespoke solution with the nonprofit, like HRM’s inventory system.' },
  { step: '02', title: 'Sustain', body: 'NPTS hosts and supports the project once the semester ends, so the work doesn’t disappear.' },
  { step: '03', title: 'Serve', body: 'The nonprofit keeps using the tool to serve its community, with less time spent on manual work.' },
]
</script>

<template>
  <div class="bg-term-bg text-term-fg font-mono">
    <div class="px-10 pt-[76px] pb-14 border-b border-term-line">
      <NuxtLink to="/case-studies" class="text-[13px] text-term-dim hover:text-term-acc">← All case studies</NuxtLink>
      <div class="flex flex-col md:flex-row md:items-end gap-10 mt-8">
        <div class="flex-1">
          <div class="text-base text-term-acc tracking-[0.1em] mb-6">[ CASE STUDY · HOPE RESTORED MISSIONS ]</div>
          <h1 class="text-[48px] leading-[1.1] font-medium m-0 mb-6 -tracking-[0.02em] max-w-[26ch] text-pretty">{{ TITLE }}</h1>
          <p class="font-sans text-[19px] leading-[1.6] text-term-mid m-0 max-w-[62ch] text-pretty">Hope Restored Missions used to track roughly 3,500 donated garments by hand. A UTDesign EPICS team built an inventory system to replace that, and NPTS hosts and maintains it so HRM can keep relying on it long after the semester ended. Today it is fully in use.</p>
          <ShareLinks :title="TITLE" class="mt-8" />
        </div>
        <img :src="`${IMG}/logo.jpg`" alt="Hope Restored Missions logo" class="w-[180px] h-[180px] shrink-0 border border-term-line">
      </div>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 border-b border-term-line text-[13px]">
      <div class="px-10 py-6 border-r border-term-line">
        <div class="text-term-dim mb-1">Partner</div>
        <a href="https://hoperestoredmissions.org" target="_blank" rel="noopener" class="text-term-fg hover:text-term-acc">Hope Restored Missions</a>
      </div>
      <div class="px-10 py-6 md:border-r border-term-line">
        <div class="text-term-dim mb-1">Built by</div>
        <div class="text-term-fg">UTDesign EPICS students</div>
      </div>
      <div class="px-10 py-6 border-r border-t md:border-t-0 border-term-line">
        <div class="text-term-dim mb-1">Hosted &amp; maintained by</div>
        <div class="text-term-acc">NPTS</div>
      </div>
      <div class="px-10 py-6 border-t md:border-t-0 border-term-line">
        <div class="text-term-dim mb-1">Status</div>
        <div class="text-term-acc">fully in use</div>
      </div>
    </div>

    <div class="px-10 py-[60px] border-b border-term-line bg-term-deep">
      <div class="max-w-[72ch] mx-auto">
        <blockquote class="m-0 text-[24px] leading-[1.45] font-medium text-term-fg text-pretty">“Now having a simple, accurate, &amp; easy to maintain electronic Inventory Control System designed by UTD’s EPICS students has been a HUGE help! … Every university should have an EPICS program like UTD’s to help local 501c3 orgs!”</blockquote>
        <div class="font-sans text-[15px] text-term-mid mt-6">Jim Alexander, Hope Restored Missions point of contact for the UTD EPICS team</div>
      </div>
    </div>

    <article class="px-10 py-[68px] border-b border-term-line">
      <div class="max-w-[72ch] mx-auto">
        <div class="text-base text-term-acc tracking-[0.1em] mb-5">[ THE PARTNER ]</div>
        <h2 class="text-[28px] font-medium leading-[1.25] m-0 mb-5">Help for anyone who walks through the door.</h2>
        <p class="font-sans text-[17px] leading-[1.75] text-term-mid m-0 mb-5">Hope Restored Missions (HRM) began in the spring of 2019 as a grassroots effort led by Dr. Tamara Monroe and three other servant leaders. Based in Plano, HRM serves people experiencing poverty and homelessness across Collin County and North Texas, and since 2019 has supported over 8,100 people on their journey to securing housing, accessing medical and mental healthcare, building employability skills, and regaining stability.</p>
        <p class="font-sans text-[17px] leading-[1.75] text-term-mid m-0 mb-12">HRM is zero-barrier by design: “We do not have any service eligibility requirements; we will help anyone who comes through our doors.” Its work spans street outreach, a resource center for emergency needs, the Bridge to Hope housing program, and See Me, which has helped over 140 people obtain the identification they need to access shelter, government assistance, and medical care.</p>

        <div class="text-base text-term-acc tracking-[0.1em] mb-5">[ THE CHALLENGE ]</div>
        <h2 class="text-[28px] font-medium leading-[1.25] m-0 mb-5">A warehouse that never stops moving.</h2>
        <p class="font-sans text-[17px] leading-[1.75] text-term-mid m-0 mb-5">One way HRM restores dignity is by replacing clients’ tattered clothing. HRM receives about 100 clothing donations a day and distributes about 85, with roughly 3,500 garments on hand at any time, all in a warehouse of about 600 square feet.</p>
        <figure class="m-0 mb-5">
          <img :src="`${IMG}/warehouse.webp`" alt="Racks of donated clothing and stacked bins in the Hope Restored Missions warehouse" class="w-full border border-term-line" loading="lazy">
          <figcaption class="font-sans text-[13px] text-term-dim mt-3">Hope Restored Missions’ clothing warehouse in Plano. Photo: Hope Restored Missions.</figcaption>
        </figure>
        <p class="font-sans text-[17px] leading-[1.75] text-term-mid m-0 mb-12">For years, HRM tracked that inventory by hand. The counting and logging took staff time, and the results weren’t reliably accurate.</p>

        <div class="text-base text-term-acc tracking-[0.1em] mb-5">[ WHAT THE STUDENTS BUILT ]</div>
        <h2 class="text-[28px] font-medium leading-[1.25] m-0 mb-5">Designed with the people who use it.</h2>
        <p class="font-sans text-[17px] leading-[1.75] text-term-mid m-0 mb-12">A UTDesign EPICS team took on the problem. The students and their mentors listened to HRM’s needs and adjusted the design based on feedback. Some came onsite to see the issues first-hand, and used what they saw to refine each beta version. The result is an electronic inventory control system built specifically for HRM that is simple, accurate, and easy to maintain.</p>

        <div class="text-base text-term-acc tracking-[0.1em] mb-5">[ NPTS’S ROLE ]</div>
        <h2 class="text-[28px] font-medium leading-[1.25] m-0 mb-5">Without long-term support, a semester’s work disappears.</h2>
        <p class="font-sans text-[17px] leading-[1.75] text-term-mid m-0 mb-5">A student project has a built-in end date. When the semester is over, the team graduates or moves on to new work. If no one hosts and maintains what they built, the application stops being usable, and the nonprofit loses a tool it has come to depend on.</p>
        <p class="font-sans text-[17px] leading-[1.75] text-term-mid m-0 mb-8">NPTS exists to close that gap. Hosting and support of projects built by experiential learning programs is a core part of our mission, and HRM’s inventory system is exactly that kind of project.</p>
        <div class="border border-term-acc bg-term-card px-7 py-6 mb-12">
          <div class="text-base text-term-acc tracking-[0.1em] mb-4">WHAT NPTS DOES FOR HRM</div>
          <div class="grid gap-3">
            <div v-for="item in nptsRole" :key="item" class="flex gap-4">
              <span class="text-term-acc">→</span>
              <span class="font-sans text-[16px] leading-[1.6] text-term-fg flex-1">{{ item }}</span>
            </div>
          </div>
        </div>

        <div class="text-base text-term-acc tracking-[0.1em] mb-5">[ THE IMPACT ]</div>
        <h2 class="text-[28px] font-medium leading-[1.25] m-0 mb-5">Less counting, better data.</h2>
        <p class="font-sans text-[17px] leading-[1.75] text-term-mid m-0">According to HRM, the system has eased its staffing constraints. Because its inventory and service data is now granular and accurate, it may also help HRM secure future grants. None of that would last without someone keeping the system running, and that is the work NPTS does.</p>
        <div class="border-t border-term-line mt-12 pt-8">
          <ShareLinks :title="TITLE" label="Share this story" />
        </div>
      </div>
    </article>

    <div class="px-10 py-[68px] border-b border-term-line">
      <div class="max-w-[1100px] mx-auto">
        <div class="text-base text-term-acc tracking-[0.1em] mb-5">[ WHY IT MATTERS ]</div>
        <h2 class="text-[28px] font-medium leading-[1.25] m-0 mb-5 max-w-[36ch]">One investment, two kinds of impact.</h2>
        <p class="font-sans text-[17px] leading-[1.75] text-term-mid m-0 mb-10 max-w-[72ch]">HRM’s inventory system is one example of the model NPTS is built around. Supporting NPTS keeps tools like this running for the communities they serve, and creates volunteer and internship opportunities for the students of the programs that build them.</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-px bg-term-line border border-term-line mb-10">
          <div v-for="m in model" :key="m.step" class="bg-term-bg px-7 py-7">
            <div class="text-term-acc text-[22px] mb-3">{{ m.step }}</div>
            <h3 class="m-0 mb-2 text-[17px] font-semibold">{{ m.title }}</h3>
            <p class="font-sans m-0 text-[15px] leading-[1.6] text-term-mid">{{ m.body }}</p>
          </div>
        </div>
        <p class="font-sans text-[15px] leading-[1.7] text-term-mid m-0 max-w-[72ch]">NPTS gains new partners every semester through our relationship with UTDesign EPICS. Alongside HRM, we support projects for The Shaken Baby Alliance, Kids-U, Tomorrow’s Leaders Today, The Warren Center, and UTDesign. <NuxtLink to="/partners" class="text-term-acc border-b border-term-acc/40">See all partners →</NuxtLink></p>
      </div>
    </div>

    <div class="px-10 py-10 border-b border-term-line">
      <div class="max-w-[72ch] mx-auto font-sans text-[13px] leading-[1.7] text-term-dim">
        Sources: testimonial and warehouse figures provided by Hope Restored Missions; organization history, impact figures, and program details from <a href="https://hoperestoredmissions.org" target="_blank" rel="noopener" class="text-term-mid border-b border-term-rule hover:text-term-acc">hoperestoredmissions.org</a>. Learn more about HRM or support its work on its website.
      </div>
    </div>

    <SponsorBanner />
  </div>
</template>
