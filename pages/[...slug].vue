<template>
  <main class="pt-4 max-w-4xl mx-auto">
    <div class="border-2 border-terminal-dark shadow-[0_0_15px_#084D65] bg-terminal-bg relative">
      <div class="border-b-2 border-terminal-dark bg-[#084D65] px-4 py-2 flex items-center justify-between">
        <div class="flex gap-2">
          <div class="w-3 h-3 rounded-full bg-red-500"></div>
          <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div class="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div class="text-xs text-terminal-light opacity-80 font-bold tracking-wider">/var/log/npts.txt</div>
      </div>
      <div class="prose prose-terminal max-w-none">
        <ContentDoc />
      </div>
    </div>
  </main>
</template>
