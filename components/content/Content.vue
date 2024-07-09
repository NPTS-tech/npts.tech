<template lang="pug">
UCard(class="w-3/4 mx-auto ")
  template(#header)
    .text-center.text-4xl
      ContentSlot(:use="$slots.title")
    .text-center.text-xl
      ContentSlot(:use="$slots.subtitle")
  .mx-auto(class="prose lg:prose-xl prose-invert ")
    ContentSlot(:use="$slots.content")
</template>
