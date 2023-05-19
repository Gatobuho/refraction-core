import { z } from 'zod'
import { pwa } from './config/pwa'
import { appDescription } from './constants/index'

// https://twitter.com/iamandrewluca/status/1646464434963881985
z.object({
  SUPABASE_URL: z.string().url(),
  SUPABASE_KEY: z.string(),
}).parse(process.env)

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
    '@anu-vue/nuxt',
    '@nuxt/image-edge',
    '@nuxtjs/color-mode',
    '@nuxtjs/supabase',
    '@pinia/nuxt',
    '@unocss/nuxt',
    '@vueuse/nuxt',
  ],
  css: [
    '@unocss/reset/tailwind.css',
    'anu-vue/dist/style.css',
    '@/assets/main.css',
  ],
  experimental: {
    payloadExtraction: false,
    inlineSSRStyles: false,
    renderJsonPayloads: true,
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
