import { SET_USERINFO, SET_TOKEN, SET_OPENID, GET_INDEX_IMAGES, REMOVE_ALL_STORAGE } from './mutation-types'
import { setStore, removeStore } from '@/lib/js/storage'

export default {
  [SET_USERINFO] (state, info) {
    state.userInfo = info
    setStore('userInfo', info)
  },
  [SET_TOKEN] (state, token) {
    state.token = token
    setStore('token', token)
  },
  [SET_OPENID] (state, openid) {
    state.openid = openid
    sessionStorage.setItem('openid', openid)
  },
  [GET_INDEX_IMAGES] (state, bannerImages) {
    state.bannerImagesList = bannerImages
  },
  [REMOVE_ALL_STORAGE] (state) {
    state.userInfo = null
    state.token = null
    removeStore('userInfo')
    removeStore('token')
  }
}
