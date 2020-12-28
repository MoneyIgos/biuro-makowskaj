<template>
  <v-app dark style="background: rgba(0, 0, 0, 0)">
    <v-container class="d-flex flex-column">
      <div class="socials d-flex justify-end">
        <a
          href="https://www.facebook.com/BiuroRachunkoweJoannaMakowska"
          target="_blank"
        >
          <fa :icon="['fab', 'facebook']" />
        </a>
      </div>
      <header class="d-flex flex-row justify-space-around align-end header">
        <div class="d-flex flex-column">
          <h1 class="justify-self-start">Biuro Rachunkowe Joanna Makowska</h1>
          <p class="justify-self-end headline">
            Kompleksowa obsługa księgowa dla firm i osób prywatnych
          </p>
        </div>
        <fa
          icon="arrow-circle-down"
          class="scroll-btn"
          @click="$vuetify.goTo(700)"
        />
      </header>
    </v-container>
  </v-app>
</template>

<style lang="scss">
body {
  background-image: url(../static/background.jpg);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  overflow-x: hidden;
  margin: 0 !important;
}
h1 {
  font-family: $header-font !important;
  letter-spacing: 3px;
  font-size: 86px;
}
.container {
  width: 100vw;
  height: 200vh;
  margin: 0;
}
.header {
  margin-top: 50vh;
  width: 100vw;
  height: 10vh;
}
.scroll-btn {
  cursor: pointer;
}
.socials {
  margin-top: 30vh;
}
</style>
