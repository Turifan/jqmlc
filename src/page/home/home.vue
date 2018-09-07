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

      <div class="home-content">
        <div class="shareActivity">
          <router-link :to="{ name: 'share', params: {} }">
            <div class="home-content-tit">
              分享有礼
            </div>
            <div class="home-content-tips">
              分享好友赢加息机会
            </div>
          </router-link>
        </div>
        <div class="currentAmount">
          <router-link :to="{ name: 'current', params: {} }">
            <div class="home-content-tit">
              灵活猫资金
            </div>
            <div class="home-content-tips">
              5638.30元
            </div>
          </router-link>
        </div>
      </div>
      <HomeBid />


    </div>
    <Footer />
  </div>

</template>

<script>
import Header from '@/components/header/header.vue'
import Footer from '@/components/footer/footer.vue'
import HomeBid from './home_bid.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    HomeBid
  },
  data() {
    return {
      title: '金钱猫',

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

.home-content {
    display: flex;
    flex: 1;
    padding: 60px 0;
    align-items: center;
    background: #fff;
    .shareActivity {
        width: 50%;
        padding-left: 70px;
        border-right: 2px solid #efefef;
    }
    .currentAmount {
        width: 50%;
        padding-left: 70px;
    }
}

.home-content-tit {
    margin-bottom: 25px;
    font-size: 40px;
}

.home-content-tips {
    .fontSize(32px);
    .color(#999);
}
</style>
