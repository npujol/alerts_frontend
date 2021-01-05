<template>
  <v-card>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">
          Confirmation
        </div>
        <v-list-item-title class="headline mb-1">
          You alert: {{ alert.uuid }} was created .
        </v-list-item-title>
        <v-list-item-subtitle
          >If you wanna get create a new alert, make click in the
          button.</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-btn outlined rounded color="primary" text @click="goHome()">
        Create a new alert
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

import { FETCH_ALERT, ALERT_DELETE } from "../store/actions.type.js";
export default {
  name: "AlertCreateConfirmation",
  mounted() {
    this.fetchAlert();
  },
  computed: {
    ...mapGetters(["alert"])
  },
  methods: {
    async fetchAlert() {
      await this.$store.dispatch(FETCH_ALERT, {
        uuid: this.$route.params.uuid
      });
    },
    async goHome() {
      this.$router.push({
        name: "home",
        params: { uuid: this.alert.owner.uuid }
      });
    }
  }
};
</script>
