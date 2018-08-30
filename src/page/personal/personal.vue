<!-- 我的  -->
<template lang="html">
  <Header :title="title"/>

  <Footer :active="active" :iconClass="iconClass" :iconActive="iconActive"/>
</template>

<script>
import Header from '@/component/header/header'
import Footer from '@/components/footer/footer'

export default {
  name: 'Personal',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      title: '金钱猫',
      active: 'personal',
      iconClass: {
        'nav-icon': true,
        'personal-icon-active': false,
        'personal-icon': true
      },
      iconActive: {
        'nav-icon': true,
        'personal-icon-active': true,
        'personal-icon': false
      }
    }
  },
  computed: {

  }
}
</script>

<style lang="less">
</style>
