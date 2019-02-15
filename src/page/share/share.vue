<!-- 分享有礼 -->
<template lang="html">
  <div class="">
    <HeaderBar :header-bar="headerBar" />
    <div class="gray-fixed gray-fixed-bg">
      <div class="wrapper">
        <scroll ref="scroll" :pullDownRefresh="pullDownRefresh" :pullUpLoad="pullUpLoad" :startY="parseInt(startY)"
          @pullingDown="onPullingDown" @pullingUp="onPullingUp">
          <ShareList :data="shareList"></ShareList>
        </scroll>
      </div>
    </div>
  </div>

</template>

<script>
import Vue from 'vue'
import HeaderBar from '@/components/common/headerBar.vue'
import ShareList from './share_list.vue'
import Scroll from '@/components/scroll/scroll.vue'
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: 'Share',
  components: {
    HeaderBar,
    ShareList,
    Scroll
  },
  data () {
    return {
      headerBar: {
        title: '分享有礼',
        imgUrl: require('../../assets/images/doubt.png'),
        goBackUrl: require('../../assets/images/goBack.png'),
        path: 'description',
        params: { title: 'shareAddRateRule' },
        goBack: true,
        showIcon: true
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
  computed: {
    ...mapState({
      shareCurpage: ({ products }) => products.shareCurpage,
      shareList: ({ products }) => products.shareList
    })
  },
  methods: {
    ...mapMutations(['INIT_SHARECURPAGE']),
    ...mapActions(['getShareList']),
    onPullingDown () {
      // 模拟更新数据
      this.INIT_SHARECURPAGE()
      setTimeout(() => {
        if (this._isDestroyed) {
        }
        // if (Math.random() > 0.5) {
        //   // 如果有新数据
        //   // this.items.unshift(new Date())
        // } else {
        //   // 如果没有新数据
        this.getShareList()
        this.$refs.scroll.forceUpdate(true)
        // }
      }, 2000)
    },
    onPullingUp () {
      // 更新数据
      setTimeout(() => {
        if (this._isDestroyed) {
          return
        }
        if (this.fatHistoryTotalNum > this.shareList.length) {
          // 如果有新数据
          this.getShareList()
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
    if (this.shareCurpage === 1) {
      this.getShareList()
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../style/mixin';

.wrapper {
  overflow-y: hidden;
  position: relative;
  height: 100%;
}
</style>
