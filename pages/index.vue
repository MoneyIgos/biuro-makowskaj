<template>
  <v-app dark style="background: rgba(0, 0, 0, 0)">
    <div style="height: 98.6vh" class="d-flex flex-column">
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
        <v-col md="7" class="d-flex align-end justify-start mt-16 mb-n16 ml-16">
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
            ref="nav"
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
              @click="$vuetify.goTo(800)"
            >
              <fa :icon="item.icon" class="icon-l" />
              {{ item.name }}
            </v-tab>
            <fa
              icon="arrow-circle-up"
              class="d-none d-lg-flex scroll-btn icon-m ml-5"
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
import type { VueConstructor } from 'vue';
import type { VTabs } from 'vuetify/lib';
import Footer from '../components/Footer.vue';

export default (Vue as VueConstructor<
  Vue & {
    $refs: {
      nav: typeof VTabs;
    };
  }
>).extend({
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
  mounted() {
    const navbarPosition = ((this.$refs.nav as any)
      .$el as any).getBoundingClientRect().y;
    window.addEventListener('scroll', () => {
      ((this.$refs.nav as any).$el as any).classList.toggle(
        'sticky',
        window.scrollY > navbarPosition,
      );
    });
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
  font-family: $body-font-family;
}
h1 {
  font-family: $header-font;
  letter-spacing: 4px;
  font-weight: 400;
}
.navbar {
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
  min-height: 85vh;
}
.scroll-btn {
  cursor: pointer;
}
.sticky {
  position: fixed;
  top: 0;
  margin: 0;
  z-index: 1;
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
