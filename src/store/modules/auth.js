import { SET_TOKEN, SET_USERINFO, REMOVE_ALL_STORAGE, GET_PERSONALINFO } from '../mutation-types'
import { getStore, setStore, clearStore } from '@/lib/js/storage'
import { personInfo } from '@/service'

const state = {
  userInfo: getStore('userInfo') || null,
  token: getStore('token') || null,
  personInfo: null
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
  },
  [GET_PERSONALINFO] (state, info) {
    state.personInfo = info
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
  },
  // 个人信息
  async getPersonInfo ({ commit }) {
    let data = await personInfo(...[JSON.parse(getStore('userInfo')).id, getStore('token')])
    if (data) {
      commit(GET_PERSONALINFO, data.singleBean)
    }
  }
}

export default {
  state,
  mutations,
  actions
}
