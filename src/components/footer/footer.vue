<!-- 底部导航 -->
<template lang="html">
  <div class="footer">
    <nav class="footerNav">
      <a href="#">
        <div :class="[active=='home'?iconActive:iconClass]">

        </div>
        <div :class="{active:active=='home'}">
            首页
        </div>
      </a>
      <a href="#">
        <div class="nav-icon doraemon-icon">

        </div>
        <div :class="{active:active=='doraemon'}">
            机器猫
        </div>
      </a>
      <a href="#">
        <div class="nav-icon fatten-icon">

        </div>
        <div :class="{active:active=='fatten'}">
            发财猫
        </div>
      </a>
      <a href="#">
        <div class="nav-icon personal-icon">

        </div>
        <div :class="{active:active=='personal'}">
            我
        </div>
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {

    }
  },
  computed: {
    active() {
      return this.$attrs.active;
    },
    iconActive() {
      return this.$attrs.iconActive;
    },
    iconClass() {
      return this.$attrs.iconClass;
    }
  }
}
</script>

<style lang="less">
@import '../../style/mixin';
@import '../../style/common';

.footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 150px;
}

.footerNav {
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;
    background: @gray-nav-bg;
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

.nav-icon {
    .size(85px,85px);
    margin: 9px auto;
}

.active {
    .orange;
}

.home-icon {
    background: url("../../assets/images/home-icon.png") 0 0 no-repeat;
    background-size: 85px 85px;
}
.home-icon-active {
    background: url("../../assets/images/home-icon-active.png") 0 0 no-repeat;
    background-size: 85px 85px;
}

.doraemon-icon {
    background: url("../../assets/images/doraemon-icon.png") 0 0 no-repeat;
    background-size: 85px 85px;
}
.doraemon-icon-active {
    background: url("../../assets/images/doraemon-icon-active.png") 0 0 no-repeat;
    background-size: 85px 85px;
}

.fatten-icon {
    background: url("../../assets/images/fatten-icon.png") 0 0 no-repeat;
    background-size: 85px 85px;
}
.fatten-icon-active {
    background: url("../../assets/images/fatten-icon-active.png") 0 0 no-repeat;
    background-size: 85px 85px;
}

.personal-icon {
    background: url("../../assets/images/personal-icon.png") 0 0 no-repeat;
    background-size: 85px 85px;
}
.personal-icon-active {
    background: url("../../assets/images/personal-icon-active.png") 0 0 no-repeat;
    background-size: 85px 85px;
}
</style>
