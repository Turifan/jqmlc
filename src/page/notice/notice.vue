<!-- 最新公告  -->
<template>
  <div>
    <HeaderBar :header-bar="headerBar"></HeaderBar>
    <div class="gray-fixed gray-fixed-bg">
      <div class="noticeList"
           v-for="(item,index) in noticeList"
           :key="index">
        <div class="noticeItem">
          <div>
            <div class="noticeTit">圣诞节到了 没有礼物怎么行</div>
            <div class="noticeDate">
              <div class="noticeDateImg">
                <img src="../../assets/images/timeClock.svg"
                     alt=""
                     class="img-responsive">
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
import { mapState, mapMutations } from 'vuex'
import { noticeList } from '@/service'
import { getStore } from '@/lib/js/storage'

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
      },
      curPage: 1
    }
  },
  computed: {
    ...mapMutations(['GET_NOTICE_LIST']),
    ...mapState({
      noticeList: ({ globalVal }) => globalVal.noticeList
    })
  },
  methods: {
    async getNoticeList (page) {
      let data = await noticeList(
        ...[JSON.parse(getStore('userInfo')).id, getStore('token'), `${page}`]
      )
      if (data.error === '0') {
        this.GET_NOTICE_LIST()
        this.curPage++
      } else {
        this.$message.error({ message: data.msg })
      }
    }
  },
  mounted () {
    if (this.curPage === 1) {
      this.getNoticeList(`${this.curPage}`)
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
