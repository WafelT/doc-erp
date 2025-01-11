// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'
import { MAIN } from '~/themes/main'

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
    // ... your configuration
        theme: {
            defaultTheme: 'MAIN',
            themes: {
                MAIN
            }
        }
    })
    app.vueApp.use(vuetify)
})  