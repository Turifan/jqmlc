<template lang="html">
  <div class="">
    <HeaderBar :headerBar="headerBar"></HeaderBar>
    <div class="gray-fixed" v-if="signInfo">
      <div class="signBox">
        <div class="signBtn" @click.stop.prevent="sign">
          签到
        </div>
        <div class="signInfo">
          <div class="signTotal">
            <div class="signTit">累计签到</div>
            <div class=""><span class="signNumber">{{signInfo.total_day}}</span><span>天</span></div>
          </div>
          <div class="line">

          </div>
          <div class="signTotal">
            <div class="signTit">剩余次数</div>
            <div class=""><span class="signNumber">{{signInfo.remain_times}}</span><span>次</span></div>
          </div>
        </div>
      </div>
      <div class="currentDate">
        <div class="dateNum">{{signInfo.nowDate}}</div>
      </div>
      <Calendar :data="signInfo.sign_date_list"></Calendar>
      <div class="grayLine"></div>
      <div class="signRules">
        <fieldset>
          <legend align="center">签到规则</legend>
          <ol>
            <li v-for="(r,index) in signInfo.sign_rule" :key="index">{{r}}</li>
          </ol>
        </fieldset>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/common/headerBar.vue'
import Calendar from '@/components/calendar/calendar.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Sign',
  components: {
    HeaderBar,
    Calendar
  },
  data () {
    return {
      headerBar: {
        title: '签到',
        imgUrl: '',
        goBackUrl: require('../../assets/images/goBack.png'),
        path: '',
        params: {},
        goBack: true,
        showIcon: false
      }
    }
  },
  computed: {
    ...mapState({
      signInfo: ({ globalVal }) => globalVal.signInfo
    })
  },
  methods: {
    ...mapActions(['getSignInfo']),
    async sign () {
      
    }
  },
  mounted () {
    this.getSignInfo()
  }
}
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';

.signBox {
  height: 351px;
  padding: 27px 35px;
  background: @main-color;
}

.signBtn {
  .size(206px, 206px);
  margin: 0 auto 12px;
  .fontSize(54px);
  .color(@main-color);
  .bg(#fafafa);
  border-radius: 50%;
  text-align: center;
  line-height: 206px;
}

.signInfo {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-around;
  .fontSize(36px);
  .color(#fff);
  text-align: center;
}

.line {
  .size(4px, 60px);
  .bg(#fff);
}

.currentDate {
  .size(100%, 105px);
  margin-top: -64px;
  padding: 15px 0 0;
  background: url('../../assets/images/arch.png') no-repeat;
  background-size: 100% 100%;
}

.dateNum {
  .size(406px, 90px);
  margin: 0 auto;
  .fontSize(42px);
  .color(@orange);
  .bg(#fff);
  border-radius: 45px;
  text-align: center;
  line-height: 90px;
}

.signTit {
  margin-bottom: 20px;
  .fontSize(36px);
}

.signNumber {
  .fontSize(48px);
}

.signTotal {
  .fontSize(32px);
}

.grayLine {
  height: 20px;
  .bg(#efefef);
}

.signRules {
  .size(950px, 333px);
  margin: 40px auto;

  fieldset {
    padding: 40px;
    border: 3px solid #ededed;
  }

  legend {
    padding: 0 40px;
    .fontSize(40px);
    .color(#333);
  }
  ol {
    padding-inline-start: 0px;
  }
  li {
    list-style: none;
    .fontSize(36px);
    line-height: 48px;
  }
}
</style>
