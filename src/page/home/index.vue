<!-- 首页 -->
<template lang="html">
  <div class="">
    <Header :title="title"/>
    
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
</style>
