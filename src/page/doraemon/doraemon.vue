 <!-- 机器猫 -->
<template lang="html">
  <div class="gray-fixed gray-fixed-bg">
    <Header :title="title"/>
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
    <DoraemonList/>
    <DoraemonList/>
    <DoraemonList/>
    <Footer />
  </div>

</template>

<script>
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import DoraemonList from './doraemon_list.vue'
import '@/plugins/swiper.min.js'
import '@/style/swiper.min.css'

export default {
  name: 'Doraemon',
  components: {
    Header,
    Footer,
    DoraemonList
  },
  data() {
    return {
      title: '机器猫',

    }
  },
  computed: {

  }
}
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';


.swiper-slide{
  img{
    width: 100%;
  }
}
</style>
