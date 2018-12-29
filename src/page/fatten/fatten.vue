<!-- 发财猫 -->
<template lang="html">
  <div class="">
    <Header :title="title"></Header>
    <div class="gray-body">
      <div class="pledge">
          <img src="../../assets/images/pledge.png" alt="">
      </div>
      <router-link class="autoInvest" :to="{ name: 'autoInvest', params: '' }" tag="div">
        <div class="autoInvest-tit">自动投标</div>
        <div class="gray-font">未开启</div>
      </router-link>
      <FattenProduct></FattenProduct>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import FattenProduct from './fatten_product.vue'

export default {
  name: 'Fatten',
  components: {
    Header,
    Footer,
    FattenProduct
  },
  data () {
    return {
      title: '发财猫'
    }
  },
  computed: {}
}
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';

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
.userInfo {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.autoInvest {
  display: flex;
  flex: 1;
  margin-bottom: 16px;
  align-items: center;
  justify-content: space-between;
  height: 120px;
  .bg(#fff);
  padding: 0 35px;
  line-height: 120px;
  .fontSize(40px);
  .color(#333);
}

.history {
  .height(120px);
  padding: 0 35px;
  .bg(#fff);
  .fontSize(36px);
  line-height: 120px;
}
</style>
