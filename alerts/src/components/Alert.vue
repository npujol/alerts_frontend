<template>
  <v-card outlined grow class="pa-2">
    <div>
      <v-row justify="center">
        <v-alert
          :icon="isOpenIcon"
          :color="isOpenColor"
          grow
          prominent
          text
          style="min-width: 100px; max-width: 95%"
          class="flex-grow-1 flex-shrink-0 pa-2"
        >
          <v-row align="center">
            <v-col>
              {{ message.title }}
            </v-col>
            <v-row class="shrink pa-4">
              <v-btn color="sucess" icon @click="dialog = true">
                <v-icon> mdi-eye </v-icon>
              </v-btn>
              <v-btn
                class="shrink pa-4"
                color="error"
                :disabled="inProgress"
                icon
                @click="destroy()"
              >
                <v-icon> mdi-delete</v-icon>
              </v-btn>
            </v-row>
          </v-row>
        </v-alert>

        <v-dialog v-model="dialog" max-width="500px">
          <v-card class="mx-auto" color="primary" dark max-width="500">
            <v-card-title>
              <v-icon medium left> mdi-bell </v-icon>
              <span class="title font-weight-light">Notification</span>
            </v-card-title>

            <v-card-text class="headline font-weight-bold">
              {{ message.body }}
            </v-card-text>

            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                  <v-img
                    :src="preview"
                    class="elevation-6"
                    alt=""
                    @click="
                      linkTo('profile', { username: message.owner.username })
                    "
                  ></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title
                    class="text-decoration-underline primary--text"
                    @click="
                      linkTo('profile', { username: message.owner.username })
                    "
                  >
                    {{ message.owner.username }}
                  </v-list-item-title>
                </v-list-item-content>

                <v-row align="center" justify="end">
                  <v-btn
                    class="subheading mr-1"
                    text
                    icon
                    small
                    @click="closeDialog()"
                  >
                    <v-icon> mdi-close </v-icon>
                  </v-btn>
                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </div>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
import { linkTo } from "./mixins/linkTo.js";
import {
  ALERT_DELETE,
  FETCH_ALERTS
} from "../store/actions.type.js";

export default {
  name: "Alert",
  mixins: [linkTo],
  data() {
    return {
      dialog: false,
      inProgress: false,
      preview: "https://picsum.photos/510/300?random"
    };
  },
  props: {
    alert: {
      type: Object,
      required: true,
      default: null
    }
  },
  computed: {
    isOpenIcon() {
      return this.message.opened === true ? "mdi-email-open" : "mdi-email";
    },
    isOpenColor() {
      return this.message.opened === true ? "info lighten-2" : "info";
    },
    isOpened() {
      return true;
    }
  },
  methods: {
    async setMessageStatus(pk, opened) {
      await this.$store.dispatch(ALERT_OPEN, {
        pk,
        opened
      });
      this.fetchAlerts();
    },
    closeDialog() {
      this.dialog = false;
    },
    async destroy() {
      this.inProgress = true;
      await this.$store.dispatch(ALERT_DELETE, { uuid: this.alert.uuid });
      this.inProgress = false;
      this.fetchAlerts();
    },
    async fetchAlerts() {
      await this.$store.dispatch(FETCH_ALERTS, {
        offset: 0,
        limit: 10
      });
    }
  }
};
</script>
