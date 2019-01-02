<!-- 我的任务 -->
<template lang="html">
  <div class="">
    <headerBar :headerBar="headerBar"></headerBar>
    <div class="gray-fixed gray-fixed-bg">
      <!-- 新手任务 -->
      <div class="taskTit">
        <div class="taskTit-img">
          <img src="../../assets/images/task_item.png" alt="" class="img-responsive">
        </div>
        <div class="taskTit-txt">新手任务</div>
      </div>
      <div class="taskList">
        <div class="taskItem">
          <div class="taskItemImg">
            <img src="../../assets/images/task-focus.png" alt="" class="img-responsive">
          </div>
          <div class="taskTitleBox">
            <div class="taskTitle">关注微信公众号</div>
            <div class="taskTitleDesc">成长值+1</div>
          </div>
          <div class="taskBtn taskBtn-undone">去关注</div>
        </div>
        <div class="taskItem">
          <div class="taskItemImg">
            <img src="../../assets/images/task-noob01.png" alt="" class="img-responsive">
          </div>
          <div class="taskTitleBox">
            <div class="taskTitle">首次投资新手标100元</div>
            <div class="taskTitleDesc">成长值+1</div>
          </div>
          <div class="taskBtn taskBtn-undone">去投资</div>
        </div>
        <div class="taskItem">
          <div class="taskItemImg">
            <img src="../../assets/images/task-noob02.png" alt="" class="img-responsive">
          </div>
          <div class="taskTitleBox">
            <div class="taskTitle">首次投资银行卡标100元</div>
            <div class="taskTitleDesc">成长值+1</div>
          </div>
          <div class="taskBtn taskBtn-undone">未完成</div>
        </div>
      </div>
      <!-- 每日任务 -->
      <div class="taskTit">
        <div class="taskTit-img">
          <img src="../../assets/images/task_item.png" alt="" class="img-responsive">
        </div>
        <div class="taskTit-txt">每日任务</div>
      </div>

       <div class="taskList">
        <div class="taskItem">
          <div class="taskItemImg">
            <img src="../../assets/images/task-focus.png" alt="" class="img-responsive">
          </div>
          <div class="taskTitleBox">
            <div class="taskTitle">连续签到30天</div>
            <div class="taskTitleDesc">成长值+2</div>
          </div>
          <div class="taskBtn taskBtn-undone">去签到</div>
        </div>
        <div class="taskItem">
          <div class="taskItemImg">
            <img src="../../assets/images/task-noob01.png" alt="" class="img-responsive">
          </div>
          <div class="taskTitleBox">
            <div class="taskTitle">分享银行卡标并成功邀请投资</div>
            <div class="taskTitleDesc">成长值+2</div>
          </div>
          <div class="taskBtn taskBtn-undone">去分享</div>
        </div>
        <div class="taskItem">
          <div class="taskItemImg">
            <img src="../../assets/images/task-noob02.png" alt="" class="img-responsive">
          </div>
          <div class="taskTitleBox">
            <div class="taskTitle">每日投资任务</div>
            <div class="taskTitleDesc">点击查看详情</div>
          </div>
          <div class="taskBtn scanDetail" @click.stop.prevent="checkDetail">查看</div>
        </div>
        <div class="taskDetail" v-if="showTaskDetail">
          投资银行卡标1万以上(含一万)获得1个成长值，投资获得成长值以一万的倍数形式递增,请在相对应页面自行购买(该成长值无上限)
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/common/headerBar.vue'

export default {
  name: 'Task',
  components: {
    HeaderBar
  },
  data () {
    return {
      headerBar: {
        title: '我的任务',
        imgUrl: '',
        goBackUrl: require('../../assets/images/goBack.png'),
        path: '',
        params: {
        },
        goBack: true,
        showIcon: false
      },
      showTaskDetail: false
    }
  },
  methods: {
    checkDetail () {
      this.showTaskDetail = !this.showTaskDetail
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';

.taskTit {
  height: 100px;
  padding: 0 34px;
  display: flex;
  flex: 1;
  align-items: center;
  .fontSize(42px);
}
.taskTit-img {
  .size(33px, 40px);
  margin-right: 20px;
}
.taskList {
  .bg(#fff);
}
.taskItem {
  display: flex;
  flex: 1;
  padding: 0 34px;
  align-items: center;
  height: 190px;
  border-bottom: 2px solid #efefef;
}

.taskItemImg {
  width: 80px;
  height: auto;
  margin-right: 38px;
}

.taskTitle {
  margin-bottom: 20px;
  .fontSize(38px);
  .color(#333);
}

.taskTitleDesc {
  .fontSize(32px);
  .color(#999);
}

.taskBtn {
  .size(172px, 78px);
  margin-right: 16px;
  margin-left: auto;
  border-radius: 18px;
  text-align: center;
  line-height: 78px;
  .fontSize(38px);
  .color(#fff);
}

.taskBtn-done {
  .bg(#d9d9d9);
}
.taskBtn-undone {
  .bg(@main-color);
}
.scanDetail {
  .bg(#3889ff);
}
.taskDetail {
  padding: 50px 16px 50px 118px;
  line-height: 60px;
  .fontSize(34px);
}
</style>
