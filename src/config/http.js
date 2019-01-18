import axios from 'axios'
import store from '../store'
import { Loading, Message } from 'element-ui'
import router from '../router'

// axios配置
axios.defaults.timeout = 5000
// axios.defaults.baseURL = process.env.BASE_URL

let loadingInstance
// http request 拦截器
axios.interceptors.request.use(
  config => {
    loadingInstance = Loading.service({
      fullscreen: true,
      lock: true,
      text: 'Loading',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    })
    if (/* store.state.token */ localStorage.token) {
      config.headers.Authorization = `token ${store.state.token}`
    } else {
      router.push('login')
    }
    config.data = JSON.stringify(config.data)
    return config
  },
  err => {
    loadingInstance.close()
    Message.error({ message: '加载超时' })
    return Promise.reject(err)
  }
)

// http response 拦截器
axios.interceptors.response.use(
  response => {
    loadingInstance.close()
    if (response.data === undefined) {
      response = response.request.responseText
    } else {
      response = response.data
    }
    return response
  },
  err => {
    loadingInstance.close()
    Message.error({ message: '加载失败' })
    return Promise.reject(err)
  }
)

export default axios
