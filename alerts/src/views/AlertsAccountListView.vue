<template>
  <v-container fluid>
    <v-card>
      <v-card-title class="d-flex text-center justify-center">
        <h3 class="d-flex font-weight-bold basil--text">
          Your alerts
        </h3>
      </v-card-title>
      <v-fab-transition>
        <v-btn color="error" fab top fixed right @click="goHome()">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-fab-transition>
      <AlertsList></AlertsList>
    </v-card>
  </v-container>
</template>

<script>
import AlertsList from "../components/AlertsList.vue";

export default {
  name: "AlertsAccountList",
  components: {
    AlertsList
  }, 
  methods: {
    goHome() {
      this.$router.push({ name: "home", params:  {uuid: this.$route.params.uuid }});
    }
  }
};
</script>
