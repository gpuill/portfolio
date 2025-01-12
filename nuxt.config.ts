export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  runtimeConfig: {
    // Variables accessibles uniquement côté serveur
    githubToken: process.env.GITHUB_API_TOKEN,
    public:{
      
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@nuxthub/core',
    '@nuxt/image',
    '@nuxt/icon'
  ],
})