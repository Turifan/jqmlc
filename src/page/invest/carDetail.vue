<template lang="html">
  <div class="carDetail">
    <ul class="carDetail-list">
      <li class="carDetail-list-item">
        <div class="carDetail-items-box">
          <div class="icon">

          </div>
          <div class="carDetail-list-tit">
            品牌型号
          </div>
          <div class="carDetail-list-des">
            北京现代牌BH7180PAY
          </div>
        </div>
      </li>
      <li class="carDetail-list-item">
        <div class="carDetail-items-box">
          <div class="icon">

          </div>
          <div class="carDetail-list-tit">
            车身颜色
          </div>
          <div class="carDetail-list-des">
            白色
          </div>
        </div>

      </li>
      <li class="carDetail-list-item">
        <div class="carDetail-items-box">
          <div class="icon">

          </div>
          <div class="carDetail-list-tit">
            行驶公里数
          </div>
          <div class="carDetail-list-des">
            6.4万km
          </div>
        </div>
      </li>
      <li class="carDetail-list-item">
        <div class="carDetail-items-box">
          <div class="icon">

          </div>
          <div class="carDetail-list-tit">
            购买时间
          </div>
          <div class="carDetail-list-des">
            2015年11月03日
          </div>
        </div>
      </li>
      <li class="carDetail-list-item">
        <div class="carDetail-items-box">
          <div class="icon">

          </div>
          <div class="carDetail-list-tit">
            购买价格
          </div>
          <div class="carDetail-list-des">
            裸车13.08万
          </div>
        </div>

      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CarDetail'
}

</script>

<style lang="less" scoped>
  @import '../../style/mixin.less';

  .carDetail {
    .bg(#fff);
    // padding-bottom: 150px;
    height: 450px;
    overflow-y: auto;
  }

  .carDetail-list-item {
    padding: 0 34px;
  }

  .carDetail-items-box {
    height: 130px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 130px;
    border-bottom: 1px solid #efefef;
    /*no*/
  }

  .icon {
    .size(20px, 20px);
    .bg(@main-color);
    transform: rotate(45deg);
  }

  .carDetail-list-tit {
    margin-left: 43px;
    .fontSize(40px);
  }

  .carDetail-list-des {
    margin-left: auto;
    .fontSize(36px);
    .color(#333);
  }

</style>
