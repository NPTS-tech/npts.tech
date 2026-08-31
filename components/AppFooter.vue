<template>
  <footer class="bg-term-deep text-term-fg font-mono border-t border-term-line px-6 sm:px-10 py-12 text-xs text-term-dim">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
      <div class="leading-relaxed max-w-sm">
        <div class="flex items-center gap-2 mb-3">
          <span class="text-term-fg font-semibold text-sm">npts</span><span class="text-term-acc text-sm font-semibold">.tech</span>
          <span class="text-[10px] uppercase px-1.5 py-0.5 rounded bg-term-card border border-term-rule text-term-acc">501(c)(3)</span>
        </div>
        <p class="font-sans text-term-mid text-xs leading-relaxed mb-3">
          Non-Profit Technical Support is a 501(c)(3) public charity dedicated to keeping community software online and empowering emerging engineers.
        </p>
        <div class="text-term-dim space-y-0.5">
          <div>Richardson, TX</div>
          <div>Inquiries: <a href="mailto:hello@npts.tech" class="text-term-mid hover:text-term-acc transition-colors">hello@npts.tech</a></div>
        </div>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 leading-loose">
        <div>
          <div class="text-term-fg font-semibold mb-2 uppercase text-[11px] tracking-wider">Services</div>
          <ul class="space-y-1 font-sans text-sm">
            <li><NuxtLink to="/services" class="hover:text-term-acc transition-colors">Application Hosting</NuxtLink></li>
            <li><NuxtLink to="/services" class="hover:text-term-acc transition-colors">Maintenance &amp; On-Call</NuxtLink></li>
            <li><NuxtLink to="/services" class="hover:text-term-acc transition-colors">Fractional CTO</NuxtLink></li>
            <li><NuxtLink to="/services" class="hover:text-term-acc transition-colors">Student Scoping</NuxtLink></li>
          </ul>
        </div>
        <div>
          <div class="text-term-fg font-semibold mb-2 uppercase text-[11px] tracking-wider">Programs</div>
          <ul class="space-y-1 font-sans text-sm">
            <li><NuxtLink to="/programs" class="hover:text-term-acc transition-colors">EPICS Partnership</NuxtLink></li>
            <li><NuxtLink to="/careers" class="hover:text-term-acc transition-colors">Student Internships</NuxtLink></li>
            <li><NuxtLink to="/careers" class="hover:text-term-acc transition-colors">Mentorship &amp; Volunteering</NuxtLink></li>
            <li><NuxtLink to="/programs" class="hover:text-term-acc transition-colors">Junior CTO Program</NuxtLink></li>
          </ul>
        </div>
        <div>
          <div class="text-term-fg font-semibold mb-2 uppercase text-[11px] tracking-wider">Trust &amp; Governance</div>
          <ul class="space-y-1 font-sans text-sm">
            <li><NuxtLink to="/about" class="hover:text-term-acc transition-colors">IRS Letter &amp; Form 990</NuxtLink></li>
            <li><NuxtLink to="/about" class="hover:text-term-acc transition-colors">Security &amp; Data Privacy</NuxtLink></li>
            <li><NuxtLink to="/about" class="hover:text-term-acc transition-colors">Board &amp; Leadership</NuxtLink></li>
            <li><NuxtLink to="/support" class="hover:text-term-acc transition-colors">Partner Inquiries</NuxtLink></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto mt-10 pt-6 border-t border-term-line flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-term-dim">
      <div>&copy; {{ new Date().getFullYear() }} Non-Profit Technical Support. All rights reserved.</div>
      <div class="flex items-center gap-6">
        <NuxtLink to="/about" class="hover:text-term-mid transition-colors">Governance</NuxtLink>
        <NuxtLink to="/donate" class="hover:text-term-mid transition-colors">Donate</NuxtLink>
        <NuxtLink to="/support" class="hover:text-term-mid transition-colors">Emergency Support</NuxtLink>
      </div>
    </div>
  </footer>
</template>
