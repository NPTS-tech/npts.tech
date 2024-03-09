// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL:'/npes.tech/',
  },
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
  ],
})