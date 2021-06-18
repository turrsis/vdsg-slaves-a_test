import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import designer from './plugins/designer'
import router from './router'

const app = createApp(App).use(router)
app.use(vuetify)
app.use(designer)
app.mount('#app')
