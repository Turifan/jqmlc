<!-- 我的邀请 -->
<template>
  <div>
    <HeaderBar :header-bar="headerBar"></HeaderBar>
    <div class="gray-fixed gray-fixed-bg">
      <div class="inviteBox">
        <!-- 二维码区 -->
        <div class="inveiteCodeBox">
          <div class="inviteTitleBox">
            <div class="line"></div>
            <div class="inviteTitle">邀请方式</div>
            <div class="line"></div>
          </div>
          <div class="text-center scanCode">扫描我的二维码</div>
          <div class="inviteCodeBorder">
            <div class="inviteCode">
              <!-- 二维码生成 -->
            </div>
          </div>
          <div class="text-center scanCode">邀请码</div>
          <div class="inviteNumber">
            14355674677
          </div>
          <div class="dashedLine"></div>
          <div class="inviteRecord"
               @click.stop.prevent="$router.push('inviteRecords')">
            查看邀请记录>>
          </div>
        </div>

        <!-- 提示 -->
        <div class="inviteTips">
          <div class="inviteTipsBox">
            <div class="inviteTitleBox">
              <div class="tipsLine"></div>
              <div class="inviteTitle">邀请成功可获得</div>
              <div class="tipsLine"></div>
            </div>
          </div>
          <div class="tipContent">
            <div class="tipContentItem">
              <div class="listImg"></div>
              <div class="tipContentTxt">20元现金券(仅限投资月盈猫使用)</div>
            </div>
            <div class="tipContentItem">
              <div class="listImg"></div>
              <div class="tipContentTxt">一次签到机会（每天最多可签到3次）</div>
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

.inviteBox {
  margin: 34px;
}

.inveiteCodeBox {
  height: 1098px;
  padding: 80px 120px 40px;
  margin-bottom: 16px;
  background: #fff;
  border-radius: 16px;
}

.inviteTitleBox {
  display: flex;
  flex: 1;
  margin: 0 auto 45px;
  justify-content: space-between;
  align-items: center;
}

.line {
  .size(250px, 2px);
  background: #ededed;
}

.tipsLine {
  .size(190px, 2px);
  background: #ededed;
}

.inviteTitle {
  .fontSize(44px);
  .color(#333);
}

.scanCode {
  .fontSize(38px);
}

.inviteCodeBorder {
  .size(520px, 520px);
  margin: 60px auto;
  background: url('../../assets/images/qrcode_box.png') no-repeat;
  background-size: 100%;
}

.inviteCode {
  width: 100%;
  height: 100%;
  padding: 42px 38px;
  box-sizing: border-box;
}

.inviteNumber {
  .size(520px, 110px);
  margin: 50px auto 62px;
  border: 2px solid #dedede;
  border-radius: 4px;
  .color(@main-color);
  .fontSize(58px);
  text-align: center;
  line-height: 110px;
}

.dashedLine {
  border-bottom: 2px dashed #ccc;
}

.inviteRecord {
  margin: 42px auto;
  text-align: center;
  .color(@main-color);
  .fontSize(38px);
}

.inviteTips {
  height: 295px;
  padding: 60px 50px;
  background: #fff;
}

.inviteTipsBox {
  padding: 0 70px;
}

.tipContent {
  margin: 80px auto 0;
}

.tipContentItem {
  display: flex;
  flex: 1;
  margin-bottom: 40px;
  align-items: center;
  justify-content: space-between;
}

.listImg {
  .size(20px, 20px);
  transform: rotate(45deg);
  background: @main-color;
}

.tipContentTxt {
  margin: 0 auto 0 30px;
}
</style>
