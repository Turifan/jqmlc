import catTickets from '../data/catTickets'
import bankList from '../data/bankData'
export default {
  // 猫小票号码
  catTickets,
  // 绑定的银行卡列表
  bankList,
  token: /* window.localStorage.token || */ null,
  userInfo: /* window.localStorage.userInfo || */ null,
  openid: /* sessionStorage.openid || */ null
}
// 给空数组可以不  你是不是做判断了 并没哟好  我之前试过 空数组 然后mutation 直接concat 也不行
