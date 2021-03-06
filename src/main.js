import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import '@/assets/scss/app.scss'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'


import httpRequest from "./utils/httpRequest";

Vue.prototype.$http = httpRequest // ajax请求方法
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import store from "./state/store"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
