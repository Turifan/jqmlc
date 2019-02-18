import { GET_INDEX_IMAGES, GET_HOME_INFO, GET_SIGNINFO, GET_NOTICE, GET_PERSONALINFO, GET_NOTICE_LIST, SET_NOTICE_PAGE, INIT_NOTICE_PAGE } from '../mutation-types'
import { banner, queryHome, userSignInfo, notice, noticeList } from '@/service'
import { getStore } from '@/lib/js/storage'

const state = {
  bannerImagesList: [],
  homeInfo: null,
  signInfo: null,
  noticeInfo: null,
  noticeList: [],
  noticeCurpage: 1
}

const mutations = {
  [GET_INDEX_IMAGES] (state, bannerImages) {
    state.bannerImagesList = bannerImages
  },
  [GET_HOME_INFO] (state, info) {
    state.homeInfo = info
  },
  [GET_SIGNINFO] (state, info) {
    state.signInfo = info
  },
  [GET_NOTICE] (state, info) {
    state.noticeInfo = info
  },
  [GET_NOTICE_LIST] (state, noticeList) {
    state.noticeList = state.noticeList.concat(noticeList)
  },
  [GET_PERSONALINFO] (state, info) {
    state.personInfo = info
  },
  [SET_NOTICE_PAGE] (state) {
    state.noticeCurpage++
  },
  [INIT_NOTICE_PAGE] (state) {
    state.noticeCurpage = 1
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
  },
  // 签到信息
  async getSignInfo ({ commit }) {
    let data = await userSignInfo(...[JSON.parse(getStore('userInfo')).id, getStore('token')])
    if (data) {
      commit(GET_SIGNINFO, data.singleBean)
    }
  },
  // 最新公告信息
  async getNoticeInfo ({ commit }) {
    let data = await notice(...[JSON.parse(getStore('userInfo')).id, getStore('token')])
    if (data) {
      commit(GET_NOTICE, data.singleBean)
    }
  },
  // 公告列表
  async getNoticeList ({ state, commit }) {
    let data = await noticeList(...[JSON.parse(getStore('userInfo')).id, getStore('token'), `${state.noticeCurpage}`])
    if (data) {
      commit(GET_NOTICE_LIST, data.listBean.page)
      commit(SET_NOTICE_PAGE)
    }
  }
}

export default {
  state,
  mutations,
  actions
}
