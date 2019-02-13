<template lang="html">
  <div class="">
    <HeaderBar :header-bar="headerBar" />
    <div class="gray-fixed gray-fixed-bg">
      <div class="wrapper">
        <scroll ref="scroll" :pullDownRefresh="pullDownRefreshObj" :pullUpLoad="pullUpLoadObj" :startY="parseInt(startY)"
          @pullingDown="onPullingDown" @pullingUp="onPullingUp">
          <FattenList :data="items"></FattenList>
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
import { mapState, mapMutations, mapActions } from 'vuex'
import { getStore } from '@/lib/js/storage'

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
      pullDownRefreshThreshold: 90,
      pullDownRefreshStop: 40,
      pullUpLoad: true,
      pullUpLoadThreshold: 0,
      pullUpLoadMoreTxt: '加载更多',
      pullUpLoadNoMoreTxt: '没有更多数据了',
      startY: 0,
      items: this.fatList
    }
  },
  watch: {
    startY () {
      this.rebuildScroll()
    },
    pullDownRefreshObj: {
      handler (val) {
        const scroll = this.$refs.scroll.scroll
        if (val) {
          scroll.openPullDown()
        } else {
          scroll.closePullDown()
        }
      },
      deep: true
    },
    pullUpLoadObj: {
      handler (val) {
        const scroll = this.$refs.scroll.scroll
        if (val) {
          scroll.openPullUp()
        } else {
          scroll.closePullUp()
        }
      },
      deep: true
    }
  },
  created () {
    // 初始化curPage参数
    this.INIT_FAT_CURRENTPAGE()
  },
  computed: {
    ...mapState({
      fatList: ({ products }) => products.fatList,
      fatListCurpage: ({ products }) => products.fatListCurpage,
      totalNum: ({ products }) => products.totalNum
    }),
    pullDownRefreshObj () {
      return this.pullDownRefresh
        ? {
          threshold: parseInt(this.pullDownRefreshThreshold),
          stop: parseInt(this.pullDownRefreshStop)
        }
        : false
    },
    pullUpLoadObj () {
      return this.pullUpLoad
        ? {
          threshold: parseInt(this.pullUpLoadThreshold),
          txt: {
            more: this.pullUpLoadMoreTxt,
            noMore: this.pullUpLoadNoMoreTxt
          }
        }
        : false
    }
  },
  methods: {
    ...mapMutations(['INIT_FAT_CURRENTPAGE', 'INIT_FAT_LIST']),
    ...mapActions(['getFatList', 'getMoreFatList']),
    onPullingDown () {
      // console.log('pulling down and load data')
      setTimeout(() => {
        if (this._isDestroyed) {
          return
        }
        this.INIT_FAT_CURRENTPAGE()
        this.INIT_FAT_LIST()
        this.getFatList([
          JSON.parse(getStore('userInfo')).id,
          getStore('token'),
          `${this.$route.params.days}`,
          `1`
        ])
        // if (Math.random() > 0.5) {
        //   // 如果有新数据
        //   // this.items.unshift(new Date())
        //   console.log('有新数据')
        // } else {
        //   // 如果没有新数据
        //   console.log('无新数据')
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
        // 总数大于当前列表的长度表示还未加载完所有分页
        if (this.totalNum > this.fatList.length) {
          this.getMoreFatList([
            JSON.parse(getStore('userInfo')).id,
            getStore('token'),
            `${this.$route.params.days}`,
            `${this.fatListCurpage}`
          ])
        } else {
          // 如果没有新数据
          this.$refs.scroll.forceUpdate(true)
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
    // if (this.fatList.length < this.totalNum) {
    this.getFatList([
      JSON.parse(getStore('userInfo')).id,
      getStore('token'),
      `${this.$route.params.days}`,
      `${this.fatListCurpage}`
    ])
    // }
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
