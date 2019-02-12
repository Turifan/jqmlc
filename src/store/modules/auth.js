import { SET_TOKEN, SET_USERINFO, REMOVE_ALL_STORAGE } from '../mutation-types'
import { getStore, setStore, clearStore } from '@/lib/js/storage'

const state = {
  userInfo: getStore('userInfo') || null,
  token: getStore('token') || null
}

const mutations = {
  [SET_USERINFO] (state, info) {
    state.userInfo = info
    setStore('userInfo', info)
  },
  [SET_TOKEN] (state, token) {
    state.token = token
    setStore('token', token)
  },
  [REMOVE_ALL_STORAGE] (state) {
    state.userInfo = null
    state.token = null
    clearStore()
    sessionStorage.clear()
  }
}

const actions = {
  // 登录
  loginAction ({ commit }, data) {
    if (data) {
      commit(SET_TOKEN, data.backBean.qrsoft_fe_token)
      commit(SET_USERINFO, data.backBean)
    }
  },
  // 登出
  logoutAction ({ commit }) {
    commit(REMOVE_ALL_STORAGE)
  }
}

export default {
  state,
  mutations,
  actions
}
