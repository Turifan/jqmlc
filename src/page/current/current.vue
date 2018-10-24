<!-- 灵活猫 -->
<template lang="html">
  <div class="">
    <HeaderBar :header-bar="headerBar" />
    <div class="gray-fixed">
      <router-link :to="{ name: 'assets', params: {} }" tag="div" class="surMoney">
        <div class="surMoneyBox">
          <div class="surMoney-num">
            <span class="simbol">¥</span><span>6000001.00</span>
          </div>
        </div>
        <div class="surMoney-txt">
          可售份额
        </div>
      </router-link>
      <div class="userAccount">
        <div class="">
          <div class="account-txt">
            当前收益（元）
          </div>
          <div class="account-num">
            34,857.00
          </div>
        </div>
        <div class="">
          <div class="account-txt">
            昨日收益（元）
          </div>
          <div class="account-num">
            57.00
          </div>
        </div>
        <div class="">
          <div class="account-txt">
            账户资产（元）
          </div>
          <div class="account-num">
            500,000.00
          </div>
        </div>
      </div>
      <div class="userAssets">
        <div class="frozenAssets">
          <div class="userAssets-txt">
            冻结资产(元）
          </div>
          <div class="userAssets-num">
            100,000
          </div>
        </div>
        <div class="withdrawAssets">
          <div class="userAssets-txt">
            可提资产(元)
          </div>
          <div class="userAssets-num">
            400,000
          </div>
        </div>
      </div>
      <div class="bid-detail">
        <div class="bid-rate-txt">
          年化收益率(%)
        </div>
        <div class="bid-rate">
          12.3~14.7
        </div>
        <div class="bid-info">
          每周递增0.1%，40周封顶
        </div>

        <router-link tag="div" :to="{ name: '', params: {} }" class="scan-bond">查看债权</router-link>
      </div>
    </div>
  </div>

</template>

<script>
import HeaderBar from '@/components/common/headerBar.vue'

export default {
  name: 'Current',
  components: {
    HeaderBar
  },
  data() {
    return {
      headerBar: {
        title: '灵活猫',
        imgUrl: require('../../assets/images/doubt.png'),
        goBackUrl: require('../../assets/images/goBack.png'),
        path: 'currentInfo',
        params: {},
        goBack: true,
        showIcon: true
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../style/mixin';

.surMoney {
    .bg(@main-color);
    .color(#fff);
    line-height: 1;
}

.surMoneyBox {
    position: relative;
    text-align: center;
}

.simbol {
    display: inline-block;
    margin-right: 30px;
    vertical-align: top;
    .fontSize(60px);
}

.surMoney-num {
    padding-top: 45px;
    padding-bottom: 78px;
    .fontSize(90px);
    .text-center;
}

.surMoney-txt {
    padding-bottom: 53px;
    .text-center;
    .fontSize(42px);
}

.userAccount {
    .size(100%,180px);
    display: flex;
    flex: 1;
    justify-content: space-around;
    align-items: center;
    line-height: 1;
    border-bottom: 1px solid #999;
    /*no*/
}

.account-txt {
    margin-bottom: 24px;
    .fontSize(32px);
}

.account-num {
    .fontSize(40px);
    .color(#333);
}

.userAssets {
    display: flex;
    flex: 1;
    justify-content: space-around;
    align-items: center;
    text-align: center;
}

.userAssets-txt {
    margin: 37px 0 34px;
    .fontSize(32px);
}

.userAssets-num {
    .fontSize(58px);
    .color(#333);
    margin-bottom: 30px;
}

.frozenAssets {
    .width(50%);
    border-right: 1px solid #999;
    /*no*/
}

.withdrawAssets {
    .width(50%);
}

.userAssets {
    border-bottom: 1px solid #999;
    /*no*/
}

.bid-detail {
    .text-center;
    line-height: 1;
}

.bid-rate-txt {
    margin: 110px auto 95px;
    .fontSize(36px);
    .text-center;
}

.bid-rate {
    margin-bottom: 114px;
    .color(@dark-color);
    .fontSize(100px);
    .text-center;
}

.bid-info {
    margin-bottom: 470px;
    .fontSize(40px);
}

.scan-bond {
    .fontSize(32px);
    .color(@dark-color);
}
</style>
