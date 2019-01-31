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
          console.log(data)
          data = param(data)
          return data
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

function param (obj) {
  let query = ''
  let name
  let value
  let fullSubName
  let subName
  let subValue
  let innerObj
  let i

  for (name in obj) {
    console.log(name)
    value = obj[name]
    query += encodeURIComponent(name) + '='
    if (value instanceof Array) {
      for (i = 0; i < value.length; ++i) {
        subValue = value[i]
        fullSubName = name + '[' + i + ']'
        innerObj = {}
        innerObj[fullSubName] = subValue
        query += param(innerObj) + '&'
      }
    } else if (value instanceof Object) {
      for (subName in value) {
        subValue = value[subName]
        fullSubName = `${subName}`
        innerObj = {}
        innerObj[fullSubName] = subValue
        query += param(innerObj) + '&'
      }
    } else if (value !== undefined && value !== null) {
      query += encodeURIComponent(value) + '&'
    }
    query += encodeURIComponent(value) + '&'
    console.log(query)
  }

  return query.length ? query.substr(0, query.length - 1) : query
}
