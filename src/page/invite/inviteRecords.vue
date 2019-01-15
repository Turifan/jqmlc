<!-- 我的邀请记录 -->
<template>
  <div>
    <HeaderBar :header-bar="headerBar"></HeaderBar>
    <div class="gray-fixed gray-fixed-bg">
      <div class="inviteRecordsBox">
        <div class="circle circle-left"></div>
        <div class="circle circle-right"></div>
        <div class="inviteRecordsTitle inviteFlex">
          <div>姓名</div>
          <div class="inviteNum">电话</div>
          <div>注册时间</div>
        </div>
        <div class="inviteList">
          <div class="inviteItemBox">
            <div class="inviteFlex inviteItem">
              <div>张**</div>
              <div class="inviteNum">135****2560</div>
              <div>2018-11-13</div>
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
  name: 'Invite',
  components: {
    HeaderBar
  },
  data () {
    return {
      headerBar: {
        title: '我的邀请',
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

.inviteRecordsBox {
  position: relative;
  margin: 34px 34px 50px;
  height: calc(100% - 84px);
  box-sizing: content-box;
  .bg(#fff);
  border-radius: 16px;
}
.circle {
  position: absolute;
  .size(30px, 30px);
  border-radius: 50%;
  .bg(@gray-body-bg);
  top: 115px;
}
.circle-left {
  left: -15px;
}
.circle-right {
  right: -15px;
}
.inviteFlex {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.inviteRecordsTitle {
  height: 130px;
  border-bottom: 2px dashed #efefef;
  .fontSize(36px);
  .color(#333);
  div {
    width: 100%/3;
    text-align: center;
  }
}
.inviteList {
  padding: 0 45px;
}
.inviteItemBox {
  height: 130px;
  border-bottom: 2px dashed #efefef;
}
.inviteItem {
  height: 100%;
  margin: 0 -45px;
  .fontSize(34px);
  div {
    width: 100%/3;
    text-align: center;
  }
}
</style>
