<!-- 本期票码和历史某一期票码列表组件 -->
<template lang="html">
  <div class="ticketsListContainer">
    <div class="ticketsList" v-for="(item,index) in data" :key="index">
      <div :class="['ticketsStatus',{'tickets-zj':item.draw_result==1,'tickets-wzj':item.draw_result==0,'tickets-wkj':item.draw_result==2}]">
        {{item.draw_result_desc}}
      </div>
      <div class="ticketsImgList">
        <div class="ticketsImgItem" v-for="(t,i) in item.ticket_number" :key="i">
          <div class="ticketsImg">
            <img :src="imgLoad(t)" alt="" class="img-responsive">
          </div>
          <div class="ticketsTxt">{{catTickets[t-1].name}}</div>
        </div>
      </div>
      <div class="ticketsTimeBox">
        <div class="ticketsTime">获取时间 : {{item.create_time}}</div>
        <div class="ticketsCost">消耗猫粮 : {{item.cost}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TicketsList',
  props: ['data'],
  data () {
    return {
      catTickets: this.$store.state.catTickets
    }
  },
  methods: {
    imgLoad (index) {
      return require(`../../assets/images/catchoice${index}.png`)
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';

.ticketsListContainer {
  padding: 34px 34px 0;
  position: relative;
  z-index: 100;
}
.ticketsList {
  height: 450px;
  margin-bottom: 16px;
  border: 1px solid #dedede; /*no*/
  border-radius: 16px;
}
.ticketsStatus {
  height: 110px;
  .fontSize(36px);
  .text-center;
  line-height: 110px;
  overflow: hidden;
}
.tickets-zj {
  .color(#fff);
  background: url('../../assets/images/catTickets_zj.png') no-repeat;
  background-size: 100% 100%;
}
.tickets-wzj {
  .color(#999);
  background: url('../../assets/images/catTickets_wzj.png') no-repeat;
  background-size: 100% 100%;
}
.tickets-wkj {
  .color(@main-color);
  background: url('../../assets/images/catTickets_wkj.png') no-repeat;
  background-size: 100% 100%;
}
.ticketsImgList {
  display: flex;
  flex: 1;
  margin: 8px 0 63px;
  justify-content: space-around;
  align-items: center;
  .text-center;
}
.ticketsImg {
  .size(150px, 150px);
  margin-bottom: 20px;
}
.ticketsTimeBox {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
  .fontSize(32px);
  .color(#999);
}
</style>
