<template>
  <div class="bg-term-bg text-term-fg">
    <!-- Header -->
    <section class="max-w-7xl mx-auto px-6 sm:px-10 pt-16 pb-12 border-b border-term-line">
      <div class="flex items-center gap-3 mb-4 font-mono text-xs text-term-acc uppercase tracking-widest">
        <span class="h-px w-6 bg-term-acc"></span>
        Intake &amp; Technical Support
      </div>
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-sans font-semibold tracking-tight text-term-fg max-w-3xl leading-[1.1] mb-6">
        Tell us what's breaking — or what you need built.
      </h1>
      <p class="text-lg text-term-mid font-sans leading-relaxed max-w-3xl">
        Five quick fields. A senior engineer will review your request and reply within two business days with a straightforward answer on how we can help.
      </p>
    </section>

    <!-- Intake Form & SLA Grid -->
    <section class="border-b border-term-line">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-term-line">
        <!-- Left: Intake Form -->
        <div class="lg:col-span-7 p-6 sm:p-12">
          <form @submit.prevent="handleSubmit" class="space-y-6 max-w-xl font-sans">
            <div>
              <label class="block text-xs font-mono uppercase tracking-wider text-term-mid mb-2">
                Organization Name &amp; Website <span class="text-term-acc">*</span>
              </label>
              <input 
                v-model="form.orgName" 
                type="text" 
                required
                placeholder="e.g. Acme Community Services (acme.org)" 
                class="w-full bg-term-deep border border-term-rule text-term-fg text-sm rounded px-4 py-3 focus:border-term-acc transition-colors"
              >
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-mono uppercase tracking-wider text-term-mid mb-2">
                  Your Name <span class="text-term-acc">*</span>
                </label>
                <input 
                  v-model="form.name" 
                  type="text" 
                  required
                  placeholder="Jane Okafor" 
                  class="w-full bg-term-deep border border-term-rule text-term-fg text-sm rounded px-4 py-3 focus:border-term-acc transition-colors"
                >
              </div>
              <div>
                <label class="block text-xs font-mono uppercase tracking-wider text-term-mid mb-2">
                  Email Address <span class="text-term-acc">*</span>
                </label>
                <input 
                  v-model="form.email" 
                  type="email" 
                  required
                  placeholder="jane@acme.org" 
                  class="w-full bg-term-deep border border-term-rule text-term-fg text-sm rounded px-4 py-3 focus:border-term-acc transition-colors"
                >
              </div>
            </div>

            <div>
              <label class="block text-xs font-mono uppercase tracking-wider text-term-mid mb-2">
                Primary Need <span class="text-term-acc">*</span>
              </label>
              <select 
                v-model="form.need" 
                required
                class="w-full bg-term-deep border border-term-rule text-term-fg text-sm rounded px-4 py-3 focus:border-term-acc transition-colors"
              >
                <option value="host">Host an existing application on managed infrastructure</option>
                <option value="rescue">Take over maintenance / rescue an unsupported project</option>
                <option value="fractional-cto">Fractional CTO / Systems &amp; Tool Audit</option>
                <option value="capstone">Scope a new project with a student capstone team</option>
                <option value="careers">Student Internship / Volunteer application</option>
                <option value="other">General technical inquiry</option>
              </select>
            </div>

            <div>
              <label class="block text-xs font-mono uppercase tracking-wider text-term-mid mb-2">
                Situation Overview <span class="text-term-acc">*</span>
              </label>
              <textarea 
                v-model="form.overview" 
                rows="5" 
                required
                placeholder="What the system does, who uses it, what is failing or vulnerable, and any critical upcoming deadlines." 
                class="w-full bg-term-deep border border-term-rule text-term-fg text-sm rounded px-4 py-3 focus:border-term-acc transition-colors resize-y leading-relaxed"
              ></textarea>
            </div>

            <div>
              <label class="block text-xs font-mono uppercase tracking-wider text-term-mid mb-2">
                Existing Links / Repository / Provider <span class="text-term-dim font-mono">(optional)</span>
              </label>
              <input 
                v-model="form.link" 
                type="text" 
                placeholder="GitHub repo, staging URL, or current hosting provider" 
                class="w-full bg-term-deep border border-term-rule text-term-fg text-sm rounded px-4 py-3 focus:border-term-acc transition-colors"
              >
            </div>

            <div class="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <button 
                type="submit" 
                class="w-full sm:w-auto font-sans font-medium text-sm text-term-deep bg-term-acc px-6 py-3.5 rounded hover:bg-term-accHi transition-colors shadow-sm shadow-term-acc/10"
              >
                Send Request &rarr;
              </button>
              <span class="text-xs font-mono text-term-dim text-center sm:text-left">
                Or email directly: <a href="mailto:hello@npts.tech" class="text-term-mid hover:text-term-acc">hello@npts.tech</a>
              </span>
            </div>

            <div v-if="submitted" class="p-4 rounded bg-term-deep border border-term-acc text-xs font-mono text-term-acc">
              Opening your email client with your pre-filled inquiry... If it does not open, please email us directly at <a href="mailto:hello@npts.tech" class="underline font-bold">hello@npts.tech</a>.
            </div>
          </form>
        </div>

        <!-- Right: Triage SLA & Outage Box -->
        <div class="lg:col-span-5 p-6 sm:p-12 bg-term-deep/40 flex flex-col justify-between">
          <div class="space-y-8">
            <div>
              <div class="font-mono text-xs text-term-acc uppercase tracking-widest mb-4">Triage &amp; SLA Process</div>
              <h3 class="text-xl font-sans font-semibold text-term-fg mb-4">What Happens After You Submit</h3>
              
              <div class="space-y-4 font-mono">
                <div class="flex items-start gap-3">
                  <span class="text-term-acc font-semibold text-sm">01</span>
                  <div class="font-sans text-xs sm:text-sm">
                    <strong class="text-term-fg">Initial Review (&lt; 48 Hours):</strong> A senior technical lead evaluates your request and replies with an honest fit assessment.
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="text-term-acc font-semibold text-sm">02</span>
                  <div class="font-sans text-xs sm:text-sm">
                    <strong class="text-term-fg">30-Minute Discovery Call:</strong> We map your user workflows, current data storage, and staff responsibilities.
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="text-term-acc font-semibold text-sm">03</span>
                  <div class="font-sans text-xs sm:text-sm">
                    <strong class="text-term-fg">Architecture &amp; Code Inspection:</strong> We verify code security, dependencies, and database containers.
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="text-term-acc font-semibold text-sm">04</span>
                  <div class="font-sans text-xs sm:text-sm">
                    <strong class="text-term-fg">Written Agreement &amp; Migration:</strong> Clear scope, transparent SLA, and container migration in under 14 days.
                  </div>
                </div>
              </div>
            </div>

            <!-- Emergency Outage Box -->
            <div class="p-6 rounded-lg bg-term-deep border border-term-line">
              <div class="flex items-center gap-2 font-mono text-xs text-term-acc uppercase tracking-wider mb-2">
                <span class="w-2 h-2 rounded-full bg-term-acc"></span> Active Outage Emergency
              </div>
              <p class="font-sans text-xs text-term-mid leading-relaxed mb-3">
                Existing NPTS partners experiencing a live production outage: email <span class="text-term-fg font-mono font-medium">oncall@npts.tech</span> with <span class="text-term-fg font-mono">OUTAGE</span> in the subject line. This alerts our direct on-call pager.
              </p>
              <div class="text-[11px] font-mono text-term-dim">
                Not a partner yet? Submit the intake form and flag urgent deadlines in your description.
              </div>
            </div>

            <!-- Scope Reminder -->
            <div class="p-4 rounded-lg bg-term-card/40 border border-term-line text-xs font-sans text-term-mid leading-relaxed">
              <strong class="text-term-fg">Eligibility Notice:</strong> We support registered 501(c)(3) nonprofits and fiscally sponsored projects. We do not support direct credit card storage (PCI) or HIPAA health records, and we do not provide office IT desktop support.
              <div class="mt-2 font-mono">
                <NuxtLink to="/services" class="text-term-acc hover:underline">View complete service scope &rarr;</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

useSeoMeta({
  title: 'Request Technical Support & Systems Intake — NPTS',
  ogTitle: 'Request Technical Support & Systems Intake — NPTS',
  description: 'Submit an intake request for managed application hosting, maintenance rescue, Fractional CTO audits, or student capstone scoping.',
  ogDescription: 'Submit an intake request for managed application hosting, maintenance rescue, Fractional CTO audits, or student capstone scoping.',
});
const form = reactive({
  orgName: '',
  name: '',
  email: '',
  need: 'host',
  overview: '',
  link: '',
});

const submitted = ref(false);

function handleSubmit() {
  submitted.value = true;
  const subject = encodeURIComponent(`[NPTS Intake] ${form.need.toUpperCase()} - ${form.orgName}`);
  const body = encodeURIComponent(
    `Organization: ${form.orgName}\n` +
    `Contact Name: ${form.name}\n` +
    `Email: ${form.email}\n` +
    `Primary Need: ${form.need}\n` +
    `Links / Repo: ${form.link || 'N/A'}\n\n` +
    `Situation Overview:\n${form.overview}\n`
  );
  window.location.href = `mailto:hello@npts.tech?subject=${subject}&body=${body}`;
}
</script>
