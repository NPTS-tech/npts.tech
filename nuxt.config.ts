// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  colorMode: {
    preference: 'dark'
  },
  css: ['~/assets/main.css'],
  modules: ['@nuxt/content', "@nuxt/ui"],
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
