<template>
  <ValidationObserver ref="obs">
    <v-card slot-scope="{ invalid, validated }">
      <v-card-text>
        <v-form>
          <v-row no-gutters>
            <v-col cols="12" md="8">
              <ValidationProvider name="search_term" rules="required">
                <v-text-field
                  slot-scope="{ errors, valid }"
                  v-model="alert"
                  :error-messages="errors"
                  :success="valid"
                  label="Search term"
                  required
                ></v-text-field>
              </ValidationProvider>
            </v-col>
            <v-col cols="12" md="4">
              <v-select
                :error-messages="errors"
                item-text="interval"
                item-value="abbr"
                :items="intervals"
                v-model="defaultSelected"
                label="Time interval"
                dense
              ></v-select>
            </v-col>
          </v-row>
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
  name: "AlertEditor",
  components: { ValidationProvider, ValidationObserver },
  props: {
    email: { type: String, required: true }
  },
  data() {
    return {
      search_term: null,
      defaultSelected: {
        abbr: "30",
        interval: "30 minutes"
      },
      intervals: [
        { abbr: "2", interval: "2 minutes" },
        { abbr: "10", interval: "10 minutes" },
        { abbr: "30", interval: "30 minutes" }
      ]
    };
  },
  methods: {
    async clear() {
      this.search_term = this.interval = null;
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
            interval_time: this.defaultSelected.abbr
          });
        } catch (response) {
          console.log(response);
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
