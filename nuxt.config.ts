// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  content: {
    // content v3 uses content/ directory by default
  },
  app: {
    head: {
      title: 'KikuAI Blog',
      meta: [
        { name: 'description', content: 'Vibecoder diary — auto-generated dev session notes by KikuAI' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap' }
      ]
    }
  }
})
