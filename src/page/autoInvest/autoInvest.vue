<!-- 自动投标 -->
<template>
  <div>
    <HeaderBar :header-bar="headerBar"></HeaderBar>
  </div>
</template>
<script>
import HeaderBar from '@/components/common/headerBar.vue'

export default {
  name: 'AutoInvest',
  components: {
    HeaderBar
  },
  data () {
    return {
      headerBar: {
        title: '全部投资',
        imgUrl: require('../../assets/images/doubt.png'),
        goBackUrl: require('../../assets/images/goBack.png'),
        path: '',
        params: {},
        goBack: true,
        showIcon: true
      }
    }
  }

}

</script>
<style lang="less" scoped>

</style>
