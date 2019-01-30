import requestUrl from '../config/requestUrl'
import axios from '../config/http'

// 登陆
/**
 * login interface
 * @param {String} name 用户名
 * @param {String} pwd 密码
 */
export const login = (name, pwd) => axios({ url: requestUrl.login, method: 'post', data: { info: { name: name, pwd: pwd } } })
// export const login = info => axios({ url: requestUrl.login, method: 'post', info: info })

// 注册获取验证码
/**
 * 注册获取验证码
 * @param {String} cellPhone 用户名-手 h机号
 */
export const sendRegSMS = cellPhone => axios({ url: requestUrl.sendRegSMS, method: 'post', params: { info: { cellPhone } } })

// 注册点击下一步调用接口
/**
 * 注册点击下一步调用接口
 * @param {String} cellPhone 手机号
 * @param {String} code 手机验证码
 */
export const phoneCodeCheck = (cellPhone, code) => axios({ url: requestUrl.phoneCodeCheck, method: 'post', params: { info: { cellPhone, code } } })

// 提交注册信息
/**
 * 提交注册信息
 * @param {String} cellPhone 手机号
 * @param {String} pwd 密码
 * @param {String} dealpwd 交易密码
 * @param {String} refferee 邀请码
 * @param {String} clientType 端口类型
 */
export const register = (cellPhone, pwd, dealpwd, refferee, clientType) =>
  axios({ url: requestUrl.register, method: 'post', params: { info: { cellPhone, pwd, dealpwd, refferee, clientType } } })

// 发送手机验证码
/**
 * 发送验证码
 * @param {String} cellPhone 用户名称
 * @param {String} key 类型 back-找回密码，withdraw-提现，infoAuth-实名认证，backDeal-找回交易密码，currentPay-灵活猫支付，balancePay-余额支付
 */
export const sendSMS = (cellPhone, key) => axios({ url: requestUrl.sendSMS, method: 'post', params: { info: { cellPhone, key } } })

// 验证短信验证码
/**
 * 验证短信验证码
 * @param {String} cellPhone 手机号
 * @param {String} key 验证码
 */
export const codeCheck = (cellPhone, key) => axios({ url: requestUrl.codeCheck, method: 'post', params: { info: { cellPhone, key } } })

// 重置登录密码接口
/**
 * 重置登录密码接口
 * @param {String} cellPhone 手机号
 * @param {String} password 登陆密码
 * @param {String} confirmpassword 确认登陆密码
 */
export const resetLoginPassword = (cellPhone, password, confirmpassword) =>
  axios({ url: requestUrl.resetLoginPassword, method: 'post', params: { info: { cellPhone, password, confirmpassword } } })

// 签到
/**
 * 签到
 * @param {String} uid 用户ID
 * @param {String} token 唯一标识
 */
export const userSignInfo = (uid, token) => axios({ url: requestUrl.userSignInfo, method: 'post', params: { auth: { uid, qrsoft_fe_token: token } } })

// 首页显示
/**
 * 首页标显示
 */
export const queryHome = () => axios({ url: requestUrl.queryHome, method: 'get' })

// 分享列表
/**
 * 分享列表
 * @param {String} uid 用户ID
 * @param {String} token 唯一标识
 * @param {String} curPage 页码
 */
export const shareList = (uid, token, curPage) => axios({ url: requestUrl.shareList, method: 'post', params: { auth: { uid, qrsoft_fe_token: token }, info: { curPage } } })

// 月盈猫信息
/**
 * 月盈猫信息
 * @param {String} uid 用户ID
 * @param {String} token 唯一标识
 * @param {String} profitId 月盈猫ID
 */
export const monthProfitInfo = (uid, token, profitId) =>
  axios({ url: requestUrl.monthProfitInfo, method: 'post', params: { auth: { uid, qrsoft_fe_token: token }, info: { profitId } } })

// 月盈猫列表
/**
 * 月盈猫列表
 * @param {String} uid 用户ID
 * @param {String} token 唯一标识
 * @param {String} curPage 页码
 */
