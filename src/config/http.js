import axios from 'axios'
import { removeStore } from '@/lib/js/storage'
import { Loading, Message } from 'element-ui'
import router from '../router'

// axios配置
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
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
    // // if (store.state.token /* localStorage.token */) {
    // //   config.headers.Authorization = `token ${store.state.token}`
    // // } else {
    // //   router.push('login')
    // // }
    // console.log(config.data)
    // config.data = JSON.stringify(config.params)
    // config.data = config.params
    console.log(config)
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
    if (response.error === '0') {
      return response
    } else if (response.error === '103') {
      removeStore('token')
      Message.error({ message: response.msg })
      router.push('/login')
    } else {
      Message.error({ message: response.msg })
    }
  },
  err => {
    loadingInstance.close()
    Message.error({ message: '加载失败' })
    return Promise.reject(err)
  }
)

export default axios
