<!-- 最新公告  -->
<template>
  <div>
    <HeaderBar :header-bar="headerBar"></HeaderBar>
    <div class="gray-fixed gray-fixed-bg">
      <div class="noticeList">
        <div class="noticeItem">
          <div>
            <div class="noticeTit">圣诞节到了 没有礼物怎么行</div>
            <div class="noticeDate">
              <div class="noticeDateImg">
                <img src="../../assets/images/timeClock.svg" alt="" class="img-responsive">
              </div>
              <div>
                2015-12-22 17:02:30
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="noticeList">
        <div class="noticeItem">
          <div>
            <div class="noticeTit">圣诞节到了 没有礼物怎么行</div>
            <div class="noticeDate">
              <div class="noticeDateImg">
                <img src="../../assets/images/timeClock.svg" alt="" class="img-responsive">
              </div>
              <div>
                2015-12-22 17:02:30
              </div>
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
  name: 'Notice',
  components: {
    HeaderBar
  },
  data () {
    return {
      headerBar: {
        title: '最新公告',
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

  .noticeList {
    padding: 0 35px;
    margin-bottom: 15px;
    background: #fff;
  }

  .noticeItem {
    height: 200px;
    display: flex;
    flex: 1;
    align-items: center;
    .fontSize(38px);
  }

  .noticeTit {
    margin-bottom: 36px;
    .fontSize(40px);
  }

  .noticeDate {
    display: flex;
    flex: 1;
    align-items: center;
  }

  .noticeDateImg {
    .size(40px, 40px);
    margin-right: 20px;
  }

</style>
