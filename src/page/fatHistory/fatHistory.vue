<template lang="html">
  <div class="">
    <HeaderBar :headerBar="headerBar" />
  </div>
</template>

<script>
import HeaderBar from '@/components/common/headerBar.vue'

export default {
  name: 'FatHistory',
  components: {
    HeaderBar
  },
  data () {
    return {
      headerBar: {
        title: '结束项目',
        imgUrl: require('../../assets/images/fat_history.png'),
        goBackUrl: require('../../assets/images/goBack.png'),
        path: 'fatHistory',
        params: {
          days: 30
        },
        goBack: true,
        showIcon: false
      }
    }
  }
}

</script>

<style lang="less" scoped>
</style>
