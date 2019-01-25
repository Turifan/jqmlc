<!-- 首页 -->
<template lang="html">
  <div class="">
    <div class="homeBar">
      <Header :title="title"></Header>
    </div>
    <div class="gray-body">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(slide, index) in bannerImagesList" :key="index">
          <img src="../../assets/images/swiper_default.png" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <UserFund :userFund="userFund"></UserFund>
      <HomeBid :homeInfo="homeInfo"></HomeBid>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer.vue'
import HomeBid from './home_bid.vue'
import UserFund from '@/components/common/userFund.vue'
import { mapActions, mapState } from 'vuex'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    HomeBid,
    UserFund,
    swiper,
    swiperSlide
  },
  data () {
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
      },
      swiperOption: {
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  computed: {
    ...mapState({
      bannerImagesList: ({ globalVal }) => globalVal.bannerImagesList,
      homeInfo: ({ globalVal }) => globalVal.homeInfo
    }),
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  beforeRouteEnter (to, from, next) {
    sessionStorage.path = to.fullPath
    if (sessionStorage.openid) {
      next()
    } else {
      next({
        path: '/check'
      })
    }
  },
  methods: {
    ...mapActions(['getBannerImages', 'queryHome'])
  },
  mounted () {
    if (!this.bannerImagesList.length) {
      this.getBannerImages()
    }
    this.queryHome()
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
