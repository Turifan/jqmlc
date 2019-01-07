<!-- 历史票码列表 -->
<template lang="html">
  <div class="luckdraw-container">
    <div class="luckdraw-list" v-for="(item,index) in catTicketsList" :key="index">
      <div class="luckdraw-list-info" @click.stop.prevent="$router.push(`historyTicketsTerm/${item.draw_id}`)">
        <div class="luckdraw-img">
          <img src="../../assets/images/tickets-img.png" alt="" class="img-responsive">
          <div class="luckdraw-modal" v-if="item.isOver==1">{{item.isOver==1?'未开奖':'已开奖'}}</div>
        </div>
        <div class="luckdraw-detail">
          <div class="luckdraw-title">{{item.activity_name}}</div>
          <div class="luckdraw-desc">
            <div class="luckdraw-number">我的号码: <span class="orange">{{item.drawNum}}</span></div>
            <div class="">开奖情况: {{item.draw_status==1?'未开奖':'已开奖'}}</div>
          </div>
        </div>
      </div>
      <div class="luckdraw-list-desc">
        <div class="luckdraw-list-date gray-font">
          {{item.begin_time}}至{{item.end_time}}
        </div>
        <div class="luckdraw-list-rule brandColor" @click.stop.prevent="showRewards(index)">
          <div>查看奖励</div>
          <div class="arrow">
            <img src="../../assets/images/downArrow.png" alt="">
          </div>
        </div>
      </div>
      <div class="ticketsRecords" v-if="activeIndex==index">
        <ul>
          <li>一等奖奖品为朗逸汽车一辆</li>
          <li>二等奖奖品为苹果电脑一台</li>
          <li>三等奖奖品为最新款苹果手机一台</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HistoryTicketsList',
  data () {
    return {
      catTicketsList: [
        {
          activity_name: '猫小票001期',
          begin_time: '2018-11-29',
          drawNum: '115',
          draw_id: 1,
          draw_status: 1,
          end_time: '2018-12-31',
          first_prize: '一等奖奖品为iphone5',
          isOver: 1,
          second_prize: '二等奖奖品为iphone6',
          third_prize: '三等奖奖品为iphone7'
        },
        {
          activity_name: '猫小票011期',
          begin_time: '2018-10-12',
          drawNum: '1',
          draw_id: 11,
          draw_status: 2,
          end_time: '2018-10-08',
          first_prize: '一等奖奖品为iphone5',
          isOver: 1,
          second_prize: '二等奖奖品为iphone6',
          third_prize: '三等奖奖品为iphone7'
        }
      ],
      activeIndex: -1
    }
  },
  methods: {
    showRewards (index) {
      this.activeIndex = this.activeIndex === index ? -1 : index
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';

.luckdraw-container {
  overflow-y: hidden;
  position: relative;
}

.luckdraw-list {
  margin-bottom: 37px;
  padding: 0 34px;
  .bg(#fff);
}

.luckdraw-list-info {
  height: 300px;
  display: flex;
  flex: 1;
  align-items: center;
  border-bottom: 2px solid #efefef;
}

.luckdraw-img {
  .size(300px, 220px);
  margin-right: 52px;
  position: relative;
}
.luckdraw-modal {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  .bg(rgba(0, 0, 0, 0.3));
  .fontSize(52px);
  .color(#fff);
  .text-center;
  line-height: 220px;
}
.luckdraw-detail {
  width: calc(100% - 352px);
}

.luckdraw-title {
  margin-bottom: 60px;
  .fontSize(42px);
  .color(#333);
}

.luckdraw-desc {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  .fontSize(32px);
}

// .luckdraw-number {
//   // margin-right: 100px;
// }

.luckdraw-list-desc {
  display: flex;
  flex: 1;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  .fontSize(32px);
}
.luckdraw-list-rule {
  display: flex;
  align-items: center;
  text-align: right;
}
.arrow {
  margin-left: 16px;
  img {
    height: 22px;
    width: auto;
  }
}
.ticketsRecords {
  margin: 0 -34px;
  padding: 48px 54px;
  border-top: 2px solid #efefef;
  ul {
    li {
      line-height: 60px;
      &::before {
        content: '\02022';
        margin-right: 10px;
        color: #ff9b2e;
      }
    }
  }
}
</style>
