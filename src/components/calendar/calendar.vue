<!-- 日历组件 -->
<template>
  <div class="calendar">
    <div class="calendarHead">
      <div v-for="(day,index) in heads"
           :key="index"
           class="date">{{day}}</div>
    </div>
    <div class="calendarDate">
      <div class="date"
           v-for="(item,index) in showCalendar"
           :key="index">
        <div class="dateItem signed">1</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calendar',
  data () {
    return {
      showCalendar: [],
      heads: ['日', '一', '二', '三', '四', '五', '六']
    }
  },
  created () {
    this.setCalendar(new Date())
  },
  methods: {
    initCalendar () {
      this.showCalendar = []
    },
    setCalendar (date) {}
  }
}
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';

.calendar {
  .fontSize(42px);
}

.calendarHead {
  height: 110px;
  display: flex;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #efefef;
  /*no*/
}

.calendarDate {
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  padding: 20px 0;
  align-items: center;
}

.date {
  width: 100%/7;
  // margin: 51px 38px;
  text-align: center;
}

.dateItem {
  .size(70px, 70px);
  margin: 30px auto;
  text-align: center;
  line-height: 70px;
  .fontSize(42px);
}

.signed {
  .color(#fff);
  .bg(@orange);
  border-radius: 50%;
}
</style>
