<!-- 月盈猫 -->
<template lang="html">
  <div>
    <HeaderBar :header-bar="headerBar"></HeaderBar>
    <div class="gray-body">
      <div class="profitBox">
        <div class="profitImg">
          <img src="../../assets/images/profit-record.png" alt="">
        </div>
        <div class="profitTxt">资金记录</div>
        <div class="profitDes"></div>
      </div>
      <div class="profitAsset">
        <span class="profitAssetTitle gray-font">账户资产(元)</span>
        <span class="profitAssetNum">3456894.00</span>
      </div>
      <div class="profitIncome">
        <div class="profitTotalIncome">
          <span class="profitTotalIncomeTitle gray-font">累计收益(元)</span>
          <span class="profitTotalIncomeNum">3456.00</span>
        </div>
        <div class="profitYesterdayIncome">
          <span class="profitTotalIncomeTitle gray-font">昨日收益(元)</span>
          <span class="profitTotalIncomeNum">3456.00</span>
        </div>
      </div>
      <div class="profitBox">
        <div class="profitImg">
          <img src="../../assets/images/profit-deposit.png" alt="">
        </div>
        <div class="profitTxt">提现数据</div>
        <div class="profitDes">在持数据2条</div>
      </div>

      <!-- 列表 -->
      <div class="profitList">
        <profitList :monthProfitList="monthProfitList"></profitList>
      </div>
    </div>

  </div>
</template>

<script>
import HeaderBar from '@/components/common/headerBar.vue'
import ProfitList from './profitList.vue'
import {
  mapActions,
  mapState
} from 'vuex'

export default {
  name: 'Profit',
  components: {
    HeaderBar,
    ProfitList
  },
  data () {
    return {
      headerBar: {
        title: '月盈猫',
        imgUrl: require('../../assets/images/doubt.png'),
        goBackUrl: require('../../assets/images/goBack.png'),
        path: 'description',
        params: {
          title: 'monthProfit'
        },
        goBack: true,
        showIcon: true
      }
    }
  },
  computed: {
    ...mapState({
      monthProfitList: ({
        products
      }) => products.monthProfitList
    })
  },
  methods: {
    ...mapActions(['getMonthProfitList'])
  },
  mounted () {
    if (!this.monthProfitList) {
      this.getMonthProfitList()
    }
  }
}

</script>

<style lang="less" scoped>
  @import '../../style/mixin.less';

  .profitBox {
    display: flex;
    flex: 1;
    height: 130px;
    padding: 0 34px;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    .fontSize(38px);
  }

  .profitImg {
    width: 50px;
    margin-right: 22px;

    img {
      width: 100%;
      height: auto;
    }
  }

  .profitTxt {
    margin-right: auto;
    .color(#333);
  }

  .profitAsset {
    height: 150px;
    padding-left: 108px;
    line-height: 150px;
    background: #fff;
    border-top: 2px solid #efefef;
    /*no*/
    border-bottom: 2px solid #efefef;
    /*no*/
  }

  .profitAssetTitle {
    display: inline-block;
    margin-right: 30px;
    .fontSize(34px);
  }

  .profitTotalIncomeTitle {
    display: inline-block;
    margin-right: 26px;
    .fontSize(34px);
  }

  .profitAssetNum {
    .fontSize(42px);
    .color(#333);
  }

  .profitTotalIncomeNum {
    .fontSize(34px);
    .color(#333);
  }

  .profitIncome {
    display: flex;
    flex: 1;
    height: 130px;
    margin-bottom: 16px;
    padding: 0 34px;
    justify-content: space-between;
    background: #fff;
    align-items: center;
    line-height: 130px;
  }

  .profitTotalIncome {
    box-sizing: border-box;
    width: 50%;
    padding-left: 72px;
    border-right: 2px solid #efefef;
    /*no*/
  }

  .profitYesterdayIncome {
    box-sizing: border-box;
    width: 50%;
    padding-left: 72px;
  }

  .profitList {
    margin: 0 15px;
  }

</style>
