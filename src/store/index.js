import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
  // 猫小票号码
  catTickets: [
    {
      id: '1',
      name: '月盈猫',
      imgUrl: require('../assets/images/cat1.png'),
      imgSize: 'cat1'
    },
    {
      id: '2',
      name: '汤姆猫',
      imgUrl: require('../assets/images/cat2.png'),
      imgSize: 'cat2'
    },
    {
      id: '3',
      name: '布偶猫',
      imgUrl: require('../assets/images/cat3.png'),
      imgSize: 'cat3'
    },
    {
      id: '4',
      name: '卷耳猫',
      imgUrl: require('../assets/images/cat4.png'),
      imgSize: 'cat4'
    },
    {
      id: '5',
      name: '夏特尔猫',
      imgUrl: require('../assets/images/cat5.png'),
      imgSize: 'cat5'
    },
    {
      id: '6',
      name: '折耳猫',
      imgUrl: require('../assets/images/cat6.png'),
      imgSize: 'cat6'
    },
    {
      id: '7',
      name: '波斯猫',
      imgUrl: require('../assets/images/cat7.png'),
      imgSize: 'cat7'
    },
    {
      id: '8',
      name: '金钱猫',
      imgUrl: require('../assets/images/cat8.png'),
      imgSize: 'cat8'
    }
  ]
}

const store = new Vuex.Store({
  strict: true,

  state,
  mutations,
  actions,
  getters
})

export default store
