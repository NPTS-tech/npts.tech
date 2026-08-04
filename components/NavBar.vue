<template>
  <nav class="flex items-center justify-between px-10 py-[18px] border-b border-term-line bg-term-bg text-term-fg font-mono">
    <NuxtLink to="/" class="flex items-baseline gap-[2px]">
      <span class="text-term-acc font-semibold">npts</span><span class="text-term-dim">.tech</span>
    </NuxtLink>
    <div class="flex gap-7 text-[13px] text-term-mid">
      <NuxtLink to="/services" class="hover:text-term-acc">services</NuxtLink>
      <NuxtLink to="/programs" class="hover:text-term-acc">programs</NuxtLink>
      <NuxtLink to="/partners" class="hover:text-term-acc">partners</NuxtLink>
      <NuxtLink to="/about" class="hover:text-term-acc">about</NuxtLink>
    </div>
    <div class="flex items-center gap-[10px]">
      <NuxtLink to="/support" class="text-[13px] text-term-mid border border-term-rule px-[14px] py-[9px] hover:border-term-acc hover:text-term-acc">Request support</NuxtLink>
      <NuxtLink to="/donate" class="text-[13px] font-semibold text-term-bg bg-term-acc px-[15px] py-[10px] hover:bg-term-accHi">Donate</NuxtLink>
    </div>
  </nav>
</template>
