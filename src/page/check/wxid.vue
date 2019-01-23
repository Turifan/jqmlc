<template lang="html">
  <div class="">wxid:{{this.$route.params.openid}}</div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Wxid',
  methods: {
    ...mapMutations(['SET_OPENID'])
  },
  mounted () {
    this.$store.commit('SET_OPENID', this.$route.params.openid)
    this.$router.push(sessionStorage.path ? sessionStorage.path : '/home')
  }
}
</script>

<style lang="less">
</style>
