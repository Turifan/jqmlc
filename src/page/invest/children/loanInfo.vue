<!-- 借款资料 -->
<template lang="html">
  <div class="">
    <HeaderBar :headerBar="headerBar" ></HeaderBar>
  </div>
</template>

<script>
import HeaderBar from '@/components/common/headerBar.vue'

export default {
  name: 'LoanInfo',
  components: {
    HeaderBar
  },
  data () {
    return {
      headerBar: {
        title: '借款资料',
        imgUrl: '',
        goBackUrl: require('../../../assets/images/goBack.png'),
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
  @import '../../../style/mixin.less';

</style>
