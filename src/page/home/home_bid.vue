<template lang="html">
  <div class="">
    <div class="home-bid">
      <div class="monthProfit">
        <div class="home-bid-tit" @click.stop.prevent="$router.push('profit')">
          {{monthProfit}}
        </div>
        <div class="novice-bid-detail" @click.stop.prevent="$router.push({name:'monthProfit',params:{id:3}})">
          <div class="home-bid-title">
            月盈猫0001
          </div>
          <div class="profit-bid-des">
            <div>
              <div class="">
                起购金额
              </div>
              <div class="profit-rate-txt">100元</div>
            </div>
            <div>
              <div class="profit-rate-tit">年化利率(%)</div>
              <div class="profit-rate-num orange">7-18</div>
            </div>
            <div>
              <div class="">可投资金</div>
              <div class="profit-rate-txt">269748.00</div>
            </div>
          </div>
          <router-link tag="div" :to="{ name: 'monthProfit', params: {id:3} }" class="novice-btn">
            购买
          </router-link>
        </div>
      </div>
      <div class="novice-bid">
        <div class="home-bid-tit">
          {{noviceTitle}}
        </div>
        <div class="novice-bid-detail" @click.stop.prevent="$router.push({name:'invest',params:{fatId:30}})">
          <div class="home-bid-title">
            车贷0074-新手标
          </div>
          <div class="novice-rate-tit text-center">
            年化利率(%)
          </div>
          <div class="novice-bid-rate text-center">
            16
          </div>
          <div class="novice-bid-des">
            <div class="text-left">
              期限30天
            </div>
            <div class="text-center">
              100元起投
            </div>
            <div class="text-right">
              限购5000元
            </div>
          </div>
          <div class="novice-btn-box">
            <router-link tag="div" :to="{ name: 'invest', params: {fatId:30} }" class="novice-btn">
              购买
            </router-link>
          </div>
        </div>
      </div>
      <div class="bank-bid">
        <div class="home-bid-tit">
          {{bankTitle}}
        </div>
        <div class="bank-bid-detail" @click.stop.prevent="$router.push({name:'invest',params:{fatId:30}})">
          <div class="home-bid-title">
            车贷0074-银行卡标
          </div>
          <div class="bank-bid-info">
            <div class="bank-bid-des">
              <div class="bank-bid-rate">
                16
              </div>
              <div class="bank-bid-rateTit">
                年化利率(%)
              </div>
            </div>
            <div class="bank-bid-date">
              <div class="bank-bid-days">
                期限30天
              </div>
              <div class="bank-bid-rule">
                100元起投 限购5000元
              </div>
            </div>
          </div>
          <div class="bank-bid-btn">
            <div class="bank-bid-canInvest">
              可投资金 <span class="orange">2000000.00</span>元
            </div>
            <router-link tag="div" :to="{ name: 'invest', params: {fatId:30} }" class="bank-btn">
              购买
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoviceBid',
  data () {
    return {
      monthProfit: '月盈猫',
      noviceTitle: '新手标',
      bankTitle: '银行卡标'
    }
  },
  computed: {}
}

</script>

<style lang="less">
  @import '../../style/mixin.less';

  .home-bid {
    padding: 0 15px;
  }

  .monthProfit {
    margin: 20px auto;
  }

  .home-bid-tit {
    margin: 30px 0 16px;
    height: 90px;
    line-height: 90px;
    padding-left: 56px;
    color: #ff7032;
    font-size: 36px;
    .home-bid-box;
  }

  .home-bid-box {
    background: #fff;
    .border-radius(10px);
  }

  .home-bid-title {
    padding: 0 53px;
    font-size: 44px;
    font-weight: 700;
  }

  .profit-bid-des {
    display: flex;
    flex: 1;
    margin: 80px auto;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    font-size: 32px;
  }

  profit-rate-tit {
    font-size: 38px;
  }

  .profit-rate-num {
    margin-top: 40px;
    font-family: AdobeHeiti;
    font-size: 72px;
  }

  .profit-rate-txt {
    margin-top: 56px;
    font-size: 36px;
  }

  .novice-bid-detail {
    .home-bid-box;
    padding: 50px 0;
  }

  .novice-bid-rate {
    margin-bottom: 99px;
    font-size: 72px;
    .color(@dark-color);
    font-family: AdobeHeiti;
  }

  .novice-rate-tit {
    margin: 80px auto 50px;
    font-size: 42px;
    .color(#666);
  }

  .novice-bid-des {
    display: flex;
    flex: 1;
    width: 870px;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    .color(#666);

    div {
      width: 100%/3;
    }
  }

  .novice-btn-box {
    .width(870px);
    margin: 49px auto 0;
    border-top: 2px solid @gray-body-bg;
  }

  .novice-btn {
    width: 800px;
    height: 120px;
    margin: 50px auto 0;
    text-align: center;
    .bg(@main-color);
    .border-radius(18px);
    .color(#fff);
    .fontSize(40px);
    line-height: 120px;
  }

  .bank-bid-info {
    display: flex;
    flex: 1;
    margin: 80px auto;
    padding: 0 90px;
    align-items: center;
  }

  .bank-bid-des {
    width: 250px;
    margin-right: 113px;
    border-right: 2px solid @gray-body-bg;
  }

  .bank-bid-rate {
    margin-bottom: 40px;
    font-size: 72px;
    .color(@dark-color);
    font-family: AdobeHeiti;
  }

  .bank-bid-rateTit {
    font-size: 32px;
    .color(#666);
  }

  .bank-bid-days {
    margin: 13px 0 52px;
    font-size: 38px;
    .color(#333);
  }

  .bank-bid-rule {
    font-size: 34px;
    .color(#666);
  }

  .bank-bid-detail {
    margin: 16px auto;
    .home-bid-box;
    padding: 50px 0 40px;
  }

  .bank-bid-canInvest {
    .width(630px);
    .fontSize(40px);
    .color(#999);
  }

  .bank-bid-btn {
    .width(870px);
    display: flex;
    flex: 1;
    margin: 0 auto;
    padding: 40px 0;
    align-items: center;
    border-top: 2px solid @gray-body-bg;
  }

  .bank-btn {
    .size(240px, 90px);
    .bg(@main-color);
    .border-radius(18px);
    .color(#fff);
    line-height: 90px;
    .text-center;
  }

</style>
