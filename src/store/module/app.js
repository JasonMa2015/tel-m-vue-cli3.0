export default {
  state: {
    test: '配置了vuex、vue-router、iview、axios、跨域'
  },
  mutations: {
    getEditInfo (state, value) {
      state.editInfo = value;
    }
  }
};