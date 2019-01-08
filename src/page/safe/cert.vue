<!-- 实名认证 -->
<template lang="html">
  <div class="">
    <HeaderBar :headerBar="headerBar"></HeaderBar>
    <div :class="['gray-fixed',{'gray-fixed-bg':!certed}]">
      <div class="certContainer">
        <div class="certed" v-if="certed">
          <div class="certBox certName">
            <div>姓名</div>
            <div>张三</div>
          </div>
          <div class="certBox certCard">
            <div>身份证</div>
            <div>42************90</div>
          </div>
        </div>
        <div class="uncerted" v-if="!certed">
          <div class="certTips">
            为了您的资金安全,绑定银行卡时需进行实名认证,请务必输入您本人的身份和银行卡信息,认证通过后将不能更改,如需修改,请<span class="brandColor" @click.stop.prevent="jump('http://wpa.qq.com/msgrd?v=3&uin=764566548&site=qq&menu=yes')">联系客服</span>。
          </div>
          <div class="certForm">
            <div class="certUserName certFormBox">
              <input type="text" v-model.trim="username" placeholder="请输入您的真实姓名" class="userNameInput">
            </div>
            <div class="certUserNum certFormBox">
              <input type="text" v-model.trim="certNum" placeholder="请输入身份证号码" class="certNumInput">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/common/headerBar.vue'

export default {
  name: 'Cert',
  components: {
    HeaderBar
  },
  data () {
    return {
      headerBar: {
        title: '实名认证',
        imgUrl: '',
        goBackUrl: require('../../assets/images/goBack.png'),
        path: '',
        params: {},
        goBack: true,
        showIcon: false
      },
      certed: false,
      username: '',
      certNum: ''
    }
  },
  methods: {
    jump (url) {
      window.location.href = url
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';

.certBox {
  display: flex;
  flex: 1;
  padding: 0 34px;
  align-items: center;
  justify-content: space-between;
  height: 140px;
  .fontSize(42px);
  border-bottom: 2px solid #f0f0f0;
}
.uncerted {
  padding: 0 34px;
}
.certTips {
  margin: 36px 0 72px;
}
.certForm {
  // padding: 1px;
  box-sizing: border-box;
  border: 2px solid #bfbfbf;
  border-radius: 16px;
  overflow: hidden;
}
.certFormBox {
  margin: 0 auto;
  padding: 1px;
  .bg(#fff);
  input {
    width: 100%;
    height: 140px;
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    .fontSize(38px);
  }
  .userNameInput {
    padding-left: 114px;
    background: url('../../assets/images/cert_name.png') 29px center no-repeat;
    background-size: 56px 58px;
  }
  .certNumInput {
    padding-left: 114px;
    background: url('../../assets/images/cert_num.png') 25px center no-repeat;
    background-size: 64px 50px;
  }
}
.certUserName {
  border-bottom: 2px solid #bfbfbf;
}
</style>
