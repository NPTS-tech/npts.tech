<template>
  <header class="sticky top-0 z-50 backdrop-blur-md bg-term-bg/95 border-b border-term-line">
    <nav class="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-10 py-4 font-mono text-sm">
      <NuxtLink to="/" class="flex items-center gap-2 group">
        <div class="w-7 h-7 rounded bg-term-card border border-term-rule flex items-center justify-center text-term-acc font-semibold text-xs group-hover:border-term-acc transition-colors">
          &gt;_
        </div>
        <div class="flex items-baseline font-semibold tracking-tight">
          <span class="text-term-fg text-base">npts</span><span class="text-term-acc">.tech</span>
        </div>
      </NuxtLink>

      <div class="hidden md:flex items-center gap-8 text-[13px] text-term-mid">
        <NuxtLink to="/services" class="hover:text-term-acc transition-colors" active-class="text-term-acc font-medium">Services</NuxtLink>
        <NuxtLink to="/programs" class="hover:text-term-acc transition-colors" active-class="text-term-acc font-medium">Programs</NuxtLink>
        <NuxtLink to="/partners" class="hover:text-term-acc transition-colors" active-class="text-term-acc font-medium">Partners</NuxtLink>
        <NuxtLink to="/about" class="hover:text-term-acc transition-colors" active-class="text-term-acc font-medium">About</NuxtLink>
        <NuxtLink to="/careers" class="hover:text-term-acc transition-colors" active-class="text-term-acc font-medium">Get Involved</NuxtLink>
      </div>

      <div class="flex items-center gap-3">
        <NuxtLink to="/support" class="text-xs sm:text-[13px] text-term-mid border border-term-rule rounded px-3 sm:px-4 py-2 hover:border-term-acc hover:text-term-fg transition-colors">
          Request Support
        </NuxtLink>
        <NuxtLink to="/donate" class="text-xs sm:text-[13px] font-semibold text-term-deep bg-term-acc rounded px-3 sm:px-4 py-2 hover:bg-term-accHi transition-colors shadow-sm shadow-term-acc/10">
          Donate
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>
