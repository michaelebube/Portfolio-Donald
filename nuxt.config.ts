// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Caveat:wght@400;500;600;700&display=swap'
        }
      ]
    },
      pageTransition: {
      name: 'blur-page',
      mode: 'out-in'
    }

  },
      vite: {
    plugins: [

    ],
    assetsInclude: ['**/*.svg'],
    optimizeDeps: {
      include: ['vite-svg-loader']
    }
  },
  
})