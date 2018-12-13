<!-- 红包卡券 -->
<template lang="html">
  <div class="">
    <HeaderBar :headerBar="headerBar" />
  </div>
</template>

<script>
import HeaderBar from '@/components/common/headerBar.vue'

export default {
  name: 'CashTickets',
  components: {
    HeaderBar
  },
  data () {
    return {
      headerBar: {
        title: '红包卡券',
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
