<!-- 余额记录  -->
<template>
  <div>
    <HeaderBar :header-bar="headerBar"></HeaderBar>
    <div class="gray-fixed">
      <scroll ref="scroll"
              :pullDownRefresh="pullDownRefresh"
              :pullUpLoad="pullUpLoad"
              :startY="parseInt(startY)"
              @pullingDown="onPullingDown"
              @pullingUp="onPullingUp">
        <div class="balanceRecords"
             v-for="(item,index) in balanceRecords"
             :key="index">
          <div class="balanceRecordItem">
            <div class="balanceRecordInfo">
              <div class="balanceRecordTit">{{item.remark}}</div>
              <div class="balanceNum">余额 : {{item.curren_balance}}</div>
            </div>
            <div class="balanceRecordData text-right">
              <div class="balanceRecordSum">{{item.money}}</div>
              <div class="balanceNum">{{item.createTime}}</div>
            </div>
          </div>
        </div>
      </scroll>

    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import HeaderBar from '@/components/common/headerBar.vue'
import { mapActions, mapMutations, mapState } from 'vuex'
import Scroll from '@/components/scroll/scroll.vue'

export default {
  name: 'Balance',
  components: {
    HeaderBar,
    Scroll
  },
  data () {
    return {
      headerBar: {
        title: '余额记录',
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
  computed: {
    ...mapState({
      balanceRecords: ({ products }) => products.balanceRecords
    })
  },
  watch: {
    startY () {
      this.rebuildScroll()
    }
  },
  methods: {
    ...mapMutations(['INIT_BALANCERECORDS_PAGE']),
    ...mapActions(['getBalanceRecords']),
    onPullingDown () {
      // 模拟更新数据
      console.log('pulling down and load data')
      setTimeout(() => {
        if (this._isDestroyed) {
          return
        }
        this.INIT_BALANCERECORDS_PAGE()
        this.getBalanceRecords()
        this.$refs.scroll.forceUpdate()
      }, 2000)
    },
    onPullingUp () {
      // 更新数据
      console.log('pulling up and load data')
      setTimeout(() => {
        if (this._isDestroyed) {
          return
        }
        this.getBalanceRecords()
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
    this.getBalanceRecords()
  }
}
</script>
<style lang="less" scoped>
@import '../../style/mixin.less';

.balanceRecords {
  padding: 0 35px;
}

.balanceRecordItem {
  height: 200px;
  display: flex;
  flex: 1;
  padding: 0 10px 0 20px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #efefef;
}

.balanceRecordTit {
  margin-bottom: 20px;
  .fontSize(38px);
  .color(#333);
}

.balanceRecordSum {
  margin-bottom: 26px;
  .fontSize(42px);
  .color(#333);
}

.balanceNum {
  .fontSize(34px);
  .color(#999);
}
</style>
