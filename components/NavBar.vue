<template>
  <div>
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'NavBar',
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
});
</script>
