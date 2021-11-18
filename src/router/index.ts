import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'
import product from './modules/product'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import setting from './modules/setting'
import system from './modules/system'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/home/index.vue')
      },
      product,
      setting,
      system
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(() => {
  nprogress.start()
})

router.afterEach(() => {
  nprogress.done()
})

export default router
