import request from '@/utils/request'

// 查询角色列表
export function listRole (query) {
  return request({
    url: '/system/role/list',
    method: 'get',
    params: query
  })
}

// 删除角色
export function delRole (roleId) {
  return request({
    url: '/system/role/' + roleId,
    method: 'delete'
  })
}

// 角色状态修改
export function changeRoleStatus (roleId, status) {
  const data = {
    roleId,
    status
  }
  return request({
    url: '/system/role/changeStatus',
    method: 'put',
    data: data
  })
}
