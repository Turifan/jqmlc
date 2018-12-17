<!-- 红包卡券-未使用 -->
<template lang="html">
  <div class="">
    <div class="unUsedList">
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

      <div class="unUsedItemVoucher">
        <div class="unUsedItemVoucherInfo">
          <div class="ticketsNum">
            <div class="ticketsSum">20元</div>
            <div class="ticketsStatus">代金券</div>
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
            <div class="">
              <i class="rhombus"></i>
              <span>使用规则 : 本券仅限实体店使用</span>
            </div>
          </div>
        </div>
        <div class="goToUseTickets" @click.stop.prevent="goToUse">去使用</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UnUsed',
  components: {},
  data () {
    return {

    }
  },
  methods: {
    goToUse () {
      alert('使用成功')
    }
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
    background: url('../../assets/images/unused.png') no-repeat;
    background-size: 100% 100%;
  }

  .unUsedItemVoucher {
    .size(1012px, 310px);
    margin-bottom: 30px;
    padding-top: 40px;
    background: url('../../assets/images/voucher.png') no-repeat;
    background-size: 100% 100%;
  }

  .unUsedItemVoucherInfo {
    display: flex;
    flex: 1;
    height: 208px;
    align-items: center;
  }

  .ticketsNum {
    width: 284px;
    text-align: center;
  }

  .ticketsSum {
    margin-bottom: 30px;
    .fontSize(58px);
    .color(@main-color);
  }

  .ticketsStatus {
    .fontSize(36px);
    .color(#333);
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

  .goToUseTickets {
    .size(240px, 72px);
    margin: 14px auto;
    background: @main-color;
    line-height: 72px;
    .color(#fff);
    .fontSize(32px);
    text-align: center;
    border-radius: 18px;
  }

</style>
