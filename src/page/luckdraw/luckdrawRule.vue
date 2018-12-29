<!-- 抽奖号码规则 -->
<template lang="html">
  <div class="">
    <HeaderBar :headerBar="headerBar"></HeaderBar>
    <div class="gray-fixed gray-fixed-bg">

    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/common/headerBar.vue'

export default {
  name: 'LuckdrawRule',
  components: {
    HeaderBar
  },
  data () {
    return {
      headerBar: {
        title: '抽奖规则',
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
  @import '../../style/mixin.less';

</style>
