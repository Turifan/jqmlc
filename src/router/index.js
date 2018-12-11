import Vue from 'vue'
import Router from 'vue-router'

const check = r => require.ensure([], () => r(require('@/page/check/check')), 'check')
const home = r => require.ensure([], () => r(require('@/page/home/home')), 'home')
const doraemon = r => require.ensure([], () => r(require('@/page/doraemon/doraemon')), 'doraemon')
const doraemonDetail = r => require.ensure([], () => r(require('@/page/doraemonDetail/doraemonDetail')), 'doraemonDetail')
const profit = r => require.ensure([], () => r(require('@/page/profit/profit')), 'profit')
const monthProfit = r => require.ensure([], () => r(require('@/page/monthProfit/monthProfit')), 'monthProfit')
const fatten = r => require.ensure([], () => r(require('@/page/fatten/fatten')), 'fatten')
const personal = r => require.ensure([], () => r(require('@/page/personal/personal')), 'personal')
const login = r => require.ensure([], () => r(require('@/page/login/login')), 'login')
const register = r => require.ensure([], () => r(require('@/page/register/register')), 'register')
const regSencondStep = r => require.ensure([], () => r(require('@/page/register/regSencondStep')), 'regSencondStep')
const share = r => require.ensure([], () => r(require('@/page/share/share')), 'share')
const shareInfo = r => require.ensure([], () => r(require('@/page/description/shareInfo')), 'shareInfo')
const current = r => require.ensure([], () => r(require('@/page/current/current')), 'current')
const currentInfo = r => require.ensure([], () => r(require('@/page/description/currentInfo')), 'currentInfo')
const term = r => require.ensure([], () => r(require('@/page/term/term')), 'term')
const sign = r => require.ensure([], () => r(require('@/page/sign/sign')), 'sign')
const balance = r => require.ensure([], () => r(require('@/page/balance/balance')), 'balance')
const autoInvest = r => require.ensure([], () => r(require('@/page/autoInvest/autoInvest')), 'autoInvest')
const autoInvestRecord = r => require.ensure([], () => r(require('@/page/autoInvest/children/autoInvestRecord')), 'autoInvestRecord')
const invest = r => require.ensure([], () => r(require('@/page/invest/invest')), 'invest')
const auditStatus = r => require.ensure([], () => r(require('@/page/invest/children/auditStatus')), 'auditStatus')
const loanInfo = r => require.ensure([], () => r(require('@/page/invest/children/loanInfo')), 'loanInfo')
const projectDetail = r => require.ensure([], () => r(require('@/page/invest/children/projectDetail')), 'projectDetail')
const protocol = r => require.ensure([], () => r(require('@/page/protocol/protocol')), 'protocol')
const history = r => require.ensure([], () => r(require('@/page/history/history')), 'history')
const deposit = r => require.ensure([], () => r(require('@/page/deposit/deposit')), 'deposit')
const luckdraw = r => require.ensure([], () => r(require('@/page/luckdraw/luckdraw')), 'luckdraw')
const task = r => require.ensure([], () => r(require('@/page/task/task')), 'task')
const asset = r => require.ensure([], () => r(require('@/page/asset/asset')), 'asset')
const catGrain = r => require.ensure([], () => r(require('@/page/catGrain/catGrain')), 'catGrain')
const investRecord = r => require.ensure([], () => r(require('@/page/investRecord/investRecord')), 'investRecord')
const cashTickets = r => require.ensure([], () => r(require('@/page/cashTickets/cashTickets')), 'cashTickets')
const safe = r => require.ensure([], () => r(require('@/page/safe/safe')), 'safe')
const cert = r => require.ensure([], () => r(require('@/page/safe/cert')), 'cert')
const bindCard = r => require.ensure([], () => r(require('@/page/safe/bindCard')), 'bindCard')
const bindTel = r => require.ensure([], () => r(require('@/page/safe/bindTel')), 'bindTel')
const bindWechat = r => require.ensure([], () => r(require('@/page/safe/bindWechat')), 'bindWechat')
const resetLoginPwd = r => require.ensure([], () => r(require('@/page/safe/resetLoginPwd')), 'resetLoginPwd')
const resetDealPwd = r => require.ensure([], () => r(require('@/page/safe/resetDealPwd')), 'resetDealPwd')
const aboutUs = r => require.ensure([], () => r(require('@/page/aboutUs/aboutUs')), 'aboutUs')
const faq = r => require.ensure([], () => r(require('@/page/faq/faq')), 'faq')
const member = r => require.ensure([], () => r(require('@/page/member/member')), 'member')
const memberRule = r => require.ensure([], () => r(require('@/page/member/memberRule')), 'memberRule')
const fat = r => require.ensure([], () => r(require('@/page/fat/fat')), 'fat')
const fatHistory = r => require.ensure([], () => r(require('@/page/fatHistory/fatHistory')), 'fatHistory')

Vue.use(Router)

