import router from '@/router'
import { store } from '@/store'
import axios, { AxiosRequestConfig } from 'axios'
import { ElMessage, ElMessageBox } from 'element-plus'

let isRefresh = false
const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL
})

request.interceptors.request.use(
  (config) => {
    config.url = config.url?.trim()
    // 统一带上 token
    const user = store.state.user
    if (user && user.token) {
      config.headers!.Authorization = `Bearer ${user.token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  (response) => {
    const status = response.data.status

    if (!status || status === 200) return response
    // 登录过期
    if (status === 410000) {
      // 防止多个重复提示
      if (isRefresh) return Promise.reject(response)
      isRefresh = true
      ElMessageBox.confirm('您的登录信息已过期，请确认后重写登录', '登录过期', {
        confirmButtonText: '确认',
        cancelButtonText: '取消'
      })
        .then(() => {
          // 登录过期清除本地 token
          store.commit('setUser', null)
          // 跳转登录页
          router.push({
            path: '/login',
            query: {
              redirect: router.currentRoute.value.fullPath
            }
          })
        })
        .finally(() => {
          isRefresh = false
        })
      return Promise.reject(response)
    }

    ElMessage.error(response.data.msg || '请求失败，请刷新重试')
    return Promise.reject(response)
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default <T = any>(config: AxiosRequestConfig) =>
  request(config).then((res) => (res.data.data || res.data) as T)
