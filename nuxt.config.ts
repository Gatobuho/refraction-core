/* import { z } from 'zod' */
import { pwa } from './config/pwa'
import { appDescription } from './constants/index'

// https://twitter.com/iamandrewluca/status/1646464434963881985
/* Commented when not using Supabase
z.object({
  SUPABASE_URL: z.string().url(),
  SUPABASE_KEY: z.string(),
}).parse(process.env)
*/

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Refraction',
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    },
  },
  modules: [
    '@nuxt/image-edge',
    '@nuxtjs/color-mode',
    // '@nuxtjs/supabase', // Commented when not using Supabase
    '@pinia/nuxt',
    '@unocss/nuxt',
    '@vueuse/nuxt',
  ],
  css: [
    '@unocss/reset/tailwind.css',
    '@/assets/main.css',
  ],
  experimental: {
    payloadExtraction: false,
    inlineSSRStyles: false,
    renderJsonPayloads: true,
    viewTransition: true,
  },
  unocss: {
    preflight: true,
  },
  colorMode: {
    classSuffix: '',
  },
  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ['/'],
      ignore: ['/hi'],
    },
  },
  pwa,

  devtools: {
    enabled: true,
  },
  vite: {
    vue: {
      script: {
        propsDestructure: true,
      },
    },
  },
})
