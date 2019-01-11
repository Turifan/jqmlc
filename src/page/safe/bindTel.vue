<!-- 绑定手机号 -->
<template lang="html">
  <div class="">
    <HeaderBar :headerBar="headerBar"/>
    <div class="gray-fixed gray-fixed-bg">
      <div class="telImg">
        <div class="bindImg">
          <img src="../../assets/images/bindTelOk.png" alt="" class="img-responsive">
        </div>
      </div>
      <div class="bindTips text-center">您的手机号码为:</div>
      <div class="bindPhone orange text-center">145******89</div>
    </div>

  </div>
</template>

<script>
import HeaderBar from '@/components/common/headerBar.vue'

export default {
  name: 'BindTel',
  components: {
    HeaderBar
  },
  data () {
    return {
      headerBar: {
        title: '绑定手机号',
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

.telImg {
  .size(263px, 492px);
  margin: 146px auto 89px;
  background: url('../../assets/images/bindTel.png') no-repeat;
  background-size: 100%;
  position: relative;
}
.bindImg {
  .size(131px, 131px);
  position: absolute;
  bottom: -21px;
  right: -54px;
}
.bindTips {
  margin-bottom: 83px;
  .fontSize(42px);
}
.bindPhone {
  .fontSize(62px);
}
</style>
