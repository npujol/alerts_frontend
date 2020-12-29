<template>
  <ValidationObserver ref="obs">
    <v-card slot-scope="{ invalid, validated }">
      <v-card-text>
        <v-form>
          <ValidationProvider name="email" rules="required|email">
            <v-text-field
              slot-scope="{ errors, valid }"
              v-model="email"
              :error-messages="errors"
              :success="valid"
              label="Email"
              filled
              required
            ></v-text-field>
          </ValidationProvider>
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
        <v-btn color="error" @click="clear">Cancel</v-btn>
        <v-btn color="primary" @click="submit" :disabled="invalid || !validated"
          >OK</v-btn
        >
      </v-card-actions>
    </v-card>
  </ValidationObserver>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
import { ALERT_CREATE } from "../store/actions.type.js";

export default {
  name: "AlertCreate",
  components: { ValidationProvider, ValidationObserver },
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
  methods: {
    async clear() {
      this.search_term = this.interval = this.email = null;
      this.$nextTick(() => {
        this.$refs.obs.reset();
      });
    },
    async submit() {
      const validated = await this.$refs.obs.validate();
      if (validated) {
        try {
          await this.$store.dispatch(ALERT_CREATE, {
            email: this.email,
            search_term: this.search_term,
            interval_time: this.interval
          });
          this.$router.push({ name: "create-alert-confirmation" });
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
