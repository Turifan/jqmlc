<!-- 月盈猫购买 -->
<template>
  <div>
    <HeaderBar :header-bar="headerBar"></HeaderBar>
    <div class="gray-fixed">
      <!-- 利率 -->
      <div class="monthProfitRate">
        <div class="monthProfitTit">年化收益率</div>
        <div class="monthProfitRateNum">
          <div>7~18<span class="simbol">%</span></div>
        </div>
      </div>
      <!-- 提示及可购金额 -->
      <div class="monthProfitInfo">
        <div class="canInvest">
          <div class="canInvestTit gray-font">可投金额(元)</div>
          <div class="canInvestSum">392670.00</div>
        </div>
        <div class="tips gray-font">
          <div class="tipsTit">注 : </div>
          <div class="tipsContent">
            1000元起投，并以100的整数倍递增，单笔最高可投100万元
            每月十号可申请提现，不限次数
          </div>
        </div>
      </div>
      <!-- 购买表单 -->
      <div class="monthProfitFormBox">
        <div class="monthProfitFormGroup">
          <input type="text" placeholder="请输入购买金额">
        </div>
        <div class="monthProfitFormGroup">
          <div>余额资金</div>
          <div></div>
        </div>
        <div class="monthProfitFormGroup">
          <input type="password" placeholder="请输入交易密码">
          <div></div>
        </div>
        <div class="monthProfitFormGroup">
          <input type="text" placeholder="请输入短信验证码">
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderBar from '@/components/common/headerBar.vue'

export default {
  name: 'monthProfit',
  components: {
    HeaderBar
  },
  data () {
    return {
      // 导航条
      headerBar: {
        title: '购买月盈猫',
        imgUrl: require('../../assets/images/doubt.png'),
        goBackUrl: require('../../assets/images/goBack.png'),
        path: 'monthProfitInfo',
        params: {},
        goBack: true,
        showIcon: true
      }
    }
  }
}

</script>
<style lang="less" scoped>
  @import '../../style/mixin.less';

  .monthProfitRate {
    height: 290px;
    padding-top: 40px;
    .bg(@main-color);
    .color(#fff);
    text-align: center;
  }

  .monthProfitTit {
    margin-bottom: 94px;
    .fontSize(32px);
  }

  .monthProfitRateNum {
    .fontSize(112px);
  }

  .simbol {
    .fontSize(48px);
  }

  .monthProfitInfo {
    padding: 0 35px;
    border-bottom: 16px solid #efefef;
  }

  .canInvest {
    height: 180px;
    display: flex;
    flex: 1;
    align-items: center;
    border-bottom: 2px solid #efefef;
  }

  .canInvestTit {
    margin-right: 30px;
    .fontSize(34px);
  }

  .canInvestSum {
    .fontSize(48px);
    .color(#333);
  }

  .tips {
    padding: 42px 0;
    .fontSize(32px);
    line-height: 48px;
    align-items: center;
    overflow: hidden;
  }

  .tipsTit {
    float: left;
    width: 70px;
  }

  .tipsContent {
    float: left;
    width: calc(100% - 70px);
  }

  .monthProfitFormBox {
    padding: 0 35px;
  }

  .monthProfitFormGroup {
    display: flex;
    flex: 1;
    align-items: center;
    height: 140px;
    padding: 0 39px;
    border-bottom: 2px solid #efefef;
    // /*no*/
    .fontSize(36px);

    input {
      margin: 0;
      padding: 0;
      border: none;
      height: 130px;
      outline: none;
      font-size: 36px;
      vertical-align: middle;
    }
  }

  // input::-webkit-input-placeholder {
  //   font-size: 36px;
  // }

</style>
