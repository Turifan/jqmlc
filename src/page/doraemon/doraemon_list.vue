<!-- 机器猫产品列表 -->
<template lang="html">
  <div class="doraemon-list" >
    <div class="doraemon-list-item" v-for="d in doraemonList" :key="d.id">
      <div class="doraemon-item-tit">
        <div class="doraemon-tit-txt">
          <span class="doraemon-productName">
            {{d.borrowTitle}}
            <span class="activityDesc" v-if="d.activityDesc">{{d.activityDesc}}</span>
            </span>
          <span class="lock-time">锁定时间{{d.deadline}}个月</span>
        </div>
      </div>
      <router-link :to="{ name: 'doraemonDetail', params: {days:d.deadline} }" tag="div" class="doraemon-pro-detail">
        <div class="doraemon-tit-detail">
          <div class="doraemon-rate">
            <div class="rate-tit">
              预期年化率
            </div>
            <div class="rate-num">
              <span class="rate">
                {{d.rate}}<span v-if="d.activityAddRate>0" class="activityDesc">+{{d.activityAddRate}}</span>
              </span><span class="simbol">%</span>
            </div>
          </div>
          <div class="doraemon-surMoney">
            <div class="surMoney-tit">
              剩余份额
            </div>
            <div class="surMoney-num">
              剩{{d.surAmount|currency}}/{{d.borrowAmount|currency}}
            </div>
          </div>
          <div class="doraemon-btn">
            购买
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { currency } from '@/lib/js/filters'

export default {
  name: 'DoraemonList',
  props: ['doraemonList'],
  filters: {
    currency: currency
  }
}
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';

.doraemon-list-item {
  .height(360px);
  margin: 16px 15px;
  .border-radius(10px);
  .bg(#fff);
}

.doraemon-item-tit {
  .height(120px);
  padding: 0 34px;
}

.doraemon-tit-txt {
  border-bottom: 1px dashed #efefef;
  /*no*/
}

.doraemon-productName {
  display: inline-block;
  .fontSize(52px);
  .color(#333);
  margin: 52px 0 21px;
}

.lock-time {
  display: inline-block;
  margin: 69px 0 23px 145px;
  .fontSize(32px);
  .color(#999);
}

.doraemon-pro-detail {
  height: 150px;
  padding: 37px 32px 52px 19px;
}

.doraemon-tit-detail {
  display: flex;
  flex: 1;
  // .height(240px);
  justify-content: space-between;
  align-items: center;
  line-height: 1;
  span {
    display: inline-block;
    line-height: 1;
  }
}

.activityDesc {
  .fontSize(32px);
  .color(@main-color);
  font-weight: normal;
}

.rate-tit {
  .fontSize(33px);
  .color(#999);
}

.rate-num {
  margin-top: 43px;
  .color(@orange);
  .fontSize(92px);
  .simbol {
    .fontSize(38px);
  }
}

.surMoney-tit {
  margin-bottom: 69px;
  .fontSize(38px);
  .color(#999);
  text-align: center;
}

.surMoney-num {
  .fontSize(44px);
  .color(@orange);
}

.doraemon-btn {
  .size(240px, 150px);
  .border-radius(20px);
  .bg(@main-color);
  text-align: center;
  line-height: 150px;
  .fontSize(52px);
  .color(#fff);
}
</style>
