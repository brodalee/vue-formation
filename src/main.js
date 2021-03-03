import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { default as i18nPlugin } from './plugins/i18n'

createApp(App)
    .use(router)
    .use(i18nPlugin)
    .mount('#app')
