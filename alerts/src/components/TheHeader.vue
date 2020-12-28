<!-- @format -->

<template>
  <div>
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item @click="linkTo('home', {})">
          <h3 class="basil--text align-center">
            <v-icon>mdi-view-dashboard</v-icon>
            Alerts
          </h3>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
import { linkTo } from "./mixins/linkTo.js";

export default {
  name: "TheHeader",
  mixins: [linkTo],
  data: () => ({
    drawer: null,
  })
};
</script>
