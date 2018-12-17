<!-- 红包卡券 -->
<template lang="html">
  <div class="">
    <HeaderBar :headerBar="headerBar"></HeaderBar>
    <div class="gray-fixed">
      <div class="cashTicketsTabs">
        <div :class="{active:index==tabIndex}" v-for="(item,index) in tabs" :key="item.id" @click.stop.prevent="tab(index)">{{item.title}}</div>
      </div>
      <div class="cashTicketsList">
        <component :is="currentTabComponent"></component>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/common/headerBar.vue'
import UnUsed from './unUsed.vue'
import Used from './used.vue'
import OverdueTickets from './overdueTickets.vue'

export default {
  name: 'CashTickets',
  components: {
    HeaderBar,
    UnUsed,
    Used,
    OverdueTickets
  },
  data () {
    return {
      headerBar: {
        title: '红包卡券',
        imgUrl: '规则',
        goBackUrl: require('../../assets/images/goBack.png'),
        path: 'aboutTicket',
        params: {},
        goBack: true,
        showIcon: true
      },
      tabs: [{
        title: '未使用',
        component: UnUsed,
        id: 0
      }, {
        title: '已使用',
        component: Used,
        id: 1
      }, {
        title: '已过期',
        component: OverdueTickets,
        id: 2
      }],
      tabIndex: 0
    }
  },
  methods: {
    tab (index) {
      this.tabIndex = index
    }
  },
  computed: {
    currentTabComponent () {
      return this.tabs[this.tabIndex].component
    }
  }
}

</script>

<style lang="less" scoped>
  @import '../../style/mixin.less';

  .cashTicketsTabs {
    display: flex;
    flex: 1;
    height: 120px;
    line-height: 120px;
    align-items: center;
    justify-content: space-around;
    border-bottom: 2px solid #efefef;
  }

  .active {
    border-bottom: 4px solid @main-color;
  }

  .cashTicketsList {
    padding: 40px 35px;
  }

</style>
