// @ts-check
import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'
import tailwind from '@tailwindcss/vite'
import node from '@astrojs/node'

export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  integrations: [vue({ appEntrypoint: '/src/vue-app.js' })],
  vite: { plugins: [tailwind()] },
})
