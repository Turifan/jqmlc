<!-- 我的页面-九宫格组件 -->
<template lang="html">
  <div class="">
    <div class="personalBox">
      <div :class="[{cellMiddle:item.isMiddle},{personalCell:true}]" v-for="(item,index) in suduku" :key="index">
        <router-link :to="{ name: item.path, params: {} }">
          <div class="cellContainer">
            <div class="personalCell_img">
              <img :src="item.imgUrl" alt="">
            </div>
            <div class="">
              {{item.title}}
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Suduku',
  data() {
    return {
      // suduku:{}
    }
  },
  computed: {
    suduku() {
      return this.$attrs.suduku;
    }
  },
  mounted() {
    // suduku() {
    //   return this.$attrs.suduku;
    // }
    // this.suduku = this.$attrs.suduku;
  }
}
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';

.personalBox {
    display: flex;
    box-sizing: border-box;
    flex-flow: wrap;
    align-items: center;
    justify-content: space-between;
}

.cellContainer{
  .size(100%,100%);
}

.personalCell {
    .size(100%/3,360px);
    box-sizing: border-box;
    .text-center;
    border-bottom: 2px solid #ebebeb;
    .fontSize(38px);
    .personalCell_img {
        padding-top: 107px;
        padding-bottom: 64px;
        height: 90px;
        img {
            max-height: 100%;
            width: auto;
        }
    }
}

.cellMiddle {
    border-left: 2px solid #ebebeb;
    border-right: 2px solid #ebebeb;
}
</style>
