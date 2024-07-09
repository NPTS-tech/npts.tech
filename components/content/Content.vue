<template lang="pug">
UCard(class="w-3/4 mx-auto ")
  template(#header)
    .text-center.text-4xl
      slot(name="title")
    .text-center.text-xl
      slot(name="subtitle")
  .mx-auto(class="prose lg:prose-xl prose-invert ")
    slot(name="content")
</template>
