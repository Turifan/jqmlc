<!-- 发财猫结束项目列表 -->
<template lang="html">
  <div class="fatten-container">
    <div class="fatten-list" v-for="item in data" :key="item.id">
      <div class="fatten-list-title">
        <div class="">
          <span class="">{{item.typeName}}</span>
          <!-- <span class="gray-font exptips" v-if="item.activityDesc">{{item.activityDesc}}</span> -->
        </div>
        <div class="">
          <span class="fatten-list-tip">可投资金0.00元</span>
        </div>
      </div>
      <div class="fatten-detail">
        <div class="fatten-rate">
          <div class="rate">
            {{item.annualRate}} <span class="rate-simbol">%</span>
          </div>
          <div class="rate-tit">
            本期年化收益
          </div>
        </div>
        <div class="least-invest">
          <div class="invest-days">
            <span>投资期限</span>
            <span class="invest-info">{{item.numDays}}<span class="invest-info-unit">天</span></span>
          </div>
          <div class="least-amount">
            <span>起购金额</span>
            <span class="invest-info">{{item.leastAmount}}<span class="invest-info-unit">元</span></span>
          </div>
        </div>
        <div class="invest-btn">
          已结清
        </div>
      </div>
    </div>
    <div class="fatten-list" >
      <div class="fatten-list-title">
        <div class="">
          <span class="">车贷0074</span>
          <span class="gray-font exptips">0.4倍体验金</span>
        </div>
        <div class="">
          <span class="fatten-list-tip">银行卡标</span>
        </div>
      </div>
      <div class="fatten-detail">
        <div class="fatten-rate">
          <div class="rate">
            10.0 <span class="rate-simbol">%</span>
          </div>
          <div class="rate-tit">
            本期年化收益
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
          已结清
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'FatHistoryList',
  props: ['data']
}
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';

.fatten-container {
  overflow-y: hidden;
  position: relative;
}

.fatten-list {
  margin: 0 auto 20px;
  padding: 0 35px;
  .bg(#fff);
}

.fatten-list-title {
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  .fontSize(36px);
  line-height: 48px;
  overflow: hidden;
  height: 100px;
  border-bottom: 2px dashed #e1e1e1;
}

.exptips {
  display: inline-block;
  .size(auto, 42px);
  padding: 6px 12px;
  .border-radius(12px);
  .fontSize(32px);
  // .border(2px, solid, @orange);
  line-height: 48px;
  .text-center;
}

.fatten-list-tip {
  .fontSize(36px);
  .color(#999);
}

.fatten-detail {
  display: flex;
  flex: 1;
  height: 260px;
  align-items: center;
  justify-content: space-between;
  // border-bottom: 2px solid #ededed;
}

.fatten-rate {
  // width: 228px;
  text-align: center;
}

.rate {
  .fontSize(60px);
  // .color(@main-color);
  margin-bottom: 33px;

  .rate-simbol {
    .fontSize(34px);
  }
}

.rate-tit {
  .fontSize(38px);
}

.least-invest {
  .fontSize(34px);
  line-height: 48px;
}

.invest-days {
  .fontSize(34px);
  margin-bottom: 39px;
}

.invest-info {
  display: inline-block;
  margin-left: 23px;
  // margin-bottom: 30px;
  .fontSize(50px);
  .color(#666);

  .invest-info-unit {
    .fontSize(34px);
  }
}

.invest-btn {
  .size(160px, 160px);
  .border-radius(50%);
  .bg(#dedede);
  line-height: 160px;
  text-align: center;
  .color(#fff);
  .fontSize(42px);
}

.fatten-limit {
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  .color(#999);
  line-height: 100px;
}
</style>
