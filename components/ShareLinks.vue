<script setup lang="ts">
// Share buttons for a blog post. Instagram has no web share link, so "copy link" covers it
// (people paste the link into a bio or story).
const props = defineProps<{ title: string; label?: string }>()

const SITE = 'https://npts.tech'
const route = useRoute()
const url = computed(() => `${SITE}${route.path}`)

const links = computed(() => {
  const u = encodeURIComponent(url.value)
  const t = encodeURIComponent(props.title)
  return [
    { name: 'X', href: `https://twitter.com/intent/tweet?url=${u}&text=${t}` },
    { name: 'LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}` },
    { name: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${u}` },
    { name: 'Email', href: `mailto:?subject=${t}&body=${u}` },
  ]
})

const copied = ref(false)
async function copyLink() {
  try {
    await navigator.clipboard.writeText(url.value)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  } catch {
    window.prompt('Copy this link:', url.value)
  }
}
</script>

<template>
  <div class="flex flex-wrap items-center gap-x-5 gap-y-3 text-[13px]">
    <span class="text-term-dim">{{ label ?? 'Share' }}</span>
    <a
      v-for="link in links"
      :key="link.name"
      :href="link.href"
      target="_blank"
      rel="noopener"
      class="text-term-mid border border-term-rule px-3 py-[6px] hover:border-term-acc hover:text-term-acc"
    >{{ link.name }}</a>
    <button
      type="button"
      class="text-term-mid border border-term-rule px-3 py-[6px] hover:border-term-acc hover:text-term-acc"
      @click="copyLink"
    >{{ copied ? 'Link copied ✓' : 'Copy link' }}</button>
  </div>
</template>
