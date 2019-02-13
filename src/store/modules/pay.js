import { GET_AUTOINVEST_INFO } from '../mutation-types'
import { autoInvest } from '@/service'
import { getStore } from '@/lib/js/storage'

const state = {
  bankParams: '',
  payInfo: '',
  autoInvestInfo: null
}

const mutations = {
  [GET_AUTOINVEST_INFO] (state, info) {
    state.autoInvestInfo = info
  }
}

const actions = {
  // 自动投标信息加载
  async getAutoInvestInfo ({ commit }) {
    let data = await autoInvest(...[JSON.parse(getStore('userInfo')).id, getStore('token')])
    if (data) {
      commit(GET_AUTOINVEST_INFO, data.singleBean)
    }
  }
}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
