<!-- 充值 -->
<template lang="html">
  <div>
    <HeaderBar :header-bar="headerBar" />
    <div class="gray-fixed gray-fixed-bg">
      <div class="rechargeBox">
        <div class="rechargeBank">
          <div class="bankTit">银行卡</div>
          <div class="bankNumber">中国建设银行（{{cardNo}}）</div>
        </div>
        <div class="rechargeAmount">
          <div class="bankTit">充值金额</div>
          <div class="rechargeSum">
            <input type="text" placeholder="请输入充值金额" name="rechargeNum" v-model="money">
          </div>
        </div>
      </div>
      <div class="rechargeBtn" @click.stop.prevent="recharge">确定充值</div>
    </div>
    <form :action="bankUrl"
              method="POST"
              ref="bankPay"
              id="form"
              enctype="application/x-www-form-urlencoded"
              @submit.prevent="false">
          <input type="hidden"
                 name="ENCTP"
                 ref="ENCTP">
          <input type="hidden"
                 name="FM"
                 ref="FM">
          <input type="hidden"
                 name="MCHNTCD"
                 ref="MCHNTCD">
          <input type="hidden"
                 name="VERSION"
                 ref="VERSION">
          <input type="hidden"
                 name="LOGOTP"
                 ref="LOGOTP">
        </form>
  </div>
</template>

<script>
import HeaderBar from '@/components/common/headerBar.vue'
import { balanceRecharge, bankPayJson } from '@/service'
import { getStore, setStore } from '@/lib/js/storage'
import requestUrl from '@/config/requestUrl'

export default {
  name: 'Recharge',
  components: {
    HeaderBar
  },
  data () {
    return {
      headerBar: {
        title: '充值',
        imgUrl: '',
        goBackUrl: require('../../assets/images/goBack.png'),
        path: '',
        params: {},
        goBack: true,
        showIcon: false
      },
      money: '',
      // 第三方支付链接地址
      bankUrl: requestUrl.bankPayUrl
    }
  },
  computed: {
    cardNo () {
      return this.$route.params.cardNo
    }
  },
  methods: {
    async recharge () {
      let data = await balanceRecharge(
        ...[
          JSON.parse(getStore('userInfo')).id,
          getStore('token'),
          `${this.money}`
        ]
      )
      if (data.error === '0') {
        let res = await bankPayJson(
          ...[
            JSON.parse(getStore('userInfo')).id,
            getStore('token'),
            this.monthProfit.cardNo,
            this.monthProfit.idNo,
            this.money,
            this.monthProfit.realName,
            'balance',
            '',
            ''
          ]
        )
        if (res.error === '0') {
          setStore('typeName', this.monthProfit.typename)
          setStore('curpay', this.money)
          this.$refs.ENCTP.value = res.singleBean.ENCTP
          this.$refs.FM.value = res.singleBean.FM
          this.$refs.MCHNTCD.value = res.singleBean.MCHNTCD
          this.$refs.VERSION.value = res.singleBean.VERSION
          this.$refs.LOGOTP.value = res.singleBean.LOGOTP
          this.$refs.bankPay.submit()
        } else {
          this.$message.error({ message: res.msg })
        }
      } else {
        this.$message.error({ message: data.msg })
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';

.rechargeBox {
  padding: 0 34px;
  background: #fff;
}

.rechargeBank {
  height: 140px;
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  .fontSize(38px);
  .color(#333);
  border-bottom: 2px solid #efefef;
}

.bankTit {
  width: 144px;
  margin-right: 60px;
}

.bankNumber {
  margin-right: auto;
}

.rechargeAmount {
  height: 150px;
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  .fontSize(36px);
  .color(#333);
  border-bottom: 2px solid #efefef;
}

.rechargeSum {
  margin-right: auto;

  input {
    border: none;
    line-height: 36px;
    outline: none;
    font-size: 100%;
  }
}

.rechargeBtn {
  .size(800px, 130px);
  margin: 150px auto 0;
  background: @orange;
  border-radius: 18px;
  text-align: center;
  line-height: 130px;
  .fontSize(42px);
  .color(#fff);
}
</style>
