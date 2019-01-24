import { GET_INDEX_IMAGES, GET_HOME_INFO } from '../mutation-types'
import { banner, queryHome } from '@/service'

const state = {
  bannerImagesList: [],
  homeInfo: null
}

const mutations = {
  [GET_INDEX_IMAGES] (state, bannerImages) {
    state.bannerImagesList = bannerImages
  },
  [GET_HOME_INFO] (state, info) {
    state.homeInfo = info
  }
}

const actions = {
  // 轮播
  async getBannerImages ({ commit }) {
    let data = await banner()
    commit(GET_INDEX_IMAGES, data.listBean.page)
  },
  // 首页其他信息
  async queryHome ({ commit }) {
    let data = await queryHome()
    commit(GET_HOME_INFO, data.singleBean)
  }
}

export default {
  state,
  mutations,
  actions
}
