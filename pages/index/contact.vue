<template>
  <v-main class="d-flex flex-column align-center">
    <v-row>
      <v-col>
        <header class="d-flex text-h4 ma-4"><h1>Kontakt</h1></header>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="form">
          <form class="d-flex flex-column" @submit.prevent="submit">
            <div class="d-flex flex-row justify-center align-start">
              <v-text-field
                v-model="email"
                label="E-mail"
                :error-messages="emailErrors"
                filled
                clearable
                required
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
              />
            </div>
            <div class="d-flex justify-center align-start">
              <v-text-field
                v-model="title"
                label="Tytuł"
                :error-messages="titleErrors"
                filled
                clearable
                required
                @input="$v.title.$touch()"
                @blur="$v.title.$touch()"
              />
            </div>
            <div class="d-flex justify-center align-start">
              <v-textarea
                v-model="message"
                label="Wiadomość"
                :error-messages="messageErrors"
                filled
                clearable
                required
                @input="$v.message.$touch()"
                @blur="$v.message.$touch()"
              ></v-textarea>
            </div>
            <div class="d-flex justify-space-around">
              <v-btn color="secondary" :disabled="invalid" @click="submit"
                >Wyślij</v-btn
              >
              <v-btn color="#303030" @click="clear">Wyczyść</v-btn>
            </div>
          </form>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h3>{{ sentMessage }}</h3>
      </v-col>
    </v-row>
  </v-main>
</template>

<script lang="ts">
import Vue from 'vue';
import { validationMixin } from 'vuelidate';
import { required, maxLength, email } from 'vuelidate/lib/validators';

export default Vue.extend({
  mixins: [validationMixin],
  validations: {
    email: { required, email },
    title: { required, maxLength: maxLength(100) },
    message: { required },
  },
  data() {
    return {
      email: '',
      title: '',
      message: '',
      sentMessage: '',
    };
  },
  computed: {
    emailErrors() {
      const errors: string[] = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push('Adress E-mail musi być poprawny');
      !this.$v.email.required && errors.push('Adress E-mail jest wymagany');
      return errors;
    },
    titleErrors() {
      const errors: string[] = [];
      if (!this.$v.title.$dirty) return errors;
      !this.$v.title.maxLength &&
        errors.push('Tytuł może mieć maksymalnie 100 znaków');
      !this.$v.title.required && errors.push('Tytuł jest wymagany');
      return errors;
    },
    messageErrors() {
      const errors: string[] = [];
      if (!this.$v.message.$dirty) return errors;
      !this.$v.message.required &&
        errors.push('Treść wiadomości jest wymagana');
      return errors;
    },
  },
  methods: {
    clear() {
      this.$v.$reset();
      this.email = '';
      this.title = '';
      this.message = '';
    },
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.sentMessage = 'Wysłano wiadomość!';
        setTimeout(() => {
          this.sentMessage = '';
        }, 3000);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.form {
  width: 40vw;
}
</style>
