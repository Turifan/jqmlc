import catTickets from '../data/catTickets'
import bankList from '../data/bankData'
export default {
  // 猫小票号码
  catTickets,
  // 绑定的银行卡列表
  bankList,
  token: /* window.localStorage.token || */ null,
  userInfo: /* window.localStorage.userInfo || */ null,
  openid: /* sessionStorage.openid || */ null,
  bannerImages: null
}