export const monthProfitList = (uid, token, curPage) =>
  axios({ url: requestUrl.monthProfitList, method: 'post', params: { auth: { uid, qrsoft_fe_token: token }, info: { curPage } } })

// 月盈猫购买
/**
 * buy profit
 * @param {String} uid userID
 * @param {String} token token
 * @param {String} money buy money
 * @param {String} payPWD deal password
 * @param {String} profitId profit id
 */
export const profitInvest = (uid, token, money, payPWD, profitId) =>
  axios({ url: requestUrl.profitInvest, method: 'post', params: { auth: { uid, qrsoft_fe_token: token }, info: { money, payPWD, profitId } } })

// 机器猫列表
/**
 * doraemo list
 */
export const machineList = () => axios({ url: requestUrl.machineList, method: 'get' })

// banner图
/**
 * banner Image list
 */
export const banner = () => axios({ url: requestUrl.banner, method: 'get' })

// 月月涨
/**
 * month detail page init
 * @param {String} uid user id
 * @param {String} token the singal token
 */
export const month = (uid, token) => axios({ url: requestUrl.month, method: 'post', params: { auth: { uid, qrsoft_fe_token: token } } })

// 季 半 九 年克隆
/**
 * the 3,6,9,12,24months detail pages
 * @param {String} uid user id
 * @param {String} token token
 * @param {String} type the number of type 3,6,9,12,24
 */
export const machineYear = (uid, token, type) => axios({ url: requestUrl.machineYear, method: 'post', params: { auth: { uid, qrsoft_fe_token: token }, info: { type } } })

// 发财猫页面列表
export const fattenList = () => axios({ url: requestUrl.fattenList, method: 'get' })

// 发财猫某一产品列表
/**
 * one of the fatten product detail page init
 * @param {String} uid userId
 * @param {String} token token
 * @param {String} term the term of this fatten product
 * @param {String} curPage page size
 */
export const fatList = (uid, token, term, curPage) => axios({ url: requestUrl.fatList, method: 'post', params: { auth: { uid, qrsoft_fe_token: token }, info: { term, curPage } } })

// 投资详情页面加载
/**
 * invest detail page init
 * @param {String} uid userid
 * @param {String} token token
 * @param {String} id loan id
 */
export const loansDital = (uid, token, id) => axios({ url: requestUrl.loansDital, method: 'post', params: { auth: { uid, qrsoft_fe_token: token }, info: { id } } })

// 投资详情页面 借款详情
/**
 * loan detail
 * @param {String} id the id of loanbid
 */
export const borrowerInfo = id => axios({ url: requestUrl.borrowerInfo, method: 'post', params: { info: { id } } })

// 投资详情页面 投资记录
/**
 * investRecords of detail fatten id
 * @param {String} id the loanbid id
 * @param {String} curPage page number
 */
export const loansInvestList = (id, curPage) => axios({ url: requestUrl.loansInvestList, method: 'post', params: { info: { id, curPage } } })

// 投资详情页面 还款记录
/**
 * repayment records
 * @param {String} id the loanbid id
 * @param {String} curPage page number
 */
export const loansRepaymentList = (id, curPage) => axios({ url: requestUrl.loansRepaymentList, method: 'post', params: { info: { id, curPage } } })

// 发财猫投资接口
/**
 * invest fatten
 * @param {String} uid userId
 * @param {String} token token
 * @param {String} money invest money
 * @param {String} payPWD deal password
 * @param {String} id the fatten id of user invest
 */
export const richInvest = (uid, token, money, payPWD, id) =>
  axios({ url: requestUrl.richInvest, method: 'post', params: { auth: { uid, qrsoft_fe_token: token }, info: { money, payPWD, id } } })

// 发财猫结束项目
/**
 * history fatten term
 * @param {String} curPage page number
 * @param {String} numDays the term of history fatten
 */
export const loansOverList = (curPage, numDays) => axios({ url: requestUrl.loansOverList, method: 'post', params: { info: { curPage, numDays } } })

