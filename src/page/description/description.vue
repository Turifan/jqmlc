<!-- h5页面 -->
<template lang="html">
  <div class="">
    <HeaderBar :header-bar="headerBar"></HeaderBar>
  </div>
</template>

<script>
import HeaderBar from '@/components/common/headerBar.vue'

export default {
  name: 'Description',
  components: {
    HeaderBar
  },
  data () {
    return {
      headerBar: {
        title: 'h5',
        imgUrl: '',
        goBackUrl: require('../../assets/images/goBack.png'),
        path: '',
        params: {},
        goBack: true,
        showIcon: false
      }
    }
  }
}
</script>

<style lang="less" scoped>
</style>
