<template lang="html">
  <div class="">
      <HeaderBar :headerBar="headerBar"/>
  </div>
</template>

<script>
import HeaderBar from '@/components/common/headerBar.vue'

export default {
  name:'Share',
  components: {
    HeaderBar,
  },
  data() {
    return {
      headerBar: {
        title: '分享有礼',
        imgUrl: require('../../assets/images/doubt.png'),
        path: 'shareInfo',
        params: {
        },
        goBack:true,
        showIcon:true
      }
    }
  }
}
</script>

<style lang="css">
</style>
