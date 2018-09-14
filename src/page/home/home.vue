<!-- 首页 -->
<template lang="html">
  <div class="">
    <Header :title="title"/>
    <div class="gray-body">

      <div class="userAll">
        <div class="userAll-tit">
          总资产（元）
        </div>
        <div class="userAll-num">
          23197.23
        </div>
      </div>

      <UserFund :userFund="userFund"/>
      <HomeBid />
    </div>
    <Footer />
  </div>

</template>

<script>
import Header from '@/components/header/header.vue'
import Footer from '@/components/footer/footer.vue'
import HomeBid from './home_bid.vue'
import UserFund from '@/components/common/userFund.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    HomeBid,
    UserFund
  },
  data() {
    return {
      title: '金钱猫',
      userFund: {
        left: {
          title: '分享有礼',
          tips: '分享好友赢加息机会',
          path: 'share'
        },
        right: {
          title: '灵活猫资金',
          tips: '0.00元',
          path: 'current'
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';
@import '../../style/common.less';

.userAll {
    padding: 49px 0 60px;
    background: @main-color;
    text-align: center;
    color: #fff;
    .userAll-tit {
        font-size: 42px;
    }
    .userAll-num {
        font-size: 112px;
    }
}
</style>
