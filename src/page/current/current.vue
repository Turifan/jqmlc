<!-- 灵活猫 -->
<template lang="html">
  <div class="">
    <HeaderBar :header-bar="headerBar" />
    <div class="gray-fixed">
      <AssetAccount :assetAccount="assetAccount"></AssetAccount>
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
import AssetAccount from '@/components/assetAccount/assetAccount.vue'

export default {
  name: 'Current',
  components: {
    HeaderBar,
    AssetAccount
  },
  data () {
    return {
      headerBar: {
        title: '灵活猫',
        imgUrl: '',
        goBackUrl: require('../../assets/images/goBack.png'),
        path: '',
        params: {},
        goBack: true,
        showIcon: false
      },
      assetAccount: {
        txt: '灵活猫资产',
        account: '600004.00',
        path: 'asset'
      }
    }
  }
}

</script>

<style lang="less" scoped>
  @import '../../style/mixin';

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

  .goToInvest {
    .size(800px, 130px);
    margin: 487px auto 0;
    .fontSize(42px);
    .bg(#ff7032);
    border-radius: 18px;
    .color(#fff);
    line-height: 130px;
    .text-center;
  }

</style>
