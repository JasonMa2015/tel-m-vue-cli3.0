/**
 * 请求后端接口数据
 */
import axios from '@/libs/api.request'

// 查询模板列表（分页）
export const getListTemplate = (data) => {
  return axios.request({
    url: '/templates/list_template',
    method: 'get',
    params: data
  })
}
