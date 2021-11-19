import request from '@/utils/request'
import { ILoginInfo, ILoginResponse } from './types/common'

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

export const getCode = () => {
  return request<Blob>({
    method: 'GET',
    url: '/captcha_pro',
    params: {
      stamp: Date.now()
    },
    responseType: 'blob'
  })
}

export const login = (data: { account: string; pwd: string; imgcode: string }) => {
  return request<ILoginResponse>({
    method: 'POST',
    url: '/login',
    data
  })
}

export const logout = () => {
  return request({
    method: 'GET',
    url: '/setting/admin/logout'
  })
}
