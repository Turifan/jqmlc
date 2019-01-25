<!-- 月盈猫购买 -->
<template>
  <div>
    <HeaderBar :header-bar="headerBar"></HeaderBar>
    <div class="gray-fixed">
      <!-- 利率 -->
      <div class="monthProfitRate">
        <div class="monthProfitTit">年化收益率</div>
        <div class="monthProfitRateNum">
          <div>{{parseInt(monthProfit.annualRate)}}~{{parseInt(monthProfit.maxRate)}}<span class="simbol">%</span></div>
        </div>
      </div>
      <!-- 提示及可购金额 -->
      <div class="monthProfitInfo">
        <div class="canInvest">
          <div class="canInvestTit gray-font">可投金额(元)</div>
          <div class="canInvestSum">{{monthProfit.surMoney}}</div>
        </div>
        <div class="tips gray-font">
          <div class="tipsTit">注 : </div>
          <div class="tipsContent">
            {{monthProfit.tip}}
          </div>
        </div>
      </div>
      <!-- 购买表单 -->
      <div class="monthProfitFormBox">
        <div class="monthProfitFormGroup">
          <div>
            <input type="text"
                   placeholder="请输入购买金额">
          </div>
        </div>
        <div class="monthProfitFormGroup"
             @click.stop.prevent="showAccount">
          <div class="monthProfitAccount">{{selectAccount==='1'?`银行卡${monthProfit.cardNo.slice(-4)}`:'余额资金'}}</div>
          <div class="monthArrow">
            <img :src="arrowImg"
                 alt=""
                 class="img-responsive">
          </div>
        </div>
        <!-- 显示购买方式 -->
        <div class="monthProfitFormGroup monthProfitAccountBox"
             v-show="isShowAccount">
          <div class="bankAccount">
            <input type="radio"
                   id="bankAccount"
                   v-model="selectAccount"
                   v-show="false"
                   value="1"
                   checked="checked">
            <label for="bankAccount">银行卡{{monthProfit.cardNo.slice(-4)}}</label>
          </div>
          <div class="balanceAccount">
            <input type="radio"
                   id="balanceAccount"
                   v-model="selectAccount"
                   v-show="false"
                   value="2">
            <label for="balanceAccount">余额资金</label>
          </div>
        </div>
        <!-- 交易密码 -->
        <div class="monthProfitFormGroup">
          <div>
            <input type="password"
                   placeholder="请输入交易密码">
          </div>
          <div class="forgetDealPwd"
               @click.stop.prevent="forgetDealPwd">
            忘记交易密码?
          </div>
        </div>
        <!-- 验证码 -->
        <div class="monthProfitFormGroup"
             v-if="selectAccount=='2'">
          <div>
            <input type="text"
                   placeholder="请输入短信验证码">
          </div>
          <div class="getCode">
            获取验证码
          </div>
        </div>
        <!-- 同意协议 -->
        <div class="agreeProtocol gray-font">
          <input type="checkbox"
                 v-show="false"
                 v-model="agree"
                 id="agree">
          <label for="agree">我同意将月盈猫账户资金交由金钱猫平台自由匹配直投标</label>
        </div>
        <div class="buyBtn">立即购买</div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderBar from '@/components/common/headerBar.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'MonthProfit',
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
        path: 'description',
        params: { title: 'monthProfit' },
        goBack: true,
        showIcon: true
      },
      /**
       * 购买方式
       * String 1 银行卡
       * String 2 余额资金
       */
      selectAccount: '1',
      // 显示购买方式
      isShowAccount: false,
      // 下拉图标
      arrowImg: require('../../assets/images/downArrow.png'),
      // 同意协议
      agree: false
    }
  },
  computed: {
    ...mapState({
      monthProfit: ({ products }) => products.monthProfit
    })
  },
  methods: {
    ...mapActions(['getMonthProfit']),
    showAccount () {
      this.isShowAccount = !this.isShowAccount
      this.arrowImg = this.isShowAccount
        ? require('../../assets/images/upArrow.png')
        : require('../../assets/images/downArrow.png')
    },
    forgetDealPwd () {
      console.log(this.selectAccount, typeof this.selectAccount)
    }
  },
  mounted () {
    if (!this.monthProfit) {
      this.getMonthProfit(`${this.$route.params.id}`)
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
  justify-content: space-between;
  align-items: center;
  height: 141px;
  padding: 0 39px;
  border-bottom: 2px solid #efefef;
  .fontSize(36px);

  input {
    margin: 0;
    padding: 0;
    border: none;
    height: 140px;
    outline: none;
    font-size: 36px;
    vertical-align: middle;
    line-height: 140px;

    &::placeholder {
      .color(#999);
    }
  }
}

.monthProfitAccountBox {
  margin: 0 -35px;
  background: #efefef;
  justify-content: space-around;
}

.monthProfitAccount {
  height: 140px;
  .color(#333);
  .fontSize(36px);
  line-height: 140px;
}

.monthArrow {
  .size(44px, 25px);
}

.forgetDealPwd {
  .fontSize(32px);
  .color(@main-color);
  text-decoration: underline;
}

input[type='radio'] {
  &:checked + label {
    display: inline-block;

    &:before {
      content: '';
      display: inline-block;
      margin-right: 20px;
      .size(46px, 45px);
      vertical-align: middle;
      background: url('../../assets/images/rateChecked.png') center no-repeat;
      background-size: 100% 100%;
    }
  }
}

input[type='radio'] + label {
  display: inline-block;

  &:before {
    content: '';
    display: inline-block;
    margin-right: 20px;
    .size(46px, 45px);
    vertical-align: middle;
    background: url('../../assets/images/rateUnChecked.png') center no-repeat;
    background-size: 100% 100%;
  }
}

input[type='checkbox'] {
  &:checked + label {
    display: inline-block;

    &:before {
      content: '';
      display: inline-block;
      margin-right: 10px;
      .size(30px, 30px);
      vertical-align: middle;
      background: url('../../assets/images/agree.png') center no-repeat;
      background-size: 100% 100%;
    }
  }
}

input[type='checkbox'] + label {
  display: inline-block;

  &:before {
    content: '';
    display: inline-block;
    margin-right: 10px;
    .size(30px, 30px);
    vertical-align: middle;
    background: url('../../assets/images/unagree.png') center no-repeat;
    background-size: 100% 100%;
  }
}

.getCode {
  .size(193px, 80px);
  border: 2px solid @main-color;
  border-radius: 18px;
  line-height: 80px;
  text-align: center;
  .fontSize(32px);
  .color(@main-color);
}

.agreeProtocol {
  margin: 20px 0 0;
  .fontSize(32px);
}

.buyBtn {
  .size(653px, 134px);
  margin: 80px auto 0;
  .bg(@orange);
  border-radius: 18px;
  text-align: center;
  line-height: 134px;
  .color(#fff);
  .fontSize(42px);
}
</style>
