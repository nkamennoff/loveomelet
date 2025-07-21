import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'
import { resolve, dirname } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'happy-dom',
    include: ['./test/**/*.{test,spec}.{js,ts,jsx,tsx}'],
    exclude: ['./test/e2e/**/*', 'node_modules'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/']
    },
  },
  resolve: {
    alias: {
      '~': resolve(__dirname, './'),
      '@': resolve(__dirname, './'),
      'app': resolve(__dirname, './app'),
      'server': resolve(__dirname, './server'),
      'shared': resolve(__dirname, './shared'),
    }
  }
})