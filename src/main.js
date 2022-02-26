import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 自定义表格工具组件
import RightToolbar from '@/components/RightToolbar'
// 分页组件
import Pagination from '@/components/Pagination'
// 字典数据组件
import DictData from '@/components/DictData'
// 字典标签组件
import DictTag from '@/components/DictTag'

import { getConfigKey } from '@/api/system/config'

import { addDateRange, resetForm, parseTime, handleTree } from '@/utils/ruoyi'

import plugins from './plugins' // plugins

import '@/assets/styles/index.scss'
import '@/assets/styles/ruoyi.scss'

import './assets/icons'
import './permission' // permission control

Vue.config.productionTip = false

Vue.component('RightToolbar', RightToolbar)
Vue.component('Pagination', Pagination)
Vue.component('DictTag', DictTag)

Vue.prototype.addDateRange = addDateRange
Vue.prototype.resetForm = resetForm
Vue.prototype.getConfigKey = getConfigKey
Vue.prototype.parseTime = parseTime
Vue.prototype.handleTree = handleTree

Vue.use(Element)
Vue.use(plugins)
DictData.install()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
