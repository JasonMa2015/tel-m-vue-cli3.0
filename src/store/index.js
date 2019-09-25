import Vue from 'vue';
import Vuex from 'vuex';

import app from './module/app';
import template from './module/template';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {
    //
  },
  modules: {
    app,
    template
  }
});