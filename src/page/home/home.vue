<!-- 首页 -->
<template lang="html">
  <div class="">
    <div class="homeBar">
      <Header :title="title"></Header>
    </div>
    <div class="gray-body">
      <div class="swiper-container" v-if="">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="" :key="">
            <router-link :to="{ name: '', params: {} }">
              <img src="../../assets/images/swiper_default.png" alt="">
            </router-link>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <UserFund :userFund="userFund"></UserFund>
      <HomeBid></HomeBid>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/header/header'
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
          title: '签到',
          tips: '每日签到获得猫粮',
          path: 'sign'
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';

.homeBar {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: 130px;
  background: @main-color;
  z-index: 1000;
}

.home-title {
  .fontSize(52px);
  width: 100%;
  // padding: 42px 0;
  height: 130px;
  line-height: 130px;
  .white;
  .text-center;
}

.swiper-slide {
  img {
    width: 100%;
  }
}

.sign {
  position: absolute;
  right: 40px;
  .size(84px, 65px);
  bottom: 32px;

  img {
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
