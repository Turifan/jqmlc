<!-- 月盈猫列表 -->
<template lang="html">
  <div class="" >
    <div class="profitItems" v-for="m in monthProfitList" :key="m.assetId">
      <div class="profitItemTitleBox">
        <div class="profitItemTitle">
          <div class="profitTitle">{{m.typeName}}</div>
          <div class="profitTxt" v-if="m.projectName">{{m.projectName}}</div>
        </div>
      </div>
      <div class="profitItemDesBox">
        <div class="profitDesItem">
          <div>投资金额</div>
          <div class="profitDesItemTxt">{{m.money}}</div>
        </div>
        <div class="profitDesItem">
          <div>预期年化</div>
          <div class="profitDesItemTxt">{{m.annualRate}}%</div>
        </div>
        <div class="profitDesItem">
          <div>当前收益</div>
          <div class="profitDesItemTxt">{{m.hasInterest}}</div>
        </div>
        <div class="profitDesItem">
          <div>项目分红</div>
          <div class="profitDesItemTxt">{{m.bonus}}</div>
        </div>
        <div class="profitDesItem">
          <div>投资时间</div>
          <div class="profitDesItemTxt">{{m.join_time}}</div>
        </div>
        <div :class="['profitDepositBtn', m.isWithdraw==='1'?'orangeBg':'grayBg']" @click.stop.prevent="$router.push('deposit/9/30')">提现</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfitList',
  props: ['monthProfitList'],
  components: {},
  data () {
    return {}
  }
}

</script>

<style lang="less" scoped>
  @import '../../style/mixin.less';

  .profitItems {
    margin: 16px 0;
  }

  .profitItemTitleBox {
    padding: 0 40px;
    background: #fff;
    border-radius: 10px;
  }

  .profitItemTitle {
    display: flex;
    flex: 1;
    height: 100px;
    padding: 0 48px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #efefef;

    .profitTitle {
      .fontSize(38px);
      .color(#333);
    }

    .profitTxt {
      .fontSize(32px);
      .color(@main-color);
    }
  }

  .profitItemDesBox {
    padding: 50px 92px;
    height: 434px;
    border-radius: 10px;
    background: #fff;

  }

  .profitDesItem {
    display: flex;
    flex: 1;
    margin-bottom: 32px;
    justify-content: space-between;
    align-items: center;
    .fontSize(36px);
  }

  .profitDesItemTxt {
    .color(#333);
  }

  .profitDepositBtn {
    .size(864px, 100px);
    margin: 39px auto 0;
    .fontSize(40px);
    .color(#fff);
    border-radius: 18px;
    text-align: center;
    line-height: 100px;
  }

</style>
