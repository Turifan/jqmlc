<!-- 自动投标 -->
<template>
  <div>
    <HeaderBar :header-bar="headerBar"></HeaderBar>
    <div class="gray-fixed">
      <div class="accountBox">
        <div class="balanceAccount">
          <div class="accountTit">余额资金(元)</div>
          <div class="accountSum">25963.20</div>
        </div>
        <div class="currentAccount">
          <div class="accountTit">灵活猫(元)</div>
          <div class="accountSum">25963.20</div>
        </div>
      </div>
      <!-- 名次 -->
      <div class="queueNum">
        <div class="queueTit">排队名次</div>
        <div class="queueNumber">第<span class="accountSum">2560</span>名</div>
      </div>
      <!-- autoInvest form -->
      <div class="autoInvestFormBox">
        <!-- 年化利率 -->
        <div class="selectRateBox border-bottom">
          <div class="autoInvestTit">
            <i class="rhombus"></i>
            <span>选择年化利率(%)</span>
          </div>
          <div class="selectRateRang">
            <input type="text"
                   placeholder="请输入利率"
                   class="selectRateNum">%
            <span class="selectRateRangTxt">至</span>
            <input type="text"
                   placeholder="请输入利率"
                   class="selectRateNum">%
          </div>
        </div>
        <!-- 投资期限 -->
        <div class="selectInvestDay border-bottom">
          <div class="autoInvestTit">
            <i class="rhombus"></i>
            <span>选择投资期限(天)</span>
          </div>
          <div class="investDayList">
            <div class="investDayItem">
              <input type="radio"
                     v-show="false"
                     v-model="investDay"
                     id="90"
                     value="90">
              <label for="90">90</label>
            </div>
            <div class="investDayItem">
              <input type="radio"
                     v-show="false"
                     v-model="investDay"
                     id="180"
                     value="180">
              <label for="180">180</label>
            </div>
            <div class="investDayItem">
              <input type="radio"
                     v-show="false"
                     v-model="investDay"
                     id="270"
                     value="270">
              <label for="270">270</label>
            </div>
            <div class="investDayItem">
              <input type="radio"
                     v-show="false"
                     v-model="investDay"
                     id="360"
                     value="360">
              <label for="360">360</label>
            </div>
            <div class="investDayItem">
              <input type="radio"
                     v-show="false"
                     v-model="investDay"
                     id="540"
                     value="540">
              <label for="540">540</label>
            </div>
            <div class="investDayItem">
              <input type="radio"
                     v-show="false"
                     v-model="investDay"
                     id="720"
                     value="720">
              <label for="720">720</label>
            </div>
          </div>
          <div class="text-center autoInvestLimit">
            {{investDay}}天标的产品限额 <span class="norm">5000元</span>
          </div>
        </div>
        <!-- 投资金额 -->
        <div class="selectRateBox">
          <div class="autoInvestTit">
            <i class="rhombus"></i>
            <span>选择投资金额(元)</span>
          </div>
          <div class="selectRateRang">
            <input type="text"
                   placeholder="请输入金额"
                   class="selectRateNum">元
          </div>
        </div>
        <!-- 支付方式 -->
        <div class="selectInvestDay">
          <div class="autoInvestTit">
            <i class="rhombus"></i>
            <span>选择支付方式</span>
          </div>
          <div class="investDayList investPayWay">
            <div class="">
              <input type="radio"
                     v-show="false"
                     v-model="investPayWay"
                     id="current"
                     value="1">
              <label for="current">灵活猫</label>
            </div>
            <div class="">
              <input type="radio"
                     v-show="false"
                     v-model="investPayWay"
                     id="balance"
                     value="2">
              <label for="balance">余额资金</label>
            </div>
          </div>
        </div>
        <!-- 开启/修改 -->
        <div class="modifyAutoInvest autoInvestBtn">
          开启
        </div>
        <!-- 关闭 -->
        <div class="closeAutoInvest autoInvestBtn">
          关闭
        </div>
        <!-- tips -->
        <div class="text-center orange autoInvestTips">
          修改配置重新排队
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderBar from '@/components/common/headerBar.vue'

export default {
  name: 'AutoInvest',
  components: {
    HeaderBar
  },
  data () {
    return {
      headerBar: {
        title: '自动投标',
        imgUrl: require('../../assets/images/record.png'),
        goBackUrl: require('../../assets/images/goBack.png'),
        path: 'autoInvestRecord',
        params: {},
        goBack: true,
        showIcon: true
      },
      investDay: '90',
      investPayWay: '1'
    }
  }

}

</script>
<style lang="less" scoped>
@import '../../style/mixin';

.accountBox {
  display: flex;
  flex: 1;

  align-items: center;
  .fontSize(38px);
  border-bottom: 2px solid #efefef;
}

.balanceAccount {
  width: 50%;
  height: 140px;
  display: flex;
  flex: 1;
  align-items: center;
  padding-left: 34px;
  border-right: 2px solid #efefef;
}

.currentAccount {
  width: 50%;
  height: 140px;
  display: flex;
  flex: 1;
  align-items: center;
  padding-left: 34px;
}

.accountTit {
  margin-right: 30px;
  .color(#333);
}

.accountSum {
  .color(@main-color);
}

.queueNum {
  display: flex;
  flex: 1;
  align-items: center;
  height: 140px;
  padding-left: 34px;
  border-bottom: 20px solid #efefef;
  .fontSize(38px);
  .color(#333);
}

.queueTit {
  margin-right: 103px;
}

.autoInvestFormBox {
  padding: 0 34px;
}

.selectRateBox {
  height: 147px;
  padding-top: 49px;
  padding-bottom: 66px;
}

.border-bottom {
  border-bottom: 2px solid #efefef;
}
.autoInvestTit {
  display: flex;
  flex: 1;
  margin-bottom: 75px;
  align-items: center;
  .fontSize(38px);
}

.rhombus {
  display: inline-block;
  .size(24px, 24px);
  margin-right: 20px;
  transform: rotate(45deg);
  .bg(@main-color);
}

.selectRateRang {
  padding-left: 42px;
  .color(#333);
  .fontSize(40px);
}

.selectRateNum {
  width: 200px;
  margin-right: 30px;
  border: none;
  outline: none;
}

.selectRateRangTxt {
  display: inline-block;
  margin: 0 70px;
}

.selectInvestDay {
  padding: 60px 0 70px;
}

.investDayList {
  display: flex;
  flex: 1;
  padding: 0 45px;
  flex-wrap: wrap;
  align-items: center;
  .fontSize(40px);
  .color(#333);
}

.investPayWay {
  justify-content: space-around;
}

.investDayItem {
  width: 25%;
  margin-bottom: 60px;
  // text-align: center;
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

.autoInvestLimit {
  .fontSize(32px);
}

.norm {
  .color(@main-color);
}

.autoInvestBtn {
  .size(710px, 124px);
  margin: 0 auto;
  border-radius: 18px;
  text-align: center;
  line-height: 124px;
  .fontSize(38px);
}

.modifyAutoInvest {
  margin-top: 55px;
  margin-bottom: 36px;
  .bg(@main-color);
  .white;
}

.closeAutoInvest {
  margin-bottom: 55px;
  border: 3px solid @main-color;
  .color(@main-color);
}

.autoInvestTips {
  margin-bottom: 80px;
  .fontSize(32px);
}
</style>
