import { SET_TOKEN, SET_USERINFO, REMOVE_ALL_STORAGE } from '../mutation-types'
// import { banner, queryHome } from '@/service'
import { getStore, setStore } from '@/lib/js/storage'

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
