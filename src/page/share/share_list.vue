<template lang="html">
  <div class="">
    <div class="share-list">
      <div class="share-title">
        <div class="share-title-txt">车贷0072-银行卡标</div>
        <div class="share-title-addrate">
          <span>分享加息</span><span class="addrate-num">1.2%</span>
        </div>
      </div>
      <div class="share-detail">
        <div class="share-rate">
          <div class="rate-num">
            <span>14.3</span><span v-if="true">~18.3</span><span class="rate-simbol">%</span>
          </div>
          <div class="rate-txt">
            年化率
          </div>
        </div>
        <div class="share-info">
          <div class="share-info-items">
            <span class="share-info-txt">投资金额</span>
            <span class="share-info-data">25352.00</span>
          </div>
          <div class="">
            <span class="share-info-txt">到期时间</span>
            <span class="share-info-data">2018-12-06</span>
          </div>
        </div>
        <div class="share-btn" @click="share">
          <img src="../../assets/images/share.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShareList',
  methods: {
    share() {
      alert('请下载APP进行分享');
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../style/mixin';

.share-list {
    margin: 16px 15px;
    padding: 37px 0 0;
    .bg(#fff);
}

.share-detail {
    display: flex;
    flex: 1;
    padding: 60px 78px 60px 55px;
    justify-content: space-between;
    align-items: center;
    align-content: space-between;
    span {
        display: inline-block;
        line-height: 1;
    }
}

.rate-num {
    margin-bottom: 36px;
    .color(@dark-color);
    .fontSize(52px);
    font-family: AdobeHeiti;
    line-height: 1;
    .rate-simbol {
        .fontSize(32px);
    }
}

.rate-txt {
    .fontSize(34px);
    .color(#999);
}

// .share-info {
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     // align-items: center;
//     align-content: space-between;
// }

.share-info-items {
    margin-bottom: 34px;
}

.share-info-txt {
    .fontSize(36px);
    .color(#999);
}

.share-info-data {
    .fontSize(36px);
    .color(#666);
}

.share-title {
    display: flex;
    flex: 1;
    padding: 0 67px 0 57px;
    justify-content: space-between;
    align-items: center;
    .share-title-txt {
        .fontSize(40px);
    }

    .share-title-addrate {
        .fontSize(32px);
        .color(#999);
    }
}

.addrate-num {
    display: inline-block;
    margin-left: 8px;
    .size(80px,38px);
    .color(@orange);
    line-height: 38px;
    .text-center;
    .bg(#fff4f0);
}

.share-btn {
    .size(100px,100px);
    .border-radius(50%);
    .bg(@main-color);
    text-align: center;
    img {
        .size(60px,60px);
        margin-top: 20px;
    }
}
</style>
