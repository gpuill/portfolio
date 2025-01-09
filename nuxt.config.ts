// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  runtimeConfig: {
    // Variables accessibles uniquement côté serveur
    githubToken: process.env._API_TOKEN_GITHUB,
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
  ]
})