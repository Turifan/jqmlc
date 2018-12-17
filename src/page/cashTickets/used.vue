<!-- 红包卡券-已使用 -->
<template lang="html">
  <div class="">
    <div class="unUsedItemBonuses">
      <div class="ticketsNum">
        <div class="ticketsSum">20元</div>
        <div class="ticketsStatus">未使用</div>
      </div>
      <div class="ticketsDes">
        <div class="ticketsRule">
          <i class="rhombus"></i>
          <span>红包来源 : 邀请好友注册红包</span>
        </div>
        <div class="ticketsRule">
          <i class="rhombus"></i>
          <span>获得时间 : 2018.02.11</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Used',
  components: {},
  data () {
    return {}
  }
}

</script>

<style lang="less" scoped>
  @import '../../style/mixin.less';

  .unUsedItemBonuses {
    display: flex;
    flex: 1;
    align-items: center;
    .size(1012px, 210px);
    margin-bottom: 30px;
    padding-top: 40px;
    background: url('../../assets/images/used.png') no-repeat;
    background-size: 100% 100%;
  }

  .ticketsNum {
    width: 284px;
    text-align: center;
  }

  .ticketsSum {
    margin-bottom: 30px;
    .fontSize(58px);
    .color(#999);
  }

  .ticketsDes {
    padding-left: 48px;
    .color(#999);
    .fontSize(34px);
  }

  .rhombus {
    display: inline-block;
    .size(10px, 10px);
    margin-right: 20px;
    transform: rotate(45deg);
    background: #ccc;

  }

  .ticketsRule {
    margin-bottom: 26px;
  }

  .ticketsStatus {
    .fontSize(36px);
    .color(#dedede);
  }

</style>
