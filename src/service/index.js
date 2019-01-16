import requestUrl from '../config/requestUrl'
import axios from '../config/http'

// 登陆
export const login = params => axios({ url: requestUrl.login, methods: 'post', params })

// 注册获取验证码
export const sendRegSMS = params => axios({ url: requestUrl.sendRegSMS, methods: 'post', params })

// 注册点击下一步调用接口
export const phoneCodeCheck = params => axios({ url: requestUrl.phoneCodeCheck, methods: 'post', params })

// 提交注册信息
export const register = params => axios({ url: requestUrl.register, methods: 'post', params })

// 发送手机验证码
export const sendSMS = params => axios({ url: requestUrl.sendSMS, methods: 'post', params })

// 验证短信验证码
export const codeCheck = params => axios({ url: requestUrl.codeCheck, methods: 'post', params })

// 重置登录密码接口
export const resetLoginPassword = params => axios({ url: requestUrl.resetLoginPassword, methods: 'post', params })

// 签到
export const userSignInfo = params => axios({ url: requestUrl.userSignInfo, methods: 'post', params })

// 首页显示
export const queryHome = params => axios({ url: requestUrl.queryHome, methods: 'post', params })

// 分享列表
export const shareList = params => axios({ url: requestUrl.shareList, methods: 'post', params })

// 月盈猫信息
export const monthProfitInfo = params => axios({ url: requestUrl.monthProfitInfo, methods: 'post', params })

// 月盈猫列表
export const monthProfitList = params => axios({ url: requestUrl.monthProfitList, methods: 'post', params })

// 月盈猫购买
export const profitInvest = params => axios({ url: requestUrl.profitInvest, methods: 'post', params })

// 机器猫列表
export const machineList = params => axios({ url: requestUrl.machineList, methods: 'post', params })

// banner图
export const banner = () => axios({ url: requestUrl.banner, methods: 'get' })

// 月月涨
export const month = params => axios({ url: requestUrl.month, methods: 'post', params })

// 季 半 九 年克隆
export const machineYear = params => axios({ url: requestUrl.machineYear, methods: 'post', params })

// 发财猫页面列表
export const fattenList = params => axios({ url: requestUrl.fattenList, methods: 'post', params })

// 发财猫某一产品列表
export const fatList = params => axios({ url: requestUrl.fatList, methods: 'post', params })

// 投资详情页面加载
export const loansDital = params => axios({ url: requestUrl.loansDital, methods: 'post', params })

// 投资详情页面 借款详情
export const borrowerInfo = params => axios({ url: requestUrl.borrowerInfo, methods: 'post', params })

// 投资详情页面 投资记录
export const loansInvestList = params => axios({ url: requestUrl.loansInvestList, methods: 'post', params })

// 投资详情页面 还款记录
export const loansRepaymentList = params => axios({ url: requestUrl.loansRepaymentList, methods: 'post', params })

// 投资详情页面 还款记录
export const richInvest = params => axios({ url: requestUrl.richInvest, methods: 'post', params })

// 发财猫结束项目
export const loansOverList = params => axios({ url: requestUrl.loansOverList, methods: 'post', params })

// 自动投标信息
export const autoInvest = params => axios({ url: requestUrl.autoInvest, methods: 'post', params })

// 自动投标投资期限限额
export const getBitQuota = params => axios({ url: requestUrl.getBitQuota, methods: 'post', params })

// 开启或修改自动投标
export const setupAutoBid = params => axios({ url: requestUrl.setupAutoBid, methods: 'post', params })

// 关闭自动投标
export const closeAutoBid = params => axios({ url: requestUrl.closeAutoBid, methods: 'post', params })

// 点击提现 ---所有提现先点击后跳转到提现页面
export const withdrawLoadInt = params => axios({ url: requestUrl.withdrawLoadInt, methods: 'post', params })

// 加载提现信息
export const withdrawLoad = params => axios({ url: requestUrl.withdrawLoad, methods: 'post', params })

// 提现下一步
export const withdraw = params => axios({ url: requestUrl.withdraw, methods: 'post', params })

