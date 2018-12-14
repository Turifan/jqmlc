<!-- 余额 灵活猫资产账户组件  -->
<template lang="html">
  <div class="">
    <router-link :to="{ name: assetAccount.path, params: {} }" tag="div" class="surMoney">
      <div class="surMoney-txt">
        {{assetAccount.txt}}
      </div>
      <div class="surMoneyBox">
        <div class="surMoney-num">
          <span>{{assetAccount.account}}</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'AssetAccount',
  props: ['assetAccount'],
  components: {},
  data () {
    return {}
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

  .surMoney-num {
    .fontSize(72px);
    .text-center;
  }

  .surMoney-txt {
    margin: 0 auto 30px;
    .text-center;
    .fontSize(32px);
  }

</style>
