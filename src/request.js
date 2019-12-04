import axios from 'axios'

const service = axios.create({
  baseURL: 'http://192.168.1.15:4000',
  timeout: 10000
})

service.interceptors.request.use(config => {
  config.headers = {
    'content-type': 'application/json; charset=utf-8'
  }
  // console.log(config)
  return config
}, error => {
  return Promise.reject(error)
})

service.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})

export default service