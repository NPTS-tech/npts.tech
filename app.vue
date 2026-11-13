<template>
  <div class="min-h-screen bg-term-bg text-term-fg font-sans">
    <NavBar />
    <main>
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
// Site-wide search and share settings. Each page sets its own title and description (usePageSeo).
const DEFAULT_TITLE = 'NPTS · Non-Profit Technical Support'
const DEFAULT_DESCRIPTION = 'Non-Profit Technical Support (NPTS) hosts and maintains the software nonprofits depend on, so it keeps working long after the people who built it move on.'

const route = useRoute()
const pageUrl = computed(() => siteUrl(route.path))

// Describes NPTS to search engines and AI assistants (schema.org structured data).
const organization = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  '@id': `${SITE}/#organization`,
  name: 'Non-Profit Technical Support',
  alternateName: 'NPTS',
  url: `${SITE}/`,
  logo: `${SITE}/img/logo_large.webp`,
  email: 'info@npts.tech',
  description: DEFAULT_DESCRIPTION,
  foundingDate: '2024',
  address: { '@type': 'PostalAddress', addressLocality: 'Plano', addressRegion: 'TX', addressCountry: 'US' },
  areaServed: 'North Texas',
}

useHead({
  htmlAttrs: { lang: 'en' },
  titleTemplate: (title?: string) => (!title ? DEFAULT_TITLE : title.includes('NPTS') ? title : `${title} · NPTS`),
  // The page's one official address, so search engines don't count copies (e.g. with or without "/") separately.
  link: [{ rel: 'canonical', href: pageUrl }],
  script: [{ key: 'organization-jsonld', type: 'application/ld+json', innerHTML: JSON.stringify(organization) }],
})

useSeoMeta({
  description: DEFAULT_DESCRIPTION,
  ogTitle: DEFAULT_TITLE,
  ogDescription: DEFAULT_DESCRIPTION,
  ogSiteName: 'NPTS',
  ogType: 'website',
  ogUrl: pageUrl,
  // Preview image when a page is shared. Case studies use their own photo instead.
  ogImage: `${SITE}/img/og-default.png`,
  ogImageAlt: 'NPTS: the technical backbone for your nonprofit',
  twitterCard: 'summary_large_image',
})
</script>
