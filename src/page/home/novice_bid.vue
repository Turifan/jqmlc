<template lang="html">
  <div class="">
    <div class="home-bid">
      <div class="novice-bid">
        <div class="home-bid-tit">
          {{noviceTitle}}
        </div>
        <div class="novice-bid-detail">

        </div>
      </div>
      <div class="bank-bid">
        <div class="home-bid-tit">

        </div>
        <div class="bank-bid-detail">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoviceBid',
  data(){
    return {
      noviceTitle:'新手标'
    }
  },

}
</script>

<style lang="less">
@import '../../style/mixin.less';
@import '../../style/common.less';

.home-bid{
  margin: 30px 15px 20px;
  height: 90px;
  background: #fff;
  border-radius: 10px;
  line-height: 90px;
  padding-left: 56px;
}

.home-bid-tit{
  color: #ff7032;
  font-size: 32px;
}
</style>
