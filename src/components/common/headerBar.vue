<template lang="html">
  <div class="">
    <div class="header-bar">
      <div class="goBack" @click="goBack" v-if="headerBar.goBack">
        <img :src="headerBar.goBackUrl" alt="">
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
  props: ['headerBar'],
  data () {
    return {
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  },
  computed: {

  },
  mounted () {

  }
}

</script>

<style lang="less" scoped>
  @import '../../style/mixin.less';

  .header-bar {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    padding: 0 35px;
    height: 131px;
    .bg(@main-color);
    .color(#fff);
    .fontSize(52px);
    .text-center;
    overflow: hidden;
    position: fixed;
    left: 0;
    right: 0;
    z-index: 1000;
  }

  .goBack {
    .size(60px, 60px);
    // .pull-left;

    img {
      width: auto;
      height: 100%;
    }
  }

  .header-bar-title {
    width: 890px;
    text-align: center;
    margin: 0 auto;
  }

  .header-bar-icon {
    .size(60px, 60px);

    img {
      width: auto;
      height: 100%;
    }
  }

</style>
