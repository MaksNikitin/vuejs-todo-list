import Vue from 'vue';
import Vuex from 'vuex';

import toDoModule from './toDoModule';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    toDoModule,
  },
});
