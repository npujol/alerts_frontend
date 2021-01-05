<template>
  <v-card outlined grow class="pa-4">
    <div>
      <v-row justify="center">
        <v-alert
          icon="mdi-email"
          color="info"
          grow
          prominent
          text
          style="min-width: 100px; max-width: 95%"
          class="flex-grow-1 flex-shrink-0 pa-2"
        >
          <v-row align="center">
            <v-col>
              <div>Alert</div>
              <p class="display-1 text--primary">Your alert in eBay</p>
              <div class="text--primary">
                Search Term: {{ alert.searchTerm }}<br />
                Interval of time: {{ alert.intervalTime }}
              </div>
            </v-col>
            <v-row class="shrink pa-4">
              <v-btn color="sucess" icon @click="dialog = true">
                <v-icon> mdi-pencil </v-icon>
              </v-btn>
              <v-btn
                class="shrink pa-4"
                color="error"
                :disabled="isSentEmail"
                icon
                @click="destroy()"
              >
                <v-icon> mdi-delete</v-icon>
              </v-btn>
            </v-row>
          </v-row>
        </v-alert>

        <v-dialog v-model="dialog" max-width="500px">
          <v-card class="mx-auto" dark max-width="500">
            <v-card-actions>
              <v-list-item class="grow">
                <v-row align="center" justify="end">
                  <v-card-title>
                    <v-icon medium left> mdi-bell </v-icon>
                    <span class="title font-weight-light">Alert</span>
                  </v-card-title>
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

            <AlertEdit :alert="alert"></AlertEdit>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card class="mx-auto" dark max-width="500">
            <v-card-actions>
              <v-list-item class="grow">
                <v-row align="center" justify="end">
                  <v-card-title>
                    <v-icon medium left> mdi-alert </v-icon>
                    <span class="title font-weight-light"
                      >Delete the alert: {{ alert.uuid }}</span
                    >
                  </v-card-title>
                  <v-btn
                    class="subheading mr-1"
                    text
                    icon
                    small
                    @click="closeDialogDelete()"
                  >
                    <v-icon> mdi-close </v-icon>
                  </v-btn>
                </v-row>
              </v-list-item>
            </v-card-actions>
            <v-card-text>
              {{ msg }}
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-row>
    </div>
  </v-card>
</template>

<script>
import { linkTo } from "./mixins/linkTo.js";
import AlertEdit from "./AlertEdit.vue";
import { ALERT_DELETE, FETCH_ALERTS } from "../store/actions.type.js";

export default {
  name: "Alert",
  mixins: [linkTo],
  components: {
    AlertEdit
  },
  data() {
    return {
      dialog: false,
      dialogDelete: false,
      msg: null,
      isSentEmail: false
    };
  },
  props: {
    alert: {
      type: Object,
      required: true,
      default: null
    }
  },
  methods: {
    closeDialog() {
      this.dialog = false;
    },
    closeDialogDelete() {
      this.dialogDelete = false;
    },
    async destroy() {
      this.dialogDelete = true;
      this.isSentEmail = true;
      const data = await this.$store.dispatch(ALERT_DELETE, {
        uuid: this.alert.uuid
      });
      this.msg = "We are sending the email! You will receive the email soon.";
      this.fetchAlerts();
    },
    async fetchAlerts() {
      await this.$store.dispatch(FETCH_ALERTS, { uuid: this.alert.owner.uuid });
    }
  }
};
</script>
