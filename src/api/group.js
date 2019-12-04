import request from '@/request'

const baseURL = "/groupService/"

// 查询所有科室列表
export function groupList(req) {
  return request ({
    url: baseURL + 'queryGroupList',
    method: 'POST',
    data: req
  })
}