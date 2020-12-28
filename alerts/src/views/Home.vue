<template>
  <v-container fluid>
    <AlertsList></AlertsList>
  </v-container>
</template>

<script>
import AlertsList from "../components/AlertsList.vue";

export default {
  name: "home",
  components: {
    AlertsList
    }
};
</script>
