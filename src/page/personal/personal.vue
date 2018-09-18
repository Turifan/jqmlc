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
          <router-link :to="{ name: 'member', params: {} }">
            <div class="level">
              会员等级:折耳猫 >>
            </div>
          </router-link>
        </div>
        <div class="grow">
          <div class="growValue">
            <img src="../../assets/images/growTree.png" alt="">110
          </div>
          <div class="">
            成长值
          </div>
        </div>
      </div>
      <Suduku :suduku="suduku"/>
      <div class="logOut">
        安全退出
      </div>
    </div>

    <Footer />
  </div>

</template>

<script>
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import Suduku from './suduku.vue'

export default {
  name: 'Personal',
  components: {
    Header,
    Footer,
    Suduku
  },
  data() {
    return {
      title: '我的',
      suduku: [{
          title: '抽奖号码',
          imgUrl: require('../../assets/images/luckdraw.png'),
          isMiddle: false,
          path: 'luckdraw'
        },
        {
          title: '我的任务',
          imgUrl: require('../../assets/images/mytasks.png'),
          isMiddle: true,
          path: 'task'
        },
        {
          title: '我的资产',
          imgUrl: require('../../assets/images/myassets.png'),
          isMiddle: false,
          path: 'assets'
        },
        {
          title: '我的体验金',
          imgUrl: require('../../assets/images/expgold.png'),
          isMiddle: false,
          path: 'expGold'
        },
        {
          title: '我的猫币',
          imgUrl: require('../../assets/images/catcoin.png'),
          isMiddle: true,
          path: 'catcoin'
        },
        {
          title: '投资记录',
          imgUrl: require('../../assets/images/investrecord.png'),
          isMiddle: false,
          path: 'investRecord'
        },
        {
          title: '喵喵管家',
          imgUrl: require('../../assets/images/housekeeper.png'),
          isMiddle: false,
          path: 'houseKeeper'
        },
        {
          title: '现金券',
          imgUrl: require('../../assets/images/cashtickets.png'),
          isMiddle: true,
          path: 'cashTickets'
        },
        {
          title: '安全中心',
          imgUrl: require('../../assets/images/safecenter.png'),
          isMiddle: false,
          path: 'safe'
        },
        {
          title: '关于我们',
          imgUrl: require('../../assets/images/aboutus.png'),
          isMiddle: false,
          path: 'aboutUs'
        },
        {
          title: '常见问题',
          imgUrl: require('../../assets/images/faq.png'),
          isMiddle: true,
          path: 'faq'
        },
        {
          title: '',
          imgUrl: '',
          isMiddle: false,
          // path:''
        }
      ]
    }
  },
  computed: {

  }
}
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';

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
    // justify-content: space-between;
    border-bottom: 6px solid #ebebeb;
}

.avatar {
    .size(200px,200px);
    margin-right: 26px;
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

.userDetail {
    .width(652px);
    line-height: 2;
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

.growValue {
    .fontSize(38px);
    img {
        .size(48px,50px);
    }
}

.logOut{
  .size(900px,120px);
  margin: 21px auto 68px;
  .bg(@main-color);
  .border-radius(18px);
  .fontSize(52px);
  .text-center;
  line-height: 120px;
  .color(#fff);
}
</style>
