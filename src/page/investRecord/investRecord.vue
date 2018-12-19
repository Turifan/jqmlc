<!-- 我的投资记录  -->
<template>
  <div>
    <HeaderBar :header-bar="headerBar"></HeaderBar>
  </div>
</template>
<script>
import HeaderBar from '@/components/common/headerBar.vue'

export default {
  name: 'InvestRecord',
  components: {
    HeaderBar
  },
  data () {
    return {
      headerBar: {
        title: '投资记录',
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
