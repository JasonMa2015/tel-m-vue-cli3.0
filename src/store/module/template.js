export default {
  state: {
    templateInfo: null
  },
  mutations: {
    getTemplateInfo (state, templateInfo) {
      state.templateInfo = templateInfo;
    }
  }
};