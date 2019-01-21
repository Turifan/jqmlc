import { SET_TOKEN, SET_USERINFO } from './mutation-types'
import * as service from '@/service'

export default {
  async login ({ commit, state }, arg) {
    let data = await service.login(...arg)
    commit(SET_USERINFO, data.backBean)
    commit(SET_TOKEN, data.backBean.qrsoft_fe_token)
  },
  async getToken ({ commit, state }) {}
}
