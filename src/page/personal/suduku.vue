<!-- 我的页面-列表 -->
<template lang="html">
  <div class="">
    <div class="personalBox">
      <router-link :to="{ name: '', params: {} }">
        <div class="personalItems" v-for="(item,index) in suduku" :key="index">
          <div class="personalItem-img">
            <img :src="item.imgUrl" alt="">
          </div>
          <div class="personalItem-title">{{item.title}}</div>
          <div class="personalItem-arrow">
            <span>{{item.txt}}</span>
            <img src="../../assets/images/self-right.png" alt="">
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Suduku',
  props: ['suduku'],
  data () {
    return {}
  },
  computed: {},
  mounted () {}
}
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';

.personalBox {
  padding: 0 34px;
  background: #fff;
}

.personalItems {
  display: flex;
  flex: 1;
  height: 140px;
  justify-content: space-between;
  align-items: center;
  .fontSize(38px);
  .color(#333);
  border-bottom: 2px solid #f5f5f5;
  /*no*/
}

.personalItem-img {
  width: 60px;
  margin-right: 32px;

  img {
    width: 100%;
  }
}

.personalItem-title {
  margin-right: auto;
}

.personalItem-arrow {
  .fontSize(34px);
  .color(#999);

  img {
    .size(29px, 55px);
    margin-left: 15px;
    vertical-align: middle;
  }
}
</style>
