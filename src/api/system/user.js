import request from '@/utils/request'

// 查询用户列表
export function listUser (query) {
  console.log('gsdquery2', query)
  return request({
    url: '/system/user/list',
    method: 'get',
    params: query
  })
}
