import { GET_CODE } from '../mutation-types'
import { sendSMS } from '@/service'
import { getStore } from '@/lib/js/storage'

const state = {
  code: null
}

const mutations = {
  [GET_CODE] (state, code) {
    state.code = code
  }
}

const actions = {
  // 获取验证码
  async getCode ({ commit }, key) {
    let data = await sendSMS(...[JSON.parse(getStore('userInfo')).mobilePhone, key])
    if (data) {
      commit(GET_CODE, true)
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
