<!-- 猫粮 -->
<template lang="html">
  <div class="">
    <HeaderBar :headerBar="headerBar"></HeaderBar>
    <div class="gray-fixed gray-fixed-bg">
      <div class="grainImg">
        <img src="../../assets/images/grainCat.png" alt="" class="img-responsive">
      </div>
      <div class="grainNum">
        <div class="grainSum">
          <div class="grainSumTit">
            <div class="ownGrain">我拥有的猫粮</div>
            <div class="checkGrainUsed brandColor">查看使用记录</div>
          </div>
          <div class="grainNumber">25000</div>
        </div>
      </div>
      <!-- 猫粮描述 -->
      <div class="grainContainer">
        <div class="grainDesc">
          <div class="grainQuestion">
            <div class="grainQ">
              Q
            </div>
            <div class="grainQtext">
              猫粮是什么
            </div>
          </div>
          <div class="grainAnswer brandColor">
            猫粮是金钱猫平台推出的集原先体验金与猫币于一身的超级积分
          </div>
          <!--  -->
          <div class="grainQuestion">
            <div class="grainQ">
              Q
            </div>
            <div class="grainQtext">
              猫粮获得途径
            </div>
          </div>
          <div class="grainAnswer">
            <div class="grainSign" @click.stop.prevent="$router.push('sign')">
              <div class="grainSignImg">
                <img src="../../assets/images/grain-sign.png" alt="" class="img-responsive">
              </div>
              <div class="">签到</div>
            </div>
            <div class="grainSign" @click.stop.prevent="$router.push('fatten')">
              <div class="grainSignImg">
                <img src="../../assets/images/grain-invest.png" alt="" class="img-responsive">
              </div>
              <div class="">投资直投标</div>
            </div>
          </div>
          <div class="grainQuestion">
            <div class="grainQ">
              Q
            </div>
            <div class="grainQtext">
              猫粮使用途径
            </div>
          </div>
          <div class="grainAnswer">
            <div class="grainSign" @click.stop.prevent="$router.push('catTickets')">
              <div class="grainSignImg">
                <img src="../../assets/images/grain-tickets.png" alt="" class="img-responsive">
              </div>
              <div class="">购买猫小票</div>
            </div>
            <div class="grainSign" @click.stop.prevent="$router.push('mallIndex')">
              <div class="grainSignImg">
                <img src="../../assets/images/grain-store.png" alt="" class="img-responsive">
              </div>
              <div class="">兑换商城物品</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/common/headerBar.vue'

export default {
  name: 'CatGrain',
  components: {
    HeaderBar
  },
  data () {
    return {
      headerBar: {
        title: '猫粮',
        imgUrl: '',
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

.grainImg {
  height: 500px;
}

.grainNum {
  padding: 0 34px;
  position: relative;
  margin-top: -150px;
}

.grainSum {
  margin-bottom: 16px;
  height: 300px;
  .bg(#fff);
}

.grainSumTit {
  display: flex;
  flex: 1;
  padding: 60px 50px 0;
  justify-content: space-between;
  align-items: center;
}
.ownGrain {
  .fontSize(38px);
  .color(#333);
}
.checkGrainUsed {
  .fontSize(34px);
}

.grainNumber {
  margin-top: 75px;
  .text-center;
  .fontSize(68px);
  .color(#333);
}

.grainContainer {
  padding: 0 34px;
}
.grainDesc {
  padding: 0 50px;
  .bg(#fff);
  overflow: hidden;
}

.grainQuestion {
  display: flex;
  flex: 1;
  margin: 90px 0;
  align-items: center;
}
.grainQ {
  .size(50px, 50px);
  margin-right: 26px;
  border-radius: 50%;
  .bg(@main-color);
  .color(#fff);
  font-family: PingFang;
  .fontSize(38px);
  .text-center;
  line-height: 50px;
}

.grainQtext {
  .fontSize(36px);
  .color(#333);
}

.grainAnswer {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 0 76px;
  margin-bottom: 90px;
  .fontSize(36px);
  line-height: 45px;
  .color(@main-color);
}

.grainSignImg {
  width: 60px;
  margin-right: 26px;
}

.grainSign {
  display: flex;
  flex: 1;
  align-items: center;
}
</style>
