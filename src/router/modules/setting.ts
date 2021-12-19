import { RouteRecordRaw, RouterView } from 'vue-router'

const permissionRoutes: RouteRecordRaw = {
  path: '',
  component: RouterView,
  meta: {
    title: '权限管理'
  },
  children: [
    {
      path: '/setting/permission/admin',
      name: 'system_admin-index',
      component: () => import('@/views/permission/admin/index.vue'),
      meta: {
        // 自定义路由元数据
        title: '管理员'
      }
    },
    {
      path: '/setting/permission/role',
      name: 'system_role-index',
      component: () => import('@/views/permission/role/index.vue'),
      meta: {
        title: '角色'
      }
    },
    {
      path: '/setting/permission/rule',
      name: 'system_menus-index',
      component: () => import('@/views/permission/rule/index.vue'),
      meta: {
        title: '规则'
      }
    }
  ]
}

const routes: RouteRecordRaw = {
  path: 'setting',
  component: RouterView,
  meta: {
    title: '设置'
  },
  children: [permissionRoutes]
}

export default routes
