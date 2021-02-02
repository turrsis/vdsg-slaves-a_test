import Vue from 'vue'
import AppSlave from './AppSlave.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
//import '@babel/polyfill'
import designer from 'admin-slave';

Vue.config.productionTip = false

let instance = new Vue({
  router,
  store,
  vuetify,
  render: h => h(AppSlave)
}).$mount('#app')

Vue.use(designer, { app: instance, slaveConfig: {
  name: 'a_test'
} })