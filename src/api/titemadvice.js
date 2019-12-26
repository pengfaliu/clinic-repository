import request from '@/request'

const baseURL = '/tItemAdvice/'

// 查询所有方剂列表
export function queryTItemAdviceList (req) {
  return request({
    url: baseURL + 'queryTItemAdviceList',
    method: 'POST',
    data: req
  })
}

// 修改、新增方剂
export function updateTItemAdvice (req) {
  return request({
    url: baseURL + 'updateTItemAdvice',
    method: 'POST',
    data: req
  })
}

// 删除方剂
export function delTItemAdvice (req) {
  return request({
    url: baseURL + 'delTItemAdvice',
    method: 'POST',
    data: req
  })
}