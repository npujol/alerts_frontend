import { AccountsApi } from "../client";

import { FETCH_ACCOUNT } from "./actions.type.js";
import { SET_ACCOUNT } from "./mutations.type.js";

const accountsApi = new AccountsApi();

const state = {
  account: null
};

const getters = {
  account(state) {
    return state.account;
  }
};

const actions = {
  async [FETCH_ACCOUNT](context, payload) {
    const data = await accountsApi.accountsRead(payload.uuid);
    context.commit(SET_ACCOUNT, data);
    return data;
  }
};

const mutations = {
  [SET_ACCOUNT](state, data) {
    state.account = data;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
