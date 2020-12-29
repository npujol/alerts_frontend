<template>
  <v-container fluid>
    <v-card>
      <v-card-title class="d-flex text-center justify-center">
        <h3 class="d-flex font-weight-bold basil--text">
          Here you can create an alert for a product in ebay
        </h3>
      </v-card-title>
      <v-card-text>
        <AlertEditor> </AlertEditor>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import AlertEditor from "../components/AlertEditor.vue";

export default {
  name: "Home",
  components: {
    AlertEditor
  }
};
</script>
