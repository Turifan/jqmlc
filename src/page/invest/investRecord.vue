<template lang="html">
  <div class="investRecord">
    <div class="investRecord-list">
      <div class="investRecord-list-item">
        <div class="invest-username">
          <div class="">
            用户
          </div>
          <div class="invest-mobile">
            159*****911
          </div>
        </div>
        <div class="invest-info">
          <div class="invest-money">
            ¥500000.00
          </div>
          <div class="invest-days">
            2018-03-14 07:23:56
          </div>
        </div>
      </div>
      <div class="investRecord-list-item">
        <div class="invest-username">
          <div class="">
            用户
          </div>
          <div class="invest-mobile">
            159*****911
          </div>
        </div>
        <div class="invest-info">
          <div class="invest-money">
            ¥500000.00
          </div>
          <div class="invest-days">
            2018-03-14 07:23:56
          </div>
        </div>
      </div>
      <div class="investRecord-list-item">
        <div class="invest-username">
          <div class="">
            用户
          </div>
          <div class="invest-mobile">
            159*****911
          </div>
        </div>
        <div class="invest-info">
          <div class="invest-money">
            ¥500000.00
          </div>
          <div class="invest-days">
            2018-03-14 07:23:56
          </div>
        </div>
      </div>
      <div class="investRecord-list-item">
        <div class="invest-username">
          <div class="">
            用户
          </div>
          <div class="invest-mobile">
            159*****911
          </div>
        </div>
        <div class="invest-info">
          <div class="invest-money">
            ¥500000.00
          </div>
          <div class="invest-days">
            2018-03-14 07:23:56
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InvestRecord'
}
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';

.investRecord {
    .bg(#fff);
    height: 450px;
    overflow-y: auto;
}

.investRecord-list {
    padding: 0 35px;
}

.investRecord-list-item {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    .height(197px);
    border-bottom: 1px solid #efefef;
    .fontSize(40px);
}

.invest-username {
    .color(#333);
}

.invest-info{
  .text-right;
}

.invest-mobile {
    margin-top: 30px;
}

.invest-money {
    margin-bottom: 32px;
    .color(@main-color);
}

.invest-days {
    .fontSize(36px);
    .color(#999);
}
</style>
