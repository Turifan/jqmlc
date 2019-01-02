<!-- 抽奖号码规则 -->
<template lang="html">
  <div class="">
    <HeaderBar :headerBar="headerBar"></HeaderBar>
    <div class="gray-fixed gray-fixed-bg">
      <div class="luckdrawTit">
        <img src="../../assets/images/addraterule.png" alt="" class="img-responsive">
      </div>
      <div class="luckdrawContainer">
        <div class="luckdrawDesc">
          客户投资发财猫产品达一万或一万以上给予一个抽奖号码，不足一万不给号码，投资时号码给的个数按投资金额的一万的倍数来算。
          例 : 投资9999不给予号码
          投资10000或10001给予一个号码
          投资19999给予一个号码
          投资20000或20001给予两个号码
        </div>
        <div class="luckdrawList">
          <ul>
            <li>
              <div class="luckdrawItemTitle">
                <div class="listImg"></div>
                <div class="tipContentTxt">抽奖时间</div>
              </div>
              <div class="luckdrawItemContent">
                投资活动结束进行抽奖
              </div>
            </li>
            <li>
              <div class="luckdrawItemTitle">
                <div class="listImg"></div>
                <div class="tipContentTxt">抽奖方式</div>
              </div>
              <div class="luckdrawItemContent"></div>
            </li>
            <li>
              <div class="luckdrawItemTitle">
                <div class="listImg"></div>
                <div class="tipContentTxt">奖品设置</div>
              </div>
              <div class="luckdrawItemContent"></div>
            </li>
            <li>
              <div class="luckdrawItemTitle">
                <div class="listImg"></div>
                <div class="tipContentTxt">奖品领取</div>
              </div>
              <div class="luckdrawItemContent"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/common/headerBar.vue'

export default {
  name: 'LuckdrawRule',
  components: {
    HeaderBar
  },
  data () {
    return {
      headerBar: {
        title: '抽奖规则',
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

.luckdrawTit {
  .size(450px, 90px);
  margin: 70px auto 40px;
  .text-center;
}

.luckdrawContainer {
  padding: 0 35px;
  .fontSize(32px);
  .color(#333);
  line-height: 60px;
}

.luckdrawDesc {
  text-indent: 2em;
}

.luckdrawItemTitle {
  display: flex;
  flex: 1;
  align-items: center;
  .color(#ff9b2e);
}

.listImg {
  .size(30px, 30px);
  margin-right: 20px;
  transform: rotate(45deg);
  background: #ff9b2e;
}
.luckdrawItemContent {
  margin-bottom: 30px;
  .color(#333);
  padding-left: 50px;
}
</style>
