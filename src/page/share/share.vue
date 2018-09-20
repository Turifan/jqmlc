<template lang="html">
  <div class="">
    <HeaderBar :header-bar="headerBar" v-if="$route.path=='/share'"/>
    <router-view></router-view>
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
      },
      // title:'分享有礼'
    }
  }
}
</script>

<style lang="css">
</style>
