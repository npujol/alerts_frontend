<template>
  <v-container fluid>
    <v-card>
      <v-card-title class="d-flex text-center justify-center">
        <h3 class="d-flex font-weight-bold basil--text">
          Your alerts
        </h3>
      </v-card-title>
      <v-fab-transition>
        <v-btn color="error" fab top fixed right @click="linkTo('home', {})">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-fab-transition>
      <AlertsList></AlertsList>
    </v-card>
  </v-container>
</template>

<script>
import AlertsList from "../components/AlertsList.vue";
import { linkTo } from "../components/mixins/linkTo.js";

export default {
  name: "AlertsAccountList",
  mixins: [linkTo],
  components: {
    AlertsList
  }
};
</script>
