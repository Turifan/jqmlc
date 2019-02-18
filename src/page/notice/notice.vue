<!-- 最新公告  -->
<template>
  <div>
    <HeaderBar :header-bar="headerBar"></HeaderBar>
    <div class="gray-fixed gray-fixed-bg">
      <div class="wrapper">
        <scroll ref="scroll"
                :pullDownRefresh="pullDownRefresh"
                :pullUpLoad="pullUpLoad"
                :startY="parseInt(startY)"
                @pullingDown="onPullingDown"
                @pullingUp="onPullingUp">
          <div class="noticeList"
               v-for="(item,index) in noticeList"
               :key="`${item.id}${index}`"
               @click.stop.prevent="">
            <div class="noticeItem">
              <div>
                <div class="noticeTit">{{item.title}}</div>
                <div class="noticeDate">
                  <div class="noticeDateImg">
                    <img src="../../assets/images/timeClock.svg"
                         alt=""
                         class="img-responsive">
                  </div>
                  <div>
                    {{item.publishTime}}
                  </div>
                </div>
              </div>
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
import { mapState, mapActions, mapMutations } from 'vuex'
import Scroll from '@/components/scroll/scroll.vue'

export default {
  name: 'Notice',
  components: {
    HeaderBar,
    Scroll
  },
  data () {
    return {
      headerBar: {
        title: '最新公告',
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
      startY: 0
    }
  },
  watch: {
    startY () {
      this.rebuildScroll()
    }
  },
  created () {
    this.INIT_NOTICE_PAGE()
  },
  computed: {
    ...mapState({
      noticeCurpage: ({ globalVal }) => globalVal.noticeCurpage,
      noticeList: ({ globalVal }) => globalVal.noticeList
    })
  },
  methods: {
    ...mapMutations(['INIT_NOTICE_PAGE']),
    ...mapActions(['getNoticeList']),
    onPullingDown () {
      // 模拟更新数据
      console.log('pulling down and load data')
      this.INIT_NOTICE_PAGE()
      setTimeout(() => {
        if (this._isDestroyed) {
          return
        }
        this.getNoticeList()
        this.$refs.scroll.forceUpdate(true)
      }, 2000)
    },
    onPullingUp () {
      // 更新数据
      console.log('pulling up and load data')
      setTimeout(() => {
        if (this._isDestroyed) {
          return
        }
        this.getNoticeList()
        // 如果没有新数据
        this.$refs.scroll.forceUpdate()
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
    if (this.noticeCurpage === 1) {
      this.getNoticeList()
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
.noticeList {
  padding: 0 35px;
  margin-bottom: 15px;
  background: #fff;
}

.noticeItem {
  height: 200px;
  display: flex;
  flex: 1;
  align-items: center;
  .fontSize(38px);
}

.noticeTit {
  margin-bottom: 36px;
  .fontSize(40px);
}

.noticeDate {
  display: flex;
  flex: 1;
  align-items: center;
}

.noticeDateImg {
  .size(40px, 40px);
  margin-right: 20px;
}
</style>
