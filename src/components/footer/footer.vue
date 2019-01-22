<!-- 底部导航 -->
<template lang="html">
  <div class="footer">
    <nav class="footerNav">
      <router-link :to="{ name: 'home', params: {} }">
        <div :class="$route.path.indexOf('home')!==-1?'home-icon-active':'home-icon'">

        </div>
        <div :class="$route.path.indexOf('home')!==-1?'active':''">
            首页
        </div>
      </router-link>
      <router-link :to="{ name: 'doraemon', params: {} }">
        <div :class="$route.path.indexOf('doraemon')!==-1?'doraemon-icon-active':'doraemon-icon'">

        </div>
        <div :class="$route.path.indexOf('doraemon')!==-1?'active':''">
            机器猫
        </div>
      </router-link>
      <router-link :to="{ name: 'fatten', params: {} }">
        <div :class="$route.path.indexOf('fatten')!==-1?'fatten-icon-active':'fatten-icon'">

        </div>
        <div :class="$route.path.indexOf('fatten')!==-1?'active':''">
            发财猫
        </div>
      </router-link>
      <router-link :to="{ name: 'personal', params: {} }">
        <div :class="$route.path.indexOf('personal')!==-1?'personal-icon-active':'personal-icon'">

        </div>
        <div :class="$route.path.indexOf('personal')!==-1?'active':''">
            我
        </div>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {

    }
  },
  computed: {

  }
}
</script>

<style lang="less" scoped>
@import '../../style/mixin';

.footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 150px;
    z-index: 1000;
    border-top: 1px solid #ebebeb;/*no*/
}

.footerNav {
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;
    // background: @gray-nav-bg;
    background: #fff;
    a {
        display: block;
        width: 25%;
        height: 100%;
        .text-center;
        color: #6a6a6a;
        font-size: 38px;
        line-height: 45px;
        &:active,
        &:hover,
        &:visited,
        &link {
            color: #6a6a6a;
        }
    }
}

.active {
    .orange;
}

.home-icon {
    .size(85px,85px);
    margin: 9px auto;
    background: url("../../assets/images/home-icon.png") 0 0 no-repeat;
    background-size: 85px 85px;
}
.home-icon-active {
    .size(85px,85px);
    margin: 9px auto;
    background: url("../../assets/images/home-icon-active.png") 0 0 no-repeat;
    background-size: 85px 85px;
}

.doraemon-icon {
    .size(85px,85px);
    margin: 9px auto;
    background: url("../../assets/images/doraemon-icon.png") 0 0 no-repeat;
    background-size: 85px 85px;
}
.doraemon-icon-active {
    .size(85px,85px);
    margin: 9px auto;
    background: url("../../assets/images/doraemon-icon-active.png") 0 0 no-repeat;
    background-size: 85px 85px;
}

.fatten-icon {
    .size(85px,85px);
    margin: 9px auto;
    background: url("../../assets/images/fatten-icon.png") 0 0 no-repeat;
    background-size: 85px 85px;
}
.fatten-icon-active {
    .size(85px,85px);
    margin: 9px auto;
    background: url("../../assets/images/fatten-icon-active.png") 0 0 no-repeat;
    background-size: 85px 85px;
}

.personal-icon {
    .size(85px,85px);
    margin: 9px auto;
    background: url("../../assets/images/personal-icon.png") 0 0 no-repeat;
    background-size: 85px 85px;
}
.personal-icon-active {
    .size(85px,85px);
    margin: 9px auto;
    background: url("../../assets/images/personal-icon-active.png") 0 0 no-repeat;
    background-size: 85px 85px;
}
</style>
