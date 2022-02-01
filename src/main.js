import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import designer from 'vdsg-slave'

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .use(designer, {
    config: require('../.designer/config.mjs'),
    metadata: require('../.designer/metadata.mjs')
  })
  .mount('#app')
