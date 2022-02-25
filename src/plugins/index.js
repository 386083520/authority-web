import tab from './tab'
export default {
  install (Vue) {
    // 页签操作
    Vue.prototype.$tab = tab
  }
}
