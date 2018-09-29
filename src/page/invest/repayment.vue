<template lang="html">
  <div class="repayment">
    <div class="repayment-list">
      <div class="repayment-list-item">
        <div class="repayment-list-info">
          <div class="repayment-status repayment-flex-item">
            <div class="repayment-tit">
              状态
            </div>
            <div class="repayment-val repayment-status-val">
              已还款
            </div>
          </div>
          <div class="repayment-time repayment-flex-item">
            <div class="repayment-tit">
              合约还款日期
            </div>
            <div class="repayment-val">
              2018-04-23
            </div>
          </div>
          <div class="repayment-exchange ">
            <div class="repayment-tit">
              应付本息(元)
            </div>
            <div class="repayment-val">
              983.34
            </div>
          </div>


        </div>
        <div class="repayment-list-info">
          <div class="repayment-fine repayment-flex-item">
            <div class="repayment-tit">
              应付罚息(元)
            </div>
            <div class="repayment-val">
              0.00
            </div>
          </div>
          <div class="repayment-realTime repayment-flex-item">
            <div class="repayment-tit">
              实际还款日期
            </div>
            <div class="repayment-val">
              暂无
            </div>
          </div>
          <div class="repayment-flex-item">

          </div>
        </div>
      </div>
      <div class="repayment-list-item">
        <div class="repayment-list-info">
          <div class="repayment-status repayment-flex-item">
            <div class="repayment-tit">
              状态
            </div>
            <div class="repayment-val repayment-status-val">
              已还款
            </div>
          </div>
          <div class="repayment-time repayment-flex-item">
            <div class="repayment-tit">
              合约还款日期
            </div>
            <div class="repayment-val">
              2018-04-23
            </div>
          </div>
          <div class="repayment-exchange ">
            <div class="repayment-tit">
              应付本息(元)
            </div>
            <div class="repayment-val">
              983.34
            </div>
          </div>
        </div>
        <div class="repayment-list-info">
          <div class="repayment-fine repayment-flex-item">
            <div class="repayment-tit">
              应付罚息(元)
            </div>
            <div class="repayment-val">
              0.00
            </div>
          </div>
          <div class="repayment-realTime repayment-flex-item">
            <div class="repayment-tit">
              实际还款日期
            </div>
            <div class="repayment-val">
              暂无
            </div>
          </div>
          <div class="repayment-flex-item">

          </div>
        </div>
      </div>
      <div class="repayment-list-item">
        <div class="repayment-list-info">
          <div class="repayment-status repayment-flex-item">
            <div class="repayment-tit">
              状态
            </div>
            <div class="repayment-val repayment-status-val">
              已还款
            </div>
          </div>
          <div class="repayment-time repayment-flex-item">
            <div class="repayment-tit">
              合约还款日期
            </div>
            <div class="repayment-val">
              2018-04-23
            </div>
          </div>
          <div class="repayment-exchange ">
            <div class="repayment-tit">
              应付本息(元)
            </div>
            <div class="repayment-val">
              983.34
            </div>
          </div>


        </div>
        <div class="repayment-list-info">
          <div class="repayment-fine repayment-flex-item">
            <div class="repayment-tit">
              应付罚息(元)
            </div>
            <div class="repayment-val">
              0.00
            </div>
          </div>
          <div class="repayment-realTime repayment-flex-item">
            <div class="repayment-tit">
              实际还款日期
            </div>
            <div class="repayment-val">
              暂无
            </div>
          </div>
          <div class="repayment-flex-item">

          </div>
        </div>
      </div>
      <div class="repayment-list-item">
        <div class="repayment-list-info">
          <div class="repayment-status repayment-flex-item">
            <div class="repayment-tit">
              状态
            </div>
            <div class="repayment-val repayment-status-val">
              已还款
            </div>
          </div>
          <div class="repayment-time repayment-flex-item">
            <div class="repayment-tit">
              合约还款日期
            </div>
            <div class="repayment-val">
              2018-04-23
            </div>
          </div>
          <div class="repayment-exchange ">
            <div class="repayment-tit">
              应付本息(元)
            </div>
            <div class="repayment-val">
              983.34
            </div>
          </div>


        </div>
        <div class="repayment-list-info">
          <div class="repayment-fine repayment-flex-item">
            <div class="repayment-tit">
              应付罚息(元)
            </div>
            <div class="repayment-val">
              0.00
            </div>
          </div>
          <div class="repayment-realTime repayment-flex-item">
            <div class="repayment-tit">
              实际还款日期
            </div>
            <div class="repayment-val">
              暂无
            </div>
          </div>
          <div class="repayment-flex-item">

          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'RepaymentRecord'
}
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';


.repayment{
  height: 450px;
  overflow-y: auto;
}
.repayment-list-item {
    // height: 222px;
    padding: 40px 0 0;
    border-bottom: 1px solid #efefef;
    /*no*/
    line-height: 1;
    .bg(#fff);

}

.repayment-list-info {
    display: flex;
    flex: 1;
    padding: 0 70px;
    justify-content: space-between;
    align-items: center;
    .bg(#fff);

}

.repayment-flex-item {
    width: 100%/3;
}

.repayment-exchange {
  margin-left: auto;
}

.repayment-tit {
    margin-bottom: 30px;
    .fontSize(34px);
}

.repayment-val {
    margin-bottom: 34px;
    .fontSize(36px);
    .color(#333);
}

.repayment-status-val{
  .color(@main-color);
}
</style>
