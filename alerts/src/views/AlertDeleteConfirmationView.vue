<template>
  <v-card>
    <v-list-item three-line>
      <v-list-item-content v-if="alert">
        <div class="overline mb-4">
          Confirmation
        </div>
        <v-list-item-title class="headline mb-1">
          Do you want to delete this alert.
        </v-list-item-title>
        <v-list-item-subtitle
          >If you wanna delete this alert, make click in the
          button.</v-list-item-subtitle
        >
      </v-list-item-content>
      <v-list-item-content v-else>
        <div class="overline mb-4">
          Confirmation
        </div>
        <v-list-item-title class="headline mb-1">
          This alert don't exist
        </v-list-item-title>
        <v-list-item-subtitle>
          <router-link class="logo-font" :to="{ name: 'home', params: {} }"
            >Go Home</router-link
          >
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions v-if="alert">
      <v-btn
        outlined
        rounded
        color="error"
        :disabled="inProgress"
        @click="destroy"
      >
        Delete
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
import { FETCH_ALERT, ALERT_DELETE } from "../store/actions.type.js";

export default {
  name: "AlertDeleteConfirmation",
  data() {
    return {
      inProgress: false
    };
  },
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
    async destroy() {
      this.inProgress = true;
      await this.$store.dispatch(ALERT_DELETE, {
        uuid: this.alert.uuid
      });
      this.inProgress = false;
      this.$router.push({ name: "home", params: {} });
    }
  }
};
</script>
