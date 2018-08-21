<!-- 底部导航 -->
<template lang="html">
  <div class="footer">
    <nav class="footerNav">
      <a href="#">
        <div class="">

        </div>
        <div class="">

        </div>
      </a>
      <a href="#"></a>
      <a href="#"></a>
      <a href="#"></a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="less">
@import '../../style/mixin.less';

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
    background: @gray-nav-bg;
    a {
        display: block;
        width: 25%;
        height: 100%;
    }
}
</style>
