<template lang="html">
  <div class="">
    <div class="header">
      <div class="header-title">
        {{title}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      title: '金钱猫'
    }
  }
}
</script>

<style lang="less">
@import '../../style/mixin';
@import '../../style/common';

.header {
    padding: 0 35px;
    background: @main-color;
}

.header-title{
  padding: 0 40px;
  font-size: 52px;
  .white;
  .text-center;
}
</style>
