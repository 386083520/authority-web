import router from './router'
import store from './store'
import { getToken } from '@/utils/auth'
const whiteList = ['/login']
router.beforeEach((to, from, next) => {
  if (getToken()) {
    if (to.path === '/login') {
      console.log('gsd111')
      next({ path: '/' })
    } else {
      if (store.getters.roles.length === 0) {
        // 判断当前用户是否已拉取完user_info信息
        store.dispatch('GetInfo').then(() => {

        }).catch(err => {
          console.log(err)
        })
      } else {
        console.log('gsd222')
        next()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.fullPath}`)
    }
  }
})
