<script>
import Vue from "vue";
// 新建一个 Bus.vue文件,new 一个 vue 实例导出
// 可以理解为这是一个传话人员
export default (Vue.prototype.$bus = new Vue({
  name: "bus",
  data () {
    return {
      // code
    };
  },
  beforeDestroy () {
    // 组件销毁前需要解绑事件。否则会出现重复触发事件的问题
    this.bus.$off(this.$route.path);
  }
}));
</script>
