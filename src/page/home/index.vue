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
          <div class="home-content-tit">
            分享有礼
          </div>
          <div class="home-content-tips">
            分享好友赢加息机会
          </div>
        </div>
        <div class="currentAmount">
          <div class="home-content-tit">
            灵活猫资金
          </div>
          <div class="home-content-tips">
            5638.30元
          </div>
        </div>
      </div>
      <NoviceBid />


    </div>
    <Footer :active="active" :iconClass="iconClass" :iconActive="iconActive"/>
  </div>

</template>

<script>
import Header from '@/components/header/header.vue'
import Footer from '@/components/footer/footer.vue'
import NoviceBid from './novice_bid.vue'

export default {
  name: 'Index',
  components: {
    Header,
    Footer,
    NoviceBid
  },
  data() {
    return {
      title: '金钱猫',
      active: 'home',
      iconClass: {
        'nav-icon': true,
        'home-icon-active': false,
        'home-icon': true
      },
      iconActive: {
        'nav-icon': true,
        'home-icon-active': true,
        'home-icon': false
      }
    }
  }
}
</script>

<style lang="less">
@import '../../style/mixin.less';
@import '../../style/common.less';

.userAll {
  padding: 49px 0 60px;
  background: @main-color;
  text-align: center;
  color: #fff;
  .userAll-tit{
    font-size: 42px;
  }
  .userAll-num{
    font-size: 112px;
  }
}

.home-content{
  display: flex;
  flex: 1;
  padding: 60px 0;
  align-items: center;
  background: #fff;
  .shareActivity{
    width: 50%;
    padding-left: 70px;
    border-right: 2px solid #efefef;
  }
  .currentAmount{
    width: 50%;
    padding-left: 70px;
  }
}

.home-content-tit{
  margin-bottom: 25px;
  font-size: 40px;
}

.home-content-tips{
  .fontSize(32px);
  .color(#999);
}

</style>
