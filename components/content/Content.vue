<template lang="pug">
UCard(class="w-3/4 mx-auto ")
  template(#header)
    .text-center.text-4xl
      ContentSlot(unwrap="p" :use="$slots.title")
    .text-center.text-xl
      ContentSlot(unwrap="p" :use="$slots.subtitle")
  div(class="prose lg:prose-xl prose-invert ")
    ContentSlot(unwrap="p" :use="$slots.content")
</template>
