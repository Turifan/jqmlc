<template lang="html">
  <div class="">
      <HeaderBar :header-bar="headerBar"/>
  </div>
</template>

<script>
import HeaderBar from '@/components/common/headerBar.vue'

export default {
  name:'CurrentInfo',
  components: {
    HeaderBar,
  },
  data() {
    return {
      headerBar: {
        title: '灵活猫介绍',
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
</style>
