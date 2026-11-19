<script setup lang="ts">
usePageSeo({
  title: 'NPTS: Software hosting and support for nonprofits',
  description: 'Non-Profit Technical Support (NPTS) builds, hosts, and maintains the software nonprofits depend on, so it keeps working and their teams can focus on their mission.',
})

const { stripeDonationLink, stripeMonthlyLink } = useRuntimeConfig().public

// ---------- Hero stat cards: each flips through a few real numbers ----------
// Each card names the partner, and every caption says only what NPTS actually did (sources: the case studies).
const statsHRM = [
  { value: '3,500', caption: 'Garments now tracked in the inventory system we host' },
  { value: '8,100+', caption: 'People HRM has supported since 2019' },
  { value: '~100', caption: 'Clothing donations arriving every day' },
]
const statsCV = [
  { value: '9,806', caption: 'Grieving families helped since 2018' },
  { value: '$50–70K', caption: 'Raised a year on family pages our platform will power' },
  { value: '48', caption: 'States and territories families came from in 2025' },
]
const statsNPTS = [
  { value: '99.96%', caption: 'Uptime across the apps we host, last 90 days' },
  { value: '19', caption: 'Apps hosted for nonprofits' },
  { value: '5', caption: 'Partner projects we support' },
]

// ---------- Statement: each word lights up as you scroll past ----------
// `key` phrases end up bright white; the rest settles to gray.
const statement: { text: string; key?: boolean }[] = [
  { text: 'NPTS keeps nonprofits running with' },
  { text: 'reliable hosting,', key: true },
  { text: 'ongoing maintenance,', key: true },
  { text: 'and' },
  { text: 'support in plain language,', key: true },
  { text: 'so your team can focus on' },
  { text: 'the people you serve.', key: true },
]
const words = statement.flatMap(s => s.text.split(' ').map(w => ({ w, key: !!s.key })))
const lit = ref(words.length) // generated page shows it fully lit; animation starts once JavaScript runs

// ---------- What NPTS supports today (same statuses as the Partners page) ----------
const projects = [
  { name: 'Family Memorial Pages', partner: 'Carson’s Village', status: 'In progress' },
  { name: 'Kids-U Reporting', partner: 'Kids-U', status: 'Maintained' },
  { name: 'Warren Center Inventory', partner: 'The Warren Center', status: 'Maintained' },
  { name: 'Noble Award Nominations', partner: 'Support Our Scrubs', status: 'In progress' },
  { name: 'COPE Text Support', partner: 'The Shaken Baby Alliance', status: 'In progress' },
]

// ---------- Benefits: on wide screens the section pins and advances as you scroll ----------
const benefits = [
  { title: 'Save staff time', body: 'Replace hand counts and spreadsheets with tools built for how your team works.', to: '/case-studies/hope-restored-missions', link: 'Hope Restored Missions' },
  { title: 'Reach more people', body: 'Serve the people you used to turn away. Any Carson’s Village family can now create its own support page.', to: '/case-studies/carsons-village', link: 'Carson’s Village' },
  { title: 'Raise more support', body: 'Make giving easier. Carson’s Village family pages raise $50,000–$70,000 a year.', to: '/case-studies/carsons-village', link: 'Carson’s Village' },
  { title: 'Prove your impact', body: 'Accurate numbers for grant applications and donor reports, instead of estimates.' },
  { title: 'A better experience', body: 'A dignified, easy page for a grieving family, without waiting on staff.', to: '/case-studies/carsons-village', link: 'Carson’s Village' },
  { title: 'Technology you can count on', body: 'We host and maintain it for the long term, so it doesn’t disappear when a volunteer moves on.', to: '/programs', link: 'How we support you' },
]
const active = ref(0)
const ben = ref<HTMLElement | null>(null)
const wide = ref(false)

function pick(i: number) {
  if (wide.value && ben.value) {
    // Scroll to the spot where that benefit is shown.
    const top = ben.value.getBoundingClientRect().top + window.scrollY
    const travel = ben.value.offsetHeight - window.innerHeight
    window.scrollTo({ top: top + travel * ((i + 0.5) / benefits.length), behavior: 'smooth' })
  }
  active.value = i
}

