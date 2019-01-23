import { SET_TOKEN, SET_USERINFO, GET_INDEX_IMAGES, REMOVE_ALL_STORAGE } from './mutation-types'
import * as service from '@/service'

export default {
  loginAction ({ commit }, data) {
    commit(SET_TOKEN, data.backBean.qrsoft_fe_token)
    commit(SET_USERINFO, data.backBean)
  },
  logoutAction ({ commit }) {
    commit(REMOVE_ALL_STORAGE)
  },
  // async getBannerImages ({ commit }) {
  //   console.log(service.banner())
  //   let data = await service.banner()
  //   commit(GET_INDEX_IMAGES, data.listBean.page)
  // },
  getBannerImagesAction ({ commit }, data) {
    console.log(data.listBean.page)
    commit(GET_INDEX_IMAGES, data.listBean.page)
  }
}
