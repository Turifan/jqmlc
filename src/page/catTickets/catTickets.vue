<!-- 猫小票 -->
<template lang="html">
  <div class="">
    <HeaderBar :headerBar="headerBar"></HeaderBar>
    <div class="gray-fixed">
      <div class="catTicketsContainer">
        <div class="catTicketsTitle">
          <div class="catTicketsTit">
            <div class="icon">

            </div>
            <div class="catTicketsTxt">自主选票</div>
          </div>
          <div class="checkHistory" @click.stop.prevent="$router.push('winTickets')">
            参考往期中奖号码>>
          </div>
        </div>
        <!-- 猫小票列表 -->
        <div class="catTicketsList">
          <div class="catTicketsItemContainer" v-for="cat in catTickets" :key="cat.id" @click.stop.prevent="selectTickets(cat.id)">
            <div :class="['catTicketsItem',{'catTicketsItem-active':selectedTicketsNum[cat.id]>0}]">
              <div class="catTicketsItemNum" v-if="selectedTicketsNum[cat.id]>0">
                <div class="catTicketsWord">{{selectedTicketsNum[cat.id]}}</div>
              </div>
              <img :src="cat.imgUrl" alt="" :class="['img-responsive',cat.imgSize]">
            </div>
            <div class="catTicketsItemTit">
              <div>{{cat.name}}</div>
              <div class="catCircle"><img src="../../assets/images/cat_circle.png" alt="" class="img-responsive "></div>
            </div>
          </div>
        </div>
        <!-- 选中的猫小票 -->
        <div class="choiceContainer">
          <div class="choiceTitBox">
            <div class="choiceTit">我选中的猫小票</div>
            <div class="choiceTips">自动生成为系统随机生成</div>
          </div>
          <!-- 选中的猫对应图片 -->
          <div class="choiceList">
            <div class="choiceItem" v-for="(s,index) in selectedTickets" :key="index">
              <div class="choiceImg">
                <img :src="s.imgUrl" alt="" class="choiceImg">
              </div>
              <div class="choiceName">{{catTickets[s.id-1].name}}</div>
            </div>
          </div>
          <!-- 按钮 -->
          <div class="choiceBtns">
            <div class="ticketsBtn clearTiecktsBtn" @click.stop.prevent="clearAllTickets">
              清除全部
            </div>
            <div class="ticketsBtn randomTicketsBtn" @click.stop.prevent="randomTickets">自动生成</div>
          </div>
        </div>
        <!-- 确认选票 -->
        <div class="catTicketsTitle">
          <div class="catTicketsTit">
            <div class="icon">

            </div>
            <div class="catTicketsTxt">确认选票</div>
          </div>
        </div>
        <div class="exchangeBox">
          <div class="exchangeInfo">
            <div class="catGrainSum orange">剩余猫粮 : 180000</div>
            <div class="exchangeDemand">10000猫粮兑换一注猫小票</div>
          </div>
          <div class="exchangeBtn">确认兑换</div>
        </div>
      </div>
      <!-- 历史票码 -->
      <div class="historyTicketsBox">
        <div class="historyItem" @click.stop.prevent="$router.push('historyTickets')">历史票码>></div>
        <div class="currentItem orange" @click.stop.prevent="$router.push('currentTickets')">本期票码>></div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/common/headerBar.vue'

