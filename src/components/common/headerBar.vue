<template lang="html">
<div class="">
  <div class="header-bar">
    <div class="goBack">
      <img src="../../assets/images/goBack.png" alt="">
    </div>
    <div class="header-bar-title">
      {{headerBar.title}}
    </div>
    <router-link tag="div" :to="{ name: 'FatHistory', params: {days:30} }" class="header-bar-icon">
      <img :src="headerBar.imgUrl" alt="">
    </router-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'HeaderBar',
  data() {
    return {
      headerBar:this.$attrs.headerBar
    }
  },
  computed:{

  },
  mounted(){

  }
}
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';

.header-bar{
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

.goBack{
  .size(34px,60px);
  img{
    width: 100%;
  }
}

.header-bar-icon{
  .size(60px,60px);
  img{
    width: 100%;
  }
}
</style>
