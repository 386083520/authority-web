import router from './router'
import { getToken } from '@/utils/auth'
const whiteList = ['/login']
router.beforeEach((to, from, next) => {
  if (getToken()) {
    if (to.path === '/login') {
      console.log('gsd111')
      next({ path: '/' })
    } else {
      console.log('gsd222')
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.fullPath}`)
    }
  }
})
