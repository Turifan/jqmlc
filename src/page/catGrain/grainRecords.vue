<!-- 猫粮记录  -->
<template>
  <div>
    <HeaderBar :header-bar="headerBar"></HeaderBar>
    <div class="gray-fixed">
      <div class="balanceRecords">
        <div class="balanceRecordItem">
          <div class="balanceRecordInfo">
            <div class="balanceRecordTit">月盈猫分红</div>
          </div>
          <div class="balanceRecordData text-right">
            <div class="balanceRecordSum">+300.00</div>
            <div class="balanceNum">2018-9-13</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderBar from '@/components/common/headerBar.vue'

export default {
  name: 'Balance',
  components: {
    HeaderBar
  },
  data () {
    return {
      headerBar: {
        title: '猫粮记录',
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

.balanceRecords {
  padding: 0 35px;
}

.balanceRecordItem {
  height: 200px;
  display: flex;
  flex: 1;
  padding: 0 10px 0 20px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #efefef;
}

.balanceRecordTit {
  margin-bottom: 20px;
  .fontSize(38px);
  .color(#333);
}

.balanceRecordSum {
  margin-bottom: 26px;
  .fontSize(42px);
  .color(#333);
}

.balanceNum {
  .fontSize(34px);
  .color(#999);
}
</style>
