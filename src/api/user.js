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

// test
export function test(userInfo) {
  return request ({
    url: '/',
    method: 'get',
    data: userInfo
  })
}