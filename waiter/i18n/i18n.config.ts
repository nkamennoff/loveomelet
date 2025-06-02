export default () => {
    return {
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
            ],
            defaultLocale: 'fr',
            langDir: 'locales/',
            strategy: 'prefix_except_default',
            vueI18n: {
                fallbackLocale: 'en',
                datetimeFormats: {
                    en: {
                        short: {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit',
                            hour: '2-digit',
                            minute: '2-digit',
                            second: '2-digit',
                            hour12: false
                        }
                    },
                    fr: {
                        short: {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit',
                            hour: '2-digit',
                            minute: '2-digit',
                            second: '2-digit',
                            hour12: true
                        }
                    }
                }
            }
        }
    }
}