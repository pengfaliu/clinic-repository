import request from '@/request'

const baseURL = "/userService/"

// 查询所有人员列表
export function userList() {
  return request ({
    url: baseURL + 'queryUserList',
    method: 'POST',
    data: {}
  })
}

// 保存、修改人员信息
export function saveUser (req) {
  return request ({
    url: baseURL + 'saveUser',
    method: 'POST',
    data: req
  })
}

// test
export function test(userInfo) {
  return request ({
    url: '/',
    method: 'get',
    data: userInfo
  })
}