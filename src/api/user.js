import request from '@/request'

// 用户登录
export function userLogin(userInfo) {
  return request ({
    url: '/login',
    method: 'POST',
    data: userInfo
  })
}