// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
  ],
  ssr: false,
  components: {
    global: true,
    dirs: ['@/components/UI', '@/components']
  },
  app: {
    head:{
      title: 'Krist',
      meta: [],
      link: [
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]
    }
  }
})
