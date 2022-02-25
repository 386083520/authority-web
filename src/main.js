import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import plugins from './plugins' // plugins

import '@/assets/styles/index.scss'

import './assets/icons'
import './permission' // permission control

Vue.config.productionTip = false

Vue.use(Element)
Vue.use(plugins)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
