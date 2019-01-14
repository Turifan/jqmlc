<template>
  <div>
    <iframe :src="iframeUrl"
            frameborder="0"
            width="100%"
            height="100%"></iframe>
  </div>
</template>
<script>
export default {
  name: 'IframeInfo',
  props: ['iframeUrl']
}
</script>
<style lang="less" scoped>
</style>
