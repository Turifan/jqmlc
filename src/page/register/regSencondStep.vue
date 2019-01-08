<!-- 注册第二步 -->
<template lang="html">
  <div class="">
    <HeaderBar :headerBar="headerBar"/>
    <div class="gray-fixed">
      <div class="register-box">
        <div class="form-box">
          <input type="password" name="loginPwd" value="" placeholder="请输入登录密码" class="loginPwd">
        </div>
        <div class="form-box">
          <input type="password" name="confirm_loginPwd" value="" placeholder="请确认登录密码" class="confirm_loginPwd">
        </div>
        <div class="form-box">
          <input type="text" name="inviteCode" value="" placeholder="请输入邀请码" class="inviteCode">
        </div>
        <div class="getInviteCode">
          <a href="#" class="">如何获取邀请码</a>
        </div>
        <div class="register-next">
          <div class="next" @click="register">
            确定
          </div>
        </div>
      </div>
    </div>

    <div class="pop">
      <div class="shadePop">
        <img src="../../assets/images/reg_success.png" alt="">
        <div class="enter" @click="enter">
          进入金钱猫
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/common/headerBar.vue'

export default {
  name: 'Register',
  components: {
    HeaderBar
  },
  data () {
    return {
      headerBar: {
        title: '注册',
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
    register () {
      this.$router.push('regSencondStep')
    },
    enter () {
      this.$router.push('home')
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';

.register-box {
  padding: 28px 34px 0;
}

.form-box {
  .height(112px);
  margin-bottom: 30px;
  padding: 4px;
  .border(2px, solid, #bfbfbf);
  input {
    height: 100%;
    margin: 0;
    padding: 0;
    padding-left: 112px;
    border: none;
    outline: none;
    .fontSize(38px);
  }
}

.loginPwd {
  width: calc(100% - 112px);
  background: url('../../assets/images/loginPwd.png') no-repeat 30px center;
  background-size: 52px 59px;
}

.confirm_loginPwd {
  width: calc(100% - 112px);
  background: url('../../assets/images/confirm_loginPwd.png') no-repeat 30px
    center;
  background-size: 52px 59px;
}

.inviteCode {
  width: calc(100% - 112px);
  background: url('../../assets/images/reg_yzm.png') no-repeat 24px center;
  background-size: 64px 59px;
}

.register-next {
  .fontSize(38px);

  .next {
    .size(900px, 120px);
    margin: 60px auto 68px;
    line-height: 120px;
    text-align: center;
    .color(#fff);
    .fontSize(52px);
    .bg(@main-color);
    .border-radius(18px);
  }
}

.getInviteCode {
  margin: 32px auto 170px;
  .text-right;
  .color(@main-color);
  .fontSize(38px);
}

.pop {
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  .bg(rgba(0, 0, 0, 0.5));
  z-index: 1000;
}

.shadePop {
  margin: 540px auto;
  width: 779px;
  img {
    width: 100%;
  }
}

.enter {
  .size(600px, 120px);
  margin: 0 auto;
  .bg(@main-color);
  line-height: 120px;
  .text-center;
  .color(#fff);
  .fontSize(52px);
  .border-radius(18px);
}
</style>
