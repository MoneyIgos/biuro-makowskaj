<template>
  <v-app dark>
    <v-row>
      <v-col class="d-flex flex-column justify-center align-center">
        <h1>Admin Panel</h1>
        <form class="d-flex flex-column align-stretch">
          <v-text-field
            v-model="login"
            label="Login"
            :error-messages="loginErrors"
            filled
            clearable
            required
            @input="$v.login.$touch()"
            @blur="$v.login.$touch()"
          />
          <v-text-field
            v-model="pass"
            label="Hasło"
            :error-messages="passErrors"
            :type="showPass ? 'text' : 'password'"
            :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
            filled
            clearable
            required
            @input="$v.pass.$touch()"
            @blur="$v.pass.$touch()"
            @click:append="showPass = !showPass"
          />
          <v-btn color="secondary" @click="submit">Zaloguj</v-btn>
        </form>
      </v-col>
    </v-row>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { validationMixin } from 'vuelidate';
import { required } from 'vuelidate/lib/validators';

export default Vue.extend({
  mixins: [validationMixin],
  validations: {
    login: { required },
    pass: { required },
  },
  data() {
    return {
      login: '',
      pass: '',
      showPass: false,
    };
  },
  computed: {
    loginErrors() {
      const errors: string[] = [];
      if (!this.$v.login.$dirty) return errors;
      !this.$v.login.required && errors.push('Login jest wymagane');
      return errors;
    },
    passErrors() {
      const errors: string[] = [];
      if (!this.$v.pass.$dirty) return errors;
      !this.$v.pass.required && errors.push('Hasło jest wymagane');
      return errors;
    },
  },
  methods: {
    submit() {
      this.$v.$touch();
    },
  },
});
</script>

<style lang="scss" scoped>
body {
  font-family: $body-font-family;
}
h1 {
  font-family: $header-font;
  letter-spacing: 3px;
  font-weight: 400;
}
</style>
