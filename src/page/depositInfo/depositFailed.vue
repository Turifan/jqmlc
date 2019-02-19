<template>
  <div>
    <headerBar :header-bar="headerBar"></headerBar>
  </div>
</template>

<script>
import HeaderBar from '@/components/common/headerBar.vue'

export default {
  name: 'depositFailed',
  components: {
    HeaderBar
  },
  data () {
    return {
      headerBar: {
        title: '提现详情',
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
