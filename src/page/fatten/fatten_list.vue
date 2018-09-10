<!-- 发财猫列表 -->
<template lang="html">
  <div class="">
    <div class="fatten-container">
      <div class="fatten-list">
        <div class="fatten-list-title">
          <div class="pull-left">
            <span class="">车贷0074</span>
            <span class="orange">(新手标)</span>
          </div>
          <div class="pull-right">
            <span class="fatten-list-tip">可投资金</span>
            <span class="orange">200000.00元</span>
          </div>
        </div>
        <div class="fatten-detail">
          <div class="fatten-rate">
            <div class="rate">
              10.0 <span class="rate-simbol">%</span>
            </div>
            <div class="rate-tit">
              预期年化收益
            </div>
          </div>
          <div class="least-invest">
            <div class="invest-days">
              <span>投资期限</span>
              <span class="invest-info">30<span class="invest-info-unit">天</span></span>
            </div>
            <div class="least-amount">
              <span>起购金额</span>
              <span class="invest-info">100<span class="invest-info-unit">元</span></span>
            </div>
          </div>
          <div class="invest-btn">
            开抢
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: 'FattenList'
}
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';
@import '../../style/common.less';

.fatten-container {
    overflow-y: auto;
}

.fatten-list {
    margin: 0 auto 20px;
    padding: 0 35px;
    .bg(#fff);
}

.fatten-list-title {
    .fontSize(36px);
    line-height: 100px;
    overflow: hidden;
    border-bottom: 1px dashed #e1e1e1;
    /*no*/
}

.fatten-list-tip {
    .color(#999);
}

.fatten-detail {
    display: flex;
    flex: 1;
    // padding: 0 35px;
    height: 260px;
    align-items: center;
    justify-content: space-between;
}

.fatten-rate {
    width: 228px;
    text-align: center;
}

.rate {
    .fontSize(60px);
    .color(@main-color);
    margin-bottom: 29px;
    .rate-simbol {
        .fontSize(34px);
    }
}

.rate-tit {
    .fontSize(38px);
}

.least-invest {
    line-height: 48px;
}

.invest-days {
    margin-bottom: 39px;
}

.invest-info {
    display: inline-block;
    margin-left: 23px;
    // margin-bottom: 30px;
    .fontSize(50px);
    .color(@main-color);
    .invest-info-unit {
        .fontSize(34px);
    }
}

.invest-btn {
    .size(160px,160px);
    .border-radius(50%);
    .bg(@orange);
    line-height: 160px;
    text-align: center;
    .color(#fff);
    .fontSize(42px);
}


</style>
