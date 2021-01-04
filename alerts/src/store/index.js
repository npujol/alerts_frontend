import Vue from "vue";
import Vuex from "vuex";

import alerts from "./alerts.module.js";
import accounts from "./accounts.module.js";


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    alerts,
    accounts
  }
});
