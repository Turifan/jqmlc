<!-- 注册 -->
<template lang="html">
  <div class="">
    <HeaderBar :headerBar="headerBar"/>
    <div class="gray-fixed">
      <div class="register-box">
        <div class="form-box">
          <input type="tel" name="tel" value="" placeholder="请输入您的手机号" class="telphone">
        </div>
        <div class="form-box">
          <input type="text" name="captcha" value="" placeholder="请输入验证码" class="captcha">
          <a class="captcha_btn" >获取验证码</a>
        </div>
        <div class="register-next">
          <div class="next">
            下一步
          </div>
          <div class="agreeProtocol">
            点击下一步表示我已阅读并同意
          </div>
          <div class="text-center">
            <router-link :to="{ name: '', params: {} }" class="protocol">金钱猫服务协议</router-link>及<router-link :to="{ name: '', params: {} }" class="protocol">投资资金风险提示书</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/common/headerBar.vue'

export default {
  name:'Register',
  components: {
    HeaderBar,
  },
  data() {
    return {
      headerBar: {
        title: '注册',
        imgUrl: '',
        path: '',
        params: {
        },
        goBack:true,
        showIcon:false
      },
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';

.register-box{
  padding: 28px 34px 0;
}

.form-box{
  .height(112px);
  margin-bottom: 30px;
  padding: 4px;
  .border(2px,solid,#bfbfbf);
  input{
    height: 100%;
    margin: 0;
    padding: 0;
    padding-left: 112px;
    border: none;
    outline: none;
    .fontSize(38px);
  }
}

.telphone{
  width: 100%;
  background: url('../../assets/images/reg_tel.png') no-repeat 33px center;
  background-size: 46px 64px;
}

.captcha{
  width: e('calc(100% - 540px)');
  background: url('../../assets/images/reg_yzm.png') no-repeat 24px center;
  background-size: 64px 59px;
}

.captcha_btn{
  display: inline-block;
  margin-top: 6px;
  .size(400px,100px);
  text-align: center;
  line-height: 100px;
  .bg(@main-color);
  .color(#fff);
  .fontSize(38px);
  .border-radius(18px);
  &:hover,&:visited,&:active,&:link{
    .color(#fff);
  }
}

.register-next{
  .fontSize(38px);

  .protocol{
    .color(@main-color);
    text-align: center;
  }

  .next{
    .size(900px,120px);
    margin: 60px auto 68px;
    line-height: 120px;
    text-align: center;
    .color(#fff);
    .fontSize(52px);
    .bg(@main-color);
    .border-radius(18px);
  }

  .agreeProtocol{
    margin-bottom: 28px;
    .text-center;
  }
}





</style>
