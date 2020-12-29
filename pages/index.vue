<template>
  <v-app dark style="background: rgba(0, 0, 0, 0)">
    <v-container class="d-flex flex-column">
      <div class="socials d-flex justify-end">
        <a
          href="https://www.facebook.com/BiuroRachunkoweJoannaMakowska"
          target="_blank"
        >
          <fa :icon="['fab', 'facebook']" class="icon-l" />
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
          class="scroll-btn icon-m"
          @click="$vuetify.goTo(950)"
        />
      </header>
      <nav class="navbar">
        <div class="navbar__links d-flex justify-space-around">
          <button class="d-flex flex-column align-center">
            <fa icon="calendar-alt" class="icon-l" />
            Nowości
          </button>
          <button class="d-flex flex-column align-center">
            <fa icon="file-invoice-dollar" class="icon-l" />
            Oferta
          </button>
          <button class="d-flex flex-column align-center">
            <fa icon="address-card" class="icon-l" />
            Kontakt
          </button>
        </div>
      </nav>
    </v-container>
  </v-app>
</template>

<style lang="scss">
body {
  background-image: url('../static/background.jpg');
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
  padding: 0;
}
.header {
  margin-top: 41vh;
  margin-bottom: 2vh;
  width: 100vw;
  height: 10vh;
}
.scroll-btn {
  cursor: pointer;
}
.socials {
  margin-top: 30vh;
}
.icon-m {
  font-size: 24px;
}
.icon-l {
  font-size: 32px;
}
.navbar {
  width: 100vw;
  height: 130px;
  background-image: url('../static/footer.svg');

  &__links {
    margin-top: 6vh;
    font-size: 24px;
  }
}
</style>
