import axios, { AxiosRequestConfig } from 'axios'

const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL
})

request.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default <T = any>(config: AxiosRequestConfig) => request(config).then((res) => res.data as T)
