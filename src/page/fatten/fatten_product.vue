<!-- 发财猫主页各产品列表 -->
<template lang="html">
<div>
  <div class="fatten_product" v-for="f in fattenList" :key="f.id">
    <router-link :to="{ name: 'fat', params: {days:f.term} }" class="fatten_product_list">
      <div class="fatten_product_img">
          <img :src="f.cat_img_url" alt="">
      </div>
      <div class="fatten_product_info">
        <div class="fatten_product_name">
          <div class="fatten_name">{{f.loan_type_name}}</div>
          <div class="fatten_product_des">
            预期年化率  {{f.annual_rate}}%
          </div>
        </div>
        <div class="fatten_product_des">
             投资期限  {{f.term_scope}}
        </div>
      </div>
      <router-link tag="div" :to="{ name: 'fat', params: {days:f.term} }"  :class="['fatten_product_btn' ,f.ishave==='1'?'hasBid':'noBid']">
          {{f.ishave==='1'?'有标':'无标'}}
      </router-link>
    </router-link>
  </div>
</div>

</template>

<script>
export default {
  name: 'FattenProduct',
  props: ['fattenList']
}
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';

.fatten_product {
  padding: 0 35px;
  background: #fff;
}

.fatten_product_list {
  display: flex;
  flex: 1;
  height: 260px;
  align-items: center;
  border-bottom: 2px solid #efefef;
  // justify-content: space-between;
}

.fatten_product_img {
  .size(170px, 170px);
  margin-right: 35px;
  img {
    width: 100%;
  }
}

.fatten_product_info {
  line-height: 2;
}

.fatten_product_name {
  display: flex;
  flex: 1;
  align-items: center;
  .fontSize(46px);
  font-family: huakang;
  .color(@main-color);
}
.fatten_name {
  margin-right: 15px;
}
.fatten_product_des {
  font-family: PingFang;
  .fontSize(32px);
  .color(#666);
}

.fatten_product_btn {
  .size(170px, 90px);
  .border-radius(12px);
  .color(#fff);
  .fontSize(32px);
  .text-center;
  line-height: 90px;
  margin-left: auto;
}

.hasBid {
  background: #ff7032;
}
.noBid {
  .bg(#ffc999);
}
</style>
