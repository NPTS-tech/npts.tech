<script setup lang="ts">
// Contact form. There's no server, so sending opens the visitor's email app
// with their message addressed to NPTS; they press send.
const TO = 'info@npts.tech'

const form = reactive({
  organization: '',
  name: '',
  email: '',
  topic: 'Hosting and support for an EPICS project',
  message: '',
})
const submitted = ref(false)

function submit() {
  const subject = `${form.topic}: ${form.organization || form.name}`
  const body = [
    form.message,
    '',
    `Name: ${form.name}`,
    `Email: ${form.email}`,
    `Organization: ${form.organization || '-'}`,
  ].join('\n')
  window.open(`mailto:${TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_self')
  submitted.value = true
}
</script>

<template>
  <div class="bg-term-bg text-term-fg font-mono">
    <div class="px-10 pt-[76px] pb-14 border-b border-term-line">
      <div class="text-base text-term-acc tracking-[0.1em] mb-6">[ CONTACT ]</div>
      <h1 class="text-[52px] leading-[1.08] font-medium m-0 mb-6 -tracking-[0.02em] max-w-[24ch] text-pretty">Get in touch.</h1>
      <p class="font-sans text-[19px] leading-[1.6] text-term-mid m-0 max-w-[62ch] text-pretty">Whether you have an EPICS project, want to volunteer, or want to support our programs, we'd like to hear from you.</p>
    </div>
    <div class="border-b border-term-line">
      <div class="px-10 py-14">
        <form class="grid gap-6 max-w-[560px]" @submit.prevent="submit">
          <div class="grid gap-2">
            <label for="cf-org" class="text-[13px] text-term-mid">Organization name <span class="text-term-dim">(optional)</span></label>
            <input id="cf-org" v-model.trim="form.organization" type="text" placeholder="Acme Community Services" class="bg-term-deep border border-term-rule text-term-fg text-[15px] px-4 py-3">
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div class="grid gap-2">
              <label for="cf-name" class="text-[13px] text-term-mid">Your name</label>
              <input id="cf-name" v-model.trim="form.name" type="text" required autocomplete="name" placeholder="Jane Okafor" class="bg-term-deep border border-term-rule text-term-fg text-[15px] px-4 py-3">
            </div>
            <div class="grid gap-2">
              <label for="cf-email" class="text-[13px] text-term-mid">Email</label>
              <input id="cf-email" v-model.trim="form.email" type="email" required autocomplete="email" placeholder="jane@acme.org" class="bg-term-deep border border-term-rule text-term-fg text-[15px] px-4 py-3">
            </div>
          </div>
          <div class="grid gap-2">
            <label for="cf-topic" class="text-[13px] text-term-mid">What's this about?</label>
            <select id="cf-topic" v-model="form.topic" class="bg-term-deep border border-term-rule text-term-fg text-[15px] px-4 py-3">
              <option>Hosting and support for an EPICS project</option>
              <option>Volunteering or internships</option>
              <option>Corporate sponsorship or giving</option>
              <option>Something else</option>
            </select>
          </div>
          <div class="grid gap-2">
            <label for="cf-message" class="text-[13px] text-term-mid">Message</label>
            <textarea id="cf-message" v-model.trim="form.message" required rows="6" placeholder="Tell us a bit about what you have in mind." class="bg-term-deep border border-term-rule text-term-fg text-[15px] px-4 py-3 leading-[1.6] resize-y"></textarea>
          </div>
          <div class="flex flex-wrap items-center gap-5 mt-2">
            <button type="submit" class="text-[15px] font-semibold text-term-bg bg-term-acc px-6 py-4 hover:bg-term-accHi">Send message →</button>
            <span v-if="!submitted" class="text-[13px] text-term-dim">Or email <a :href="`mailto:${TO}`" class="text-term-mid hover:text-term-acc">{{ TO }}</a></span>
            <span v-else class="font-sans text-[13px] text-term-mid">Your email app should now be open with your message. Press send to finish. If nothing opened, email us at <a :href="`mailto:${TO}`" class="text-term-acc border-b border-term-acc/40">{{ TO }}</a>.</span>
          </div>
        </form>
      </div>
    </div>
    <SponsorBanner />
  </div>
</template>
