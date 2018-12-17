<!-- 红包规则 -->
<template lang="html">
  <div class="">
    <HeaderBar :header-bar="headerBar"></HeaderBar>
  </div>
</template>

<script>
import HeaderBar from '@/components/common/headerBar.vue'

export default {
  name: 'AboutTicket',
  components: {
    HeaderBar
  },
  data () {
    return {
      headerBar: {
        title: '规则',
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
