import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'
import product from './modules/product'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import setting from './modules/setting'
import system from './modules/system'
import { store } from '@/store'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: AppLayout,
    meta: {
      requiresAuth: true
    },
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

router.beforeEach((to) => {
  nprogress.start()
  if (to.meta.requiresAuth && !store.state.user) {
    return {
      path: '/login',
      query: {
        redirect: to.fullPath
      }
    }
  }
})

router.afterEach(() => {
  nprogress.done()
})

export default router
