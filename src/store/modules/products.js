import {
  GET_DORAEMON_LIST,
  SET_MONTH_DETAIL,
  SET_YEAR_DETAIL,
  SET_MONTHPROFIT_DETAIL,
  GET_MONTHPROFIT_LIST,
  SET_MONTHPROFIT_CURRENTPAGE
} from '../mutation-types'

import {
  machineList,
  month,
  machineYear,
  monthProfitInfo,
  monthProfitList
} from '@/service'

import {
  getStore
} from '@/lib/js/storage'

const state = {
  doraemonList: [],
  monthDetail: null,
  yearDetail: null,
  monthProfit: null,
  monthProfitList: [],
  monthProfitListPage: 1
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
  },
  [GET_MONTHPROFIT_LIST] (state, monthProfitList) {
    state.monthProfitList = state.monthProfitList.concat(monthProfitList)
  },
  [SET_MONTHPROFIT_CURRENTPAGE] (state) {
    state.monthProfitListPage++
  }
}

const actions = {
  // 机器猫列表页
  async getDoraemonList ({
    commit
  }) {
    let data = await machineList()
    if (data) {
      commit(GET_DORAEMON_LIST, data.listBean.page)
    }
  },
  // 月月涨详情
  async getMonthDetail ({
    commit
  }, args) {
    let data = await month(...[JSON.parse(getStore('userInfo')).id, getStore('token')])
    if (data) {
      commit(SET_MONTH_DETAIL, data.singleBean)
    }
  },
  // 3,6,9,12,24详情
  async getYearDetail ({
    commit
  }, id) {
    let data = await machineYear(...[JSON.parse(getStore('userInfo')).id, getStore('token'), id])
    if (data) {
      commit(SET_YEAR_DETAIL, data.singleBean)
    }
  },
  // 月盈猫信息
  async getMonthProfit ({
    commit
  }, id) {
    let data = await monthProfitInfo(...[JSON.parse(getStore('userInfo')).id, getStore('token'), id])
    if (data) {
      commit(SET_MONTHPROFIT_DETAIL, data.singleBean)
    }
  },
  // 月盈猫列表页
  async getMonthProfitList ({
    commit
  }, monthProfitListPage) {
    let data = await monthProfitList(...[JSON.parse(getStore('userInfo')).id, getStore('token'), monthProfitListPage])
    if (data) {
      commit(GET_MONTHPROFIT_LIST, data.singleBean.page)
      commit(SET_MONTHPROFIT_CURRENTPAGE)
    }
  }
}

const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}
