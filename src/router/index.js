import Vue from 'vue'
import Router from 'vue-router'

const check = r => require.ensure([], () => r(require('@/page/check/check')), 'check')
const home = r => require.ensure([], () => r(require('@/page/home/home')), 'home')
const doraemon = r => require.ensure([], () => r(require('@/page/doraemon/doraemon')), 'doraemon')
const fatten = r => require.ensure([], () => r(require('@/page/fatten/fatten')), 'fatten')
const personal = r => require.ensure([], () => r(require('@/page/personal/personal')), 'personal')
const login = r => require.ensure([], () => r(require('@/page/login/login')), 'login')
const register = r => require.ensure([], () => r(require('@/page/register/register')), 'register')
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
const assets = r => require.ensure([], () => r(require('@/page/assets/assets')), 'assets')
const expGold = r => require.ensure([], () => r(require('@/page/expGold/expGold')), 'expGold')
const catcoin = r => require.ensure([], () => r(require('@/page/catcoin/catcoin')), 'catcoin')
const investRecord = r => require.ensure([], () => r(require('@/page/investRecord/investRecord')), 'investRecord')
const houseKeeper = r => require.ensure([], () => r(require('@/page/houseKeeper/houseKeeper')), 'houseKeeper')
const cashTickets = r => require.ensure([], () => r(require('@/page/cashTickets/cashTickets')), 'cashTickets')
const safe = r => require.ensure([], () => r(require('@/page/safe/safe')), 'safe')
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
    // 发财猫
    {
      path: '/fatten',
      name: 'fatten',
      component: fatten
    },
    // 我的
    {
      path: '/personal',
      name: 'personal',
      component: personal
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
    // 灵活猫
    {
      path: '/current',
      name: 'current',
      component: current
    },
    // 机器猫产品
    {
      path: '/term',
      name: 'term',
      component: term
    },
    // 灵活猫介绍
    {
      path: '/currentInfo',
      name: 'currentInfo',
      component: currentInfo
    },
    // 分享标
    {
      path: '/share',
      name: 'share',
      component: share
    },
    // 分享规则
    {
      path: '/shareInfo', // 分享规则
      name: 'shareInfo',
      component: shareInfo
    },
    // 签到
    {
      path: '/sign',
      name: 'sign',
      component: sign
    },
    // 发财猫投标详情
    {
      path: '/invest/:fatId',
      name: 'invest',
      component: invest,
      children: [
        {
          path: 'auditStatus', // 审核状态
          // name: 'auditStatus',
          component: auditStatus
        },
        {
          path: 'loanInfo', // 借款详情
          // name: 'loanInfo',
          component: loanInfo
        },
        {
          path: 'projectDetail', // 项目详情
          name: 'projectDetail',
          component: projectDetail
        }
      ]
    },
    // 自动投标
    {
      path: '/autoInvest',
      name: 'autoInvest',
      component: autoInvest,
      children: [
        {
          path: 'autoInvestRecord', // 自动投标记录
          name: 'autoInvestRecord',
          component: autoInvestRecord
        }
      ]
    },
    // 余额
    {
      path: '/balance',
      name: 'balance',
      component: balance
    },
    // 发财猫已结束标
    {
      path: '/history',
      name: 'history',
      component: history
    },
    // 提现
    {
      path: '/deposit',
      name: 'deposit',
      component: deposit
    },
    // 抽奖号码
    {
      path: '/luckdraw',
      name: 'luckdraw',
      component: luckdraw
    },
    // 我的任务
    {
      path: '/task',
      name: 'task',
      component: task
    },
    // 我的资产
    {
      path: '/assets',
      name: 'assets',
      component: assets
    },
    // 我的体验金
    {
      path: '/expGold',
      name: 'expGold',
      component: expGold
    },
    // 我的猫币
    {
      path: '/catcoin',
      name: 'catcoin',
      component: catcoin
    },
    // 投资记录
    {
      path: '/investRecord',
      name: 'investRecord',
      component: investRecord
    },
    // 喵喵管家
    {
      path: '/houseKeeper',
      name: 'houseKeeper',
      component: houseKeeper
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
