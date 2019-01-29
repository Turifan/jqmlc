<!-- 登录 -->
<template lang="html">
  <div class="">
    <HeaderBar :headerBar="headerBar"/>
    <div class="gray-fixed">
      <div class="login_box">
        <div class="login_img">
          <img src="../../assets/images/login_cat.png" alt="">
        </div>
        <div class="login_form">
          <div class="loginFormBox border-bottom">
            <input type="text" name="username" value="" placeholder="请输入用户名" v-model.trim="username">
          </div>
          <div class="loginFormBox">
            <input type="password" name="password" value="" placeholder="请输入密码" v-model.trim="password">
          </div>
        </div>
        <div class="login" @click.stop.prevent="login">
          登录
        </div>
        <div class="login_pwd">
          <div class="login_pwd_txt" @click.stop.prevent="$router.push('forgetLoginPwd')">忘记密码？</div>
          <router-link tag="div" :to="{ name: 'register', params: {} }">立即注册</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/common/headerBar.vue'
import { validateLogin } from '@/lib/js/validate'
import * as service from '@/service'
import { mapMutations, mapActions } from 'vuex'

export default {
  name: 'Login',
  components: {
    HeaderBar
  },
  data () {
    return {
      headerBar: {
        title: '会员登录',
        imgUrl: '',
        goBackUrl: require('../../assets/images/close.png'),
        path: '',
        params: {},
        goBack: true,
        showIcon: false
      },
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapMutations(['SET_USERINFO', 'SET_TOKEN']),
    ...mapActions(['loginAction']),
    async login () {
      let validateMsg = validateLogin(this.username, this.password)
      if (validateMsg !== true) {
        this.$message.error({ message: validateMsg })
        return
      }
      let data = await service.login(this.username, this.password)
      // if (data.error === '0') {
      this.loginAction(data)
      if (this.$route.query.redirect) {
        this.$router.push(this.$route.query.redirect)
      } else {
        this.$router.push('/home')
      }

      // } else {
      // this.$message.error({ message: data.msg })
      // }
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';

.login_box {
  margin: 377px auto;
  padding: 0 34px;
}

.login_img {
  .size(716px, 396px);
  margin-left: 153px;
  margin-right: 143px;
  img {
    width: 100%;
  }
}

.login_form {
  width: 826px;
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
    padding-left: 78px;
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
  .size(714px, 140px);
  margin: 110px auto 27px;
  .bg(@main-color);
  .border-radius(18px);
  .color(#fff);
  .fontSize(52px);
  line-height: 140px;
  text-align: center;
}

.login_pwd {
  width: 714px;
  margin: 0 auto;
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  .fontSize(42px);
  color: @main-color;
}
</style>
