<!-- 修改交易密码 -->
<template lang="html">
  <div class="">
    <HeaderBar :headerBar="headerBar"/>
    <div class="gray-fixed gray-fixed-bg">
      <div class="resetPwdBox">
        <div class="resetTips">
          温馨提示：为了您的财产安全，在您购买产品和提现时均需输入交易密码，请设置您的交易密码。
        </div>
        <resetPwd :resetValue="resetValue" :submitReset="resetDealPwd"></resetPwd>
      </div>
    </div>

  </div>
</template>

<script>
import HeaderBar from '@/components/common/headerBar.vue'
import ResetPwd from './resetPwd.vue'

export default {
  name: 'ResetDealPwd',
  components: {
    HeaderBar,
    ResetPwd
  },
  data () {
    return {
      headerBar: {
        title: '修改交易密码',
        imgUrl: '',
        goBackUrl: require('../../assets/images/goBack.png'),
        path: '',
        params: {},
        goBack: true,
        showIcon: false
      },
      resetValue: {
        originalPwd: '',
        newPwd: '',
        confirmPwd: '',
        originalPwdHolder: '请输入原始交易密码',
        newPwdHolder: '请输入您的新交易密码',
        confirmPwdHolder: '请确认您的密码'
      }
    }
  },
  methods: {
    resetDealPwd () {
      console.log(
        this.resetValue.originalPwd +
          this.resetValue.newPwd +
          this.resetValue.confirmPwd
      )
      console.log('重置交易密码')
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';

.resetPwdBox {
  padding: 0 34px;
}
.resetTips {
  margin-top: 28px;
  .color(#333);
}
</style>