// 个人中心最新公告
export const notice = params => axios({ url: requestUrl.notice, methods: 'post', params })

// 公告列表
export const noticeList = params => axios({ url: requestUrl.noticeList, methods: 'post', params })

// 个人中心会员等级、手机号码、头像等信息
export const personInfo = params => axios({ url: requestUrl.personInfo, methods: 'post', params })

// 灵活猫
export const current = params => axios({ url: requestUrl.current, methods: 'post', params })

// 余额
export const balance = params => axios({ url: requestUrl.balance, methods: 'post', params })

// 余额记录
export const balanceRecord = params => axios({ url: requestUrl.balanceRecord, methods: 'post', params })

// 充值页面
export const balanceRechargeInit = params => axios({ url: requestUrl.balanceRechargeInit, methods: 'post', params })

// 充值
export const balanceRecharge = params => axios({ url: requestUrl.balanceRecharge, methods: 'post', params })

// 账户资产
export const accountInfo = params => axios({ url: requestUrl.accountInfo, methods: 'post', params })

// 账户资产持有列表
export const assetsHoldList = params => axios({ url: requestUrl.assetsHoldList, methods: 'post', params })

// 账户资产赎回列表
export const assetsRedeemList = params => axios({ url: requestUrl.assetsRedeemList, methods: 'post', params })

// 月月涨，猫粮，灵活猫收益明细
export const fundrecordListDetail = params => axios({ url: requestUrl.fundrecordListDetail, methods: 'post', params })

// 我的邀请
export const myInvitation = params => axios({ url: requestUrl.myInvitation, methods: 'post', params })

// 我的邀请列表
export const myInvitationList = params => axios({ url: requestUrl.myInvitationList, methods: 'post', params })

// 抽奖号码列表
export const luckyDrawList = params => axios({ url: requestUrl.luckyDrawList, methods: 'post', params })

// 抽奖号码某一期 我的号码
export const drawNumber = params => axios({ url: requestUrl.drawNumber, methods: 'post', params })

// 抽奖号码规则
export const luckyDrawRule = params => axios({ url: requestUrl.luckyDrawRule, methods: 'post', params })

// 我的任务
export const userTask = params => axios({ url: requestUrl.userTask, methods: 'post', params })

// 投资记录
export const investmentList = params => axios({ url: requestUrl.investmentList, methods: 'post', params })

// 猫小票
export const catTicket = params => axios({ url: requestUrl.catTicket, methods: 'post', params })

// 猫小票兑换
export const exchangeCatTicket = params => axios({ url: requestUrl.exchangeCatTicket, methods: 'post', params })

// 猫小票往期中奖号码
export const winPrizeHistory = params => axios({ url: requestUrl.winPrizeHistory, methods: 'post', params })

// 猫小票历史票码
export const catTicketDraw = params => axios({ url: requestUrl.catTicketDraw, methods: 'post', params })

// 猫小票历史票码某一期 我的号码
export const ticketNumber = params => axios({ url: requestUrl.ticketNumber, methods: 'post', params })

// 猫小票本期票码
export const currentTicketNumber = params => axios({ url: requestUrl.currentTicketNumber, methods: 'post', params })

// 猫粮
export const myCatFood = params => axios({ url: requestUrl.myCatFood, methods: 'post', params })

// 猫粮记录
export const catFoodRecord = params => axios({ url: requestUrl.catFoodRecord, methods: 'post', params })

// 红包卡券
export const redEnvelopes = params => axios({ url: requestUrl.redEnvelopes, methods: 'post', params })

// 实名认证
export const realName = params => axios({ url: requestUrl.realName, methods: 'post', params })

// 绑定银行卡
export const addBank = params => axios({ url: requestUrl.addBank, methods: 'post', params })

// 修改交易密码
export const updateDealPwd = params => axios({ url: requestUrl.updateDealPwd, methods: 'post', params })

// 修改登陆密码
export const updateLoginPwd = params => axios({ url: requestUrl.updateLoginPwd, methods: 'post', params })
