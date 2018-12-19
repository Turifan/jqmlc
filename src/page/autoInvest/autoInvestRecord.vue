<!-- 自动投标记录 -->
<template>
  <div>
    <HeaderBar :header-bar="headerBar"></HeaderBar>
    <div class="gray-fixed">
      <div class="autoInvestBox">
        <div class="autoInvestTit">
          <div class="investPro">产品</div>
          <div class="investSum">金额</div>
          <div class="investPayWay">支付</div>
          <div class="investDate">时间</div>
        </div>
        <div class="autoInvestList">
          <div class="autoInvestItem">
            <div class="investPro">以租代购0001</div>
            <div class="investSum">10000</div>
            <div class="investPayWay">余额资金</div>
            <div class="investDate">2018-11-01 11:19:42</div>
          </div>
          <div class="autoInvestItem">
            <div class="investPro">以租代购0001</div>
            <div class="investSum">10000</div>
            <div class="investPayWay">余额资金</div>
            <div class="investDate">2018-11-01 11:19:42</div>
          </div>
          <div class="autoInvestItem">
            <div class="investPro">以租代购0001</div>
            <div class="investSum">10000</div>
            <div class="investPayWay">余额资金</div>
            <div class="investDate">2018-11-01 11:19:42</div>
          </div>
          <div class="autoInvestItem">
            <div class="investPro">以租代购0001</div>
            <div class="investSum">10000</div>
            <div class="investPayWay">余额资金</div>
            <div class="investDate">2018-11-01 11:19:42</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import HeaderBar from '@/components/common/headerBar.vue'

export default {
  name: 'AutoInvestRecord',
  components: {
    HeaderBar
  },
  data () {
    return {
      headerBar: {
        title: '投标记录',
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
  @import '../../style/mixin';

  .autoInvestBox {
    padding: 0 35px;
  }

  .autoInvestTit {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    height: 130px;
    border-bottom: 2px solid #efefef;
    .color(#333);
    .fontSize(38px);
  }

  .autoInvestItem {
    height: 140px;
    padding: 0 24px;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    .fontSize(36px);
  }

  .investPro {
    width: 30%;
    text-align: left;
  }

  .investSum {
    width: 20%;
    text-align: center;
  }

  .investPayWay {
    width: 20%;
    text-align: center;
  }

  .investDate {
    width: 30%;
    text-align: right;
  }

</style>