// 自动投标信息
/**
 * autoinvest
 * @param {String} uid userid
 * @param {String} token token
 */
export const autoInvest = (uid, token) => axios({ url: requestUrl.autoInvest, method: 'post', params: { auth: { uid, qrsoft_fe_token: token } } })

// 自动投标投资期限限额
/**
 * maxInvest of auto invest when change term
 * @param {String} term the term of autoinvest
 */
export const getBitQuota = term => axios({ url: requestUrl.getBitQuota, method: 'post', params: { info: { term } } })

// 开启或修改自动投标
/**
 * setup or update the config of autoinvest
 * @param {String} uid userid
 * @param {String} token token
 * @param {String} minRate the min rate of setup
 * @param {String} maxRate the max rate of setup
 * @param {String} bidAmount the amount of autoinvest
 * @param {String} term the term of auto invest
 * @param {String} payType the pay way of autoinvest
 */
export const setupAutoBid = (uid, token, minRate, maxRate, bidAmount, term, payType) =>
  axios({ url: requestUrl.setupAutoBid, method: 'post', params: { auth: { uid, qrsoft_fe_token: token }, info: { minRate, maxRate, bidAmount, term, payType } } })

// 关闭自动投标
/**
 * close auto invest
 * @param {String} uid user id
 * @param {String} token token
 */
export const closeAutoBid = (uid, token) => axios({ url: requestUrl.closeAutoBid, method: 'post', params: { auth: { uid, qrsoft_fe_token: token } } })

// 点击提现 ---所有提现先点击后跳转到提现页面
/**
 * click the button deposit
 * @param {String} uid userid
 * @param {String} token token
 * @param {String} type the type number of product
 * @param {String} assetId
 */
export const withdrawLoadInt = (uid, token, type, assetId = '') =>
  axios({ url: requestUrl.withdrawLoadInt, method: 'post', params: { auth: { uid, qrsoft_fe_token: token }, info: { type, assetId } } })

// 加载提现信息
/**
 * load the page deposit init
 * @param {String} uid userid
 * @param {String} token token
 * @param {String} type the type number of product
 * @param {String} assetId
 */
export const withdrawLoad = (uid, token, type, assetId = '') =>
  axios({ url: requestUrl.withdrawLoad, method: 'post', params: { auth: { uid, qrsoft_fe_token: token }, info: { type, assetId } } })

// 提现下一步
/**
 * click next when deposit submit deposit request
 * @param {String} uid userid
 * @param {String} token token
 * @param {String} type the product type
 * @param {String} dealpwd deal password
 * @param {String} code the captcha
 * @param {String} money the money number of deposit
 * @param {String} bankId bankcard when deposit to current == -6
 * @param {String} clientType the type of client
 * @param {String} assetId the assetId of deposit
 */
export const withdraw = (uid, token, type, dealpwd, code, money, bankId, clientType, assetId) =>
  axios({ url: requestUrl.withdraw, method: 'post', params: { auth: { uid, qrsoft_fe_token: token }, info: { type, dealpwd, code, money, bankId, clientType, assetId } } })

// 个人中心最新公告
/**
 * personal page the latest notice
 * @param {String} uid userid
 * @param {String} token token
 */
export const notice = (uid, token) => axios({ url: requestUrl.notice, method: 'post', params: { auth: { uid, qrsoft_fe_token: token } } })

// 公告列表
/**
 * notice list
 * @param {String} uid userid
 * @param {String} token token
 * @param {String} curPage the page number
 */
export const noticeList = (uid, token, curPage) => axios({ url: requestUrl.noticeList, method: 'post', params: { auth: { uid, qrsoft_fe_token: token }, info: { curPage } } })

// 个人中心会员等级、手机号码、头像等信息
/**
 * personal page user's info
 * @param {String} uid userid
 * @param {String} token token
 */
export const personInfo = (uid, token) => axios({ url: requestUrl.personInfo, method: 'post', params: { auth: { uid, qrsoft_fe_token: token } } })

// 灵活猫
/**
 * current page init
 * @param {String} uid userid
 * @param {String} token token
 */
