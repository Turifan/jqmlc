<!-- 投标详情 -->
<template lang="html">
  <div class="">
        <HeaderBar :headerBar="headerBar"/>
  </div>
</template>

<script>
import HeaderBar from '@/components/common/headerBar.vue'

export default {
  name:'Invest',
  components:{
    HeaderBar
  },
  data(){
    return {
      headerBar: {
        title: '投资详情',
        imgUrl: require('../../assets/images/protocol.png'),
        path: 'protocol',
        params: {},
        goBack:true,
        showIcon:true
      }
    }
  }
}
</script>

<style lang="less" scoped>


</style>
