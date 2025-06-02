export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/css/main.css'], // 🟢 Подключение Tailwind CSS
  modules: ['@nuxtjs/tailwindcss'],
  nitro: {
        compatibilityDate: '2025-06-01'
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
