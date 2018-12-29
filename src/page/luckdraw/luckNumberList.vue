<!-- 抽奖号码列表 -->
<template lang="html">
  <div class="luckNumberContainer">
    <div class="luckNumber-list">
      <div class="luckNumberStatus luckNumber-wkj">未开奖</div>
      <div class="luckdraw-number">
        <div class="luckNumber-title">&nbsp;</div>
        <div class="luckdraw-num">105200</div>
      </div>
      <div class="luckdraw-number">
        <div class="luckNumber-title">来源</div>
        <div>注册</div>
      </div>
      <div class="luckdraw-number">
        <div class="luckNumber-title">时间</div>
        <div>2018.02.11</div>
      </div>

    </div>
    <div class="luckNumber-list">
      <div class="luckNumberStatus luckNumber-wzj">未中奖</div>
      <div class="luckdraw-number">
        <div class="luckNumber-title">&nbsp;</div>
        <div class="luckdraw-num">105200</div>
      </div>
      <div class="luckdraw-number">
        <div class="luckNumber-title">来源</div>
        <div>注册</div>
      </div>
      <div class="luckdraw-number">
        <div class="luckNumber-title">时间</div>
        <div>2018.02.11</div>
      </div>

    </div>
    <div class="luckNumber-list">
      <div class="luckNumberStatus luckNumber-yzj">已中奖</div>
      <div class="luckdraw-number">
        <div class="luckNumber-title">&nbsp;</div>
        <div class="luckdraw-num">105200</div>
      </div>
      <div class="luckdraw-number">
        <div class="luckNumber-title">来源</div>
        <div>注册</div>
      </div>
      <div class="luckdraw-number">
        <div class="luckNumber-title">时间</div>
        <div>2018.02.11</div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'LuckNumberList'
}

</script>

<style lang="less" scoped>
  @import '../../style/mixin.less';

  .luckNumberContainer {
    padding: 0 15px;
    overflow-y: hidden;
    position: relative;
  }

  .luckNumber-list {
    position: relative;
    margin: 31px 0;
    height: 191px;
    .bg(#fff);
    display: flex;
    flex: 1;
    justify-content: space-around;
    align-items: center;
    border-top-right-radius: 10px;
  }

  .luckNumberStatus {
    position: absolute;
    top: -15px;
    left: 79px;
    .size(160px, 64px);
    .text-center;
    .color(#fff);
    line-height: 64px;
  }

  .luckNumber-wkj {
    background: url('../../assets/images/luckdraw_wkj.png') no-repeat;
    background-size: 100% 100%;
  }

  .luckNumber-wzj {
    background: url('../../assets/images/luckdraw_wzj.png') no-repeat;
    background-size: 100% 100%;
  }

  .luckNumber-yzj {
    background: url('../../assets/images/luckdraw_yzj.png') no-repeat;
    background-size: 100% 100%;
  }

  .luckdraw-num {
    font-family: AdobeHeiti;
    .fontSize(52px);
    .color(@dark-color);
  }

  .luckNumber-title {
    margin-bottom: 33px;
    .fontSize(32px);
  }

</style>
