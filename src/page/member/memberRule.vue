<!-- 会员规则 -->
<template lang="html">
  <div>
    <HeaderBar :header-bar="headerBar"></HeaderBar>
  </div>
</template>

<script>
import HeaderBar from '@/components/common/headerBar.vue'

export default {
  name: 'MemberRule',
  components: {
    HeaderBar
  },
  data () {
    return {
      headerBar: {
        title: '会员规则',
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
