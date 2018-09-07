 <!-- 机器猫 -->
<template lang="html">
  <div class="">
    <Header :title="title"/>
    <div class="swiper-container" v-if="">
      <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="" :key="">
            <router-link :to="{ name: '', params: {} }">

            </router-link>
          </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <Footer />
  </div>

</template>

<script>
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import '@/plugins/swiper.min.js'
import '@/style/swiper.min.css'

export default {
  name: 'Doraemon',
  components: {
    Header,
    Footer
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

<style lang="less">
</style>
