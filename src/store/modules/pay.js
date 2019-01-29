import { BANK_PAY_PARAMS } from '../mutation-types'
// import { sendSMS } from '@/service'
// import { getStore } from '@/lib/js/storage'

const state = {
  bankParams: '',
  payInfo: ''
}

const mutations = {
  [BANK_PAY_PARAMS] (state, bankParams) {
    state.bankParams = bankParams
  }
}

const actions = {
  setBankPayParms ({ commit }, data) {
    commit(BANK_PAY_PARAMS, data)
  }
}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
