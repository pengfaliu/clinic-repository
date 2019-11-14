import axios from 'axios'

const service = axios.create({
  baseURL: process.env.BASE_API,
  baseURL: 'http://127.0.0.1:3000/api',
  timeout: 10000
})

service.interceptors.request.use(config => {
  config.headers = {
    
  }
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