<template lang="html">
  <div class="">
    <div class="home-bid" v-if="homeInfo">
      <!-- 月盈猫 -->
      <div class="monthProfit">
        <div class="home-bid-tit" @click.stop.prevent="$router.push('profit')">
          {{monthProfit}}
        </div>
        <div class="novice-bid-detail" @click.stop.prevent="$router.push({name:'monthProfit',params:{id:homeInfo.profitBiao.id}})">
          <div class="home-bid-title">
            <div>{{homeInfo.profitBiao.typeName}}</div>
            <div class="projectName">{{homeInfo.profitBiao.projectName}}</div>
          </div>
          <div class="profit-bid-des">
            <div>
              <div class="">
                起购金额
              </div>
              <div class="profit-rate-txt">{{homeInfo.profitBiao.leastAmount}}元</div>
            </div>
            <div>
              <div class="profit-rate-tit">年化利率(%)</div>
              <div class="profit-rate-num orange">{{homeInfo.profitBiao.annualRate}}-{{homeInfo.profitBiao.maxRate}}</div>
            </div>
            <div>
              <div class="">可投资金</div>
              <div class="profit-rate-txt">{{homeInfo.profitBiao.surMoney}}</div>
            </div>
          </div>
          <div class="novice-btn" @click.stop.prevent="$router.push({name:'monthProfit',params:{id:homeInfo.profitBiao.id}})">
            购买
          </div>
        </div>
      </div>
      <!-- 新手标 -->
      <div class="novice-bid">
        <div class="home-bid-tit">
          {{noviceTitle}}
        </div>
        <div class="novice-bid-detail" @click.stop.prevent="$router.push({name:'invest',params:{fatId:homeInfo.noviceBiao.id}})">
          <div class="home-bid-title">
            <div>{{homeInfo.noviceBiao.typeName}}</div>
            <div class="projectName">{{homeInfo.noviceBiao.activityDesc}}</div>
          </div>
          <div class="novice-rate-tit text-center">
            年化利率(%)
          </div>
          <div class="novice-bid-rate text-center">
            {{homeInfo.noviceBiao.rate}}
            <span v-if="homeInfo.noviceBiao.activityAddRate>0" class="activityAddRate">{{homeInfo.noviceBiao.activityAddRate}}</span>
          </div>
          <div class="novice-bid-des">
            <div class="text-left">
              期限{{homeInfo.noviceBiao.numDays}}天
            </div>
            <div class="text-center">
              {{homeInfo.noviceBiao.leastAmount}}元起投
            </div>
            <div class="text-right">
              限购{{homeInfo.noviceBiao.maxAmout}}元
            </div>
          </div>
          <div class="novice-btn-box">
            <div class="novice-btn" @click.stop.prevent="$router.push({name:'invest',params:{fatId:homeInfo.noviceBiao.id}})">
              购买
            </div>
          </div>
        </div>
      </div>
      <!-- 直投标 -->
      <div class="bank-bid">
        <div class="home-bid-tit">
          {{bankTitle}}
        </div>

        <div class="bank-bid-detail" @click.stop.prevent="$router.push({name:'invest',params:{fatId:bank.id}})" v-for="bank in homeInfo.bankCardBiao" :key="bank.id">
          <div class="home-bid-title">
            <div>{{bank.typeName}}</div>
            <div class="projectName">{{bank.activityDesc}}</div>
          </div>
          <div class="bank-bid-info">
            <div class="bank-bid-des">
              <div class="bank-bid-rate">
                {{bank.rate}}<span v-if="bank.activityAddRate>0" class="activityAddRate">{{bank.activityAddRate}}</span>
              </div>
              <div class="bank-bid-rateTit">
                年化利率(%)
              </div>
            </div>
            <div class="bank-bid-date">
              <div class="bank-bid-days">
                期限{{bank.numDays}}天
              </div>
              <div class="bank-bid-rule">
                {{bank.leastAmount}}元起投 限购{{bank.maxAmout}}元
              </div>
            </div>
          </div>
          <div class="bank-bid-btn">
            <div class="bank-bid-canInvest">
              可投资金 <span class="orange">{{bank.surMoney}}</span>元
            </div>
            <div class="bank-btn" @click.stop.prevent="$router.push({name:'invest',params:{fatId:bank.id}})">
              购买
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoviceBid',
  props: ['homeInfo'],
  data () {
    return {
      monthProfit: '月盈猫',
      noviceTitle: '新手标',
      bankTitle: '直投标'
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
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 0 53px;
  font-size: 44px;
  font-weight: 700;
}

.projectName {
  font-size: 32px;
  font-weight: normal;
  .color(@main-color);
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
