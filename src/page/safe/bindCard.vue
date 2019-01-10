<!-- 绑定银行卡 -->
<template lang="html">
  <div class="">
    <HeaderBar :headerBar="headerBar"></HeaderBar>
    <div :class="['gray-fixed',{'gray-fixed-bg':!binded}]">
      <div class="certContainer">
        <div class="certed" v-if="binded">
          <div class="certBox certName">
            <div>姓名</div>
            <div>张三</div>
          </div>
          <div class="certBox certCard">
            <div>身份证</div>
            <div>42************90</div>
          </div>
        </div>
        <div class="uncerted" v-if="!binded">
          <div class="certTips">
            为了您的资金安全,绑定银行卡时需进行实名认证,请务必输入您本人的身份和银行卡信息,认证通过后将不能更改,如需修改,请<span class="brandColor" @click.stop.prevent="jump('http://wpa.qq.com/msgrd?v=3&uin=764566548&site=qq&menu=yes')">联系客服</span>。
          </div>
          <div class="certForm">
            <div class="certUserName certFormBox">
              <input type="text" v-model.trim="username" placeholder="请输入开户人姓名" class="userNameInput">
            </div>
            <div class="certUserName certFormBox">
              <input type="text" v-model.trim="bankName" :placeholder="selectedText[0]" class="bankInput" ref="select0"  @click="showPicker(0)" readonly>
              <picker @select="handleSelect(0,arguments)" :selected-index="selectedIndex[0]"
            ref="picker0" :title="title[0]" :cancelTxt="cancelTxt"
            :confirmTxt="confirmTxt"></picker>
            </div>
            <div class="certUserName certFormBox">
              <input type="text" v-model.trim="bankAddress" :placeholder="selectedText[1]" class="bankAddressInput" ref="select1" @click="showPicker(1)" readonly>
    <city-picker @select="handleSelect(1,arguments)" :data="areaList" :selected-index="selectedIndex[1]"
                 ref="picker1" :title="title[1]" :cancelTxt="cancelTxt"
                 :confirmTxt="confirmTxt"></city-picker>
            </div>
            <div class="certUserName certFormBox">
              <input type="text" v-model.trim="subBank" placeholder="请输入开户支行" class="subBankInput">
            </div>
            <div class="certUserNum certFormBox">
              <input type="text" v-model.trim="bankNum" placeholder="请输入卡号" class="bankNumInput">
            </div>
          </div>
          <div class="bindCardBtn" @click.stop.prevent="bindBankCard">
            确定
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/common/headerBar.vue'
import Picker from '@/components/picker/picker.vue'
import CityPicker from '@/components/city-picker/city-picker.vue'
import { provinceList, cityList, areaList } from '@/data/areaData'

export default {
  name: 'Cert',
  components: {
    HeaderBar,
    Picker,
    CityPicker,
    provinceList,
    cityList,
    areaList
  },
  data () {
    return {
      headerBar: {
        title: '绑定银行卡',
        imgUrl: '',
        goBackUrl: require('../../assets/images/goBack.png'),
        path: '',
        params: {},
        goBack: true,
        showIcon: false
      },
      binded: false,
      // 输入框默认值
      username: '',
      bankName: '',
      bankAddress: '',
      subBank: '',
      bankNum: '',
      // 获取银行卡列表
      bankList: this.$store.state.bankList,
      // 省市区列表
      areaList: [provinceList, cityList, areaList],
      // picker组件默认值
      confirmTxt: '确定',
      cancelTxt: '取消',
      // 设定弹起时默认选中的值
      selectedIndex: [[2], [0, 0, 0]],
      selectedText: ['请选择开户银行', '请选择开户地址'],
      title: ['开户行', '开户地址']
    }
  },
  mounted () {
    this.$refs.picker0.setData([this.bankList])
    this.$refs.picker0.setSelectedIndex([2])
  },
  watch: {
    bankName () {
      this.bankName = this.selectedText[0]
    },
    bankAddress () {
      this.bankAddress = this.selectedText[1]
    }
  },
  methods: {
    jump (url) {
      window.location.href = url
    },
    // 绑定银行卡按钮事件
    bindBankCard () {
      console.log(this.username)
      console.log(this.bankName)
      console.log(this.bankAddress)
      console.log(this.subBank)
      console.log(this.bankNum)
    },
    showPicker (index) {
      let picker = this.$refs['picker' + index]

      picker.show()
    },
    handleSelect (index, args) {
      this.selectedText.splice(index, 1, args[2].join('，'))
      this.bankName =
        this.selectedText[0] === '请选择开户银行' ? '' : this.selectedText[0]
      this.bankAddress =
        this.selectedText[1] === '请选择开户地址' ? '' : this.selectedText[1]
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';

.border-1px {
  position: relative;
  &:after {
    content: '';
    pointer-events: none;
    left: 0;
    top: 0;
    transform-origin: 0 0;
    border: 1px solid #ccc; /*no*/
    border-radius: 2px; /*no*/
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    @media (-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2) {
      width: 200%;
      height: 200%;
      border-radius: 4px;
      transform: scale(0.5) translateZ(0);
    }
    @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
      width: 300%;
      height: 300%;
      border-radius: 6px;
      transform: scale(0.33) translateZ(0);
    }
  }
}

.certBox {
  display: flex;
  flex: 1;
  padding: 0 34px;
  align-items: center;
  justify-content: space-between;
  height: 140px;
  .fontSize(42px);
  border-bottom: 2px solid #f0f0f0;
}
.uncerted {
  padding: 0 34px;
}
.certTips {
  margin: 36px 0 72px;
  .fontSize(32px);
}
.certForm {
  // padding: 1px;
  box-sizing: border-box;
  border: 2px solid #bfbfbf;
  border-radius: 18px;
  overflow: hidden;
}
.certFormBox {
  margin: 0 auto;
  padding: 1px;
  .bg(#fff);
  input {
    width: 100%;
    height: 140px;
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    .fontSize(38px);
    box-sizing: border-box;
  }
  .userNameInput {
    padding-left: 114px;
    background: url('../../assets/images/cert_name.png') 29px center no-repeat;
    background-size: 56px 58px;
  }
  .bankInput {
    padding-left: 114px;
    background: url('../../assets/images/bank.png') 23.5px center no-repeat;
    background-size: 57px 64px;
  }
  .bankAddressInput {
    padding-left: 114px;
    background: url('../../assets/images/address.png') 25px center no-repeat;
    background-size: 64px 58px;
  }
  .subBankInput {
    padding-left: 114px;
    background: url('../../assets/images/subBank.png') 34px center no-repeat;
    background-size: 46px 64px;
  }
  .bankNumInput {
    padding-left: 114px;
    background: url('../../assets/images/bankNum.png') 25px center no-repeat;
    background-size: 64px 50px;
  }
}
.certUserName {
  border-bottom: 2px solid #bfbfbf;
}
.bindCardBtn {
  .size(900px, 120px);
  margin: 150px auto;
  .bg(@main-color);
  .color(#fff);
  line-height: 120px;
  .text-center;
  .fontSize(52px);
  border-radius: 18px;
}
</style>
