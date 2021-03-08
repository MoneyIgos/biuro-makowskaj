<template>
  <v-app>
    <div class="grey darken-4">
      <NavBar />
      <v-main>
        <v-row>
          <v-col class="d-flex justify-center ma-12 text-h5">
            <v-header><h1>Zarządzaj Użytkownikami</h1></v-header>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex flex-column align-center">
            <v-btn x-large color="secondary">Dodaj Użytkownika</v-btn>
            <div
              v-for="user in users"
              :key="user.name"
              class="d-flex flex-column align-center pa-6 ma-12 user"
            >
              <p class="text-h5">{{ user.name }}</p>
              <div>
                <v-btn>Edytuj</v-btn>
                <v-btn color="error">Usuń</v-btn>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-main>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import NavBar from '../../components/NavBar.vue';

export default Vue.extend({
  components: {
    NavBar,
  },
  data() {
    return {
      users: [
        {
          name: 'User 1',
        },
        {
          name: 'User 2',
        },
      ],
    };
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
.user {
  background-color: #101010;
  border-radius: 10px;
}
</style>
