<template>
  <v-card>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">
          Confirmation
        </div>
        <v-list-item-title class="headline mb-1">
          You alert was created.
        </v-list-item-title>
        <v-list-item-subtitle
          >If you wanna get create a new alert, make click in the
          button.</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-btn outlined rounded color="primary" text @click="linkTo('home', {})">
        Create a new alert
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { linkTo } from "../components/mixins/linkTo.js";
export default {
  name: "create_confirmation_page",
  mixins: [linkTo]
};
</script>
