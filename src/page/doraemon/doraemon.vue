 <!-- 机器猫 -->
<template lang="html">
  <div class="gray-fixed gray-fixed-bg">
    <Header :title="title"></Header>
    <DoraemonList :doraemonList="doraemonList"></DoraemonList>
    <Footer></Footer>
  </div>

</template>

<script>
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import DoraemonList from './doraemon_list.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Doraemon',
  components: {
    Header,
    Footer,
    DoraemonList
  },
  data () {
    return {
      title: '机器猫'
    }
  },
  computed: {
    ...mapState({
      doraemonList: ({ products }) => products.doraemonList
    })
  },
  methods: {
    ...mapActions(['getDoraemonList'])
  },
  mounted () {
    if (this.doraemonList.length === 0) {
      this.getDoraemonList()
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';
</style>
