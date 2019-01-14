<!-- 关于我们 -->
<template lang="html">
   <div class="">
      <HeaderBar :headerBar="headerBar"></HeaderBar>
      <div class="gray-fixed">
        <div class="aboutUsImg">
          <img src="../../assets/images/keep.png" alt="" class="img-responsive">
        </div>
        <div class="aboutUsBox">
          <div class="aboutContentBox">
            <div>
              hi，主银:
            </div>
            <div class="aboutTxt">
              恭喜您已经成为我们的VIP客户啦！
            </div>
            <div class="aboutTxt">
              为了能让小喵更好的服务于您，我们提供专属私人小管家一对一答疑服务， 如果您对金钱猫有任何疑问，我们会有专人为您解答。
            </div>
            <div class="aboutTxt">
              除此之外，如果您希望与更多的猫友一起交流，还可以让小管家拉你进我们的官方群。
            </div>
          </div>
        </div>
        <div class="aboutList">
          <div class="aboutItem" v-for="(item,index) in aboutList" :key="index">
            <div>{{item.title}}</div>
            <div v-if="item.title!='联系我们'" class="aboutValue">
              {{item.value}}
            </div>
            <div v-if="item.title=='联系我们'" class="connnectUs" @click.stop.prevent="jump(serviceQQ)">
              <img src="../../assets/images/QQ.png" alt="" class="img-responsive">
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/common/headerBar.vue'

export default {
  name: 'AboutUs',
  components: {
    HeaderBar
  },
  data () {
    return {
      headerBar: {
        title: '关于我们',
        imgUrl: '',
        goBackUrl: require('../../assets/images/goBack.png'),
        path: '',
        params: {},
        goBack: true,
        showIcon: false
      },
      aboutList: [
        {
          title: '官方网站',
          value: 'www.jqmlc.com'
        },
        {
          title: '微信号',
          value: 'jqmlc1'
        },
        {
          title: '客服电话',
          value: '027-87166692'
        },
        {
          title: '联系我们',
          value: 'www.jqmlc.com'
        },
        {
          title: '服务时间',
          value: '工作日 (周一到周五) 8:30-17:30'
        }
      ],
      serviceQQ: 'http://wpa.qq.com/msgrd?v=3&uin=764566548&site=qq&menu=yes'
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

.aboutUsBox {
  margin: 0 auto 70px;
  padding: 0 34px;
}
.aboutUsImg {
  margin-top: 17px;
}
.aboutContentBox {
  position: relative;
  height: 565px;
  padding: 85px 23px 86px 55px;
  border: 1px solid @main-color; /*no*/
  border-radius: 50px;
  box-sizing: border-box;
  top: -94px;
  z-index: -1;
  line-height: 60px;
  .fontSize(32px);
  .color(#333);
}

.aboutTxt {
  .text-indent(2em);
}
.aboutList {
  padding: 0 34px;
}

.aboutItem {
  display: flex;
  flex: 1;
  height: 130px;
  align-items: center;
  justify-content: space-between;
  .fontSize(36px);
  border-bottom: 2px solid #efefef;
}
.connnectUs {
  .size(60px, 60px);
}
.aboutValue {
  .color(#333);
}
</style>
