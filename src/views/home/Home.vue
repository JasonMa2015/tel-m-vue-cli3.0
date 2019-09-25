<template>
  <div>
    <x-header>标题（自定义主题颜色）</x-header>
    <tab>
      <tab-item selected @on-item-click="onItemClick">已发货</tab-item>
      <tab-item @on-item-click="onItemClick">未发货</tab-item>
      <tab-item @on-item-click="onItemClick">全部订单</tab-item>
    </tab>
  </div>
</template>

<script>
import { Tab, TabItem, XHeader } from 'vux';
export default {
  components: {
    Tab,
    TabItem,
    XHeader
  },
  data () {
    return {

    };
  },
  methods: {
    onItemClick (index) {
      console.log('on item click:', index);
    }
  }
};
</script>

<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/center.less';

.box {
  padding: 15px;
}
.active-6-1 {
  color: rgb(252, 55, 140) !important;
  border-color: rgb(252, 55, 140) !important;
}
.active-6-2 {
  color: #04be02 !important;
  border-color: #04be02 !important;
}
.active-6-3 {
  color: rgb(55, 174, 252) !important;
  border-color: rgb(55, 174, 252) !important;
}
.tab-swiper {
  background-color: #fff;
  height: 100px;
}
</style>
