<template>
  <UCard class="w-3/4 mx-auto ">
    <template #header>
      <div class="text-center text-4xl">
        <slot name="title" />
      </div>
      <div class="text-center text-xl">
        <slot name="subtitle" />
      </div>
    </template>
    <div class="mx-auto prose lg:prose-xl prose-invert ">
      <slot name="content" />
    </div>
  </UCard>
</template>
