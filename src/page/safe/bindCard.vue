<!-- 绑定银行卡 -->
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
  name: 'BindCard',
  components: {
    HeaderBar,
  },
  data() {
    return {
      headerBar: {
        title: '绑定银行卡',
        imgUrl: '',
        goBackUrl: require('../../assets/images/goBack.png'),
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