// ---------- Donate box ----------
const monthly = ref(false)
const amounts = [10, 25, 50, 100]
const amount = ref(25)
// Stripe can pre-fill the amount on a "customer chooses what to pay" link.
const donateHref = computed(() => monthly.value && stripeMonthlyLink
  ? stripeMonthlyLink as string
  : `${stripeDonationLink}?__prefilled_amount=${amount.value * 100}`)

// ---------- Scroll-driven effects ----------
const collage = ref<HTMLElement | null>(null)
const statementEl = ref<HTMLElement | null>(null)
let raf = 0
let mq: MediaQueryList | undefined

function onScroll() {
  if (raf) return
  raf = requestAnimationFrame(() => {
    raf = 0
    const vh = window.innerHeight
    // Hero collage: pieces drift at different speeds (parallax).
    if (collage.value) {
      const y = Math.min(window.scrollY, vh)
      collage.value.querySelectorAll<HTMLElement>('[data-speed]').forEach((el) => {
        el.style.setProperty('--py', String(-y * Number(el.dataset.speed)))
      })
    }
    // Statement: light words up from the moment it enters until it reaches the upper third.
    if (statementEl.value) {
      const r = statementEl.value.getBoundingClientRect()
      const p = (vh * 0.9 - r.top) / (vh * 0.9 - vh * 0.3 + r.height * 0.5)
      lit.value = Math.round(Math.min(1, Math.max(0, p)) * words.length)
    }
    // Benefits: which one is showing depends on how far through the pinned section you are.
    if (wide.value && ben.value) {
      const r = ben.value.getBoundingClientRect()
      const p = -r.top / (r.height - vh)
      active.value = Math.min(benefits.length - 1, Math.max(0, Math.floor(p * benefits.length)))
    }
  })
}

