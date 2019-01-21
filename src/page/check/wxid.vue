<template lang="html">
  <div class=""></div>
</template>

<script>
export default {
  name: 'Wxid',
  mounted () {
    window.localStorage.openid = this.$route.params.openid
    this.$router.push('/home')
  }
}
</script>

<style lang="less">
</style>
