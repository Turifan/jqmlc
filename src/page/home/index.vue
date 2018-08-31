<!-- 首页 -->
<template lang="html">
  <div class="">
    <Header :title="title"/>
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
        <div class="">
          分享有礼
        </div>
        <div class="">
          分享好友赢加息机会
        </div>
      </div>
      <div class="currentAmount">
        <div class="">
          灵活猫资金
        </div>
        <div class="">
          5638.30元
        </div>
      </div>
    </div>
    <Footer :active="active" :iconClass="iconClass" :iconActive="iconActive"/>
  </div>
</template>

<script>
import Header from '@/components/header/header.vue'
import Footer from '@/components/footer/footer.vue'

export default {
  name: 'Index',
  components: {
    Header,
    Footer
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
</style>