export default {
  name: 'Catcoin',
  components: {
    HeaderBar
  },
  data () {
    return {
      headerBar: {
        title: '猫小票',
        imgUrl: '',
        goBackUrl: require('../../assets/images/goBack.png'),
        path: '',
        params: {},
        goBack: true,
        showIcon: false
      },
      catTickets: [
        {
          id: '1',
          name: '月盈猫',
          imgUrl: require('../../assets/images/cat1.png'),
          imgSize: 'cat1'
        },
        {
          id: '2',
          name: '汤姆猫',
          imgUrl: require('../../assets/images/cat2.png'),
          imgSize: 'cat2'
        },
        {
          id: '3',
          name: '布偶猫',
          imgUrl: require('../../assets/images/cat3.png'),
          imgSize: 'cat3'
        },
        {
          id: '4',
          name: '卷耳猫',
          imgUrl: require('../../assets/images/cat4.png'),
          imgSize: 'cat4'
        },
        {
          id: '5',
          name: '夏特尔猫',
          imgUrl: require('../../assets/images/cat5.png'),
          imgSize: 'cat5'
        },
        {
          id: '6',
          name: '折耳猫',
          imgUrl: require('../../assets/images/cat6.png'),
          imgSize: 'cat6'
        },
        {
          id: '7',
          name: '波斯猫',
          imgUrl: require('../../assets/images/cat7.png'),
          imgSize: 'cat7'
        },
        {
          id: '8',
          name: '金钱猫',
          imgUrl: require('../../assets/images/cat8.png'),
          imgSize: 'cat8'
        }
      ],
      selectedTickets: [],
      selectedTicketsNum: {}
    }
  },
  methods: {
    // 手动选择猫小票
    selectTickets (id) {
      if (this.selectedTickets.length >= 5) return
      this.selectedTickets.push({
        id: id,
        imgUrl: require(`../../assets/images/catchoice${id}.png`)
      })
      this.selectedTicketsNum.hasOwnProperty(id)
        ? (this.selectedTicketsNum[id] += 1)
        : (this.selectedTicketsNum[id] = 1)
    },
    // 随机选择猫小票
    randomTickets () {
      this.selectedTickets = []
      this.selectedTicketsNum = {}
      for (let i = 0; i < 5; i++) {
        let rand = Math.round(Math.random() * 7) + 1
        this.selectedTickets.push({
          id: `${rand}`,
          imgUrl: require(`../../assets/images/catchoice${rand}.png`)
        })
        this.selectedTicketsNum[rand]
          ? (this.selectedTicketsNum[rand] += 1)
          : (this.selectedTicketsNum[rand] = 1)
      }
    },
    // 清除全部
    clearAllTickets () {
      this.selectedTickets = []
      this.selectedTicketsNum = {}
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';

.catTicketsContainer {
  padding: 0 34px;
}

.catTicketsTitle {
  display: flex;
  flex: 1;
  margin: 30px 0 60px;
  justify-content: space-between;
  align-items: center;
}
.catTicketsTit {
  display: flex;
  flex: 1;
  align-items: center;
}
.icon {
  .size(18px, 18px);
  transform: rotate(45deg);
  margin-right: 13px;
  .bg(@main-color);
}
.catTicketsTxt {
  .fontSize(36px);
  .color(#333);
}
.checkHistory {
  .fontSize(32px);
  .color(#999);
}
.catTicketsList {
  display: flex;
  flex: 1;
  margin-bottom: 10px;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.catTicketsItemContainer {
  width: 25%;
  margin-bottom: 50px;
}
.catTicketsItem {
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  .size(200px, 200px);
  margin: 0 auto 20px;
  border-radius: 12px;
  border: 1px solid #dedede; /*no*/
  text-align: center;
}
.catTicketsItem-active {
  border: 1px solid @main-color !important; /*no*/
}
.catTicketsItemNum {
  position: absolute;
  right: 0;
  top: 0;
  .size(0, 0);
  border-top: 48px solid @main-color;
  border-left: 48px solid transparent;
}
.catTicketsWord {
  position: absolute;
  top: -48px;
  right: 0;
  .fontSize(30px);
  .color(#fff);
}
.catTicketsItemTit {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  .text-center;
  .fontSize(32px);
  .color(#dedede);
}

.catCircle {
  margin-left: 14px;
  .size(36px, 36px);
}
.cat1 {
  .size(137px, 170px);
}
.cat2 {
  .size(129px, 150px);
}
.cat3 {
  .size(127px, 150px);
}
.cat4 {
  .size(136px, 150px);
}
.cat5 {
  .size(150px, 170px);
}
.cat6 {
  .size(170px, 140px);
}
.cat7 {
  .size(150px, 144px);
}
.cat8 {
  .size(148px, 150px);
}
.choiceContainer {
  border-top: 2px solid #efefef;
  border-bottom: 2px solid #efefef;
}
.choiceTitBox {
  display: flex;
  flex: 1;
  margin: 35px 0 60px;
  padding-left: 29px;
  justify-content: space-between;
  align-items: center;
}
.choiceTit {
  .fontSize(36px);
  .color(#333);
}
.choiceTips {
  .fontSize(32px);
  .color(#999);
}
.choiceList {
  display: flex;
  flex: 1;
  margin-bottom: 60px;
  align-items: center;
  justify-content: flex-start;
}
.choiceItem {
  width: 20%;
  .text-center;
}
.choiceImg {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  .size(150px, 150px);
  margin: 0 auto 20px;
}
.choiceName {
  .fontSize(32px);
}
.choiceBtns {
  display: flex;
  flex: 1;
  padding: 0 196px;
  margin-bottom: 60px;
  justify-content: space-between;
  align-items: center;
}
.ticketsBtn {
  .size(230px, 80px);
  .fontSize(34px);
  border-radius: 12px;
  .text-center;
  line-height: 80px;
}
.clearTiecktsBtn {
  .color(#999);
  border: 2px solid #dedede;
}
.randomTicketsBtn {
  .color(@main-color);
  border: 2px solid @main-color;
}
.exchangeBox {
  display: flex;
  flex: 1;
  margin: 77px 0 50px;
  align-items: center;
  justify-content: space-between;
  .fontSize(32px);
}
.catGrainSum {
  margin-bottom: 26px;
}
.exchangeBtn {
  .size(230px, 80px);
  .color(#fff);
  .fontSize(34px);
  text-align: center;
  line-height: 80px;
  .bg(@main-color);
  border-radius: 12px;
}
.historyTicketsBox {
  display: flex;
  flex: 1;
  .fontSize(32px);
  padding: 45px 255px;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid #efefef;
}
</style>
