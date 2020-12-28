import { AlertsApi } from "../client";

import {
  FETCH_ALERT,
  FETCH_ALERTS,
  ALERT_CREATE,
  ALERT_DELETE,
} from "./actions.type.js";
import {
  SET_ALERTS,
  SET_ALERT,
  SET_ALERT_COUNT,
  SET_ALERTS_START
} from "./mutations.type.js";

const alertsApi = new AlertsApi();
const state = {
  countNewAlerts: 0,
  alerts: [],
  countAlerts: 0,
  isAlertsLoading: true,
  alert: null,
  limit: 10
};

const getters = {
  alerts(state) {
    return state.alerts;
  },
  alert(state) {
    return state.alert;
  },
  countNewAlerts(state) {
    return state.countNewAlerts;
  },
  isAlertsLoading(state) {
    return state.isAlertsLoading;
  },
  countAlerts(state) {
    return state.countAlerts;
  },
  limit(state) {
    return state.limit;
  }
};

const actions = {
  async [FETCH_ALERT](context, payload) {
    context.commit(SET_ALERTS_START);
    const data = await alertsApi.alertsRead(payload);
    context.commit(SET_ALERT, data);
    return data;
  },
  async [FETCH_ALERTS](context, payload) {
    const data = await alertsApi.alertsList(payload);
    context.commit(SET_ALERTS, data);
    return data;
  },
  async [ALERT_CREATE](context, payload) {
    console.log(payload)
    const data = await alertsApi.alertsCreate(payload);
    context.dispatch(FETCH_ALERTS);
    return data;
  },
  async [ALERT_DELETE](context, payload) {
    await alertsApi.alertsDelete(payload.uuid);
    context.dispatch(FETCH_ALERTS);
    return;
  }
};

const mutations = {
  [SET_ALERT_COUNT](state, data) {
    state.countNewAlerts = data;
  },
  [SET_ALERTS_START](state) {
    state.isAlertsLoading = true;
  },
  [SET_ALERTS](state, data) {
    state.alerts = data.results;
    state.countAlerts = data.count;
    state.isAlertsLoading = false;
  },
  [SET_ALERT](state, data) {
    state.alert = data.results;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
