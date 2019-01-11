<!-- 修改交易密码 -->
<template lang="html">
  <div class="">
    <HeaderBar :headerBar="headerBar"/>
    <div class="gray-fixed gray-fixed-bg">
      <div class="resetPwdBox">
        <div class="resetTips">
          温馨提示：为了您的财产安全，在您购买产品和提现时均需输入交易密码，请设置您的交易密码。
        </div>
        <div class="resetFormBox">
          <div class="originalPwd loginPwd">
            <input type="password" placeholder="请输入您的交易密码" v-model.trim="originalPwd" class="originalPwdInput">
          </div>
          <div class="confirmPwd loginPwd">
            <input type="password" placeholder="请确认您的密码" v-model.trim="confirmPwd" class="confirmPwdInput">
          </div>
        </div>
        <div class="resetLoginBtn">
          确认
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import HeaderBar from '@/components/common/headerBar.vue'

export default {
  name: 'ResetDealPwd',
  components: {
    HeaderBar
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
      originalPwd: '',
      confirmPwd: ''
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
.resetFormBox {
  margin: 26px auto 375px;
  height: 240px;
  border: 2px solid #bfbfbf;
  border-radius: 16px;
  .bg(#fff);
}
.loginPwd {
  height: 120px;
  padding: 30px 20px;
  box-sizing: border-box;
  .fontSize(38px);
  input {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0 0 0 70px;
    outline: none;
    border: none;
  }
}
.originalPwd {
  border-bottom: 2px solid #bfbfbf;
}

.originalPwdInput {
  background: url('../../assets/images/loginPwd.png') 0 center no-repeat;
  background-size: 52px 59px;
}
.confirmPwdInput {
  background: url('../../assets/images/confirm_loginPwd.png') 0 center no-repeat;
  background-size: 52px 59px;
}
.resetLoginBtn {
  .size(900px, 120px);
  margin: 0 auto;
  .bg(@main-color);
  border-radius: 18px;
  line-height: 120px;
  .text-center;
  .fontSize(52px);
  .color(#fff);
}
</style>
