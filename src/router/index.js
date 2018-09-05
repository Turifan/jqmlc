import Vue from 'vue'
import Router from 'vue-router'

const index = r => require.ensure([], () => r(require('@/page/home/index')), 'index');
const doraemon = r => require.ensure([], () => r(require('@/page/doraemon/doraemon')), 'doraemon');
const fatten = r => require.ensure([], () => r(require('@/page/fatten/fatten')), 'fatten');
const personal = r => require.ensure([], () => r(require('@/page/personal/personal')), 'personal');

Vue.use(Router)

export default new Router({
  routes: [
    // 首页
    {
      path: '/',
      name: 'index',
      component: index
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
    }
  ]
})
