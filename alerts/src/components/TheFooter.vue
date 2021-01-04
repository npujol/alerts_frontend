<template>
  <v-footer padless>
    <v-card class="flex" flat tile>
      <v-card-title class="d-flex text-center justify-center">
        <strong class="subheading">Get connected with us!</strong>
        <v-spacer></v-spacer>
        <v-btn v-for="( obj, index) in links" :key="index" icon :href="obj.link">
          <v-icon  size="24px">{{ obj.icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center" aling="center">
        <span
          >&copy; {{ new Date().getFullYear() }}
          <router-link class="logo-font" :to="{ name: 'home', params: {} }"
            >Alerts</router-link
          >
          by <a href="https://github.com/npujol">Naivy Pujol Méndez</a></span
        >
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "TheFooter",
  data: () => ({
    links: [
        { icon: "mdi-twitter", link: "https://twitter.com/nai_00_nai"},
        { icon: "mdi-linkedin", link: "https://www.linkedin.com/in/npujolm/"},
        { icon: "mdi-github", link: "https://github.com/npujol"},


      ]
  })
};
</script>
