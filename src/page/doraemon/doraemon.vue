 <!-- 机器猫 -->
<template lang="html">
  <div class="gray-fixed gray-fixed-bg">
    <Header :title="title"/>

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
  data () {
    return {
      title: '机器猫'
    }
  },
  computed: {}
}
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';
</style>
