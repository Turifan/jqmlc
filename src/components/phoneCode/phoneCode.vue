
<template>
  <div>
    <div :class="[codeBtn,{'btn-disabled':codeClick}]"
         @click.stop.prevent="getCode()">
      {{phoneCodeText}}
    </div>
  </div>
</template>

<script>
import { sendSMS } from '@/service'
import { getStore } from '@/lib/js/storage'

export default {
  name: 'PhoneCode',
  props: ['codeText', 'codeBtn', 'codeKey'],
  data () {
    return {
      codeClick: false,
      phoneCodeText: this.codeText
    }
  },
  methods: {
    async getCode () {
      this.codeClick = true
      let data = await sendSMS(
        ...[JSON.parse(getStore('userInfo')).mobilePhone, this.codeKey]
      )
      if (data.error === '0') {
        let count = 60
        let countDown = setInterval(() => {
          this.phoneCodeText = `${count}秒`
          count--
          if (count === 0) {
            clearInterval(countDown)
            this.phoneCodeText = '重新获取'
            this.codeClick = false
          }
        }, 1000)
      } else {
        this.$message.error({ message: data.msg })
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';

.getCode {
  .size(193px, 80px);
  border: 2px solid @main-color;
  border-radius: 18px;
  line-height: 80px;
  text-align: center;
  .fontSize(32px);
  .color(@main-color);
  outline: none;
}

.depositGetCode {
  .size(282px, 102px);
  border-radius: 20px;
  background: @main-color;
  .color(#fff);
  text-align: center;
  line-height: 102px;
}

.btn-disabled {
  cursor: not-allowed;
  pointer-events: none;
  opacity: 0.65;
  box-shadow: none;
}
</style>
