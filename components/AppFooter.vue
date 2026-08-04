<template>
  <footer class="bg-term-bg text-term-fg font-mono border-t border-term-line px-10 py-10 flex justify-between items-start gap-10 text-xs text-term-dim">
    <div class="leading-[1.9]">
      <div class="text-term-acc mb-[6px]">npts.tech</div>
      Non-Profit Technical Support · 501(c)(3)<br>
      Richardson, TX · <a href="mailto:hello@npts.tech" class="hover:text-term-acc">hello@npts.tech</a>
    </div>
    <div class="flex gap-12 leading-[2]">
      <div>
        <div class="text-term-fg mb-1">Services</div>
        <NuxtLink to="/services" class="hover:text-term-acc block">Hosting</NuxtLink>
        <NuxtLink to="/services" class="hover:text-term-acc block">Maintenance</NuxtLink>
        <NuxtLink to="/services" class="hover:text-term-acc block">SaaS waitlist</NuxtLink>
      </div>
      <div>
        <div class="text-term-fg mb-1">Programs</div>
        <NuxtLink to="/programs" class="hover:text-term-acc block">EPICS partnership</NuxtLink>
        <NuxtLink to="/careers" class="hover:text-term-acc block">Internships</NuxtLink>
        <NuxtLink to="/careers" class="hover:text-term-acc block">Volunteering</NuxtLink>
      </div>
      <div>
        <div class="text-term-fg mb-1">Trust</div>
        <NuxtLink to="/about" class="hover:text-term-acc block">Security overview</NuxtLink>
        <NuxtLink to="/about" class="hover:text-term-acc block">IRS letter &amp; Form 990</NuxtLink>
        <NuxtLink to="/about" class="hover:text-term-acc block">Board &amp; team</NuxtLink>
        <a href="#" class="hover:text-term-acc block">Status page</a>
      </div>
    </div>
  </footer>
</template>
