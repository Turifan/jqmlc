<!-- 月盈猫购买 -->
<template>
  <div>
    <HeaderBar :header-bar="headerBar"></HeaderBar>
  </div>
</template>
<script>
import HeaderBar from '@/components/common/headerBar.vue'

export default {
  name: 'monthProfit',
  components: {HeaderBar},
  data () {
    return {
      headerBar: {
        title: '购买月盈猫',
        imgUrl: require('../../assets/images/doubt.png'),
        goBackUrl: require('../../assets/images/goBack.png'),
        path: 'monthProfitInfo',
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
