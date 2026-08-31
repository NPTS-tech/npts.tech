// https://nuxt.com/docs/api/configuration/nuxt-config
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
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,600;1,400&family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  nitro: {
    prerender: {
      routes: ['/', '/services', '/programs', '/partners', '/about', '/careers', '/donate', '/support'],
    },
  },
})
