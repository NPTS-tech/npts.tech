<script setup lang="ts">
// Layout for every case study article. The words and photos come from a file in
// data/case-studies/articles; this file only decides how they look.
import type { CaseStudy, ArticleBlock, ArticleImage, ArticleHighlight } from '~/data/case-studies/types'
import { imagePath } from '~/data/case-studies'

const props = defineProps<{ study: CaseStudy }>()
const img = (file: string) => imagePath(props.study, file)

const isImage = (b: ArticleBlock): b is { image: ArticleImage } => typeof b === 'object' && 'image' in b
const isHighlight = (b: ArticleBlock): b is { highlight: ArticleHighlight } => typeof b === 'object' && 'highlight' in b

// Divider lines in the facts bar: 2 columns on phones, 1 row on wider screens.
function factBorders(i: number) {
  const last = i === props.study.facts.length - 1
  return [
    i % 2 === 0 && !last ? 'border-r' : '',
    !last ? 'md:border-r' : 'md:border-r-0',
    i >= 2 ? 'border-t md:border-t-0' : '',
  ]
}

const partnerHost = computed(() => props.study.partner.url?.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, ''))
</script>

<template>
  <div class="bg-term-bg text-term-fg font-mono">
    <div class="px-10 pt-[76px] pb-14 border-b border-term-line">
      <NuxtLink to="/case-studies" class="text-[13px] text-term-dim hover:text-term-acc">← All case studies</NuxtLink>
      <div class="flex flex-col md:flex-row md:items-end gap-10 mt-8">
        <div class="flex-1">
          <div class="text-base text-term-acc tracking-[0.1em] mb-6 uppercase">[ Case study · {{ study.partner.name }} ]</div>
          <h1 class="text-[48px] leading-[1.1] font-medium m-0 mb-6 -tracking-[0.02em] max-w-[26ch] text-pretty">{{ study.title }}</h1>
          <p class="font-sans text-[19px] leading-[1.6] text-term-mid m-0 max-w-[62ch] text-pretty">{{ study.summary }}</p>
          <ShareLinks :title="study.title" class="mt-8" />
        </div>
        <img v-if="study.partner.logo" :src="img(study.partner.logo)" :alt="`${study.partner.name} logo`" class="w-[180px] h-[180px] shrink-0 border border-term-line object-contain">
      </div>
    </div>

    <div v-if="study.facts.length" class="grid grid-cols-2 md:grid-cols-4 border-b border-term-line text-[13px]">
      <div
        v-for="(fact, i) in study.facts"
        :key="fact.label"
        class="px-10 py-6 border-term-line"
        :class="factBorders(i)"
      >
        <div class="text-term-dim mb-1">{{ fact.label }}</div>
        <a
          v-if="fact.label === 'Partner' && study.partner.url"
          :href="study.partner.url"
          target="_blank"
          rel="noopener"
          class="text-term-fg hover:text-term-acc"
        >{{ fact.value }}</a>
        <div v-else :class="fact.highlight ? 'text-term-acc' : 'text-term-fg'">{{ fact.value }}</div>
      </div>
    </div>

    <div v-if="study.quote" class="px-10 py-[60px] border-b border-term-line bg-term-deep">
      <div class="max-w-[72ch] mx-auto">
        <blockquote class="m-0 text-[24px] leading-[1.45] font-medium text-term-fg text-pretty">“{{ study.quote.text }}”</blockquote>
        <div class="font-sans text-[15px] text-term-mid mt-6">{{ study.quote.author }}</div>
      </div>
    </div>

    <article class="px-10 py-[68px] border-b border-term-line">
      <div class="max-w-[72ch] mx-auto">
        <section v-for="(section, s) in study.sections" :key="section.label" :class="{ 'mb-12': s < study.sections.length - 1 }">
          <div class="text-base text-term-acc tracking-[0.1em] mb-5 uppercase">[ {{ section.label }} ]</div>
          <h2 class="text-[28px] font-medium leading-[1.25] m-0 mb-5">{{ section.heading }}</h2>
          <template v-for="(block, b) in section.body" :key="b">
            <figure v-if="isImage(block)" class="m-0 mb-5">
              <img :src="img(block.image.src)" :alt="block.image.alt" class="w-full border border-term-line" loading="lazy">
              <figcaption v-if="block.image.caption" class="font-sans text-[13px] text-term-dim mt-3">{{ block.image.caption }}</figcaption>
            </figure>
            <div v-else-if="isHighlight(block)" class="border border-term-acc bg-term-card px-7 py-6" :class="{ 'mb-5': b < section.body.length - 1 }">
              <div class="text-base text-term-acc tracking-[0.1em] mb-4 uppercase">{{ block.highlight.title }}</div>
              <div class="grid gap-3">
                <div v-for="item in block.highlight.items" :key="item" class="flex gap-4">
                  <span class="text-term-acc">→</span>
                  <span class="font-sans text-[16px] leading-[1.6] text-term-fg flex-1">{{ item }}</span>
                </div>
              </div>
            </div>
            <p v-else class="font-sans text-[17px] leading-[1.75] text-term-mid m-0" :class="{ 'mb-5': b < section.body.length - 1 }">{{ block }}</p>
          </template>
        </section>
        <div class="border-t border-term-line mt-12 pt-8">
          <ShareLinks :title="study.title" label="Share this story" />
        </div>
      </div>
    </article>

    <div v-if="study.whyItMatters" class="px-10 py-[68px] border-b border-term-line">
      <div class="max-w-[1100px] mx-auto">
        <div class="text-base text-term-acc tracking-[0.1em] mb-5">[ WHY IT MATTERS ]</div>
        <h2 class="text-[28px] font-medium leading-[1.25] m-0 mb-5 max-w-[36ch]">{{ study.whyItMatters.heading }}</h2>
        <p class="font-sans text-[17px] leading-[1.75] text-term-mid m-0 mb-10 max-w-[72ch]">{{ study.whyItMatters.intro }}</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-px bg-term-line border border-term-line mb-10">
          <div v-for="(step, i) in study.whyItMatters.steps" :key="step.title" class="bg-term-bg px-7 py-7">
            <div class="text-term-acc text-[22px] mb-3">{{ String(i + 1).padStart(2, '0') }}</div>
            <h3 class="m-0 mb-2 text-[17px] font-semibold">{{ step.title }}</h3>
            <p class="font-sans m-0 text-[15px] leading-[1.6] text-term-mid">{{ step.body }}</p>
          </div>
        </div>
        <p class="font-sans text-[15px] leading-[1.7] text-term-mid m-0 max-w-[72ch]">
          <template v-if="study.whyItMatters.closing">{{ study.whyItMatters.closing }} </template>
          <NuxtLink to="/partners" class="text-term-acc border-b border-term-acc/40">See all partners →</NuxtLink>
        </p>
      </div>
    </div>

    <div v-if="study.sources || study.partner.url" class="px-10 py-10 border-b border-term-line">
      <div class="max-w-[72ch] mx-auto font-sans text-[13px] leading-[1.7] text-term-dim">
        <template v-if="study.sources">{{ study.sources }} </template>
        <template v-if="study.partner.url">
          Learn more about {{ study.partner.name }} or support its work at
          <a :href="study.partner.url" target="_blank" rel="noopener" class="text-term-mid border-b border-term-rule hover:text-term-acc">{{ partnerHost }}</a>.
        </template>
      </div>
    </div>

    <SponsorBanner />
  </div>
</template>
