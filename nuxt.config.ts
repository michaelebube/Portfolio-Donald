// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss'],
  vite: {
    plugins: [

    ],
    assetsInclude: ['**/*.svg'],
    optimizeDeps: {
      include: ['vite-svg-loader']
    }
  }
})