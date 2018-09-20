<template lang="html">
  <div class="">
    <HeaderBar :header-bar="headerBar"/>
    <div class="gray-bg">
      <FattenList />
    </div>
  </div>

</template>

<script>
import HeaderBar from '@/components/common/headerBar.vue'
import FattenList from './fatten_list.vue'

export default {
  name: 'Fat',
  components: {
    HeaderBar,
    FattenList
  },
  data() {
    return {
      headerBar: {
        title: '汤姆猫',
        imgUrl: require('../../assets/images/fat_history.png'),
        path: 'fatHistory',
        params: {
          days:30
        },
        goBack:true,
        showIcon:true
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';

.header-bar {
    display: flex;
    flex: 1;
    padding: 0 35px;
    height: 130px;
    // line-height: 130px;
    align-items: center;
    justify-content: space-between;
    .bg(@main-color);
    .color(#fff);
    .fontSize(52px);
}

.goBack {
    .size(34px,60px);
    img {
        width: 100%;
    }
}

.header-bar-icon {
    .size(60px,60px);
    img {
        width: 100%;
    }
}
</style>
