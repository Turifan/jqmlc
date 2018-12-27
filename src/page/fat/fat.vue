<template lang="html">
  <div class="">
    <HeaderBar :header-bar="headerBar" />
    <div class="gray-fixed gray-fixed-bg">
      <div class="wrapper">
        <scroll ref="scroll" :data="items" :pullDownRefresh="pullDownRefresh" :pullUpLoad="pullUpLoad" :startY="parseInt(startY)"
          @pullingDown="onPullingDown" @pullingUp="onPullingUp">
          <FattenList></FattenList>
        </scroll>
      </div>
    </div>
  </div>

</template>

<script>
import Vue from 'vue'
import HeaderBar from '@/components/common/headerBar.vue'
import FattenList from './fatten_list.vue'
import Scroll from '@/components/scroll/scroll.vue'

export default {
  name: 'Fat',
  components: {
    HeaderBar,
    FattenList,
    Scroll
  },
  data () {
    return {
      headerBar: {
        title: '汤姆猫',
        imgUrl: require('../../assets/images/fat_history.png'),
        goBackUrl: require('../../assets/images/goBack.png'),
        path: 'fatHistory',
        params: {
          days: 30
        },
        goBack: true,
        showIcon: true
      },
      pullDownRefresh: true,
      pullUpLoad: true,
      pullUpLoadMoreTxt: '加载更多',
      pullUpLoadNoMoreTxt: '没有更多数据了',
      startY: 0,
      items: []
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

  },
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
