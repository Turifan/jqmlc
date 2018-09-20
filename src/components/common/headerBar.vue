<template lang="html">
<div class="">
  <div class="header-bar">
    <div class="goBack" @click="goBack" v-if="headerBar.goBack">
      <img src="../../assets/images/goBack.png" alt="">
    </div>
    <div class="header-bar-title">
      {{headerBar.title}}
    </div>
    <router-link tag="div" :to="{ name: headerBar.path, params: headerBar.params }" class="header-bar-icon" v-if="headerBar.showIcon">
      <img :src="headerBar.imgUrl" alt="">
    </router-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'HeaderBar',
  props:['headerBar','headerTitle'],
  data() {
    return {
      // headerBar: this.$attrs.headerBar
    }
  },
  methods:{
    goBack(){
      this.$router.go(-1);
    }
  },
  computed: {

  },
  mounted() {

  }
}
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';

.header-bar {
    padding: 35px;
    height: 60px;
    width: 1010px;
    .bg(@main-color);
    .color(#fff);
    .fontSize(52px);
    .text-center;
    overflow: hidden;
}

.goBack {
    .size(60px,60px);
    .pull-left;
    img {
        width: auto;
        height: 100%;
    }
}

.header-bar-title{
  // clear: both;
  // display: inline-block;
  .pull-left;
  width: 890px;
  text-align: center;
  margin: 0 auto;
}

.header-bar-icon {
    .size(60px,60px);
    .pull-right;
    img {
        width: auto;
        height: 100%;
    }
}
</style>
