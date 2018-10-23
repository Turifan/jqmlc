<!-- 常见问题 -->
<template lang="html">
  <div class="">
    <HeaderBar :headerBar="headerBar"/>
  </div>
</template>

<script>
import HeaderBar from '@/components/common/headerBar.vue'

export default {
  name:'Faq',
  components: {
    HeaderBar,
  },
  data() {
    return {
      headerBar: {
        title: '常见问题',
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
