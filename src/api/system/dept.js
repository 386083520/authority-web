import request from '@/utils/request'

// 查询部门下拉树结构
export function treeselect () {
  return request({
    url: '/system/dept/treeselect',
    method: 'get'
  })
}
