<!-- 我的  -->
<template lang="html">
  <div class="">
    <Header :title="title"/>
    <div class="container">
      <div class="notice">
        最新公告:1月24号晚凌晨24:00至25号凌晨3:00系统维护。
      </div>
      <div class="userInfo">
        <div class="avatar">
          <img src="../../assets/images/default-image.png" alt="">
        </div>
        <div class="userDetail">
          <div class="mobile">
            185******23
          </div>
          <div class="level">
            会员等级:折耳猫 >>
          </div>
        </div>
        <div class="grow">
          <div class="">
            110
          </div>
          <div class="">
            成长值
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>

</template>

<script>
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'

export default {
  name: 'Personal',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      title: '我的',

    }
  },
  computed: {

  }
}
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';
@import '../../style/common.less';

.notice {
    padding: 0 35px;
    .bg(#fff2e3);
    .color(#fb743e);
    .fontSize(32px);
    .height(54px);
    line-height: 54px;
}

.userInfo {
    display: flex;
    flex: 1;
    padding: 20px 35px;
    align-items: center;
    justify-content: space-between;
}

.avatar {
    .size(200px,200px);
    img {
        width: 100%;
    }
}

.mobile {
    .fontSize(52px);
    .color(#333);
}

.level {
    .fontSize(38px);
    .color(@main-color);
}

.grow {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .size(160px,160px);
    .border-radius(50%);
    .bg(#cfffd7);
    .color(#48cc5f);
    .fontSize(32px);
    .text-center;
}
</style>
