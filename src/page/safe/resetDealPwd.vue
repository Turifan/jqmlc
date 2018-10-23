<!-- 修改交易密码 -->
<template lang="html">
  <div class="">
    <HeaderBar :headerBar="headerBar"/>
    <div class="gray-fixed">
    </div>

  </div>
</template>

<script>
import HeaderBar from '@/components/common/headerBar.vue'

export default {
  name: 'ResetDealPwd',
  components: {
    HeaderBar,
  },
  data() {
    return {
      headerBar: {
        title: '修改交易密码',
        imgUrl: '',
        path: '',
        params: {
        },
        goBack:true,
        showIcon:false
      },
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';


</style>
