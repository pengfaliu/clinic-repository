import request from '@/request'

const baseURL = "/medicineService/"
// 药品类型
export function medicineType () {
  return request ({
    url: baseURL + 'queryMedType',
    method: 'POST',
    data: {}
  })
}

// 根据药品类型查看药品目录
export function medicineList (medQuery) {
  return request ({
    url: baseURL + 'queryMedList',
    method: 'POST',
    data: medQuery
  })
}

// 根据药品类型和名称查询
export function queryMedListByTypeAndName (req) {
  return request ({
    url: baseURL + 'queryAllMedList',
    method: 'POST',
    data: req
  })
}

// 新增和修改药品
export function updateMed (req) {
  return request ({
    url: baseURL + 'updateMed',
    method: 'POST',
    data: req
  })
}