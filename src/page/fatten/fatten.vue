<!-- 发财猫 -->
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
  name: 'Fatten',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      title: '发财猫',

    }
  },
  computed: {

  }
}
</script>

<style lang="less">
</style>
