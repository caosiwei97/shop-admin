import request from '@/utils/request'
import { IFormData } from './types/form'
import { IListParams, Menu } from './types/menu'

export const getMenus = (params: IListParams) =>
  request<Menu[]>({
    url: '/setting/menus',
    params
  })

export const updateMenuSatus = (id: number, is_show: 0 | 1) =>
  request({
    method: 'PUT',
    url: `/setting/menus/show/${id}`,
    data: {
      is_show
    }
  })

// 删除权限
export const deleteMenu = (id: number) => {
  return request({
    method: 'DELETE',
    url: `/setting/menus/${id}`
  })
}

// 获取添加权限规则表单
export const getMenuTree = () => {
  return request<IFormData>({
    method: 'GET',
    url: '/setting/menus/create'
  }).then((data) => {
    const findData = data.rules.find((item) => item.field === 'menu_list')
    return (findData && findData.props && findData.props.data) || []
  })
}

// 获取单个规则
export const getMenu = (id: number) => {
  return request<
    {
      path: number[]
    } & Omit<Menu, 'path'>
  >({
    method: 'GET',
    url: `/setting/menus/${id}`
  })
}

export const updateMenu = (
  id: number,
  data: { path: number[] } & Omit<Menu, 'id' | 'children' | 'is_del' | 'path'>
) => {
  return request({
    method: 'PUT',
    url: `/setting/menus/${id}`,
    data
  })
}

// 添加权限
export const createMenu = (
  data: {
    path: number[]
  } & Omit<Menu, 'id' | 'children' | 'is_del' | 'path'>
) => {
  return request({
    method: 'POST',
    url: '/setting/menus',
    data
  })
}
