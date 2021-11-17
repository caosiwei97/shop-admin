import request from '@/utils/request'
import { ILoginInfo } from './types/common'

interface ResponseData<T> {
  msg: string
  status: number
  data: T
}

export const getLoginInfo = () => {
  return request<ResponseData<ILoginInfo>>({
    method: 'GET',
    url: '/login/info'
  })
}
