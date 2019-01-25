import { GET_DORAEMON_LIST, SET_MONTH_DETAIL, SET_YEAR_DETAIL, SET_MONTHPROFIT_DETAIL } from '../mutation-types'
import { machineList, month, machineYear, monthProfitInfo } from '@/service'
import { getStore } from '@/lib/js/storage'

const state = {
  doraemonList: [],
  monthDetail: null,
  yearDetail: null,
  monthProfit: null
}

const mutations = {
  [GET_DORAEMON_LIST] (state, doraemonList) {
    state.doraemonList = doraemonList
  },
  [SET_MONTH_DETAIL] (state, monthDetail) {
    state.monthDetail = monthDetail
  },
  [SET_YEAR_DETAIL] (state, yearDetail) {
    state.yearDetail = yearDetail
  },
  [SET_MONTHPROFIT_DETAIL] (state, monthProfit) {
    state.monthProfit = monthProfit
  }
}

const actions = {
  // 机器猫列表页
  async getDoraemonList ({ commit }) {
    let data = await machineList()
    if (data) {
      commit(GET_DORAEMON_LIST, data.listBean.page)
    }
  },
  // 月月涨详情
  async getMonthDetail ({ commit }, args) {
    let data = await month(...[JSON.parse(getStore('userInfo')).id, getStore('token')])
    if (data) {
      commit(SET_MONTH_DETAIL, data.singleBean)
    }
  },
  // 3,6,9,12,24详情
  async getYearDetail ({ commit }, id) {
    let data = await machineYear(...[JSON.parse(getStore('userInfo')).id, getStore('token'), id])
    if (data) {
      commit(SET_YEAR_DETAIL, data.singleBean)
    }
  },
  // 月盈猫信息
  async getMonthProfit ({ commit }, id) {
    let data = await monthProfitInfo(...[JSON.parse(getStore('userInfo')).id, getStore('token'), id])
    if (data) {
      commit(SET_MONTHPROFIT_DETAIL, data.singleBean)
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
