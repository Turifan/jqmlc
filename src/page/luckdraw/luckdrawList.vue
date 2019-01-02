<!-- 抽奖号码列表 -->
<template lang="html">
  <div class="luckdraw-container">
    <div class="luckdraw-list">
      <div class="luckdraw-list-info" @click.stop.prevent="$router.push('luckdrawNumber/30')">
        <div class="luckdraw-img">
          <img src="../../assets/images/luckdraw_img.png" alt="" class="img-responsive">
          <div class="luckdraw-modal"></div>
        </div>
        <div class="luckdraw-detail">
          <div class="luckdraw-title">抽奖送送送</div>
          <div class="luckdraw-desc">
            <div class="luckdraw-number">我的号码: <span class="orange">3</span></div>
            <div class="">开奖情况: 未开奖</div>
          </div>
        </div>
      </div>
      <div class="luckdraw-list-desc">
        <div class="luckdraw-list-date gray-font">
          2018-08-15至2018-12-15
        </div>
        <div class="luckdraw-list-rule brandColor" @click.stop.prevent="$router.push('luckdrawRule/30')">
          活动规则>>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LuckdrawList'
}
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';

.luckdraw-container {
  overflow-y: hidden;
  position: relative;
}

.luckdraw-list {
  margin-bottom: 20px;
  padding: 0 34px;
  .bg(#fff);
}

.luckdraw-list-info {
  height: 300px;
  display: flex;
  flex: 1;
  align-items: center;
  border-bottom: 2px solid #efefef;
}

.luckdraw-img {
  .size(300px, 220px);
  margin-right: 52px;
}

.luckdraw-title {
  margin-bottom: 60px;
  .fontSize(42px);
  .color(#333);
}

.luckdraw-desc {
  display: flex;
  flex: 1;
  align-items: center;
  .fontSize(32px);
}

.luckdraw-number {
  margin-right: 180px;
}

.luckdraw-list-desc {
  display: flex;
  flex: 1;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  .fontSize(32px);
}
</style>