export const current = (uid, token) => axios({ url: requestUrl.current, method: 'post', params: { auth: { uid, qrsoft_fe_token: token } } })

// 余额
/**
 * balance page init
 * @param {String} uid userid
 * @param {String} token token
 */
export const balance = (uid, token) => axios({ url: requestUrl.balance, method: 'post', params: { auth: { uid, qrsoft_fe_token: token } } })

// 余额支付
/**
 * balance page init
 * @param {String} uid userid
 * @param {String} token token
 */
export const balancePay = (uid, token, payPWD, money, divType, copies, steadyId, code, profitId) =>
  axios({ url: requestUrl.balancePay, method: 'post', params: { auth: { uid, qrsoft_fe_token: token }, info: { payPWD, money, divType, copies, steadyId, code, profitId } } })

// 余额记录
/**
 * balance records
 * @param {String} uid userid
 * @param {String} token token
 * @param {String} curPage the page number
 */
export const balanceRecord = (uid, token, curPage) => axios({ url: requestUrl.balanceRecord, method: 'post', params: { auth: { uid, qrsoft_fe_token: token }, info: { curPage } } })

// 充值页面
/**
 * recharg page init
 * @param {String} uid userid
 * @param {String} token token
 */
export const balanceRechargeInit = (uid, token) => axios({ url: requestUrl.balanceRechargeInit, method: 'post', params: { auth: { uid, qrsoft_fe_token: token } } })

// 充值
/**
 * recharge request
 * @param {String} uid userid
 * @param {String} token token
 * @param {String} money the number of recharge
 */
export const balanceRecharge = (uid, token, money) => axios({ url: requestUrl.balanceRecharge, method: 'post', params: { auth: { uid, qrsoft_fe_token: token }, info: { money } } })

// 账户资产
/**
 * user account
 * @param {String} uid userid
 * @param {String} token token
 * @param {String} type the product type of user account. type:1、月月涨2、年账户 3、猫粮4、季度喵5、半年喵 6、九九喵7、活期喵 8、发财猫 9、克隆喵10、月盈猫（为0的就是全部）
 */
export const accountInfo = (uid, token, type) => axios({ url: requestUrl.accountInfo, method: 'post', params: { auth: { uid, qrsoft_fe_token: token }, info: { type } } })

// 账户资产持有列表
/**
 * the hold list of user account
 * @param {String} uid userid
 * @param {String} token token
 * @param {String} type the product type 1、发财猫3、季度4、活期5、月月涨 6、半年7、猫粮8、月盈猫 9、九九 12、年丰24、克隆喵（为0的就是全部）
 * @param {String} curPage the page number of list
 */
export const assetsHoldList = (uid, token, type, curPage) =>
  axios({ url: requestUrl.assetsHoldList, method: 'post', params: { auth: { uid, qrsoft_fe_token: token }, info: { type, curPage } } })

// 账户资产赎回列表
/**
 * the redeem list of user account
 * @param {String} uid userid
 * @param {String} token token
 * @param {String} type the product type
 * @param {String} curPage the page number
 */
export const assetsRedeemList = (uid, token, type, curPage) =>
  axios({ url: requestUrl.assetsRedeemList, method: 'post', params: { auth: { uid, qrsoft_fe_token: token }, info: { type, curPage } } })

// 月月涨，猫粮，灵活猫收益明细
/**
 * the founcdetail of month catgrain current product
 * @param {String} uid userid
 * @param {String} token token
 * @param {String} type the product type
 * @param {String} curPage page number
 */
export const fundrecordListDetail = (uid, token, type, curPage) =>
  axios({ url: requestUrl.fundrecordListDetail, method: 'post', params: { auth: { uid, qrsoft_fe_token: token }, info: { type, curPage } } })

// 我的邀请
/**
 * inviete page init
 * @param {String} uid userid
 * @param {String} token token
 */
export const myInvitation = (uid, token) => axios({ url: requestUrl.myInvitation, method: 'post', params: { auth: { uid, qrsoft_fe_token: token } } })

