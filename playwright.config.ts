import { defineConfig } from '@playwright/test'
export default defineConfig({
  use: {
    baseUrl: 'http://localhost:3000',
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'on-first-retry',
  },
})
