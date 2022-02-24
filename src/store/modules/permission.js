import { getRouters } from '@/api/menu'
import { constantRoutes } from '@/router'

export const loadView = (view) => {
  return (resolve) => require([`@/views/${view}`], resolve)
}

// 遍历后台传来的路由字符串，转换为组件对象
function filterAsyncRouter (asyncRouterMap, lastRouter = false, type = false) {
  return asyncRouterMap.filter(route => {
    if (route.component) {
      route.component = loadView(route.component)
    }
    return true
  })
}

const permission = {
  state: {
    sidebarRouters: []
  },
  mutations: {
    SET_SIDEBAR_ROUTERS: (state, routes) => {
      state.sidebarRouters = routes
    }
  },
  actions: {
    // 生成路由
    GenerateRoutes ({ commit }) {
      return new Promise(resolve => {
        // 向后端请求路由数据
        getRouters().then(res => {
          const sdata = JSON.parse(JSON.stringify(res.data))
          const rdata = JSON.parse(JSON.stringify(res.data))
          const sidebarRoutes = filterAsyncRouter(sdata)
          const rewriteRoutes = filterAsyncRouter(rdata, false, true)
          commit('SET_SIDEBAR_ROUTERS', constantRoutes.concat(sidebarRoutes))
          resolve(rewriteRoutes)
        })
      })
    }
  }
}

export default permission
