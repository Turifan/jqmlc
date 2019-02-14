<!-- 发财猫列表 -->
<template lang="html">
  <div class="fatten-container">
    <div class="fatten-list" v-for="item in data" :key="item.id">
      <div class="fatten-list-title">
        <div class="">
          <span class="">{{item.typeName}}</span>
          <span class="orange exptips" v-if="item.activityDesc">{{item.activityDesc}}</span>
        </div>
        <div class="">
          <span class="fatten-list-tip">{{item.payType===2?'直投标':''}}</span>
        </div>
      </div>
      <router-link tag="div" :to="{ name: 'invest', params: {fatId:item.numDays} }" class="fatten-detail">
        <div class="fatten-rate">
          <div class="rate">
            <span>{{item.rate}}</span><span class="" v-if="item.activityAddRate">+{{item.activityAddRate}}</span><span class="rate-simbol">%</span>
          </div>
          <div class="rate-tit">
            预期年化收益
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
        <router-link tag="div" :to="{ name: 'invest', params: {fatId:item.numDays} }" :class="['invest-btn',item.state==='0'?'invest-robing':'invest-repayment']">
          {{item.state==='0'?'开抢':'还款中'}}
        </router-link>
      </router-link>
      <div class="fatten-limit">
        <div class="">
          每个ID限额{{item.maxAmout}}元
        </div>
        <div class="">
          可投资金<span class="orange">{{item.surMoney}}元</span>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'FattenList',
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
  .fontSize(36px);
  line-height: 100px;
  overflow: hidden;
  // border-bottom: 1px dashed #e1e1e1;
}

.exptips {
  display: inline-block;
  .size(auto, 42px);
  padding: 6px 12px;
  .border-radius(12px);
  .fontSize(32px);
  .border(2px, solid, @orange);
  line-height: 42px;
  .text-center;
}

.fatten-list-tip {
  .fontSize(34px);
  .color(#999);
}

.fatten-detail {
  display: flex;
  flex: 1;
  height: 260px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #ededed;
}

.fatten-rate {
  // width: 228px;
  text-align: center;
}

.rate {
  .fontSize(50px);
  .color(@main-color);
  margin-bottom: 33px;

  .rate-simbol {
    .fontSize(32px);
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
  .fontSize(42px);
  .color(@main-color);

  .invest-info-unit {
    .fontSize(32px);
  }
}

.invest-btn {
  .size(160px, 160px);
  .border-radius(50%);
  line-height: 160px;
  text-align: center;
  .color(#fff);
  .fontSize(42px);
}

.invest-robing {
  .bg(@orange);
}
.invest-repayment {
  .bg(#ffc999);
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
