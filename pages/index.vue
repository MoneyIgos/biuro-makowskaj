<template>
  <v-app dark style="background: rgba(0, 0, 0, 0)">
    <div style="height: 100vh" class="d-flex flex-column">
      <v-row>
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
            <h1 class="text-uppercase heading-1">Biuro</h1>
            <h1 class="text-uppercase">Rachunkowe</h1>
            <p class="logo__label text-uppercase">Joanna Makowska</p>
          </div>
        </v-col>
      </v-row>
      <v-row class="justify-self-end d-flex align-end">
        <v-col style="padding: 0" class="navbar__wrapper d-flex align-end">
          <v-tabs
            fixed-tabs
            icons-and-text
            background-color="#5b0770"
            class="navbar"
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
              icon="arrow-circle-up"
              class="d-none d-lg-flex scroll-btn icon-m"
              @click="clicked = !clicked"
            />
          </v-tabs>
        </v-col>
      </v-row>
    </div>
    <div dark class="child grey darken-4 pa-4">
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
  created() {
    if (this.$router?.currentRoute?.path === '/') this.$router.push('/about');
  },
});
</script>

<style lang="scss">
body {
  background-image: url('../static/background.jpg');
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 !important;
  overflow-x: hidden;
}
.container {
  position: relative;
  max-width: 100vw;
}
.navbar {
  top: 0;
  z-index: 1;
  position: sticky;
  margin-top: 6vh;
  font-size: 32px;

  &__wrapper {
    background-image: url('../static/footer.png');
    height: 130px;
  }
}
.icon-m {
  font-size: 24px;
}
.icon-l {
  font-size: 32px;
}
.logo__label {
  margin-top: 20px;
  border-top: 3px solid #fff;
  padding: 15px;
  text-align: center;
  font-family: $logo-label-font !important;
  letter-spacing: 10px;
}
.header {
  h1 {
    font-family: $logo-header-font !important;
    letter-spacing: 10px;
    font-weight: 400;
    font-size: 86px;
    height: 90px;
  }
}
.child {
  width: 100vw;
}
.scroll-btn {
  cursor: pointer;
}

@media (max-width: 900px) {
  .header {
    h1 {
      font-size: 56px;
      height: 60px;
    }
  }
  .logo__label {
    font-size: 0.8rem;
  }
}
</style>