// 我的邀请列表
/**
 * list of user invited
 * @param {String} uid userid
 * @param {String} token token
 * @param {String} curPage the page number
 */
export const myInvitationList = (uid, token, curPage) =>
  axios({ url: requestUrl.myInvitationList, method: 'post', params: { auth: { uid, qrsoft_fe_token: token }, info: { curPage } } })

// 抽奖号码列表
/**
 * list of luckdraw
 * @param {String} uid userid
 * @param {String} token token
 * @param {String} curPage the page number
 */
export const luckyDrawList = (uid, token, curPage) => axios({ url: requestUrl.luckyDrawList, method: 'post', params: { auth: { uid, qrsoft_fe_token: token }, info: { curPage } } })

// 抽奖号码某一期 我的号码
/**
 * the number list of one term of luckdraw
 * @param {String} uid userid
 * @param {String} token token
 * @param {String} drawId luckdraw id
 * @param {String} curPage page number
 */
export const drawNumber = (uid, token, drawId, curPage) =>
  axios({ url: requestUrl.drawNumber, method: 'post', params: { auth: { uid, qrsoft_fe_token: token }, info: { draw_id: drawId, curPage } } })

// 抽奖号码规则
/**
 * the rule of the luckdraw
 * @param {String} drawId luckdraw id
 */
export const luckyDrawRule = drawId => axios({ url: requestUrl.luckyDrawRule, method: 'post', params: { info: { draw_id: drawId } } })

// 我的任务
/**
 * user's task
 * @param {String} uid userid
 * @param {String} token token
 */
export const userTask = (uid, token) => axios({ url: requestUrl.userTask, method: 'post', params: { auth: { uid, qrsoft_fe_token: token } } })

// 投资记录
/**
 * invest records
 * @param {String} uid userid
 * @param {String} token token
 * @param {String} type the product type 0表示全部记录、1表示活期猫、2表示月月涨，3表示季度喵、4表示半年喵、5表示九九喵、6表示年丰收、7表示发财猫、8表示克隆喵、9表示月盈猫
 * @param {String} curPage page number
 */
export const investmentList = (uid, token, type, curPage) =>
  axios({ url: requestUrl.investmentList, method: 'post', params: { auth: { uid, qrsoft_fe_token: token }, info: { type, curPage } } })

// 猫小票
/**
 * cattickes init
 * @param {String} uid userid
 * @param {String} token token
 */
export const catTicket = (uid, token) => axios({ url: requestUrl.catTicket, method: 'post', params: { auth: { uid, qrsoft_fe_token: token } } })

// 猫小票兑换
/**
 * exchange catTickets
 * @param {String} uid userid
 * @param {String} token token
 * @param {String} ticketNumber selected numbers
 */
export const exchangeCatTicket = (uid, token, ticketNumber) =>
  axios({ url: requestUrl.exchangeCatTicket, method: 'post', params: { auth: { uid, qrsoft_fe_token: token }, info: { ticketNumber } } })

// 猫小票往期中奖号码
/**
 * the catTickets of history win
 * @param {String} uid userid
 * @param {String} token token
 * @param {String} curPage page number
 */
export const winPrizeHistory = (uid, token, curPage) =>
  axios({ url: requestUrl.winPrizeHistory, method: 'post', params: { auth: { uid, qrsoft_fe_token: token }, info: { curPage } } })

// 猫小票历史票码
/**
 * the history term of catTickets
 * @param {String} uid userid
 * @param {String} token token
 * @param {String} curPage page number
 */
export const catTicketDraw = (uid, token, curPage) => axios({ url: requestUrl.catTicketDraw, method: 'post', params: { auth: { uid, qrsoft_fe_token: token }, info: { curPage } } })

// 猫小票历史票码某一期 我的号码
/**
 * the number of one term of history catTickets
 * @param {String} uid userid
 * @param {String} token token
 * @param {String} drawId the id of catTickets term
 * @param {String} curPage page number
 */