onMounted(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
  mq = matchMedia('(min-width: 1000px)')
  wide.value = mq.matches
  mq.addEventListener('change', e => { wide.value = e.matches })
  if (!reduce) lit.value = 0
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <div class="hm">
    <!-- ===== Hero ===== -->
    <section class="hm-hero">
      <div class="hm-wrap hm-hero-grid">
        <div>
          <div class="hm-label hm-in" style="--d: 0ms">[ Non-Profit Technical Support ]</div>
          <h1>
            <span class="line"><span style="--d: 0">The technical</span></span>
            <span class="line"><span style="--d: 1">backbone for your</span></span>
            <span class="line"><span style="--d: 2"><em>nonprofit.</em></span></span>
          </h1>
          <p class="sub hm-in" style="--d: 550ms">We build, host, and maintain the software your nonprofit depends on, so your team can focus on its mission.</p>
          <div class="hm-ctas hm-in" style="--d: 700ms">
            <NuxtLink to="/support" class="hm-btn primary">Get in touch <span class="arr">→</span></NuxtLink>
            <NuxtLink to="/case-studies" class="hm-btn">See our work</NuxtLink>
          </div>
        </div>

        <div ref="collage" class="hm-collage">
          <div class="hm-shot a" data-speed="0.06">
            <img src="/img/case-studies/hope-restored-missions/warehouse.jpg" alt="Donated clothing on racks in the Hope Restored Missions warehouse">
          </div>
          <div class="hm-shot b" data-speed="0.14">
            <img src="/img/case-studies/carsons-village/platform-demo.jpg" alt="A family support page on the platform NPTS is building for Carson’s Village">
          </div>
          <div class="hm-chip-wrap" data-speed="0.22" style="right: 0; top: 0">
            <RotatingStat style="--d: 1000ms" label="Hope Restored Missions" :offset="0" :items="statsHRM" />
          </div>
          <div class="hm-chip-wrap" data-speed="0.3" style="left: 0; bottom: 64px">
            <RotatingStat style="--d: 1200ms" label="Carson’s Village" :offset="1500" :items="statsCV" />
          </div>
          <div class="hm-chip-wrap" data-speed="0.38" style="right: 0; bottom: -24px">
            <RotatingStat style="--d: 1400ms" label="NPTS" :offset="3000" :items="statsNPTS" />
          </div>
          <p class="hm-collage-note">Real numbers from nonprofits we support.</p>
        </div>
      </div>
    </section>

    <!-- ===== Partners ===== -->
    <PartnerMarquee label="[ Working with ]" class="border-y border-term-line" />

    <!-- ===== Statement + what NPTS does ===== -->
    <section class="hm-section">
      <div class="hm-wrap">
        <div ref="statementEl" class="hm-statement">
          <p><template v-for="(x, i) in words" :key="i"><span class="w" :class="{ key: x.key, on: i < lit }">{{ x.w }}</span>{{ ' ' }}</template></p>
        </div>

        <div class="hm-cols">
          <div v-reveal class="hm-col">
            <div class="hm-label dim">[ Hosting ]</div>
            <div class="hm-box">
              <UptimeBars />
              <div class="hm-big"><CountUp :value="99.96" :decimals="2" suffix="%" /></div>
              <div class="hm-cap">Uptime · last 90 days</div>
            </div>
            <div class="hm-feat"><div><b>19 apps</b> hosted for nonprofits</div><div><b>Always online</b> for your staff</div><div><b>No servers</b> for you to manage</div></div>
          </div>

          <div v-reveal="120" class="hm-col">
            <div class="hm-label dim">[ Maintenance ]</div>
            <div class="hm-box" style="padding: 14px">
              <div class="hm-row"><span><i class="hm-chk on" style="--n: 0" />Security updates</span><span class="hm-tag">Applied</span></div>
              <div class="hm-row hl"><span><i class="hm-chk on" style="--n: 1" />Fix: donation form</span><span class="hm-tag">Done</span></div>
              <div class="hm-row"><span><i class="hm-chk on" style="--n: 2" />Software updates</span><span class="hm-tag">Applied</span></div>
              <div class="hm-row"><span><i class="hm-chk" />New feature request</span><span class="hm-tag grey">In review</span></div>
            </div>
            <div class="hm-feat"><div><b>Fixes and updates</b> after launch</div><div><b>Security updates</b> applied for you</div><div><b>New features</b> as you grow</div></div>
          </div>

          <div v-reveal="240" class="hm-col">
            <div class="hm-label dim">[ Support ]</div>
            <div class="hm-box">
              <div class="hm-ch" style="--n: 0"><span>Email</span><span>Nearly 24/7</span></div>
              <div class="hm-ch" style="--n: 1"><span>Discord</span><span>Nearly 24/7</span></div>
              <div class="hm-ch" style="--n: 2"><span>In person</span><span>Most weeks</span></div>
              <div class="hm-ch" style="--n: 3"><span>Video call</span><span>As needed</span></div>
            </div>
            <div class="hm-feat"><div><b>Real people</b> you can reach</div><div><b>Plain language,</b> no jargon</div><div><b>No technical team</b> needed</div></div>
          </div>

          <div v-reveal="360" class="hm-col">
            <div class="hm-label dim">[ Partners ]</div>
            <div class="hm-box hm-box-list">
              <div v-for="p in projects" :key="p.name" class="hm-proj">
                <span>{{ p.name }}<br><span class="hm-cap" style="font-size: 10.5px">{{ p.partner }}</span></span>
                <span class="hm-tag" :class="{ amber: p.status === 'In progress' }">{{ p.status }}</span>
              </div>
            </div>
            <div class="hm-feat"><div><b>Real projects</b> for local nonprofits</div><div><b>Built around</b> how your team works</div><div><b>Kept running</b> after launch</div></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== Benefits (pinned) ===== -->
    <section ref="ben" class="hm-ben border-b border-term-line" :style="{ '--n': benefits.length }">
      <div class="hm-ben-sticky">
        <div class="hm-wrap" style="width: 100%">
          <div class="hm-label">[ What changes ]</div>
          <h2 class="hm-h2" style="margin-top: 18px">What changes when your technology <em>works.</em></h2>
          <div class="hm-ben-grid">
            <div class="hm-ben-list" role="tablist">
              <div v-for="(b, i) in benefits" :key="b.title" class="hm-ben-item" :class="{ on: active === i }">
                <button type="button" role="tab" class="hm-ben-head" :aria-selected="active === i" @click="pick(i)">
                  <span class="n">0{{ i + 1 }}</span>
                  <span class="t">{{ b.title }}</span>
                </button>
                <div class="body"><div>
                  <p>{{ b.body }}</p>
                  <NuxtLink v-if="b.to" :to="b.to" class="hm-link">{{ b.link }} <span class="arr">→</span></NuxtLink>
                  <!-- Phones and tablets: the picture opens right under the item -->
                  <div v-if="!wide && active === i" class="hm-panel on hm-panel-inline"><BenefitVisual :index="i" /></div>
                </div></div>
              </div>
            </div>

            <div class="hm-stage">
              <div v-for="(b, i) in benefits" :key="i" class="hm-panel" :class="{ on: active === i }">
                <BenefitVisual :index="i" />
              </div>
              <div class="hm-stage-dots" aria-hidden="true"><i v-for="(b, i) in benefits" :key="i" :class="{ done: i <= active }" /></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== Closing call to action + what's included ===== -->
    <section class="hm-section">
      <div class="hm-wrap hm-close">
        <div>
          <div v-reveal class="hm-label">[ Get started ]</div>
          <h2 v-reveal="80" class="hm-h2" style="margin: 18px 0 20px">Let’s keep your nonprofit <em>running.</em></h2>
          <p v-reveal="160" style="font-size: 18px; line-height: 1.6; color: var(--mid); margin: 0 0 32px; max-width: 30em">Tell us what you’re working with. We’ll talk through the options in plain language, with no technical background needed.</p>
          <div v-reveal="240" class="hm-ctas"><NuxtLink to="/support" class="hm-btn primary">Request support <span class="arr">→</span></NuxtLink><NuxtLink to="/programs" class="hm-btn">How it works</NuxtLink></div>
        </div>
        <div v-reveal.zoom="100" class="hm-inc">
          <h3 style="font-size: 26px; font-weight: 400; margin: 0 0 8px">What’s included</h3>
          <p style="margin: 0; color: var(--mid); font-size: 16px">Everything your software needs to keep working, for the long term.</p>
          <div class="hm-inc-list">
            <div v-for="(x, n) in ['Hosting', 'Maintenance', 'Security updates', 'Support', 'Plain-language help']" :key="x" :style="{ '--n': n }"><span>{{ x }}</span><span>Included</span></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== Donate ===== -->
    <section class="hm-donate">
      <div class="hm-wrap hm-donate-grid">
        <div v-reveal.left>
          <div class="hm-mono" style="font-size: 13px; letter-spacing: .14em; font-weight: 600">[ SUPPORT NPTS ]</div>
          <h2>Sponsor the software nonprofits depend on.</h2>
          <p>One donation keeps tools running for every nonprofit we support.</p>
        </div>
        <div v-reveal.right="120" class="hm-give">
          <!-- The Monthly option only shows once a monthly Stripe link is set (STRIPE_MONTHLY_LINK). -->
          <div v-if="stripeMonthlyLink" class="hm-tog" role="group" aria-label="How often">
            <button type="button" :class="{ on: !monthly }" :aria-pressed="!monthly" @click="monthly = false">ONE TIME</button>
            <button type="button" :class="{ on: monthly }" :aria-pressed="monthly" @click="monthly = true">MONTHLY</button>
          </div>
          <div class="hm-amts" role="group" aria-label="Amount">
            <button v-for="a in amounts" :key="a" type="button" :class="{ on: amount === a }" :aria-pressed="amount === a" @click="amount = a">${{ a }}</button>
          </div>
          <a :href="donateHref" class="go">Donate ${{ amount }}{{ monthly ? ' monthly' : '' }} →</a>
          <div class="fine">Secure checkout with Stripe. You can change the amount there.</div>
        </div>
      </div>
    </section>
  </div>
</template>
