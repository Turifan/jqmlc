import { SET_TOKEN, SET_USERINFO, GET_INDEX_IMAGES, REMOVE_ALL_STORAGE } from './mutation-types'
import * as service from '@/service'

export default {
  loginAction ({ commit }, data) {
    commit(SET_TOKEN, data.backBean)
    commit(SET_USERINFO, data.backBean.qrsoft_fe_token)
  },
  logoutAction ({ commit }) {
    commit(REMOVE_ALL_STORAGE)
  },
  async getBannerImages ({ commit }) {
    let data = await service.banner()
    if (data.error === '0') {
      console.log(data)
      commit(GET_INDEX_IMAGES, data.listBean.page)
    } else {
      this.$message.error({ message: data.msg })
    }
  }
}