export const ticketNumber = (uid, token, drawId, curPage) =>
  axios({ url: requestUrl.ticketNumber, method: 'post', params: { auth: { uid, qrsoft_fe_token: token }, info: { draw_id: drawId, curPage } } })

// 猫小票本期票码
/**
 * current term catTickets
 * @param {String} uid userid
 * @param {String} token token
 * @param {String} curPage page number
 */
export const currentTicketNumber = (uid, token, curPage) =>
  axios({ url: requestUrl.currentTicketNumber, method: 'post', params: { auth: { uid, qrsoft_fe_token: token }, info: { curPage } } })

// 猫粮
/**
 * catgrain init
 * @param {String} uid userid
 * @param {String} token token
 */
export const myCatFood = (uid, token) => axios({ url: requestUrl.myCatFood, method: 'post', params: { auth: { uid, qrsoft_fe_token: token } } })

// 猫粮记录
/**
 * catgrain records list
 * @param {String} uid userid
 * @param {String} token token
 * @param {String} curPage page number
 */
export const catFoodRecord = (uid, token, curPage) => axios({ url: requestUrl.catFoodRecord, method: 'post', params: { auth: { uid, qrsoft_fe_token: token }, info: { curPage } } })

// 红包卡券
/**
 * cashTickts list
 * @param {String} uid userid
 * @param {String} token token
 * @param {String} curPage page number
 * @param {String} state the status of red tickets
 */
export const redEnvelopes = (uid, token, curPage, state) =>
  axios({ url: requestUrl.redEnvelopes, method: 'post', params: { auth: { uid, qrsoft_fe_token: token }, info: { curPage, state } } })

// 实名认证
/**
 * certification real name
 * @param {String} uid userid
 * @param {String} token token
 * @param {String} realName user's real name
 * @param {String} idNo user's idNo
 */
export const realName = (uid, token, realName, idNo) =>
  axios({ url: requestUrl.realName, method: 'post', params: { auth: { uid, qrsoft_fe_token: token }, info: { realName, idNo } } })

// 绑定银行卡
/**
 * bind bankcard
 * @param {String} uid userid
 * @param {String} token token
 * @param {String} cardUserName the name of card
 * @param {String} bankName the name of bank
 * @param {String} subBankName the name of subBank
 * @param {String} bankCard card number
 * @param {String} province the province of bankcard
 * @param {String} city the city of bankcard
 */
export const addBank = (uid, token, cardUserName, bankName, subBankName, bankCard, province, city) =>
  axios({ url: requestUrl.addBank, method: 'post', params: { auth: { uid, qrsoft_fe_token: token }, info: { cardUserName, bankName, subBankName, bankCard, province, city } } })

// 修改交易密码
/**
 * update deal password
 * @param {String} uid userid
 * @param {String} token token
 * @param {String} oldPwd old deal password
 * @param {String} newPwd new deal password
 */
export const updateDealPwd = (uid, token, oldPwd, newPwd) =>
  axios({ url: requestUrl.updateDealPwd, method: 'post', params: { auth: { uid, qrsoft_fe_token: token }, info: { oldPwd, newPwd } } })

// 修改登陆密码
/**
 * update login password
 * @param {String} uid userid
 * @param {String} token token
 * @param {String} oldPwd old login password
 * @param {String} newPwd new login password
 */
export const updateLoginPwd = (uid, token, oldPwd, newPwd) =>
  axios({ url: requestUrl.updateLoginPwd, method: 'post', params: { auth: { uid, qrsoft_fe_token: token }, info: { oldPwd, newPwd } } })

// 第三方支付
/**
 * update login password
 * @param {String} uid userid
 * @param {String} token token
 * @param {String} oldPwd old login password
 * @param {String} newPwd new login password
 */
export const bankPayJson = (uid, token, bankCard, idNo, amt, name, divType, profitId, copies) =>
  axios({ url: requestUrl.bankPayJson, method: 'post', params: { auth: { uid, qrsoft_fe_token: token }, info: { bankCard, idNo, amt, name, divType, profitId, copies } } })
