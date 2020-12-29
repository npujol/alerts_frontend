<template>
  <v-container>
    <div class="d-flex text-center justify-center" v-if="countAlerts === 0">
      No alerts are here... yet.
    </div>
    <Alert
      v-else
      class="mb-2"
      v-for="(alert, index) in alerts"
      :alert="alert"
      :key="index"
    >
    </Alert>
    <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

import Alert from "../components/Alert.vue";
import { linkTo } from "../components/mixins/linkTo.js";
import { FETCH_ALERTS } from "../store/actions.type.js";

export default {
  name: "AlertsList",
  mixins: [linkTo],
  data() {
    return {
      pagination: {}
    };
  },
  components: {
    Alert
  },
  mounted() {
    this.fetchAlerts();
  },
  computed: {
    ...mapGetters(["countAlerts", "alerts"]),
    pages() {
      return this.pagination.rowsPerPage
        ? Math.ceil(this.alerts.length / this.pagination.rowsPerPage)
        : 0;
    }
  },
  methods: {
    async fetchAlerts() {
      await this.$store.dispatch(FETCH_ALERTS, {
        uuid: this.$route.params.uuid
      });
    }
  }
};
</script>
