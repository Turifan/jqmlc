<!-- 猫小票历史票码 -->
<template lang="html">
  <div class="">
    <HeaderBar :headerBar="headerBar"></HeaderBar>
    <div class="gray-fixed">
      <!-- 次数列表 -->
      <div class="winTicketsContainer">
        <div class="winTicketsTitle">
          <div class="icon"></div>
          <div class="winTicketsTxt">出现次数</div>
        </div>
        <div class="winTicketsNumber">
          <div class="winTicketsNumBox">
            <div class="winTicketsNum">0次</div>
            <div class="winTicketsName gray-font">月盈猫</div>
          </div>
          <div class="winTicketsNumBox">
            <div class="winTicketsNum">1次</div>
            <div class="winTicketsName gray-font">月盈猫</div>
          </div>
          <div class="winTicketsNumBox">
            <div class="winTicketsNum">2次</div>
            <div class="winTicketsName gray-font">月盈猫</div>
          </div>
          <div class="winTicketsNumBox">
            <div class="winTicketsNum">3次</div>
            <div class="winTicketsName gray-font">月盈猫</div>
          </div>
          <div class="winTicketsNumBox">
            <div class="winTicketsNum">4次</div>
            <div class="winTicketsName gray-font">月盈猫</div>
          </div>
          <div class="winTicketsNumBox">
            <div class="winTicketsNum">5次</div>
            <div class="winTicketsName gray-font">月盈猫</div>
          </div>
          <div class="winTicketsNumBox">
            <div class="winTicketsNum">6次</div>
            <div class="winTicketsName gray-font">月盈猫</div>
          </div>
          <div class="winTicketsNumBox">
            <div class="winTicketsNum">7次</div>
            <div class="winTicketsName gray-font">月盈猫</div>
          </div>
        </div>
      </div>
      <div class="wrapper">
        <scroll
          ref="scroll"
          :data="items"
          :pullDownRefresh="pullDownRefresh"
          :pullUpLoad="pullUpLoad"
          :startY="parseInt(startY)"
          @pullingDown="onPullingDown"
          @pullingUp="onPullingUp"
        >
           <!-- 列表 -->
          <div class="winTicketsList">
            <div class="winTicketsItem">
              <div class="winTicketsTitle">
                <div class="icon"></div>
                <div class="winTicketsTxt">第三期</div>
              </div>
              <div class="winTicketsImgs">
                <div class="winTicketsImgBox">
                  <div class="winTicketsImg">
                    <img src="../../assets/images/catchoice8.png" alt="" class="img-responsive">
                  </div>
                  <div class="winTicketsImgName">
                    金钱猫
                  </div>
                </div>
                <div class="winTicketsImgBox">
                  <div class="winTicketsImg">
                    <img src="../../assets/images/catchoice8.png" alt="" class="img-responsive">
                  </div>
                  <div class="winTicketsImgName">
                    金钱猫
                  </div>
                </div>
                <div class="winTicketsImgBox">
                  <div class="winTicketsImg">
                    <img src="../../assets/images/catchoice8.png" alt="" class="img-responsive">
                  </div>
                  <div class="winTicketsImgName">
                    金钱猫
                  </div>
                </div>
                <div class="winTicketsImgBox">
                  <div class="winTicketsImg">
                    <img src="../../assets/images/catchoice8.png" alt="" class="img-responsive">
                  </div>
                  <div class="winTicketsImgName">
                    金钱猫
                  </div>
                </div>
                <div class="winTicketsImgBox">
                  <div class="winTicketsImg">
                    <img src="../../assets/images/catchoice8.png" alt="" class="img-responsive">
                  </div>
                  <div class="winTicketsImgName">
                    金钱猫
                  </div>
                </div>
              </div>
            </div>
            <div class="winTicketsItem">
              <div class="winTicketsTitle">
                <div class="icon"></div>
                <div class="winTicketsTxt">第三期</div>
              </div>
              <div class="winTicketsImgs">
                <div class="winTicketsImgBox">
                  <div class="winTicketsImg">
                    <img src="../../assets/images/catchoice8.png" alt="" class="img-responsive">
                  </div>
                  <div class="winTicketsImgName">
                    金钱猫
                  </div>
                </div>
                <div class="winTicketsImgBox">
                  <div class="winTicketsImg">
                    <img src="../../assets/images/catchoice8.png" alt="" class="img-responsive">
                  </div>
                  <div class="winTicketsImgName">
                    金钱猫
                  </div>
                </div>
                <div class="winTicketsImgBox">
                  <div class="winTicketsImg">
                    <img src="../../assets/images/catchoice8.png" alt="" class="img-responsive">
                  </div>
                  <div class="winTicketsImgName">
                    金钱猫
                  </div>
                </div>
                <div class="winTicketsImgBox">
                  <div class="winTicketsImg">
                    <img src="../../assets/images/catchoice8.png" alt="" class="img-responsive">
                  </div>
                  <div class="winTicketsImgName">
                    金钱猫
                  </div>
                </div>
                <div class="winTicketsImgBox">
                  <div class="winTicketsImg">
                    <img src="../../assets/images/catchoice8.png" alt="" class="img-responsive">
                  </div>
                  <div class="winTicketsImgName">
                    金钱猫
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
// import HistoryTicketsList from './HistoryTicketsList.vue'
import Scroll from '@/components/scroll/scroll.vue'

export default {
  name: 'WinTickets',
  components: {
    HeaderBar,
    Scroll
    // HistoryTicketsList
  },
  data () {
    return {
      headerBar: {
        title: '中奖历史',
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

.winTicketsContainer {
  height: 435px;
  padding: 30px 34px 20px;
  border-bottom: 16px solid #efefef;
}

.winTicketsTitle {
  display: flex;
  flex: 1;
  margin: 0 0 50px;
  align-items: center;
}
.icon {
  .size(18px, 18px);
  margin-right: 10px;
  transform: rotate(45deg);
  .bg(@main-color);
}
.winTicketsTxt {
  .fontSize(36px);
  .color(#333);
}
.winTicketsNumber {
  display: flex;
  flex-wrap: wrap;
}
.winTicketsNumBox {
  width: 25%;
  margin-bottom: 30px;
  .fontSize(32px);
  .text-center;
}
.winTicketsNum {
  .size(180px, 80px);
  margin: 0 auto 26px;
  border: 2px solid #dedede;
  border-radius: 8px;

  .color(#333);
  line-height: 80px;
}
.wrapper {
  overflow-y: hidden;
  position: relative;
  height: calc(100% - 481px);
}
.winTicketsList {
  overflow: hidden;
  padding: 50px 34px 0;
  height: 100%;
  // .bg(#fff);
}
.winTicketsItem {
  margin-bottom: 50px;
}
.winTicketsImgs {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-around;
  .text-center;
  .fontSize(32px);
}
.winTicketsImg {
  .size(150px, 150px);
  margin: 0 auto 20px;
}
</style>
