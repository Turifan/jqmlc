<!-- 我的  -->
<template lang="html">
  <div class="">
    <Header :title="title"/>

    <Footer />
  </div>

</template>

<script>
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'

export default {
  name: 'Personal',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      title: '我的',

    }
  },
  computed: {

  }
}
</script>

<style lang="less">
</style>
