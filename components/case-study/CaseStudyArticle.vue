<script setup lang="ts">
// A full case study page, assembled from the pieces in components/case-study.
// The words and photos come from a file in data/case-studies/articles.
import type { CaseStudy } from '~/data/case-studies/types'
import { imageFolder, imagePath } from '~/data/case-studies'

defineProps<{ study: CaseStudy }>()
</script>

<template>
  <div class="bg-term-bg text-term-fg font-mono">
    <CaseStudyHero
      :title="study.title"
      :summary="study.summary"
      :date="study.date"
      :updated="study.updated"
      :partner-name="study.partner.name"
      :logo="study.partner.logo && imagePath(study, study.partner.logo)"
    />
    <CaseStudyFacts v-if="study.facts.length" :facts="study.facts" />
    <CaseStudyQuote v-if="study.quote" :text="study.quote.text" :author="study.quote.author" />

    <article class="px-5 md:px-10 py-14 md:py-[68px] border-b border-term-line">
      <div class="max-w-[72ch] mx-auto">
        <div class="flex flex-col gap-12">
          <CaseStudySection v-for="(section, s) in study.sections" :key="s" :section="section" :image-base="imageFolder(study)" />
        </div>
        <div class="border-t border-term-line mt-12 pt-8">
          <ShareLinks :title="study.title" label="Share this story" />
        </div>
      </div>
    </article>

    <CaseStudyWhyItMatters v-if="study.whyItMatters" v-bind="study.whyItMatters" />
    <CaseStudySources
      v-if="study.sources || study.partner.url"
      :sources="study.sources"
      :partner-name="study.partner.name"
      :partner-url="study.partner.url"
    />

    <SponsorBanner />
  </div>
</template>
