<template lang="html">
  <div class="">
    <HeaderBar :headerBar="headerBar"></HeaderBar>
    <div class="gray-fixed gray-fixed-bg">
      <div class="wrapper">
        <scroll ref="scroll" :pullDownRefresh="pullDownRefresh" :pullUpLoad="pullUpLoad" :startY="parseInt(startY)"
          @pullingDown="onPullingDown" @pullingUp="onPullingUp">
          <FatHistoryList :data="fatHistoryList"></FatHistoryList>
        </scroll>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import HeaderBar from '@/components/common/headerBar.vue'
import FatHistoryList from './fatHistoryList.vue'
import Scroll from '@/components/scroll/scroll.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'FatHistory',
  components: {
    HeaderBar,
    FatHistoryList,
    Scroll
  },
  data () {
    return {
      headerBar: {
        title: '结束项目',
        // imgUrl: require('../../assets/images/fat_history.png'),
        goBackUrl: require('../../assets/images/goBack.png'),
        path: 'fatHistory',
        // params: {
        //   days: 30
        // },
        goBack: true,
        showIcon: false
      },
      pullDownRefresh: true,
      pullUpLoad: true,
      pullUpLoadMoreTxt: '加载更多',
      pullUpLoadNoMoreTxt: '没有更多数据了',
      startY: 0
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
  computed: {
    ...mapState({
      fatHistoryCurpage: ({ products }) => products.fatHistoryCurpage,
      fatHistoryList: ({ products }) => products.fatHistoryList,
      fatHistoryTotalNum: ({ products }) => products.fatHistoryTotalNum
    })
  },
  methods: {
    ...mapActions(['loadFatHistoryList']),
    onPullingDown () {
      // 模拟更新数据
      console.log('pulling down and load data')
      setTimeout(() => {
        if (this._isDestroyed) {
        }
        // if (Math.random() > 0.5) {
        //   // 如果有新数据
        //   // this.items.unshift(new Date())
        // } else {
        //   // 如果没有新数据
        this.$refs.scroll.forceUpdate()
        // }
      }, 2000)
    },
    onPullingUp () {
      // 更新数据
      setTimeout(() => {
        if (this._isDestroyed) {
          return
        }
        if (this.fatHistoryTotalNum > this.fatHistoryList.length) {
          // 如果有新数据
          this.loadFatHistoryList(`${this.$route.params.days}`)
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
  },
  mounted () {
    if (this.fatHistoryCurpage === 1) {
      this.loadFatHistoryList(`${this.$route.params.days}`)
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
