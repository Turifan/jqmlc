<!-- 机器猫产品详情 -->
<template lang="html">
  <div class="">
    <HeaderBar :header-bar="headerBar" />
    <div class="gray-fixed">
      <router-link :to="{ name: 'asset', params: {} }" tag="div" class="doraemon-box">
        <div class="rate-txt">
          预期年化率(%)
        </div>
        <div class="rate">
          12.8
        </div>
      </router-link>

      <div class="assetsBox">
        <div class="assets-title">
          账户资产（元）
        </div>
        <div class="assets-num">
          25,342.22
        </div>
        <div class="assets-detail">
          <div class="total-income">
            <div class="incom-txt">
              累计收益(元）
            </div>
            <div class="incom-num">
              100,000
            </div>
          </div>
          <div class="revenue">
            <div class="incom-txt">
              待收收益(元)
            </div>
            <div class="incom-num">
              0.88
            </div>
          </div>
        </div>
      </div>

      <div class="progress">
        <div class="">

        </div>
      </div>

      <div class="surMoneyBox">
        <div class="surMoney">
          <span>剩余可投份额</span><span class="surMoney-num">600001.00元</span>
        </div>
        <div class="invest-times">
          <span>投资次数</span><span class="surMoney-num">36次</span>
        </div>
      </div>

      <router-link tag="div" :to="{ name: '', params: {} }" class="scan-bond bond">查看债权</router-link>
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
  data () {
    return {
      headerBar: {
        title: '季度喵',
        imgUrl: '',
        goBackUrl: require('../../assets/images/goBack.png'),
        path: '',
        params: {},
        goBack: true,
        showIcon: false
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../style/mixin';

.doraemon-box {
    .bg(@main-color);
    .color(#fff);
    line-height: 1;
    .text-center;

}

.rate-txt {
    // padding-top: 29px;
    padding: 29px 0 92px;
    .fontSize(42px);
}

.rate {
    padding-bottom: 82px;
    .fontSize(112px);
}

.assetsBox{
  margin: 59px auto 103px;
  .text-center;
  .assets-title{
    margin-bottom: 45px;
    .fontSize(42px);
  }
  .assets-num{
    margin-bottom: 64px;
    .fontSize(82px);
    .color(#333);
  }
}

.assets-detail{
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
}

.total-income{
  padding-right: 110px;
  border-right: 2px solid #999;
}

.revenue{
  padding-left: 110px;
}

.incom-txt{
  margin-bottom: 25px;
  .fontSize(32px);
}

.incom-num{
  .fontSize(62px);
  .color(#333);
}

.surMoneyBox{
  margin: 67px auto 74px;
  .text-center;
}

.surMoney{
  margin-bottom: 50px;
  .fontSize(42px);
}

.surMoney-num{
  .color(@orange);
}

.invest-times{
  .fontSize(32px);
}

.scan-bond{
  .fontSize(32px);
  .color(@dark-color);
}

.bond{
  margin-top: 447px;
  .text-center;
}
</style>
