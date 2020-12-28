<template>
  <v-card>
    <v-card-title class="d-flex text-center justify-center">
      <h3 class="d-flex font-weight-bold basil--text">
        Here you can create an alert for a product in ebay
      </h3>
    </v-card-title>
    <div class="mx-auto" aling="center">
      <v-fab-transition v-if="disabled_email">
        <v-btn color="primary" fab top fixed right @click="clear">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </v-fab-transition>
      <ValidationObserver ref="obs">
        <v-card slot-scope="{ invalid, validated }">
          <v-card-title class="d-flex text-center justify-center">
            <h3 class="d-flex font-weight-bold basil--text">Your email</h3>
          </v-card-title>
          <v-card-text>
            <v-form>
              <ValidationProvider immediatename="email" rules="required|email">
                <v-text-field
                  slot-scope="{ errors, valid }"
                  v-model="email"
                  :error-messages="errors"
                  :success="valid"
                  :disabled="disabled_email"
                  label="Email"
                  filled
                  required
                ></v-text-field>
              </ValidationProvider>
            </v-form>
          </v-card-text>
          <v-card-actions v-if="!disabled_email">
            <v-spacer></v-spacer>
            <v-btn color="error" @click="clear">Cancel</v-btn>
            <v-btn
              color="primary"
              @click="submit"
              :disabled="invalid || !validated"
              >OK</v-btn
            >
          </v-card-actions>
        </v-card>
      </ValidationObserver>
      <AlertEditor email="email" v-if="disabled_email"> </AlertEditor>
    </div>
    <div v-if="isAlertsLoading">
      <v-boilerplate
        v-for="(alert, index) in alerts"
        :key="index"
        type="list-item-content, list-item-title, list-item-subtitle, list-item-avatar, actions"
      ></v-boilerplate>
    </div>
    <div v-else>
      <div class="d-flex text-center justify-center" v-if="alertsCount === 0">
        No alerts are here... yet.
      </div>
      <Alert
        class="mb-2"
        v-for="(alert, index) in alerts"
        :slug="story.slug"
        :alert="alert"
        :key="index"
      >
      </Alert>
    </div>
    <v-pagination
      v-if="pages > 0"
      :total-visible="5"
      v-model="currentPage"
      :length="pages"
    ></v-pagination>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
import { ValidationObserver, ValidationProvider } from "vee-validate";

import Alert from "../components/Alert.vue";
import AlertEditor from "../components/AlertEditor.vue";
import { pagination } from "../components/mixins/pagination.js";
import { linkTo } from "../components/mixins/linkTo.js";
import { FETCH_ALERTS } from "../store/actions.type.js";

export default {
  name: "AlertsList",
  mixins: [pagination, linkTo],
  inject: ["theme"],
  data: () => ({
    email: null,
    disabled_email: false
  }),
  components: {
    Alert,
    AlertEditor,
    ValidationProvider,
    ValidationObserver,
    VBoilerplate: {
      functional: true,
      render(h, { data, props, children }) {
        return h(
          "v-skeleton-loader",
          {
            ...data,
            props: {
              boilerplate: true,
              elevation: 2,
              ...props
            }
          },
          children
        );
      }
    }
  },
  computed: {
    pages() {
      if (this.isAlertsLoading || this.alertsCount <= this.limit) {
        return 0;
      }
      return Math.ceil(this.alertsCount / this.limit);
    },
    ...mapGetters(["alertsCount", "isAlertsLoading", "alerts", "limit"])
  },
  watch: {
    currentPage(newValue) {
      this.filters.offset = (newValue - 1) * this.limit;
      this.fetchAlerts();
    }
  },
  methods: {
    async fetchAlerts() {
      await this.$store.dispatch(FETCH_ALERTS, {
        email: this.email,
        filters: this.filters
      });
    },
    async submit() {
      const validated = await this.$refs.obs.validate();
      if (validated) {
        try {
          this.disabled_email = true;
          this.fetchAlerts();
        } catch (response) {
          const errors = JSON.parse(response.response.text).errors;
          this.$refs.obs.setErrors({
            alert: errors.body
          });
        }
      }
    },
    async clear() {
      this.email = "";
      this.disabled_email = false;
      this.$nextTick(() => {
        this.$refs.obs.reset();
      });
    }
  }
};
</script>
