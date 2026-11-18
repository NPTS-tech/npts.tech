<template>
  <footer class="bg-term-bg text-term-fg font-mono border-t border-term-line px-5 md:px-10 py-10 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-10 text-xs text-term-dim">
    <div class="leading-[1.9]">
      <div class="text-term-acc mb-[6px]">npts.tech</div>
      Non-Profit Technical Support<br>
      Plano, United States · <a href="mailto:info@npts.tech" class="hover:text-term-acc inline-block py-1 md:py-0">info@npts.tech</a>
    </div>
    <div class="flex gap-10 md:gap-12 leading-[2]">
      <div>
        <div class="text-term-fg mb-1">Programs</div>
        <NuxtLink to="/programs" class="hover:text-term-acc block py-1 md:py-0">Hosting &amp; support</NuxtLink>
        <NuxtLink to="/careers" class="hover:text-term-acc block py-1 md:py-0">Internships &amp; volunteering</NuxtLink>
      </div>
      <div>
        <div class="text-term-fg mb-1">Organization</div>
        <NuxtLink to="/about" class="hover:text-term-acc block py-1 md:py-0">About</NuxtLink>
        <NuxtLink to="/case-studies" class="hover:text-term-acc block py-1 md:py-0">Case studies</NuxtLink>
        <NuxtLink to="/donate" class="hover:text-term-acc block py-1 md:py-0">Donate</NuxtLink>
        <NuxtLink to="/support" class="hover:text-term-acc block py-1 md:py-0">Contact</NuxtLink>
      </div>
    </div>
  </footer>
</template>
