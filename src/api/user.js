import request from '@/request'

// 用户登录
export function userLogin(userInfo) {
  return request ({
    url: '/login',
    method: 'POST',
    data: userInfo
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