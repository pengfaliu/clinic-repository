import request from '@/request'

const baseURL = "/groupService/"

// 查询所有科室列表（分页）
export function groupList(req) {
  return request ({
    url: baseURL + 'queryGroupList',
    method: 'POST',
    data: req
  })
}

// 查询所有科室列表（全部）
export function queryAllGroup() {
  return request ({
    url: baseURL + 'queryAllGroup',
    method: 'POST',
    data: {}
  })
}

// 新增和修改科室
export function updateGruop(req) {
  return request ({
    url: baseURL + 'updateGruop',
    method: 'POST',
    data: req
  })
}

// 根据科室id删除科室
export function delGroup (id) {
  return request ({
    url: baseURL + 'deletGruopEntityById',
    method: 'POST',
    data: id
  })
}