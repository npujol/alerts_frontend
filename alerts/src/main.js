import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { ApiClient } from "./client";
import vuetify from "./plugins/vuetify.js";
import "./plugins/vee-validate.js";

Vue.config.productionTip = false;

const apiClient = ApiClient.instance;
if (process.env.NODE_ENV === "production") {
  apiClient.basePath = "/api";
} else {
  apiClient.basePath = "http://localhost:8000/api".replace(/\/+$/, "");
}

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
