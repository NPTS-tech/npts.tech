// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  colorMode: {
    preference: 'dark'
  },
  css: ['~/assets/main.css'],
  modules: ['@nuxt/content', "@nuxt/ui"],
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
  ],nitro: {
    prerender: {
      routes: ['/'],
    },
  },
})
