<template>
  <v-app dark style="background: rgba(0, 0, 0, 0)">
    <v-row style="height: 56vh">
      <v-col md="11"></v-col>
      <v-col md="1" class="d-flex flex-column justify-center align-center">
        <a
          href="https://www.facebook.com/BiuroRachunkoweJoannaMakowska"
          target="_blank"
        >
          <fa :icon="['fab', 'facebook']" class="icon-l" />
        </a>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="7" class="d-flex align-end justify-center">
        <div class="d-flex flex-column align-center header">
          <h1 class="text-uppercase">Biuro</h1>
          <h1 class="text-uppercase">Rachunkowe</h1>
          <p class="logo__label text-uppercase">Joanna Makowska</p>
        </div>
      </v-col>
    </v-row>
    <v-row style="padding: 0">
      <v-col style="padding: 0">
        <div class="navbar d-flex align-end">
          <v-tabs
            fixed-tabs
            icons-and-text
            background-color="#5b0770"
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
            <fa
              icon="arrow-circle-down"
              class="scroll-btn icon-m"
              @click="clicked = !clicked"
            />
          </v-tabs>
        </div>
      </v-col>
    </v-row>
    <div dark class="child grey darken-4">
      <nuxt-child />
    </div>
    <div class="footer">
      <Footer />
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Footer from '../components/Footer.vue';

export default Vue.extend({
  components: {
    Footer,
  },
  data() {
    return {
      clicked: false,
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
  watch: {
    clicked(go) {
      this.$vuetify.goTo(go ? 0 : 880);
    },
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
  margin-left: 32px;
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
  height: 130px;
  background-image: url('../static/footer.png');

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
