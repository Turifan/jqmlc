<template lang="html">
  <div class="">
    <div class="home-content">
      <router-link tag="div" :to="{ name: userFund.left.path, params: {} }" class="shareActivity">
        <div class="home-content-tit">
          {{userFund.left.title}}
        </div>
        <div class="home-content-tips">
          {{userFund.left.tips}}
        </div>
      </router-link>
      <router-link tag="div" :to="{ name: userFund.right.path, params: {} }" class="currentAmount">
        <div class="home-content-tit">
          {{userFund.right.title}}
        </div>
        <div class="home-content-tips">
          {{userFund.right.tips}}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserFund',
  data() {
    return {
      userFund: this.$attrs.userFund
    }
  },
  computed: {},
  mounted() {}
}
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';

.home-content {
  display: flex;
  flex: 1;
  margin-bottom: 16px;
  padding: 60px 0;
  align-items: center;
  background: #fff;
  .shareActivity {
    width: 50%;
    padding-left: 70px;
    border-right: 2px solid #efefef;
  }
  .currentAmount {
    width: 50%;
    padding-left: 70px;
  }
}

.home-content-tit {
  margin-bottom: 25px;
  font-size: 40px;
}

.home-content-tips {
  .fontSize(32px);
  .color(#999);
}
</style>
