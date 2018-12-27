<!-- 自动投标记录 -->
<template>
  <div>
    <HeaderBar :header-bar="headerBar"></HeaderBar>
    <div class="gray-fixed">
      <div class="autoInvestTit">
        <div class="investPro">产品</div>
        <div class="investSum">金额</div>
        <div class="investPayWay">支付</div>
        <div class="investDate">时间</div>
      </div>
      <div class="wrapper">
        <scroll ref="scroll" :data="items" :pullDownRefresh="pullDownRefresh" :pullUpLoad="pullUpLoad" :startY="parseInt(startY)"
          @pullingDown="onPullingDown" @pullingUp="onPullingUp">
          <div class="autoInvestList">
            <div class="autoInvestItem">
              <div class="investPro">以租代购0001</div>
              <div class="investSum">10000</div>
              <div class="investPayWay">余额资金</div>
              <div class="investDate">2018-11-01 11:19:42</div>
            </div>
            <div class="autoInvestItem">
              <div class="investPro">以租代购0001</div>
              <div class="investSum">10000</div>
              <div class="investPayWay">余额资金</div>
              <div class="investDate">2018-11-01 11:19:42</div>
            </div>
            <div class="autoInvestItem">
              <div class="investPro">以租代购0001</div>
              <div class="investSum">10000</div>
              <div class="investPayWay">余额资金</div>
              <div class="investDate">2018-11-01 11:19:42</div>
            </div>
          </div>
        </scroll>
      </div>

    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import HeaderBar from '@/components/common/headerBar.vue'
import Scroll from '@/components/scroll/scroll.vue'
// import BScroll from 'better-scroll'

export default {
  name: 'AutoInvestRecord',
  components: {
    HeaderBar,
    Scroll
    // BScroll
  },
  data () {
    return {
      headerBar: {
        title: '投标记录',
        imgUrl: '',
        goBackUrl: require('../../assets/images/goBack.png'),
        path: '',
        params: {},
        goBack: true,
        showIcon: false
      },
      // scrollbar: true,
      // scrollbarFade: true,
      pullDownRefresh: true,
      // pullDownRefreshThreshold: 90,
      // pullDownRefreshStop: 40,
      pullUpLoad: true,
      // pullUpLoadThreshold: 0,
      pullUpLoadMoreTxt: '加载更多',
      pullUpLoadNoMoreTxt: '没有更多数据了',
      startY: 0,
      // scrollToX: 0,
      // scrollToY: -200,
      // scrollToTime: 700,
      // scrollToEasing: 'bounce',
      // scrollToEasingOptions: ['bounce', 'swipe', 'swipeBounce'],
      items: []
      // itemIndex: 0
    }
  },
  watch: {
    // scrollbarObj: {
    //   handler () {
    //     this.rebuildScroll()
    //   },
    //   deep: true
    // },
    // pullDownRefreshObj: {
    //   handler (val) {
    //     const scroll = this.$refs.scroll.scroll
    //     if (val) {
    //       scroll.openPullDown()
    //       console.log('动态开启下拉')
    //     } else {
    //       scroll.closePullDown()
    //       console.log('动态关闭下拉')
    //     }
    //   },
    //   deep: true
    // },
    // pullUpLoadObj: {
    //   handler (val) {
    //     const scroll = this.$refs.scroll.scroll
    //     if (val) {
    //       scroll.openPullUp()
    //     } else {
    //       scroll.closePullUp()
    //     }
    //   },
    //   deep: true
    // },
    startY () {
      this.rebuildScroll()
    }
  },
  created () {
    // this.onPullingUp()
    console.log('数据初始化完毕')
  },
  computed: {
    // scrollbarObj: function () {
    //   return this.scrollbar ? {
    //     fade: this.scrollbarFade
    //   } : false
    // },
    // pullDownRefreshObj: function () {
    //   console.log('pullDownRefreshObj计算属性')
    //   return this.pullDownRefresh ? {
    //     threshold: parseInt(this.pullDownRefreshThreshold),
    //     stop: parseInt(this.pullDownRefreshStop)
    //   } : false
    // },
    // pullUpLoadObj: function () {
    //   console.log('pullUpLoadObj计算属性')
    //   return this.pullUpLoad ? {
    //     threshold: parseInt(this.pullUpLoadThreshold),
    //     txt: {
    //       more: this.pullUpLoadMoreTxt,
    //       noMore: this.pullUpLoadNoMoreTxt
    //     }
    //   } : false
    // }
  },
  methods: {
    // scrollTo () {
    //   this.$refs.scroll.scrollTo(this.scrollToX, this.scrollToY, this.scrollToTime, ease[this.scrollToEasing])
    // },
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
    // clickItem () {
    //   this.$router.back()
    // },
    // updateScrollbar (val) {
    //   this.scrollbar = val
    // },
    // updateScrollbarFade (val) {
    //   this.scrollbarFade = val
    // },
    // updatePullDownRefresh (val) {
    //   this.pullDownRefresh = val
    // },
    // updatePullDownRefreshThreshold (val) {
    //   this.pullDownRefreshThreshold = val
    // },
    // updatePullDownRefreshStop (val) {
    //   this.pullDownRefreshStop = val
    // },
    // updatePullUpLoad (val) {
    //   this.pullUpLoad = val
    // },
    // updatePullUpLoadThreshold (val) {
    //   this.pullUpLoadThreshold = val
    // },
    // updatePullUpLoadMoreTxt (val) {
    //   this.pullUpLoadMoreTxt = val
    // },
    // updatePullUpLoadNoMoreTxt (val) {
    //   this.pullUpLoadNoMoreTxt = val
    // },
    // updateStartY (val) {
    //   this.startY = val
    // },
    // updateScrollToX (val) {
    //   this.scrollToX = val
    // },
    // updateScrollToY (val) {
    //   this.scrollToY = val
    // },
    // updateScrollToTime (val) {
    //   this.scrollToTime = val
    // },
    // updateScrollToEasing (val) {
    //   this.scrollToEasing = val
    // },
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
  @import '../../style/mixin';

  .wrapper {
    // overflow-y: hidden;
    position: relative;
    height: e('calc(100% - 130px)');
  }

  .autoInvestBox {
    padding: 0 35px;
    height: 100%;
    overflow-y: hidden;
    position: relative;
  }

  .autoInvestList {
    padding: 0 35px;
    // height: 100%;
    overflow-y: hidden;
    position: relative;
  }

  .autoInvestTit {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    padding: 0 59px;
    height: 130px;
    border-bottom: 2px solid #efefef;
    .color(#333);
    .fontSize(38px);
    position: relative;
    z-index: 10;
    .bg(#fff);
  }

  .autoInvestItem {
    height: 140px;
    padding: 0 24px;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    .fontSize(36px);
  }

  .investPro {
    width: 30%;
    text-align: left;
  }

  .investSum {
    width: 20%;
    text-align: center;
  }

  .investPayWay {
    width: 20%;
    text-align: center;
  }

  .investDate {
    width: 30%;
    text-align: right;
  }

</style>
