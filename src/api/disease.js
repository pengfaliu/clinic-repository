import request from '@/request'

const baseURL = "/diseaseService/"
// 疾病类型
export function diseaseType () {
  return request ({
    url: baseURL + 'queryDiseaseType',
    method: 'POST',
    data: {}
  })
}

// 疾病目录（类型）
export function diseaseList (diseaseQuery) {
  return request ({
    url: baseURL + 'queryDiseaseByTypeId',
    method: 'POST',
    data: diseaseQuery
  })
}

// 查询所有疾病
export function findAllDisease (req) {
  return request ({
    url: baseURL + 'queryAllDisease',
    method: 'POST',
    data: req
  })
}

// 模糊查询（疾病名称）
export function findLikeDiseaseName (req) {
  return request ({
    url: baseURL + 'queryDiseaseByName',
    method: 'POST',
    data: req
  })
}

// 根据疾病类型和疾病名称查询疾病列表
export function queryDiseaseByTypeAndName (req) {
  return request ({
    url: baseURL + 'queryDiseaseByTypeIdAndName',
    method: 'POST',
    data: req
  })
}