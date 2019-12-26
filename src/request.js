import axios from 'axios'
import router from '@/router'
import { getToken } from '@/utils/auth'
import DonMessage from './message'
const address = require('address')

const service = axios.create({
  baseURL: address.ip() ? address.ip() + ':4000' : 'http://localhost:4000',
  timeout: 10000
})

service.interceptors.request.use(config => {
  // console.log(config)
  config.headers = {
    'content-type': 'application/json; charset=utf-8',
    'token': getToken()
  }
  // console.log(config)
  return config
}, error => {
  return Promise.reject(error)
})

service.interceptors.response.use(response => {
  if (response.data.code !== 200) {
    DonMessage.warning('请登录')
    router.push({name: 'login'})
  }
  return response
}, error => {
  return Promise.reject(error)
})

export default service