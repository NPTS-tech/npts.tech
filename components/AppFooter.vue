<template>
  <footer class="bg-term-bg text-term-fg font-mono border-t border-term-line px-10 py-10 flex justify-between items-start gap-10 text-xs text-term-dim">
    <div class="leading-[1.9]">
      <div class="text-term-acc mb-[6px]">npts.tech</div>
      Non-Profit Technical Support · EIN 99-2054093<br>
      Plano, United States · <a href="mailto:info@npts.tech" class="hover:text-term-acc">info@npts.tech</a>
    </div>
    <div class="flex gap-12 leading-[2]">
      <div>
        <div class="text-term-fg mb-1">Programs</div>
        <NuxtLink to="/programs" class="hover:text-term-acc block">Hosting &amp; support</NuxtLink>
        <NuxtLink to="/careers" class="hover:text-term-acc block">Internships &amp; volunteering</NuxtLink>
      </div>
      <div>
        <div class="text-term-fg mb-1">Organization</div>
        <NuxtLink to="/about" class="hover:text-term-acc block">About</NuxtLink>
        <NuxtLink to="/case-studies" class="hover:text-term-acc block">Case studies</NuxtLink>
        <NuxtLink to="/donate" class="hover:text-term-acc block">Donate</NuxtLink>
        <NuxtLink to="/support" class="hover:text-term-acc block">Contact</NuxtLink>
      </div>
    </div>
  </footer>
</template>
