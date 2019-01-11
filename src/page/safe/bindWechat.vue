<!-- 绑定微信号 -->
<template lang="html">
  <div class="">
    <HeaderBar :headerBar="headerBar"/>
    <div class="gray-fixed">
      <div class="bindWxTips text-center">请点击获取验证码，然后进行绑定！</div>
      <div class="bindWxPhoneNumber text-center">185****4015</div>
      <div class="bindCode">
        <input type="text" placeholder="请输入验证码" class="codeInput">
        <div class="getCodeBtn">
          获取验证码
        </div>
      </div>
      <div class="bindBtn">绑定微信号</div>
    </div>

  </div>
</template>

<script>
import HeaderBar from '@/components/common/headerBar.vue'

export default {
  name: 'BindWechat',
  components: {
    HeaderBar
  },
  data () {
    return {
      headerBar: {
        title: '绑定微信号',
        imgUrl: '',
        goBackUrl: require('../../assets/images/goBack.png'),
        path: '',
        params: {},
        goBack: true,
        showIcon: false
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';

.bindWxTips {
  margin: 40px auto 60px;
}
.bindWxPhoneNumber {
  margin-bottom: 60px;
  .fontSize(62px);
}
.bindCode {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  margin: 0 34px;
  height: 100px;
  padding: 10px 30px;
  border: 2px solid #bfbfbf;
  border-radius: 16px;
}
.codeInput {
  margin: 0;
  padding: 0 0 0 80px;
  outline: none;
  border: none;
  height: 100%;
  background: url('../../assets/images/code.png') 0 center no-repeat;
  background-size: 64px auto;
}
.getCodeBtn {
  .size(280px, 80px);
  .bg(@main-color);
  text-align: center;
  line-height: 80px;
  border-radius: 12px;
  .fontSize(42px);
  .color(#fff);
}
.bindBtn {
  .size(900px, 120px);
  margin: 60px auto;
  .bg(@main-color);
  .border-radius(18px);
  .fontSize(42px);
  .text-center;
  line-height: 120px;
  .color(#fff);
}
</style>
