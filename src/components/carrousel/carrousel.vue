<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide v-for="(slide, index) in swiperSlides"
                    :key="index">I'm Slide {{ slide }}</swiper-slide>
      <div class="swiper-pagination"
           slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'carrousel',
  props: ['swiperSlides'],
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
</style>
