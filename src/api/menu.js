import request from '@/utils/request'

// 获取路由
export const getRouters = () => {
  return request({
    url: '/getRouters',
    method: 'get'
  })
}

// 新增菜单
export function addMenu (data) {
  return request({
    url: '/system/menu',
    method: 'post',
    data: data
  })
}

// 修改菜单
export function updateMenu (data) {
  return request({
    url: '/system/menu',
    method: 'put',
    data: data
  })
}

// 查询菜单详细
export function getMenu (menuId) {
  return request({
    url: '/system/menu/' + menuId,
    method: 'get'
  })
}
