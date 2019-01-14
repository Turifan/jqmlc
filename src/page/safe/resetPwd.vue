<!-- 修改登录密码 -->
<template lang="html">
  <div>
    <div class="resetFormBox">
      <div class="originalPwd loginPwd">
        <input type="password" :placeholder="resetValue.originalPwdHolder" v-model.trim="resetValue.originalPwd" class="originalPwdInput">
      </div>
      <div class="newPwd loginPwd">
        <input type="password" :placeholder="resetValue.newPwdHolder" v-model.trim="resetValue.newPwd" class="newPwdInput">
        </div>
      <div class="confirmPwd loginPwd">
        <input type="password" :placeholder="resetValue.confirmPwdHolder" v-model.trim="resetValue.confirmPwd" class="confirmPwdInput">
      </div>
    </div>
    <div class="resetLoginBtn" @click.stop.prevent="submitReset">
      确认修改
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResetPwd',
  props: ['resetValue', 'submitReset']
}
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';

.resetPwdBox {
  padding: 0 34px;
}
.resetFormBox {
  margin: 32px auto 300px;
  height: 420px;
  border: 2px solid #bfbfbf;
  border-radius: 16px;
  .bg(#fff);
}
.loginPwd {
  height: 140px;
  padding: 40px 20px;
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
.newPwd {
  border-top: 2px solid #bfbfbf;
  border-bottom: 2px solid #bfbfbf;
}

.originalPwdInput {
  background: url('../../assets/images/loginPwd.png') 0 center no-repeat;
  background-size: 52px 59px;
}
.newPwdInput {
  background: url('../../assets/images/newLoginPwd.png') 0 center no-repeat;
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
