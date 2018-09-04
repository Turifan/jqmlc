<template lang="html">
  <div class="">
    <div class="home-bid">
      <div class="novice-bid">
        <div class="home-bid-tit">
          {{noviceTitle}}
        </div>
        <div class="novice-bid-detail">
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
            <div class="">
              期限30天
            </div>
            <div class="">
              100元起投
            </div>


            <div class="">
              限购5000元
            </div>
          </div>
          <div class="novice-btn">
            购买
          </div>
        </div>
      </div>
      <div class="bank-bid">
        <div class="home-bid-tit">
          {{bankTitle}}
        </div>
        <div class="bank-bid-detail">
          <div class="home-bid-title">
            车贷0074-银行卡标
          </div>
          <div class="bank-bid-info">
            <div class="">
              <div class="bank-bid-rate">
                16
              </div>
              <div class="">
                年化利率(%)
              </div>
            </div>
            <div class="bank-bid-date">
              <div class="">
                期限30天
              </div>
              <div class="">
                100元起投 限购5000元
              </div>
            </div>
          </div>
          <div class="">
            <div class="">
              可投资金 <span>2000000.00元</span>
            </div>
            <div class="bank-btn">
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
  data() {
    return {
      noviceTitle: '新手标',
      bankTitle: '银行卡标'
    }
  },

}
</script>

<style lang="less">
@import '../../style/mixin.less';
@import '../../style/common.less';

.home-bid {
    padding: 0 15px;
}

.home-bid-tit {
    margin: 30px 0 20px;
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
    padding-left: 53px;
    font-size: 44px;
    font-weight: 700;
}

.novice-bid-detail {
    .home-bid-box;
    padding: 50px 0;

}

.novice-rate-tit{
  margin: 80px auto 50px;
  font-size: 42px;
  .color(#666);
}

.bank-bid-detail {
    .home-bid-box;
    padding: 50px 0 40px;
}
</style>
