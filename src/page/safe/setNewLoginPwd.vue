<!-- 重置登录密码第二步 -->
<template lang="html">
  <div class="">
    <HeaderBar :headerBar="headerBar"></HeaderBar>
    <div class="gray-fixed">
      <div class="login_box">
        <div class="loginAccount">
          您的帐号：185****4015
        </div>
        <div class="login_form">
          <div class="loginFormBox border-bottom">
            <input type="password" name="password" value="" placeholder="请输入您的登录密码" v-model.trim="password">
          </div>
          <div class="loginFormBox">
            <input type="password" name="conformPassword" value="" placeholder="请确认您的登录密码" v-model.trim="conformPassword">
          </div>
        </div>
        <div class="login">
          确定
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/common/headerBar.vue'
import ResetPwd from './resetPwd.vue'

export default {
  name: 'SetNewLoginPwd',
  components: {
    HeaderBar,
    ResetPwd
  },
  data () {
    return {
      headerBar: {
        title: '重置登录密码',
        imgUrl: '',
        goBackUrl: require('../../assets/images/goBack.png'),
        path: '',
        params: {},
        goBack: true,
        showIcon: false
      }
    }
  },
  methods: {
    forgetLoginPwd () {
      console.log('重置登录密码')
      this.$router.push('')
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';

.login_box {
  padding: 0 34px;
}

.loginAccount {
  margin: 23px 0 37px;
  .fontSize(38px);
}
.login_form {
  // width: 826px;
  margin: 0 auto;
  .border(1px, solid, @main-color);
  /*no*/
  .border-radius(28px);
}

.loginFormBox {
  .width(100%);
  input {
    width: calc(100% - 78px);
    height: 138px;
    padding-left: 27px;
    .border-radius(28px);
    border: none;
    outline: none;
    .fontSize(42px);
  }
}

.border-bottom {
  border-bottom: 1px solid @main-color; /*no*/
}

.login {
  .size(711px, 125px);
  margin: 70px auto 0;
  .bg(@main-color);
  .border-radius(18px);
  .color(#fff);
  .fontSize(38px);
  line-height: 125px;
  text-align: center;
}
</style>
