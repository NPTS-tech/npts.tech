// https://nuxt.com/docs/api/configuration/nuxt-config
import { writeFile } from 'node:fs/promises'
import { join } from 'node:path'

// Pages left out of sitemap.xml (redirects).
const SITEMAP_EXCLUDE = ['/services']

export default defineNuxtConfig({
  devtools: { enabled: true },
  colorMode: {
    preference: 'dark'
  },
  css: ['~/assets/main.css'],
  modules: ["@nuxt/ui"],
  runtimeConfig: {
    public: {
      stripeDonationLink: process.env.STRIPE_DONATION_LINK || 'https://donate.stripe.com/aFacN50j55vF9lt1Zk04800'
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  components: [
    { path: '~/components', pathPrefix: false },
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      // The site's fonts. Without these, each device falls back to its own monospace font
      // (Courier on iPhone), which is wider and changes the whole layout.
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600&display=swap' },
      ],
    },
  },
  nitro: {
    prerender: {
      routes: ['/'],
    },
  },
  hooks: {
    // Builds sitemap.xml from every page the site generates, so new pages and case studies
    // are listed for search engines automatically.
    'nitro:init'(nitro) {
      const pages = new Set<string>()
      nitro.hooks.hook('prerender:route', (route) => {
        const isPage = route.contentType?.includes('text/html') && !route.error && !route.route.includes('.')
        if (isPage && !SITEMAP_EXCLUDE.includes(route.route)) pages.add(route.route)
      })
      nitro.hooks.hook('prerender:done', async () => {
        if (!pages.size) return
        const urls = [...pages].sort().map((path) => {
          const clean = path.replace(/\/+$/, '')
          return `  <url><loc>https://npts.tech${clean}/</loc></url>`
        })
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`
        await writeFile(join(nitro.options.output.publicDir, 'sitemap.xml'), xml)
      })
    },
  },
})
