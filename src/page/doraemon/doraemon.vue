<!-- 机器猫 -->
<template lang="html">
  <Header :title="title"/>

  <Footer :active="active" :iconClass="iconClass" :iconActive="iconActive"/>
</template>

<script>
import Header from '@/component/header/header'
import Footer from '@/components/footer/footer'

export default {
  name: 'Doraemon',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      title: '机器猫',
      active: 'doraemon',
      iconClass: {
        'nav-icon': true,
        'doraemon-icon-active': false,
        'doraemon-icon': true
      },
      iconActive: {
        'nav-icon': true,
        'doraemon-icon-active': true,
        'doraemon-icon': false
      }
    }
  },
  computed: {

  }
}
</script>

<style lang="less">
</style>
