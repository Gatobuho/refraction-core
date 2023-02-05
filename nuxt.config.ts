export default defineNuxtConfig({
  app: {
    head: {
      title: 'Refraction',
      meta: [
        { name: 'description', content: 'A Nuxt 3 based starter project, to make your dev-life easier' },
      ],
      link: [
        {
          rel: 'icon', type: 'image/png', href: '/nuxt.png',
        },
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
    'anu-vue/dist/style.css',
    '@/assets/main.css',
  ],
  experimental: {
    viteNode: false,
  },
  unocss: {
    preflight: true,
  },
  colorMode: {
    classSuffix: '',
  },
  // https://github.com/nuxt/framework/issues/6204#issuecomment-1201398080
  hooks: {
    'vite:extendConfig': function (config: any, { isServer }: any) {
      if (isServer) {
        // Workaround for netlify issue
        // https://github.com/nuxt/framework/issues/6204
        config.build.rollupOptions.output.inlineDynamicImports = true
      }
    },
  },
  plugins: [],
})
