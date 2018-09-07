<!-- 发财猫 -->
<template lang="html">
  <div class="">
    <Header :title="title"/>
    <div class="gray-body">
      <div class="pledge">
          <img src="../../assets/images/pledge.png" alt="">
      </div>
      <div class="userInfo">
        <router-link :to="{ name: 'balance', params: {} }">
          <div class="balance">
            <div class="userInfo-tit">余额</div>
            <div class="userInfo-info">827321.32</div>
            <div class="right-arrow">

            </div>
          </div>
        </router-link>
        <router-link :to="{ name: 'autoInvest', params: {} }">
          <div class="autoInvest">
            <div class="userInfo-tit">
              自动投标
            </div>
            <div class="userInfo-info">
              已开启
            </div>
            <div class="right-arrow">

            </div>
          </div>
        </router-link>

      </div>

      <FattenList/>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import FattenList from './fatten_list.vue'

export default {
  name: 'Fatten',
  components: {
    Header,
    Footer,
    FattenList
  },
  data() {
    return {
      title: '发财猫',

    }
  },
  computed: {

  }
}
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';
@import '../../style/common.less';

.pledge {
    width: 100%;
    margin: 0 auto;
    img {
        display: block;
        width: 100%;
        margin: 0;
        padding: 0;
    }
}
.userInfo{
  margin-bottom: 20px;
}
.balance {
    display: flex;
    flex: 1;
    align-items: center;
    height: 120px;
    .bg(#fff);
    padding: 0 35px;
    line-height: 120px;
    .fontSize(40px);
}

.autoInvest {
    .balance;
    border-top: 2px solid @gray-body-bg;
}

.userInfo-tit{
  width: 225px;
}
.userInfo-info{
  .width(766px);
  .color(@main-color);
}

.right-arrow{
  width: 23px;
  height: 42px;
  background: url('../../assets/images/right.png') no-repeat;
  background-size: 23px 42px;
}


</style>
