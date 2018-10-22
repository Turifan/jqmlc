<!-- 安全中心 -->
<template lang="html">
  <div class="">
    <HeaderBar :headerBar="headerBar"/>
    <div class="gray-fixed">
      <div class="safe-list" v-for="s in safeList" :key="s.index">
        <div class="safe-tit">
          {{s.title}}
        </div>
        <div class="safe-link">
          <span class="safe-status">
            {{s.doneTxt}}
          </span>
          <i class="safe-icon"></i>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import HeaderBar from '@/components/common/headerBar.vue'

export default {
  name: 'Safe',
  components: {
    HeaderBar,
  },
  data() {
    return {
      headerBar: {
        title: '安全中心',
        imgUrl: '',
        path: '',
        params: {
        },
        goBack:true,
        showIcon:false
      },
      safeList:[
        {
          title:'实名认证',
          doneUrl:'cert',
          unDoneUrl:'',
          doneTxt:'已认证',
          unDoneTxt:'未认证'
        },
        {
          title:'绑定银行卡',
          doneUrl:'bindCard',
          unDoneUrl:'',
          doneTxt:'已绑定',
          unDoneTxt:'未绑定'
        },
        {
          title:'绑定手机号',
          doneUrl:'bindTel',
          unDoneUrl:'',
          doneTxt:'已绑定',
          unDoneTxt:'未绑定'
        },
        {
          title:'绑定微信号',
          doneUrl:'bindWechat',
          unDoneUrl:'',
          doneTxt:'已绑定',
          unDoneTxt:'未绑定'
        },
        {
          title:'登录密码',
          doneUrl:'resetLoginPwd',
          unDoneUrl:'resetLoginPwd',
          doneTxt:'修改',
          unDoneTxt:'修改'
        },
        {
          title:'交易密码',
          doneUrl:'resetDealPwd',
          unDoneUrl:'resetDealPwd',
          doneTxt:'修改',
          unDoneTxt:'修改'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';

.safe-list{
  display: flex;
  flex: 1;
  height: 156px;
  padding: 0 34px;
  justify-content: space-between;
  align-items: center;
  .fontSize(42px);
  border-bottom: 2px solid #ededed;
}

.safe-tit{
  .color(#333);
}

.safe-link{
  line-height: 1;
  .color(#999);
  .safe-status{
    display: inline-block;
    line-height: 1;
  }
}

.safe-icon{
  display: inline-block;
  .size(30px,52px);
  margin-left: 19px;
  background: url('../../assets/images/right_gray.png') no-repeat;
  background-size: 30px 52px;
  vertical-align: middle;
}
</style>
