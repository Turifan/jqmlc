<!-- 首页 -->
<template lang="html">
  <div class="">
    <div class="homeBar">
      <div class="home-title">
        金钱猫
      </div>
      <router-link tag="div" :to="{ name: 'sign', params: {} }" class="sign">
        <img src="../../assets/images/sign.png" alt="">
      </router-link>
    </div>
    <div class="gray-body">
      <router-link :to="{ name: 'assets', params: {} }" tag="div" class="userAll">
        <div class="userAll-tit">
          总资产（元）
        </div>
        <div class="userAll-num">
          23197.23
        </div>
      </router-link>
      <UserFund :userFund="userFund"/>
      <HomeBid />
    </div>
    <Footer />
  </div>

</template>

<script>
import Footer from '@/components/footer/footer.vue'
import HomeBid from './home_bid.vue'
import UserFund from '@/components/common/userFund.vue'

export default {
  name: 'Home',
  components: {
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
      },
      // headerBar: {
      //   title: '金钱猫',
      //   imgUrl: require('../../assets/images/sign.png'),
      //   path: 'sign',
      //   params: {
      //     // days:30
      //   },
      //   goBack:false,
      //   showIcon:true
      // }
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';

.homeBar{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: 130px;
  background: @main-color;
  z-index: 1000;
}

.home-title{
  .fontSize(52px);
  width: 100%;
  // padding: 42px 0;
  height: 130px;
  line-height: 130px;
  .white;
  .text-center;
}

.sign{
  position: absolute;
  right: 40px;
  .size(84px,65px);
  bottom: 32px;
  img{
    width: 100%;
  }
}

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
