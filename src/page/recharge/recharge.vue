<!-- 充值 -->
<template lang="html">
  <div>
    <HeaderBar :header-bar="headerBar" />
    <div class="gray-fixed gray-fixed-bg">
      <div class="rechargeBox">
        <div class="rechargeBank">
          <div class="bankTit">银行卡</div>
          <div class="bankNumber">中国建设银行（4564）</div>
        </div>
        <div class="rechargeAmount">
          <div class="bankTit">充值金额</div>
          <div class="rechargeSum">
            <input type="text" placeholder="请输入充值金额" name="rechargeNum">
          </div>
        </div>
      </div>
      <div class="rechargeBtn" @click.stop.prevent="recharge">确定充值</div>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/common/headerBar.vue'

export default {
  name: 'Recharge',
  components: {
    HeaderBar
  },
  data () {
    return {
      headerBar: {
        title: '充值',
        imgUrl: '',
        goBackUrl: require('../../assets/images/goBack.png'),
        path: '',
        params: {},
        goBack: true,
        showIcon: false
      }
    }
  },
  methods: {
    recharge () {
      return '充值成功'
    }
  }
}

</script>

<style lang="less" scoped>
  @import '../../style/mixin.less';

  .rechargeBox {
    padding: 0 34px;
    background: #fff;
  }

  .rechargeBank {
    height: 140px;
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    .fontSize(38px);
    .color(#333);
    border-bottom: 2px solid #efefef;
  }

  .bankTit {
    width: 144px;
    margin-right: 60px;
  }

  .bankNumber {
    margin-right: auto;
  }

  .rechargeAmount {
    height: 150px;
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    .fontSize(36px);
    .color(#333);
    border-bottom: 2px solid #efefef;
  }

  .rechargeSum {
    margin-right: auto;

    input {
      border: none;
      line-height: 36px;
      outline: none;
      font-size: 100%;
    }
  }

  .rechargeBtn {
    .size(800px, 130px);
    margin: 150px auto 0;
    background: @orange;
    border-radius: 18px;
    text-align: center;
    line-height: 130px;
    .fontSize(42px);
    .color(#fff);
  }

</style>
