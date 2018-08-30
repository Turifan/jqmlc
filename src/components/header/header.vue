<template lang="html">
  <div class="gray-bg">
    <div class="header">
      <div class="header-title">
        {{title}}
      </div>
      <div class="sign-icon">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {}
  },
  computed: {
    title() {
      return this.$attrs.title;
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

.header-title {
    padding: 40px 0;
    font-size: 52px;
    .white;
    .text-center;
}
</style>
