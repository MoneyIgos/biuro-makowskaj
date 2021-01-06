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
      <div class="d-flex flex-row justify-space-around align-end header">
        <div class="logo d-flex flex-column align-center">
          <h1 class="text-uppercase">Biuro</h1>
          <h1 class="text-uppercase">Rachunkowe</h1>
          <p class="logo__label text-uppercase">Joanna Makowska</p>
        </div>
        <fa
          icon="arrow-circle-down"
          class="scroll-btn icon-m"
          @click="$vuetify.goTo(880)"
        />
      </div>
      <div class="navbar">
        <v-tabs
          fixed-tabs
          icons-and-text
          background-color="rgba(0, 0, 0, 0)"
          class="navbar__links"
        >
          <v-tab
            v-for="item in items"
            :key="item.name"
            class="d-flex flex-column align-center"
            :nuxt="true"
            :to="item.page"
            @click="$vuetify.goTo(880)"
          >
            <fa :icon="item.icon" class="icon-l" />
            {{ item.name }}
          </v-tab>
        </v-tabs>
      </div>
      <div dark class="child grey darken-4">
        <nuxt-child />
      </div>
      <div class="footer">
        <Footer />
      </div>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Footer from '../components/Footer';

export default Vue.extend({
  components: {
    Footer,
  },
  data() {
    return {
      items: [
        {
          name: 'O mnie',
          page: '/about',
          icon: 'address-card',
        },
        {
          name: 'Nowości',
          page: '/news',
          icon: 'calendar-alt',
        },
        {
          name: 'Oferta',
          page: '/offer',
          icon: 'file-invoice-dollar',
        },
        {
          name: 'Kontakt',
          page: '/contact',
          icon: 'envelope-open-text',
        },
      ],
    };
  },
});
</script>

<style lang="scss">
body {
  background-image: url('../static/background.jpg');
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  overflow-x: hidden;
  margin: 0 !important;
}
.child {
  width: 100vw;
  height: 90vh;
}
.footer {
  width: 100vw;
  height: 10vh;
  text-align: center;
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

  h1 {
    font-family: $logo-header-font !important;
    letter-spacing: 10px;
    font-weight: 400;
    font-size: 86px;
    height: 80px;
  }
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
