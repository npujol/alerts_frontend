<template>
  <ValidationObserver ref="obs">
    <v-card slot-scope="{ invalid, validated }">
      <v-card-text>
        <v-form>
          <v-text-field
            v-model="email"
            disabled
            success
            label="Email"
            filled
            required
          ></v-text-field>
          <ValidationProvider name="search_term" rules="required">
            <v-text-field
              slot-scope="{ errors, valid }"
              v-model="search_term"
              :error-messages="errors"
              :success="valid"
              label="Search term"
              required
            ></v-text-field>
          </ValidationProvider>
          <ValidationProvider name="search_term" rules="required">
            <v-select
              slot-scope="{ errors, valid }"
              :error-messages="errors"
              item-text="interval"
              item-value="abbr"
              :success="valid"
              :items="intervals"
              v-model="interval"
              label="Time interval"
              dense
            ></v-select>
          </ValidationProvider>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="error" @click="setInitialState()">Cancel</v-btn>
        <v-btn color="primary" @click="submit" :disabled="invalid || !validated"
          >OK</v-btn
        >
      </v-card-actions>
    </v-card>
  </ValidationObserver>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
import { ALERT_EDIT } from "../store/actions.type.js";

export default {
  name: "AlertEdit",
  components: { ValidationProvider, ValidationObserver },
  props: {
    alert: {
      type: Object,
      required: true,
      default: null
    }
  },
  data() {
    return {
      search_term: null,
      email: null,
      interval: null,
      intervals: [
        { abbr: 2, interval: "2 minutes" },
        { abbr: 10, interval: "10 minutes" },
        { abbr: 30, interval: "30 minutes" }
      ]
    };
  },
  mounted() {
    this.setInitialState();
  },
  methods: {
    async setInitialState() {
      this.search_term = this.alert.searchTerm;
      this.interval = this.alert.intervalTime;
      this.email = this.alert.owner.email;
      this.$nextTick(() => {
        this.$refs.obs.reset();
      });
    },
    async submit() {
      const validated = await this.$refs.obs.validate();
      if (validated) {
        try {
          await this.$store.dispatch(ALERT_EDIT, {
            uuid: this.alert.uuid,
            body: {
              search_term: this.search_term,
              interval_time: this.interval
            }
          });
          this.$router.go();
        } catch (response) {
          const errors = JSON.parse(response.response.text).errors;
          this.$refs.obs.setErrors({
            search_term: errors.search_term,
            intervals: errors.interval_time
          });
        }
      }
    }
  }
};
</script>
