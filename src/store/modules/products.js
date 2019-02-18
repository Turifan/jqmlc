import {
  SET_SHARELIST,
  INIT_SHARECURPAGE,
  SET_SHARECURPAGE,
  GET_DORAEMON_LIST,
  SET_MONTH_DETAIL,
  SET_YEAR_DETAIL,
  SET_MONTHPROFIT_DETAIL,
  GET_MONTHPROFIT_LIST,
  SET_MONTHPROFIT_CURRENTPAGE,
  GET_FATTEN_LIST,
  GET_FAT_LIST,
  SET_FAT_CURRENTPAGE,
  INIT_FAT_CURRENTPAGE,
  GET_FAT_LIST_TOTALNUM,
  INIT_FAT_LIST,
  SET_FATHISTORY_LIST,
  SET_FATHISTORY_CURRENTPAGE,
  GET_FAT_HISTORY_TOTALNUM,
  GET_CURRENT_INFO,
  GET_BALANCE_INFO
} from '../mutation-types'

import { shareList, machineList, month, machineYear, monthProfitInfo, monthProfitList, fattenList, fatList, loansOverList, current, balance } from '@/service'

import { getStore } from '@/lib/js/storage'

const state = {
  shareList: [],
  shareCurpage: 1,
  doraemonList: [],
  monthDetail: null,
  yearDetail: null,
  monthProfit: null,
  monthProfitList: [],
  monthProfitListSize: null,
  monthProfitListPage: 1,
  fattenList: [],
  fatList: [],
  fatListCurpage: 1,
  totalNum: 0,
  fatHistoryList: [],
  fatHistoryCurpage: 1,
  fatHistoryTotalNum: 0,
  currentInfo: '',
  balanceInfo: ''
}

const mutations = {
  [SET_SHARELIST] (state, shareList) {
    state.shareList = state.shareList.concat(shareList)
  },
  [INIT_SHARECURPAGE] (state) {
    state.shareCurpage = 1
  },
  [SET_SHARECURPAGE] (state) {
    state.shareCurpage++
  },
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
    state.monthProfitList = state.monthProfitList.concat(monthProfitList.page)
    state.monthProfitListSize = monthProfitList.totalNum
  },
  [SET_MONTHPROFIT_CURRENTPAGE] (state) {
    state.monthProfitListPage++
  },
  [GET_FATTEN_LIST] (state, fattenList) {
    state.fattenList = state.fattenList.concat(fattenList)
  },
  [GET_FAT_LIST] (state, fatList) {
    state.fatList = state.fatList.concat(fatList)
  },
  [GET_FAT_LIST_TOTALNUM] (state, num) {
    state.totalNum = num
  },
  [GET_FAT_HISTORY_TOTALNUM] (state, num) {
    state.fatHistoryTotalNum = num
  },
  [SET_FAT_CURRENTPAGE] (state) {
    state.fatListCurpage++
  },
  [SET_FATHISTORY_CURRENTPAGE] (state) {
    state.fatHistoryCurpage++
  },
  [INIT_FAT_CURRENTPAGE] (state) {
    state.fatListCurpage = 1
  },
  [INIT_FAT_LIST] (state) {
    state.fatList = []
  },
  [SET_FATHISTORY_LIST] (state, fatHistoryList) {
    state.fatHistoryList = state.fatHistoryList.concat(fatHistoryList)
  },
  [GET_CURRENT_INFO] (state, currentInfo) {
    state.currentInfo = currentInfo
  },
  [GET_BALANCE_INFO] (state, balanceInfo) {
    state.balanceInfo = balanceInfo
  }
}

const actions = {
  // 分享列表
  async getShareList ({ state, commit }) {
    let data = await shareList(...[JSON.parse(getStore('userInfo')).id, getStore('token'), `${state.shareCurpage}`])
    if (data) {
      commit(SET_SHARELIST, data.listBean.page)
      commit(SET_SHARECURPAGE)
    }
  },
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
  },
  // 月盈猫列表页
  async getMonthProfitList ({ commit }, monthProfitListPage) {
    let data = await monthProfitList(...[JSON.parse(getStore('userInfo')).id, getStore('token'), monthProfitListPage])
    if (data) {
      commit(GET_MONTHPROFIT_LIST, data.singleBean)
      commit(SET_MONTHPROFIT_CURRENTPAGE)
    }
  },
  // 发财猫首页列表
  async getFattenList ({ commit }) {
    let data = await fattenList()
    if (data) {
      commit(GET_FATTEN_LIST, data.singleBean.classifyList)
    }
  },
  // 发财猫某一期列表
  async getFatList ({ commit }, args) {
    let data = await fatList(...args)
    if (data) {
      commit(INIT_FAT_LIST)
      commit(GET_FAT_LIST, data.listBean.page)
      commit(GET_FAT_LIST_TOTALNUM, data.listBean.totalNum)
      commit(SET_FAT_CURRENTPAGE)
    }
  },
  // 发财猫某一期列表
  async getMoreFatList ({ commit }, args) {
    let data = await fatList(...args)
    if (data) {
      commit(GET_FAT_LIST, data.listBean.page)
      commit(GET_FAT_LIST_TOTALNUM, data.listBean.totalNum)
      commit(SET_FAT_CURRENTPAGE)
    }
  },
  // 发财猫历史列表
  async loadFatHistoryList ({ state, commit }, numDays) {
    let data = await loansOverList(`${state.fatHistoryCurpage}`, numDays)
    if (data) {
      commit(SET_FATHISTORY_LIST, data.listBean.page)
      commit(SET_FATHISTORY_CURRENTPAGE)
      commit(GET_FAT_HISTORY_TOTALNUM, data.listBean.totalNum)
    }
  },
  // 灵活猫信息
  async getCurrentInfo ({ commit }) {
    let data = await current(...[JSON.parse(getStore('userInfo')).id, getStore('token')])
    if (data) {
      commit(GET_CURRENT_INFO, data.singleBean)
    }
  },
  // 余额信息
  async getBalanceInfo ({ commit }) {
    let data = await balance(...[JSON.parse(getStore('userInfo')).id, getStore('token')])
    if (data) {
      commit(GET_BALANCE_INFO, data.singleBean)
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
