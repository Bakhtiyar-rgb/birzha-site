export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  nitro: {
    compatibilityDate: '2025-05-31'
  },
  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 500
      }
    }
  }
})