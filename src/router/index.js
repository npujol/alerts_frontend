/** @format */

import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    name: "home",
    path: "/:uuid?",
    component: () => import("../views/Home.vue")
  },
  {
    name: "account-alerts",
    path: "/account/:uuid/alerts",
    component: () => import("../views/AlertsAccountListView.vue")
  },
  {
    name: "alert-delete",
    path: "/alert/:uuid/delete",
    component: () => import("../views/AlertDeleteConfirmationView.vue")
  },
  {
    name: "create-alert-confirmation",
    path: "alert/:uuid/create-confirmation",
    component: () => import("../views/AlertCreateConfirmationView.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
