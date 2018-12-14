<!-- 最新公告  -->
<template>
  <div>
    <HeaderBar :header-bar="headerBar"></HeaderBar>
    <div class="gray-fixed">
      <div class=""></div>
    </div>
  </div>
</template>
<script>
import HeaderBar from '@/components/common/headerBar.vue'

export default {
  name: 'Notice',
  components: {
    HeaderBar
  },
  data () {
    return {
      headerBar: {
        title: '最新公告',
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
