<template>
  <div class="bg-term-bg text-term-fg font-mono">
    <div class="px-10 pt-[76px] pb-14 border-b border-term-line">
      <div class="text-[13px] text-term-acc tracking-[0.1em] mb-6">[ DONATE ]</div>
      <h1 class="text-[52px] leading-[1.08] font-medium m-0 mb-6 -tracking-[0.02em] max-w-[26ch] text-pretty">$50 a month keeps one nonprofit online for a year.</h1>
      <p class="font-sans text-[19px] leading-[1.6] text-term-mid m-0 max-w-[64ch] text-pretty">We're entirely volunteer-run. Nobody here draws a salary, so your donation buys servers, domains, and stipends for student engineers — and nothing else.</p>
    </div>
    <div class="grid grid-cols-[1.15fr_1fr] border-b border-term-line">
      <div class="px-10 py-14 border-r border-term-line">
        <div class="text-[13px] text-term-acc tracking-[0.1em] mb-7">[ CHOOSE AN AMOUNT ]</div>
        <div class="grid grid-cols-3 gap-4 mb-4">
          <div class="border border-term-rule px-5 py-6 hover:border-term-acc">
            <div class="text-[26px] font-medium mb-2">$25</div>
            <p class="font-sans m-0 text-sm leading-[1.6] text-term-mid">A month of hosting for a small partner app.</p>
          </div>
          <div class="border-2 border-term-acc bg-term-card px-5 py-6 relative">
            <div class="absolute top-0 right-0 bg-term-acc text-term-bg text-[11px] px-2 py-1 font-semibold">MOST USEFUL</div>
            <div class="text-[26px] font-medium mb-2 text-term-acc">$50<span class="text-[15px] text-term-mid">/mo</span></div>
            <p class="font-sans m-0 text-sm leading-[1.6] text-term-mid">One partner organization, fully covered, for a year.</p>
          </div>
          <div class="border border-term-rule px-5 py-6 hover:border-term-acc">
            <div class="text-[26px] font-medium mb-2">$250</div>
            <p class="font-sans m-0 text-sm leading-[1.6] text-term-mid">A student stipend for a semester of real work.</p>
          </div>
        </div>
        <div class="flex gap-4 items-center mb-8">
          <div class="border border-term-rule px-5 py-4 text-[15px] text-term-dim flex-1">Other amount — $ ____</div>
          <div class="flex gap-3 text-[13px] text-term-mid">
            <span class="border border-term-rule px-4 py-4">One-time</span>
            <span class="border border-term-acc bg-term-card text-term-acc px-4 py-4">Monthly</span>
          </div>
        </div>
        <a href="https://donate.stripe.com/aFacN50j55vF9lt1Zk04800" class="text-[15px] font-semibold text-term-bg bg-term-acc px-7 py-4 inline-block hover:bg-term-accHi">Donate securely →</a>
        <p class="font-sans text-[13px] text-term-dim mt-5 m-0">Processed by Stripe. NPTS is a 501(c)(3); US donations are tax-deductible and you'll get a receipt by email.</p>
      </div>
      <div>
        <div class="px-10 py-12 border-b border-term-line">
          <div class="text-[13px] text-term-acc tracking-[0.1em] mb-6">[ WHERE IT GOES ]</div>
          <div class="grid gap-4">
            <div class="flex justify-between items-baseline gap-6 pb-3 border-b border-term-line">
              <div class="flex-1"><h4 class="m-0 mb-1 text-[15px] font-semibold">Servers &amp; infrastructure</h4><p class="font-sans m-0 text-sm text-term-mid">Hosting, databases, backups, monitoring.</p></div>
              <div class="text-term-acc text-[15px]">~55%</div>
            </div>
            <div class="flex justify-between items-baseline gap-6 pb-3 border-b border-term-line">
              <div class="flex-1"><h4 class="m-0 mb-1 text-[15px] font-semibold">Student stipends</h4><p class="font-sans m-0 text-sm text-term-mid">Paying the interns we can afford to pay.</p></div>
              <div class="text-term-acc text-[15px]">~35%</div>
            </div>
            <div class="flex justify-between items-baseline gap-6">
              <div class="flex-1"><h4 class="m-0 mb-1 text-[15px] font-semibold">Domains &amp; compliance</h4><p class="font-sans m-0 text-sm text-term-mid">Registrations, filings, insurance.</p></div>
              <div class="text-term-acc text-[15px]">~10%</div>
            </div>
          </div>
          <p class="font-sans text-[13px] text-term-dim mt-6 m-0">$0 to salaries. <NuxtLink to="/about" class="text-term-acc border-b border-term-acc/40">See our Form 990 →</NuxtLink></p>
        </div>
        <div class="px-10 py-12 bg-term-deep">
          <div class="text-[13px] text-term-acc tracking-[0.1em] mb-6">[ OTHER WAYS TO HELP ]</div>
          <div class="grid gap-5">
            <div>
              <h4 class="m-0 mb-1 text-[15px] font-semibold">Cover a partner directly</h4>
              <p class="font-sans m-0 text-sm leading-[1.6] text-term-mid">Sponsor one organization's infrastructure by name, with a yearly report on what it did.</p>
            </div>
            <div>
              <h4 class="m-0 mb-1 text-[15px] font-semibold">Donate credits or hardware</h4>
              <p class="font-sans m-0 text-sm leading-[1.6] text-term-mid">Cloud credits, licenses, and serviceable equipment go straight into production.</p>
            </div>
            <div>
              <h4 class="m-0 mb-1 text-[15px] font-semibold">Give time instead</h4>
              <p class="font-sans m-0 text-sm leading-[1.6] text-term-mid">Mentors and on-call volunteers are worth more to us than most cheques. <NuxtLink to="/careers" class="text-term-acc border-b border-term-acc/40">Open roles →</NuxtLink></p>
            </div>
            <div>
              <h4 class="m-0 mb-1 text-[15px] font-semibold">Hire our alumni</h4>
              <p class="font-sans m-0 text-sm leading-[1.6] text-term-mid">Closing that loop is the whole point. <NuxtLink to="/support" class="text-term-acc border-b border-term-acc/40">Talk to us →</NuxtLink></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="px-10 py-[68px] border-b border-term-line">
      <div class="text-[13px] text-term-acc tracking-[0.1em] mb-7">[ WHAT YOUR MONEY HAS ALREADY DONE ]</div>
      <div class="grid grid-cols-4 gap-px bg-term-line border border-term-line">
        <div class="bg-term-bg px-7 py-7">
          <div class="text-[32px] text-term-acc font-medium mb-2">14</div>
          <p class="font-sans m-0 text-sm leading-[1.6] text-term-mid">applications kept in production for partner organizations</p>
        </div>
        <div class="bg-term-bg px-7 py-7">
          <div class="text-[32px] text-term-acc font-medium mb-2">63</div>
          <p class="font-sans m-0 text-sm leading-[1.6] text-term-mid">students mentored on work with real users</p>
        </div>
        <div class="bg-term-bg px-7 py-7">
          <div class="text-[32px] text-term-acc font-medium mb-2">99.96%</div>
          <p class="font-sans m-0 text-sm leading-[1.6] text-term-mid">uptime across everything we host, last 90 days</p>
        </div>
        <div class="bg-term-bg px-7 py-7">
          <div class="text-[32px] text-term-acc font-medium mb-2">$0</div>
          <p class="font-sans m-0 text-sm leading-[1.6] text-term-mid">charged to a nonprofit, ever</p>
        </div>
      </div>
    </div>
    <div class="bg-term-acc text-term-bg px-10 py-14 grid grid-cols-[1fr_auto] gap-10 items-center">
      <div>
        <h3 class="text-[30px] font-semibold m-0 mb-3 -tracking-[0.01em]">Recurring gifts are what let us say yes.</h3>
        <p class="font-sans text-base leading-[1.6] m-0 max-w-[54ch] opacity-80">We only take on a partner if we're confident we can carry them for years. Monthly donors are how we know.</p>
      </div>
      <a href="https://donate.stripe.com/aFacN50j55vF9lt1Zk04800" class="text-sm font-semibold bg-term-bg text-term-acc px-[22px] py-[14px]">Give monthly →</a>
    </div>
  </div>
</template>
