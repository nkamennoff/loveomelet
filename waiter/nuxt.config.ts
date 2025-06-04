// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: {enabled: true},

  // Set the source directory to src
  css: ["~/assets/css/main.css"],
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    'nuxt-auth-utils',
    '@pinia/nuxt',
  ],
  vite: {
    optimizeDeps: {
      include: ["reflect-metadata", "fp-ts/Option"]
    }
  },
  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
        supported: {
          decorators: true
        },
        tsconfigRaw: {
          compilerOptions: {
            experimentalDecorators: true,
            emitDecoratorMetadata: true
          }
        }
      }
    },
    typescript: {
      tsConfig: {
        compilerOptions: {
          strict: true,
          experimentalDecorators: true,
          emitDecoratorMetadata: true,
        }
      }
    }
  },

  // i18n configuration for multilingual support (English and French)
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.json'
      },
      {
        code: 'fr',
        name: 'Français',
        file: 'fr.json'
      }
    ]
  },
  runtimeConfig: {
    oauth: {
      auth0: {
        scope: ['openid', 'profile', 'email']
      }
    }
  },
  experimental: {
    decorators: true
  }
});