<!-- 月盈猫列表 -->
<template lang="html">
  <div class="">
    <div class="profitItems">
      <div class="profitItemTitleBox">
        <div class="profitItemTitle">
          <div class="profitTitle">月盈猫002</div>
          <div class="profitTxt">爱乐恩项目</div>
        </div>
      </div>
      <div class="profitItemDesBox">
        <div class="profitDesItem">
          <div>投资金额</div>
          <div class="profitDesItemTxt">25000.00</div>
        </div>
        <div class="profitDesItem">
          <div>预期年化</div>
          <div class="profitDesItemTxt">7%</div>
        </div>
        <div class="profitDesItem">
          <div>当前收益</div>
          <div class="profitDesItemTxt">123.23</div>
        </div>
        <div class="profitDesItem">
          <div>项目分红</div>
          <div class="profitDesItemTxt">1200.00</div>
        </div>
        <div class="profitDesItem">
          <div>投资时间</div>
          <div class="profitDesItemTxt">2018-10-10</div>
        </div>
        <div :class="['profitDepositBtn', false?'orangeBg':'grayBg']">提现</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfitList',
  props: ['profitListItem'],
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
