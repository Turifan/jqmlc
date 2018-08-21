<!-- 首页 -->
<template lang="html">
  <div class="">
    <Header/>

    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/header/header.vue'
import Footer from '@/components/footer/footer.vue'

export default {
  name: 'Index',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="less">
</style>
