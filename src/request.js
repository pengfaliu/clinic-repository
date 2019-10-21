import axios from 'axios'

const service = axios.create({
  baseURL: process.env.BASE_API,
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