<template>
  <div class="bg-term-bg text-term-fg font-mono">
    <div class="px-10 pt-[76px] pb-14 border-b border-term-line">
      <div class="text-[13px] text-term-acc tracking-[0.1em] mb-6">[ CONTACT ]</div>
      <h1 class="text-[52px] leading-[1.08] font-medium m-0 mb-6 -tracking-[0.02em] max-w-[24ch] text-pretty">Get in touch.</h1>
      <p class="font-sans text-[19px] leading-[1.6] text-term-mid m-0 max-w-[62ch] text-pretty">Whether you have an EPICS project, want to volunteer, or want to support our programs, we'd like to hear from you.</p>
    </div>
    <div class="border-b border-term-line">
      <div class="px-10 py-14">
        <form class="grid gap-6 max-w-[560px]">
          <div class="grid gap-2">
            <label class="text-[13px] text-term-mid">Organization name</label>
            <input type="text" placeholder="Acme Community Services" class="bg-term-deep border border-term-rule text-term-fg text-[15px] px-4 py-3">
          </div>
          <div class="grid grid-cols-2 gap-5">
            <div class="grid gap-2">
              <label class="text-[13px] text-term-mid">Your name</label>
              <input type="text" placeholder="Jane Okafor" class="bg-term-deep border border-term-rule text-term-fg text-[15px] px-4 py-3">
            </div>
            <div class="grid gap-2">
              <label class="text-[13px] text-term-mid">Email</label>
              <input type="email" placeholder="jane@acme.org" class="bg-term-deep border border-term-rule text-term-fg text-[15px] px-4 py-3">
            </div>
          </div>
          <div class="grid gap-2">
            <label class="text-[13px] text-term-mid">What's this about?</label>
            <select class="bg-term-deep border border-term-rule text-term-fg text-[15px] px-4 py-3">
              <option>Hosting and support for an EPICS project</option>
              <option>Volunteering or internships</option>
              <option>Corporate sponsorship or giving</option>
              <option>Something else</option>
            </select>
          </div>
          <div class="grid gap-2">
            <label class="text-[13px] text-term-mid">Message</label>
            <textarea rows="6" placeholder="Tell us a bit about what you have in mind." class="bg-term-deep border border-term-rule text-term-fg text-[15px] px-4 py-3 leading-[1.6] resize-y"></textarea>
          </div>
          <div class="flex items-center gap-5 mt-2">
            <button type="button" class="text-[15px] font-semibold text-term-bg bg-term-acc px-6 py-4 hover:bg-term-accHi">Send message →</button>
            <span class="text-[13px] text-term-dim">Or email <span class="text-term-mid">info@npts.tech</span></span>
          </div>
        </form>
      </div>
    </div>
    <SponsorBanner />
  </div>
</template>
