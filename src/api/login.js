import request from '@/request'

const baseURL = "/adminUserService/"

// 用户登陆
export function login (data) {
  return request ({
    url: baseURL + 'login',
    method: 'POST',
    data
  })
}