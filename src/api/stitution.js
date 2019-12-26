import request from '@/request'

const baseURL = "/fmelnstitutionService/"

// 查询所有机构列表(分页)
export function fmelnstitutionList(req) {
  return request ({
    url: baseURL + 'queryFMelnstitutionList',
    method: 'POST',
    data: req
  })
}

// 获取所有机构（全部）
export function allInstitu() {
  return request ({
    url: baseURL + 'queryAllInstitu',
    method: 'POST',
    data: {}
  })
}

// 修改和新增机构
export function updateInstitu (req) {
  return request ({
    url: baseURL + 'saveAndupdateFMelnstitutionList',
    method: 'POST',
    data: req
  })
}

// 查询机构详情
export function instituDetail (mechanismId) {
  return request ({
    url: baseURL + 'stituDetail',
    method: 'POST',
    data: {
      "FMeInstitutionID": mechanismId
    }
  })
}

// 删除机构
export function delInstitu (id) {
  return request ({
    url: baseURL + 'deleteById',
    method: 'POST',
    data: id
  })
}