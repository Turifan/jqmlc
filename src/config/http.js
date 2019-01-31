import axios from 'axios'
import { removeStore } from '@/lib/js/storage'
import config from './config'
import { Loading, Message } from 'element-ui'
import router from '../router'
import QS from 'qs'

export default function $axios (options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: config.baseURL,
      headers: config.headers,
      transformRequest: [
        function (data) {
          return QS.stringify(data)
        }
      ]
    })

    let loadingInstance
    // http request 拦截器
    instance.interceptors.request.use(
      config => {
        loadingInstance = Loading.service({
          fullscreen: true,
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        })
        return config
      },
      err => {
        loadingInstance.close()
        Message.error({ message: '加载超时' })
        return Promise.reject(err)
      }
    )

    // http response 拦截器
    instance.interceptors.response.use(
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

    instance(options)
      .then(res => {
        resolve(res)
        return false
      })
      .catch(error => {
        reject(error)
      })
  })
}
