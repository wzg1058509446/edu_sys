import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/edu_sys/table/list',
    method: 'get',
    params
  })
}
