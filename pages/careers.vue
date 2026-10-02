<script setup lang="ts">
// Interest form. There's no server, so submitting opens the visitor's email app
// with their answers addressed to NPTS; they press send.
const TO = 'info@npts.tech'

const form = reactive({
  name: '',
  email: '',
  interest: 'Either',
  epics: '',
  project: '',
  skills: '',
  availability: '',
  links: '',
})
const submitted = ref(false)

function submit() {
  const subject = `Internship & volunteer interest: ${form.name}`
  const body = [
    `Name: ${form.name}`,
    `Email: ${form.email}`,
    `Interested in: ${form.interest}`,
    `UTDesign EPICS: ${form.epics}`,
    `EPICS project / semester: ${form.project || '-'}`,
    `Availability: ${form.availability || '-'}`,
    `Links: ${form.links || '-'}`,
    '',
    'What I would like to work on / my skills:',
    form.skills,
  ].join('\n')
  window.open(`mailto:${TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_self')
  submitted.value = true
}

const field = 'bg-term-deep border border-term-rule text-term-fg text-[15px] px-4 py-3'
</script>

<template>
  <div class="bg-term-bg text-term-fg font-mono">
    <div class="px-10 pt-[76px] pb-14 border-b border-term-line">
      <div class="text-[13px] text-term-acc tracking-[0.1em] mb-6">[ GET INVOLVED ]</div>
      <h1 class="text-[52px] leading-[1.08] font-medium m-0 mb-6 -tracking-[0.02em] max-w-[24ch] text-pretty">Volunteer programs and internships.</h1>
      <p class="font-sans text-[19px] leading-[1.6] text-term-mid m-0 max-w-[64ch] text-pretty">We provide volunteer programs and internships to students of the experiential learning programs we work with. Most of our volunteers came up through UTDesign EPICS.</p>
    </div>
    <div id="interest-form" class="px-10 py-[68px] border-b border-term-line scroll-mt-6">
      <div class="text-[13px] text-term-acc tracking-[0.1em] mb-4">[ INTEREST FORM ]</div>
      <h2 class="text-[30px] font-medium leading-[1.2] m-0 mb-4">Interested in volunteering or interning?</h2>
      <p class="font-sans text-base leading-[1.65] text-term-mid m-0 mb-10 max-w-[62ch]">Fill this out and we'll get in touch when there's a fit. Submitting opens your email app with your answers ready to send to <span class="text-term-fg">{{ TO }}</span>.</p>
      <form class="grid gap-6 max-w-[640px]" @submit.prevent="submit">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div class="grid gap-2">
            <label for="if-name" class="text-[13px] text-term-mid">Name</label>
            <input id="if-name" v-model.trim="form.name" type="text" required autocomplete="name" :class="field">
          </div>
          <div class="grid gap-2">
            <label for="if-email" class="text-[13px] text-term-mid">Email</label>
            <input id="if-email" v-model.trim="form.email" type="email" required autocomplete="email" :class="field">
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div class="grid gap-2">
            <label for="if-interest" class="text-[13px] text-term-mid">Interested in</label>
            <select id="if-interest" v-model="form.interest" :class="field">
              <option>Internship</option>
              <option>Volunteering</option>
              <option>Either</option>
            </select>
          </div>
          <div class="grid gap-2">
            <label for="if-epics" class="text-[13px] text-term-mid">Have you been on a UTDesign EPICS team?</label>
            <select id="if-epics" v-model="form.epics" required :class="field">
              <option value="" disabled>Choose one</option>
              <option>Yes, currently</option>
              <option>Yes, previously</option>
              <option>No</option>
            </select>
          </div>
        </div>
        <div class="grid gap-2">
          <label for="if-project" class="text-[13px] text-term-mid">EPICS project and semester <span class="text-term-dim">(optional)</span></label>
          <input id="if-project" v-model.trim="form.project" type="text" placeholder="e.g. Carson's Village, Spring 2026" :class="field">
        </div>
        <div class="grid gap-2">
          <label for="if-skills" class="text-[13px] text-term-mid">What would you like to work on, and what are you good at?</label>
          <textarea id="if-skills" v-model.trim="form.skills" rows="5" required placeholder="Languages, frameworks, design, writing, anything you'd like to learn." :class="[field, 'leading-[1.6] resize-y']"></textarea>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div class="grid gap-2">
            <label for="if-availability" class="text-[13px] text-term-mid">Availability <span class="text-term-dim">(optional)</span></label>
            <input id="if-availability" v-model.trim="form.availability" type="text" placeholder="e.g. 5 hrs/week, Fall 2026" :class="field">
          </div>
          <div class="grid gap-2">
            <label for="if-links" class="text-[13px] text-term-mid">LinkedIn, GitHub, or portfolio <span class="text-term-dim">(optional)</span></label>
            <input id="if-links" v-model.trim="form.links" type="text" :class="field">
          </div>
        </div>
        <div class="flex flex-wrap items-center gap-5 mt-2">
          <button type="submit" class="text-[15px] font-semibold text-term-bg bg-term-acc px-6 py-4 hover:bg-term-accHi">Submit interest →</button>
          <span v-if="submitted" class="font-sans text-[13px] text-term-mid">Your email app should now be open with your answers. Press send to finish. If nothing opened, email us at <a :href="`mailto:${TO}`" class="text-term-acc border-b border-term-acc/40">{{ TO }}</a>.</span>
        </div>
      </form>
    </div>
    <SponsorBanner />
  </div>
</template>
