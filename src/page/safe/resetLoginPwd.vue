<!-- 修改登录密码 -->
<template lang="html">
  <div class="">
    <HeaderBar :headerBar="headerBar"></HeaderBar>
    <div class="gray-fixed gray-fixed-bg">
      <div class="resetPwdBox">
        <resetPwd :resetValue="resetValue" :submitReset="resetLoginPwd"></resetPwd>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/common/headerBar.vue'
import ResetPwd from './resetPwd.vue'

export default {
  name: 'ResetLoginPwd',
  components: {
    HeaderBar,
    ResetPwd
  },
  data () {
    return {
      headerBar: {
        title: '修改登录密码',
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
        originalPwdHolder: '请输入原始登录密码',
        newPwdHolder: '请输入您的新密码',
        confirmPwdHolder: '请确认您的密码'
      }
    }
  },
  methods: {
    resetLoginPwd () {
      console.log(`
        ${this.resetValue.originalPwd},
          ${this.resetValue.newPwd},
          ${this.resetValue.confirmPwd},`)
      console.log('重置登录密码')
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';

.resetPwdBox {
  padding: 0 34px;
}
</style>
