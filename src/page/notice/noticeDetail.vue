<!-- 公告  -->
<template>
  <div>
    <HeaderBar :header-bar="headerBar"></HeaderBar>
    <div class="gray-fixed gray-fixed-bg">

    </div>
  </div>
</template>
<script>
import HeaderBar from '@/components/common/headerBar.vue'

export default {
  name: 'NoticeDetail',
  components: {
    HeaderBar
  },
  data () {
    return {
      headerBar: {
        title: '公告',
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
