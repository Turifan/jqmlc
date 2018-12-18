<template lang="html">
  <div class="">
    <HeaderBar :headerBar="headerBar"></HeaderBar>
    <div class="gray-fixed">
      <div class="signBox">
        <div class="signBtn">
          签到
        </div>
        <div class="signInfo">
          <div class="signTotal">
            <div class="signTit">累计签到</div>
            <div class=""><span class="signNumber">12</span><span>天</span></div>
          </div>
          <div class="line">

          </div>
          <div class="signTotal">
            <div class="signTit">剩余次数</div>
            <div class=""><span class="signNumber">2</span><span>次</span></div>
          </div>
        </div>
      </div>
      <div class="currentDate">
        <div class="dateNum">2018年5月</div>
      </div>
      <Calendar></Calendar>
      <div class="grayLine"></div>
      <div class="signRules">
        <fieldset>
          <legend align="center">签到规则</legend>
          <ol>
            <li>每日最多可签到 3 次 </li>
            <li>连续签到第七天，签到奖励翻倍，翻倍奖励由猫族等级决定</li>
            <li>每连续签到30天，成长值+2 </li>
          </ol>
        </fieldset>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/common/headerBar.vue'
import Calendar from '@/components/calendar/calendar.vue'

export default {
  name: 'Sign',
  components: {
    HeaderBar,
    Calendar
  },
  data () {
    return {
      headerBar: {
        title: '签到',
        imgUrl: '',
        goBackUrl: require('../../assets/images/goBack.png'),
        path: '',
        params: {},
        goBack: true,
        showIcon: false
      }
    }
  }
}

</script>

<style lang="less" scoped>
  @import '../../style/mixin.less';

  .signBox {
    height: 351px;
    padding: 27px 35px;
    background: @main-color;
  }

  .signBtn {
    .size(206px, 206px);
    margin: 0 auto 12px;
    .fontSize(54px);
    .color(@main-color);
    .bg(#fafafa);
    border-radius: 50%;
    text-align: center;
    line-height: 206px;
  }

  .signInfo {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-around;
    .fontSize(36px);
    .color(#fff);
    text-align: center;
  }

  .line {
    .size(4px, 60px);
    .bg(#fff);
  }

  .currentDate {
    .size(100%, 105px);
    margin-top: -64px;
    padding: 15px 0 0;
    background: url('../../assets/images/arch.png') no-repeat;
    background-size: 100% 100%;
  }

  .dateNum {
    .size(406px, 90px);
    margin: 0 auto;
    .fontSize(42px);
    .color(@orange);
    .bg(#fff);
    border-radius: 45px;
    text-align: center;
    line-height: 90px;
  }

  .signTit {
    margin-bottom: 20px;
    .fontSize(36px);
  }

  .signNumber {
    .fontSize(48px);
  }

  .signTotal {
    .fontSize(32px);
  }

  .grayLine {
    height: 20px;
    .bg(#efefef);
  }

  .signRules {
    .size(950px, 333px);
    margin: 40px auto;

    fieldset {
      padding: 40px;
      border: 3px solid #ededed;
    }

    legend {
      padding: 0 40px;
      .fontSize(40px);
      .color(#333);
    }
    ol{
      padding-inline-start: 40px;
    }
    li{
      list-style: decimal;
      .fontSize(36px);
      line-height: 48px;
    }
  }

</style>
