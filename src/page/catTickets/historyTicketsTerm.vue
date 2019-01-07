<!-- 猫小票历史票码某一期 -->
<template lang="html">
  <div class="">
    <HeaderBar :headerBar="headerBar"></HeaderBar>
    <div class="gray-fixed">
      <div class="wrapper">
        <scroll ref="scroll"  :pullDownRefresh="pullDownRefresh" :pullUpLoad="pullUpLoad" :startY="parseInt(startY)"
          @pullingDown="onPullingDown" @pullingUp="onPullingUp">
          <TicketsList :data="items"></TicketsList>
        </scroll>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import HeaderBar from '@/components/common/headerBar.vue'
import TicketsList from './TicketsList.vue'
import Scroll from '@/components/scroll/scroll.vue'

export default {
  name: 'HistoryTicketsTerm',
  components: {
    HeaderBar,
    Scroll,
    TicketsList
  },
  data () {
    return {
      headerBar: {
        title: '猫小票第2期',
        imgUrl: '',
        goBackUrl: require('../../assets/images/goBack.png'),
        path: '',
        params: {},
        goBack: true,
        showIcon: false
      },
      pullDownRefresh: true,
      pullUpLoad: true,
      pullUpLoadMoreTxt: '加载更多',
      pullUpLoadNoMoreTxt: '没有更多数据了',
      startY: 0,
      items: [
        {
          cost: 10000,
          create_time: '2018-12-20',
          draw_result: '0',
          draw_result_desc: '未开奖',
          draw_status: 1,
          ticket_number: '76114',
          user_id: 2
        },
        {
          cost: 10000,
          create_time: '2018-12-20',
          draw_result: '0',
          draw_result_desc: '未开奖',
          draw_status: 1,
          ticket_number: '23456',
          user_id: 2
        },
        {
          cost: 10000,
          create_time: '2018-12-19',
          draw_result: '0',
          draw_result_desc: '未开奖',
          draw_status: 1,
          ticket_number: '45678',
          user_id: 2
        }
      ]
    }
  },
  watch: {
    startY () {
      this.rebuildScroll()
    }
  },
  created () {
    console.log('数据初始化完毕')
  },
  computed: {},
  methods: {
    onPullingDown () {
      // 模拟更新数据
      console.log('pulling down and load data')
      setTimeout(() => {
        if (this._isDestroyed) {
          return
        }
        if (Math.random() > 0.5) {
          // 如果有新数据
          this.items.unshift(new Date())
          console.log('有新数据')
        } else {
          // 如果没有新数据
          console.log('无新数据')
          this.$refs.scroll.forceUpdate()
        }
      }, 2000)
    },
    onPullingUp () {
      // 更新数据
      console.log('pulling up and load data')
      setTimeout(() => {
        if (this._isDestroyed) {
          return
        }
        if (Math.random() > 0.5) {
          // 如果有新数据
          let newPage = []
          for (let i = 0; i < 10; i++) {
            newPage.push(this.itemIndex)
          }

          this.items = this.items.concat(newPage)
        } else {
          // 如果没有新数据
          this.$refs.scroll.forceUpdate()
        }
      }, 1500)
    },
    rebuildScroll () {
      Vue.nextTick(() => {
        this.$refs.scroll.destroy()
        this.$refs.scroll.initScroll()
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';

.wrapper {
  overflow-y: hidden;
  position: relative;
  height: 100%;
}
</style>
