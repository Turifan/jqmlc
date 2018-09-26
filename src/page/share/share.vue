<!-- 分享有礼 -->
<template lang="html">
  <div class="">
    <HeaderBar :header-bar="headerBar" />
    <div class="gray-fixed-bg gray-fixed">
      <div class="">
        <ShareList/>
          <ShareList/>
            <ShareList/>
              <ShareList/>
                <ShareList/>
                  <ShareList/>
                    <ShareList/>
                      <ShareList/>
      </div>
    </div>
  </div>

</template>

<script>
import HeaderBar from '@/components/common/headerBar.vue'
import ShareList from './share_list.vue'

export default {
  name: 'Share',
  components: {
    HeaderBar,
    ShareList
  },
  data() {
    return {
      headerBar: {
        title: '分享有礼',
        imgUrl: require('../../assets/images/doubt.png'),
        path: 'shareInfo',
        params: {},
        goBack: true,
        showIcon: true
      }
    }
  }
}
</script>

<style lang="less">
@import '../../style/mixin';
</style>
