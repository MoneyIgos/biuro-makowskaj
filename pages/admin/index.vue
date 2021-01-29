<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" app absolute bottom temporary>
      <v-list nav>
        <v-list-item-group v-model="group">
          <v-list-item v-for="{ title } in links" :key="title">
            <v-list-item-title>{{ title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app elevate-on-scroll color="secondary">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title>Admin Panel</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>
  </v-app>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      drawer: false,
      group: 0,
      links: [
        {
          title: 'Zarządaj Postami',
          link: '/admin',
        },
        {
          title: 'Zarządaj użytkownikami',
          link: '/admin/users',
        },
      ],
    };
  },
  watch: {
    group(group) {
      if (group === undefined) return;
      this.drawer = false;
      const choosenLinkIDX = group;
      const link = this.links[choosenLinkIDX].link;
      this.$router.push(link);
    },
  },
  // mounted() {
  //   this.group = this.links.findIndex(({ link }) =>
  //     link.startsWith(this.$route.path),
  //   );
  // },
});
</script>
© 2021 GitHub, Inc.

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
