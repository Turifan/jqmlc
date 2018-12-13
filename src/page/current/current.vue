<!-- 灵活猫 -->
<template lang="html">
  <div class="">
    <HeaderBar :header-bar="headerBar" />
    <div class="gray-fixed">
      <router-link :to="{ name: 'assets', params: {} }" tag="div" class="surMoney">
        <div class="surMoney-txt">
          灵活猫资产
        </div>
        <div class="surMoneyBox">
          <div class="surMoney-num">
            <span>6000001.00</span>
          </div>
        </div>
      </router-link>
      <div class="currentTips">
        <div class="tips">
          <img src="../../assets/images/gantan.png" alt="">温馨提示：
        </div>
        <div class="tipsContent">
          <div>灵活猫资金不能直接提现，</div>
          <div>需购买发财猫，到期方能提现。</div>
        </div>
      </div>
      <div class="goToInvest" @click.stop.prevent="$router.push('fatten')">
        去投标
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
  data () {
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
    padding: 93px 0 153px;
    .bg(@main-color);
    .color(#fff);
    line-height: 1;
  }

  .surMoneyBox {
    text-align: center;
  }

  .simbol {
    display: inline-block;
    margin-right: 30px;
    vertical-align: top;
    .fontSize(60px);
  }

  .surMoney-num {
    .fontSize(72px);
    .text-center;
  }

  .surMoney-txt {
    margin: 0 auto 30px;
    .text-center;
    .fontSize(32px);
  }

  .currentTips {
    padding: 50px 35px 0;
    .fontSize(34px);
    line-height: 60px;
  }

  .tips {
    img {
      width: 40px;
      margin-right: 10px;
      vertical-align: middle;
    }
  }

  .tipsContent {
    padding-left: 50px;

  }
.goToInvest{
  .size(800px,130px);
  margin: 487px auto 0;
  .fontSize(42px);
  .bg(#ff7032);
  border-radius: 18px;
  .color(#fff);
  line-height: 130px;
  .text-center;
}
</style>
