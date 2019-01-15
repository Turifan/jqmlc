<!-- 成长值 -->
<template>
  <div>
    <HeaderBar :header-bar="headerBar"></HeaderBar>
    <div class="gray-fixed">
      <div class="growValueTitle">
        <div>成长来源</div>
        <div>时间</div>
        <div>成长记录</div>
      </div>
      <div class="growValueList">
        <div class="growValueItem">
          <div>签到</div>
          <div>2018-9-13</div>
          <div>+1</div>
        </div>
        <div class="growValueItem">
          <div>签到</div>
          <div>2018-9-13</div>
          <div>+1</div>
        </div>
        <div class="growValueItem">
          <div>签到</div>
          <div>2018-9-13</div>
          <div>+1</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderBar from '@/components/common/headerBar.vue'

export default {
  name: 'GrowValue',
  components: {
    HeaderBar
  },
  data () {
    return {
      headerBar: {
        title: '成长值记录',
        imgUrl: require('../../assets/images/doubt.png'),
        goBackUrl: require('../../assets/images/goBack.png'),
        path: '',
        params: {},
        goBack: true,
        showIcon: false
      }
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../style/mixin.less';

.growValueTitle {
  height: 108px;
  padding: 0 58px 0 62px;
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  .fontSize(34px);
  .color(#999);
}

.growValueList {
  padding: 0 35px;
  border-top: 2px solid #efefef;
  // border-bottom: 2px solid #efefef;
}

.growValueItem {
  display: flex;
  flex: 1;
  height: 138px;
  padding: 0 26px 0 22px;
  justify-content: space-between;
  align-items: center;
  .fontSize(38px);
  border-bottom: 2px solid #efefef;
}
</style>
