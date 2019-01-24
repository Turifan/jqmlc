import { SET_TOKEN, SET_USERINFO, REMOVE_ALL_STORAGE } from './mutation-types'
// import * as service from '@/service'

export default {
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