export default new Router({
  routes: [
    // 检测微信端打开
    {
      path: '/',
      name: 'check',
      component: check
    },
    // 重定向地址
    {
      path: '',
      redirect: '/check'
    },
    // 首页
    {
      path: '/home',
      name: 'home',
      component: home
    },
    // 机器猫
    {
      path: '/doraemon',
      name: 'doraemon',
      component: doraemon
    },
    // 机器猫详细产品
    {
      path: '/doraemonDetail/days',
      name: 'doraemonDetail',
      component: doraemonDetail
    },
    // 月盈猫
    {
      path: '/profit',
      name: 'profit',
      component: profit,
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    // 月盈猫购买
    {
      path: '/monthProfit',
      name: 'monthProfit',
      component: monthProfit,
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    // 发财猫
    {
      path: '/fatten',
      name: 'fatten',
      component: fatten,
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    // 我的
    {
      path: '/personal',
      name: 'personal',
      component: personal,
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    // 登陆
    {
      path: '/login',
      name: 'login',
      component: login
    },
    // 注册
    {
      path: '/register',
      name: 'register',
      component: register
    },
    // 注册第二步
    {
      path: '/regSencondStep',
      name: 'regSencondStep',
      component: regSencondStep
    },
    // 灵活猫
    {
      path: '/current',
      name: 'current',
      component: current,
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    // 机器猫产品
    {
      path: '/term',
      name: 'term',
      component: term,
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    // 灵活猫介绍
    {
      path: '/currentInfo',
      name: 'currentInfo',
      component: currentInfo,
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    // 分享标
    {
      path: '/share',
      name: 'share',
      component: share,
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    // 分享规则
    {
      path: '/shareInfo', // 分享规则
      name: 'shareInfo',
      component: shareInfo,
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    // 签到
    {
      path: '/sign',
      name: 'sign',
      component: sign,
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    // 发财猫投标详情
    {
      path: '/invest/:fatId',
      name: 'invest',
      component: invest,
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    // 审核状态
    {
      path: '/auditStatus/:fatId',
      name: 'auditStatus',
      component: auditStatus,
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    // 借款详情
    {
      path: '/loanInfo/:fatId',
      name: 'loanInfo',
      component: loanInfo,
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    // 项目详情
    {
      path: '/projectDetail/:fatId',
      name: 'projectDetail',
      component: projectDetail,
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    // 自动投标
    {
      path: '/autoInvest',
      name: 'autoInvest',
      component: autoInvest,
      children: [{
        path: 'autoInvestRecord', // 自动投标记录
        name: 'autoInvestRecord',
        component: autoInvestRecord
      }],
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    // 余额
    {
      path: '/balance',
      name: 'balance',
      component: balance,
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    // 发财猫已结束标
    {
      path: '/history',
      name: 'history',
      component: history,
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    // 提现
    {
      path: '/deposit',
      name: 'deposit',
      component: deposit,
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    // 抽奖号码
    {
      path: '/luckdraw',
      name: 'luckdraw',
      component: luckdraw,
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    // 我的任务
    {
      path: '/task',
      name: 'task',
      component: task,
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    // 我的资产
    {
      path: '/asset',
      name: 'asset',
      component: asset,
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    // 我的猫粮
    {
      path: '/catGrain',
      name: 'catGrain',
      component: catGrain,
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    // 投资记录
    {
      path: '/investRecord',
      name: 'investRecord',
      component: investRecord
    },
    // 现金券
    {
      path: '/cashTickets',
      name: 'cashTickets',
      component: cashTickets
    },
    // 安全中心
    {
      path: '/safe',
      name: 'safe',
      component: safe
    },
    // 安全认证
    {
      path: '/cert',
      name: 'cert',
      component: cert
    },
    // 绑定银行卡
    {
      path: '/bindCard',
      name: 'bindCard',
      component: bindCard
    },
    // 绑定手机号
    {
      path: '/bindTel',
      name: 'bindTel',
      component: bindTel
    },
    // 绑定微信号
    {
      path: '/bindWechat',
      name: 'bindWechat',
      component: bindWechat
    },
    // 修改登录密码
    {
      path: '/resetLoginPwd',
      name: 'resetLoginPwd',
      component: resetLoginPwd
    },
    // 修改交易密码
    {
      path: '/resetDealPwd',
      name: 'resetDealPwd',
      component: resetDealPwd
    },
    // 关于我们
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: aboutUs
    },
    // 常见问题
    {
      path: '/faq',
      name: 'faq',
      component: faq
    },
    // 会员等级
    {
      path: '/member',
      name: 'member',
      component: member
    },
    // 会员规则
    {
      path: '/memberRule',
      name: 'memberRule',
      component: memberRule
    },
    // 发财猫具体商品列表
    {
      path: '/fat/:days',
      name: 'fat',
      component: fat
    },
    // 发财猫结束列表
    {
      path: '/fatHistory/:days',
      name: 'fatHistory',
      component: fatHistory
    },
    // 借款协议
    {
      path: '/protocol',
      name: 'protocol',
      component: protocol
    }
  ]
})
