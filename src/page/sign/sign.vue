<template lang="html">
  <div class="">
    <HeaderBar :headerBar="headerBar"/>
  
  </div>
</template>

<script>
import HeaderBar from '@/components/common/headerBar.vue'

export default {
  name: 'Sign',
  components: {
    HeaderBar,
  },
  data() {
    return {
      headerBar: {
        title: '签到',
        imgUrl: '',
        path: '',
        params: {
        },
        goBack:true,
        showIcon:false
      }
    }
  }
}
</script>

<style lang="less" scoped>


</style>
