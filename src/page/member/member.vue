<!-- 会员 -->
<template lang="html">
  <div>
    <HeaderBar :header-bar="headerBar"></HeaderBar>
  </div>
</template>

<script>
import HeaderBar from '@/components/common/headerBar.vue'

export default {
  name: 'GrowValue',
  components: {
    HeaderBar
  },
  data () {
    return {
      headerBar: {
        title: '会员等级',
        imgUrl: require('../../assets/images/doubt.png'),
        goBackUrl: require('../../assets/images/goBack.png'),
        path: 'memberRule',
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
