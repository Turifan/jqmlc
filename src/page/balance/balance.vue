<!-- 余额  -->
<template lang="html">
  <div class="">
    <HeaderBar :header-bar="headerBar" />
    <div class="gray-fixed">
      <AssetAccount :assetAccount="assetAccount"></AssetAccount>
      <div class="balanceHandleBox">
        <div class="balanceHandle">
          <div class="recharge balanceOperate" @click.stop.prevent="recharge">
            <div class="rechargeImg">
              <img src="../../assets/images/balance-recharge.png" alt="">
            </div>
            <div class="balanceOperateTxt">充值</div>
            <div class="balanceOperateArrow">
              <img src="../../assets/images/self-right.png" alt="">
            </div>
          </div>
          <div class="deposit balanceOperate" @click.stop.prevent="deposit(8)">
            <div class="depositImg">
              <img src="../../assets/images/balance-deposit.png" alt="">
            </div>
            <div class="balanceOperateTxt">提现</div>
            <div class="balanceOperateArrow">
              <img src="../../assets/images/self-right.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="balanceInfoBox">
        <div class="balanceInfoItem balanceInfoItemBorder">
          <div class="balanceInfoTitle">
            <div class="balanceInfoTit">可提资金(元)</div>
            <div class="balanceInfoTxt">发财猫到期后自动赎回</div>
          </div>
          <div class="balanceInfoDes">
            {{balanceInfo.balance}}
          </div>
        </div>
        <div class="balanceInfoItem balanceInfoItemBorder">
          <div class="balanceInfoTitle">
            <div class="balanceInfoTit">冻结资金(元)</div>
            <div class="balanceInfoTxt">发财猫在投资金</div>
          </div>
          <div class="balanceInfoDes">
            {{balanceInfo.frozenMoney}}
          </div>
        </div>
        <div class="balanceInfoItem balanceInfoItemBorder">
          <div class="balanceInfoTitle">
            <div class="balanceInfoTit">投资福利(元)</div>
            <div class="balanceInfoTxt">投资直投标返现或邀请好友投资返现</div>
          </div>
          <div class="balanceInfoDes">
            {{balanceInfo.cashBack}}
          </div>
        </div>
        <div class="balanceInfoItem">
          <div class="balanceInfoTitle">
            <div class="balanceInfoTit">累计分红(元)</div>
            <div class="balanceInfoTxt">月盈猫的投资自愿参与对应项目</div>
          </div>
          <div class="balanceInfoDes">
            {{balanceInfo.bonus}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/common/headerBar.vue'
import AssetAccount from '@/components/assetAccount/assetAccount.vue'
import { mapState, mapActions } from 'vuex'
import { withdrawLoadInt, balanceRechargeInit } from '@/service'

import { getStore } from '@/lib/js/storage'

export default {
  name: 'Balance',
  components: {
    HeaderBar,
    AssetAccount
  },
  data () {
    return {
      headerBar: {
        title: '余额',
        imgUrl: require('../../assets/images/balanceRecord.png'),
        goBackUrl: require('../../assets/images/goBack.png'),
        path: 'balanceRecord',
        params: {},
        goBack: true,
        showIcon: true
      }
    }
  },
  computed: {
    ...mapState({
      balanceInfo: ({ products }) => products.balanceInfo
    }),
    assetAccount () {
      return {
        txt: '余额总资金',
        account: this.balanceInfo.totalAssets,
        path: 'balanceRecord',
        params: {}
      }
    }
  },
  methods: {
    ...mapActions(['getBalanceInfo']),
    async recharge () {
      !this.balanceInfo.idNo && this.$router.push('/cert')
      !this.balanceInfo.cardNo && this.$router.push('/bindCard')
      let data = await balanceRechargeInit(
        ...[JSON.parse(getStore('userInfo')).id, getStore('token')]
      )
      if (data.error === '0') {
        this.$router.push(`/recharge/${this.balanceInfo.cardNo.slice(-4)}`)
      } else {
        this.$message.error({ message: data.msg })
      }
    },
    async deposit (type) {
      !this.balanceInfo.idNo && this.$router.push('/cert')
      !this.balanceInfo.cardNo && this.$router.push('/bindCard')
      let data = await withdrawLoadInt(
        ...[JSON.parse(getStore('userInfo')).id, getStore('token'), `${type}`]
      )
      if (data.error === '0') {
        this.$router.push(`deposit/${type}/-1`)
      } else {
        this.$message.error({ message: data.msg })
      }
    }
  },
  mounted () {
    this.getBalanceInfo()
  }
}
</script>

<style lang="less" scoped>
@import '../../style/mixin';

.balanceHandleBox {
  padding: 35px 0;
  border-bottom: 2px solid #efefef;
}

.balanceHandle {
  display: flex;
  flex: 1;
  align-items: center;
}

.balanceOperate {
  display: flex;
  flex: 1;
  height: 130px;
  align-items: center;
  justify-content: space-between;
  padding-left: 80px;
  padding-right: 34px;
  .fontSize(38px);
  .color(#333);
}

.recharge {
  border-right: 2px solid #efefef;
}

.rechargeImg {
  .size(60px, 46px);
  margin-right: 28px;

  img {
    width: 100%;
  }
}

.depositImg {
  .size(60px, 60px);
  margin-right: 28px;

  img {
    width: 100%;
  }
}

.balanceOperateTxt {
  margin-right: auto;
}

.balanceOperateArrow {
  .size(29px, 55px);

  img {
    width: 100%;
  }
}

.balanceInfoBox {
  padding: 0 34px;
  border-bottom: 2px solid #efefef;
}

.balanceInfoItem {
  display: flex;
  flex: 1;
  height: 220px;
  align-items: center;
  justify-content: space-between;
}

.balanceInfoItemBorder {
  border-bottom: 2px solid #efefef;
}

.balanceInfoTit {
  margin-bottom: 30px;
  .fontSize(38px);
  .color(#333);
}

.balanceInfoTxt {
  .fontSize(32px);
  .color(#999);
}

.balanceInfoDes {
  .fontSize(48px);
  .color(@main-color);
}
</style>
