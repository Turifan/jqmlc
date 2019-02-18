<!-- 提现 -->
<template lang="html">
  <div>
    <HeaderBar :header-bar="headerBar" />
    <div class="gray-fixed">
      <!-- deposit information -->
      <div class="depositInfo" v-if="depositInfo">
        <!-- 提现来源 -->
        <div class="depositAccount">
          <div class="depositAccountImg">
            <img src="../../assets/images/balance-icon.png" alt="" class="img-responsive">
          </div>
          <div class="depositAccountTit">余额</div>
          <div class="depositAccountSum">({{depositInfo.usableSum}})</div>
        </div>
        <!-- arrow -->
        <div class="depositArrow">
          <img src="../../assets/images/depositArrow.png" alt="" class="img-responsive">
        </div>
        <!-- 提现目的 -->
        <div class="depositDest text-center">
          <div class="depositAccountImg">
            <img src="../../assets/images/depositBank.png" alt="" class="img-responsive">
          </div>
          <div class="depositAccountTit">{{depositInfo.bankName}}</div>
          <div class="depositAccountSum">储蓄卡({{depositInfo.cardNo.slice(-4)}})</div>
        </div>
      </div>
      <!-- deposit form -->
      <div class="depositFormBox">
        <div class="depositForm">
          <div class="depositFromGroup">
            <div class="depositInputIcon">
              <img src="../../assets/images/deposit03.png" alt="" class="img-responsive">
            </div>
            <div class="depositInput">
              <input type="text" :placeholder="placeholder" v-model.trim="money">
            </div>
          </div>
          <div class="depositFromGroup">
            <div class="depositInputIcon">
              <img src="../../assets/images/password1.png" alt="" class="img-responsive">
            </div>
            <div class="depositInput">
              <input type="password" placeholder="请输入交易密码" v-model.trim="dealPwd">
            </div>
          </div>
          <div class="depositFromGroup">
            <div class="depositInputIcon">
              <img src="../../assets/images/code.png" alt="" class="img-responsive">
            </div>
            <div class="depositInput">
              <input type="text" placeholder="验证码" v-model="code">
            </div>
            <!-- <div class="getCode">点击获取</div> -->
            <PhoneCode :codeKey="codeKey"
                       :codeBtn="codeBtn"
                       :codeText="codeText">
            </PhoneCode>
          </div>
        </div>
        <div class="depositBtn" @click.stop.prevent="deposit">
          下一步
        </div>
      </div>
      <!-- deposit tips -->
      <div class="depositTips">
        <div class="tipsTit">温馨提示：</div>
        <div class="tipsContent">
          <ol class="tipsContentList">
            <li>每月第一笔提现无手续费，第二笔起将收取2元手续费，费用在提现金额中扣除。</li>
            <li>提现到银行卡1-3个工作日到账。</li>
            <li>月盈猫每月十号可提现，不限提现次数。</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/common/headerBar.vue'
import PhoneCode from '@/components/PhoneCode/PhoneCode.vue'
import { mapActions, mapState } from 'vuex'
import { getStore } from '@/lib/js/storage'
import { validateDeposit } from '@/lib/js/validate'
import { withdraw } from '@/service'

export default {
  name: 'Deposit',
  components: {
    HeaderBar,
    PhoneCode
  },
  data () {
    return {
      headerBar: {
        title: '提现',
        imgUrl: '',
        goBackUrl: require('../../assets/images/goBack.png'),
        path: '',
        params: {},
        goBack: true,
        showIcon: false
      },
      money: '',
      // 交易密码
      dealPwd: '',
      // 验证码
      code: '',

      // 验证码按钮初始化值
      codeText: '点击获取',
      // 验证码key值
      codeKey: 'withdraw',
      // 验证码按钮 class
      codeBtn: 'depositGetCode'
    }
  },
  computed: {
    ...mapState({
      depositInfo: ({ pay }) => pay.depositInfo
    }),
    placeholder () {
      return `可提金额：${this.depositInfo.usableSum}`
    },
    bankId () {
      return `${this.$route.params.type}` === '1'
        ? '-6'
        : this.depositInfo.cardNo
    }
  },
  methods: {
    ...mapActions(['getDepositInfo']),
    async deposit () {
      let validateMsg = validateDeposit(this.money, this.dealPwd, this.code)
      if (validateMsg !== true) {
        this.$message.error({ message: validateMsg })
        return
      }
      let data = await withdraw(
        ...[
          JSON.parse(getStore('userInfo')).id,
          getStore('token'),
          `${this.$route.params.type}`,
          `${this.dealPwd}`,
          `${this.code}`,
          `${this.money}`,
          `${this.bankId}`,
          `wechat`,
          `${this.$route.params.assetId}`
        ]
      )
      if (data.error === '0') {
      } else {
      }
    }
  },
  mounted () {
    this.getDepositInfo([
      JSON.parse(getStore('userInfo')).id,
      getStore('token'),
      `${this.$route.params.type}`,
      `${this.$route.params.assetId}`
    ])
  }
}
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';

.depositInfo {
  display: flex;
  flex: 1;
  height: 334px;
  padding: 0 90px;
  align-items: center;
  justify-content: space-between;
  background: @main-color;
  .color(#fff);
}

.depositAccount {
  text-align: center;
}

.depositAccountImg {
  .size(100px, 94px);
  margin: 0 auto 35px;
}

.depositAccountTit {
  margin-bottom: 12px;
  .fontSize(42px);
}

.depositArrow {
  .size(364px, 19px);
}

.depositAccountSum {
  .fontSize(32px);
}

.depositFormBox {
  background: #fff;
}

.depositForm {
  padding-left: 48px;
  font-size: 48px;
}

.depositFromGroup {
  height: 150px;
  display: flex;
  flex: 1;
  padding-left: 13px;
  padding-right: 35px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dedede;
  /*no*/
}

.depositInputIcon {
  width: 52px;
  margin-right: 36px;
}

.depositInput {
  margin-right: auto;

  input {
    border: none;
    outline: none;
    font-size: 48px;
    font-family: PingFang;
  }
}

// .depositGetCode {
//   .size(282px, 102px);
//   border-radius: 20px;
//   background: @main-color;
//   .color(#fff);
//   text-align: center;
//   line-height: 102px;
// }

.depositBtn {
  .size(1008px, 150px);
  margin: 70px auto 308px;
  .bg(@orange);
  .color(#fff);
  line-height: 150px;
  text-align: center;
  .fontSize(52px);
  border-radius: 20px;
}

.depositTips {
  padding: 0 35px;
}

.tipsTit {
  margin-bottom: 24px;
  .fontSize(42px);
  .color(@main-color);
}

.tipsContentList {
  margin: 0;
  padding: 0;
  padding-inline-start: 40px;
  .fontSize(32px);
  li {
    list-style: decimal;
    line-height: 2;
  }
}
</style>
