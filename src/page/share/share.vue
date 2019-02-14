<!-- 分享有礼 -->
<template lang="html">
  <div class="">
    <HeaderBar :header-bar="headerBar" />
    <div class="gray-fixed-bg gray-fixed">
      <div class="">
        <ShareList></ShareList>
      </div>
    </div>
  </div>

</template>

<script>
import HeaderBar from '@/components/common/headerBar.vue'
import ShareList from './share_list.vue'
import { mapState } from 'vuex'

export default {
  name: 'Share',
  components: {
    HeaderBar,
    ShareList
  },
  data () {
    return {
      headerBar: {
        title: '分享有礼',
        imgUrl: require('../../assets/images/doubt.png'),
        goBackUrl: require('../../assets/images/goBack.png'),
        path: 'description',
        params: { title: 'shareAddRateRule' },
        goBack: true,
        showIcon: true
      }
    }
  },
  computed: {
    ...mapState({
      shareCurpage: ({ products }) => products.shareCurpage
    })
  },
  methods: {
    ...mapState(['getShareList'])
  },
  mounted () {
    if (this.shareCurpage === 1) {
      this.getShareList()
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../style/mixin';
</style>
