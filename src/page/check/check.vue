<template lang="html">
  <div class="">check</div>
</template>

<script>
export default {
  name: 'Check',
  data () {
    return {}
  },
  mounted () {
    //     let inviteName = location.search().username || -1
    //     let assetId = location.search().assetId || -1
    //     let shareDate = location.search().shareDate || -1
    //     // 后台接收地址
    //     let url = `${process.env.BASE_URL}/weixin/wechatOauthCheck.do`

    //     // 金钱猫微信appid
    //     let appid = 'wx4ac823140a27b624'

    //     let link = `https://open.weixin.qq.com/connect/oauth2/authorize?
    //       appid=${appid}&redirect_uri=${encodeURIComponent(
    //   url
    // )}&response_type=code&scope=snsapi_base&state=${inviteName}jqmlc${assetId}jqmlc${shareDate}#wechat_redirect`
    let openid = '1'
    // window.localStorage.openid = openid
    // window.location.href = link
    this.$router.push(`wxid/${openid}`)
  }
}
</script>

<style lang="less">
</style>
