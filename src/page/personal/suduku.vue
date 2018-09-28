<!-- 我的页面-九宫格组件 -->
<template lang="html">
  <div class="">
    <div class="personalBox">
      <div :class="[{cellMiddle:item.isMiddle},{personalCell:true}]" v-for="(item,index) in suduku" :key="index">
        <router-link :to="{ name: item.path, params: {} }">
          <div class="cellContainer">
            <div class="personalCell_img">
              <img :src="item.imgUrl" alt="" :class="item.style">
            </div>
            <div class="personalCell_tit">
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

.cellContainer {
    .size(100%,100%);
}

.personalCell {
    .size(100%/3,360px);
    box-sizing: border-box;
    .text-center;
    border-bottom: 2px solid #ebebeb;
    .fontSize(38px);
    .personalCell_img {
        display: flex;
        flex: 1;
        height: 200px;
        align-items: flex-end;
        justify-content: center;
    }
    .personalCell_tit {
        padding: 60px 0 63px;
    }
}

.cellMiddle {
    border-left: 2px solid #ebebeb;
    border-right: 2px solid #ebebeb;
}

.luckdraw {
    .size(72px,91px);
}

.task {
    .size(90px,91px);
}
.assets {
    .size(107px,80px);
}
.expGold {
    .size(74px,91px);
}

.catcoin {
    .size(65px,88px);
}

.investRecord {
    .size(72px,87px);
}

.houseKeeper {
    .size(85px,102px);
}

.cashTickets {
    .size(107px,74px);
}

.safe {
    .size(75px,91px);
}

.aboutUs {
    .size(81px,98px);
}

.faq {
    .size(86px,98px);
}
</style>
