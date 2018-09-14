<!-- 发财猫主页各产品列表 -->
<template lang="html">
  <div class="fatten_product">
    <router-link :to="{ name: 'fat', params: {} }" class="fatten_product_list">
      <div class="fatten_product_img">
          <img src="../../assets/images/cat_tmm.png" alt="">
      </div>
      <div class="fatten_product_info">
        <div class="fatten_product_name">
          汤姆猫
        </div>
        <div class="fatten_product_des">
          预期年化率  11%   投资期限  30天
        </div>
      </div>
      <router-link tag="div" :to="{ name: 'fat', params: {} }"  class="fatten_product_btn hasBid">
          有标
      </router-link>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'FattenProduct'
}
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';
@import '../../style/common.less';

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
    .size(170px,170px);
    margin-right: 35px;
    img {
        width: 100%;
    }
}

.fatten_product_info {
    line-height: 2;
}

.fatten_product_name {
    .fontSize(46px);
    font-family: huakang;
    .color(@main-color);
}

.fatten_product_des {
    .fontSize(32px);
}

.fatten_product_btn {
    .size(170px,90px);
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
</style>
