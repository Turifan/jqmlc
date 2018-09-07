<!-- 发财猫列表 -->
<template lang="html">
  <div class="">
    <div class="fatten-list">
      <div class="fatten-list-title">
        <div class="pull-left">
          <span class="">车贷0074</span>
          <span class="orange">(新手标)</span>
        </div>
        <div class="pull-right">
          <span>可投资金</span>
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
            <span>30天</span>
          </div>
          <div class="least-amount">
            <span>起购金额</span>
            <span>100元</span>
          </div>
        </div>
        <div class="invest-btn">
          开抢
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

.fatten-list{
  margin: 20px auto;
  padding: 0 35px;
  .bg(#fff);
}

.fatten-list-title{
  .fontSize(36px);
  line-height: 100px;
  overflow: hidden;
  border-bottom: 1px dashed #e1e1e1;
}

.fatten-detail{
  display: flex;
  flex: 1;
  padding: 0 35px;
  height: 260px;
  align-items: center;
  justify-content: space-between;
}

.fatten-rate{
  width: 228px;
  text-align: center;
}

.rate{
  .fontSize(46px);
  .color(@main-color);
  .rate-simbol{
    .fontSize(28px);
  }
}

.rate-tit{
  .fontSize(38px);
}

.invest-btn{
  .size(160px,160px);
  .border-radius(50%);
  .bg(@orange);
  line-height: 160px;
  text-align: center;
  .color(#fff);
  .fontSize(42px);
}
</style>
