import store from '@/store'
export default {
// 关闭指定tab页签
  closePage (obj) {
    if (obj === undefined) {

    }
    return store.dispatch('tagsView/delView', obj)
  }
}
