// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    // app: {
    //     head: {
    //         link: [
    //             {
    //                 rel: 'stylesheet',
    //                 href: 'https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css',
    //                 integrity: 'sha512-NmLkDIU1C/C88wi324HBc+S2kLhi08PN5GDeUVVVC/BVt/9Izdsc9SVeVfA1UZbY3sHUlDSyRXhCzHfr6hmPPw==',
    //                 crossorigin: 'anonymous',
    //                 referrerpolicy: 'no-referrer'
    //             },
    //             {
    //                 rel: 'stylesheet',
    //                 href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css',
    //                 integrity: 'sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==',
    //                 crossorigin: 'anonymous',
    //                 referrerpolicy: 'no-referrer'
    //             }
    //         ]
    //     }
    // },

    modules: [
        '@nuxt/image',
        '@nuxtjs/fontaine',
        '@pinia/nuxt',
        '@nuxtjs/i18n',
        '@nuxt/fonts',
        '@nuxtjs/vuetify',
        (_options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', (config) => {
                // @ts-expect-error
                config.plugins.push(vuetify({autoImport: true}))
            })
        }
    ],
    
    build: {
        transpile: ['vuetify'],
    },

    vite: {
        vue: {
            template: {
                transformAssetUrls,
            },
        },
    },
})
