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
        <div class="logo d-flex flex-column align-center">
          <h1>BIURO</h1>
          <h1>RACHUNKOWE</h1>
          <p class="logo__label">JOANNA MAKOWSKA</p>
        </div>
        <fa
          icon="arrow-circle-down"
          class="scroll-btn icon-m"
          @click="$vuetify.goTo(880)"
        />
      </header>
      <nav class="navbar">
        <v-tabs
          fixed-tabs
          icons-and-text
          background-color="rgba(0, 0, 0, 0)"
          class="navbar__links"
        >
          <v-tab class="d-flex flex-column align-center">
            <fa icon="address-card" class="icon-l" />
            O mnie
          </v-tab>
          <v-tab class="d-flex flex-column align-center">
            <fa icon="calendar-alt" class="icon-l" />
            Nowości
          </v-tab>
          <v-tab class="d-flex flex-column align-center">
            <fa icon="file-invoice-dollar" class="icon-l" />
            Oferta
          </v-tab>
          <v-tab class="d-flex flex-column align-center">
            <fa icon="envelope-open-text" class="icon-l" />
            Kontakt
          </v-tab>
        </v-tabs>
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
  font-family: $logo-header-font !important;
  letter-spacing: 10px;
  font-weight: 400;
  font-size: 86px;
  height: 80px;
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
    font-size: 32px;
  }
}
.logo__label {
  margin-top: 40px;
  border-top: 3px solid #fff;
  width: 500px;
  padding: 15px;
  text-align: center;
  font-family: $logo-label-font !important;
  letter-spacing: 10px;
}
</style>
