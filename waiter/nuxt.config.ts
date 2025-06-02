// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  // Set the source directory to src
  srcDir: 'src/',

  // Note: Need to install @nuxtjs/i18n module with: npm install @nuxtjs/i18n
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxt/icon',
    '@nuxt/fonts',
    // '@nuxtjs/i18n' // Uncomment after installation
  ],

  // i18n configuration for multilingual support (English and French)
  // i18n: {
  //   locales: [
  //     {
  //       code: 'en',
  //       name: 'English',
  //       file: 'en.json'
  //     },
  //     {
  //       code: 'fr',
  //       name: 'Français',
  //       file: 'fr.json'
  //     }
  //   ],
  //   defaultLocale: 'en',
  //   strategy: 'prefix_except_default',
  //   langDir: 'locales/', // This is relative to srcDir, so it will be src/locales/
  //   vueI18n: {
  //     fallbackLocale: 'en'
  //   }
  // }
})
