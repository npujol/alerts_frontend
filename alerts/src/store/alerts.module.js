import { AlertsApi } from "../client";

import {
  FETCH_ALERT,
  FETCH_ALERTS,
  ALERT_CREATE,
  ALERT_DELETE,
  ALERT_EDIT
} from "./actions.type.js";
import {
  SET_ALERTS,
  SET_ALERT,
  SET_ALERT_COUNT,
  SET_ALERTS_START
} from "./mutations.type.js";

const alertsApi = new AlertsApi();

const state = {
  alerts: [],
  countAlerts: 0,
  alert: null
};

const getters = {
  alerts(state) {
    return state.alerts;
  },
  alert(state) {
    return state.alert;
  },
  countAlerts(state) {
    return state.countAlerts;
  }
};

const actions = {
  async [FETCH_ALERT](context, payload) {
    const data = await alertsApi.alertsRead(payload.uuid);
    context.commit(SET_ALERT, data);
    return data;
  },
  async [FETCH_ALERTS](context, payload) {
    const data = await alertsApi.alertsList(payload.uuid);
    context.commit(SET_ALERTS, data);
    return data;
  },
  async [ALERT_CREATE](context, payload) {
    const data = await alertsApi.alertsCreate(payload);
    return data;
  },
  async [ALERT_EDIT](context, payload) {
    const data = await alertsApi.alertsPartialUpdate(
      payload.uuid,
      payload.body
    );
    return data;
  },
  async [ALERT_DELETE](context, payload) {
    await alertsApi.alertsDelete(payload.uuid);
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
    state.alerts = data;
    state.countAlerts = data.length;
    state.isAlertsLoading = false;
  },
  [SET_ALERT](state, data) {
    state.alert = data;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
