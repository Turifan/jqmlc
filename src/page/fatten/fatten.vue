<!-- 发财猫 -->
<template lang="html">
  <div class="">
    <Header :title="title"/>

    <Footer :active="active" :iconClass="iconClass" :iconActive="iconActive"/>
  </div>

</template>

<script>
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'

export default {
  name: 'Fatten',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      title: '金钱猫',
      active: 'fatten',
      iconClass: {
        'nav-icon': true,
        'fatten-icon-active': false,
        'fatten-icon': true
      },
      iconActive: {
        'nav-icon': true,
        'fatten-icon-active': true,
        'fatten-icon': false
      }
    }
  },
  computed: {

  }
}
</script>

<style lang="less">
</style>
