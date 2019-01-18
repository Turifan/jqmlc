import { SET_USERINFO, SET_TOKEN } from './mutation-types'
import { setStore } from '@/lib/js/storage'

export default {
  [SET_USERINFO] (state, info) {
    state.userInfo = info
    setStore('userInfo', info)
  },
  [SET_TOKEN] (state, token) {
    state.token = token
    setStore('token', token)
  }
}
