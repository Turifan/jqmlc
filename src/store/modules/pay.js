import { GET_AUTOINVEST_INFO, GET_DEPOSIT_INFO } from '../mutation-types'
import { autoInvest, withdrawLoad } from '@/service'
import { getStore } from '@/lib/js/storage'

const state = {
  bankParams: '',
  payInfo: '',
  autoInvestInfo: null,
  depositInfo: ''
}

const mutations = {
  [GET_AUTOINVEST_INFO] (state, info) {
    state.autoInvestInfo = info
  },
  [GET_DEPOSIT_INFO] (state, info) {
    state.depositInfo = info
  }
}

const actions = {
  // 自动投标信息加载
  async getAutoInvestInfo ({ commit }) {
    let data = await autoInvest(...[JSON.parse(getStore('userInfo')).id, getStore('token')])
    if (data) {
      commit(GET_AUTOINVEST_INFO, data.singleBean)
    }
  },
  // 提现页面信息
  async getDepositInfo ({ commit }, args) {
    let data = await withdrawLoad(...args)
    if (data) {
      commit(GET_DEPOSIT_INFO, data.singleBean)
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
