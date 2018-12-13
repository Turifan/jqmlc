<!-- 成长值 -->
<template>
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
        title: '成长值记录',
        imgUrl: require('../../assets/images/doubt.png'),
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
