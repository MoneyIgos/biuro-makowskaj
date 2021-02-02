<template>
  <v-app>
    <div class="grey darken-4">
      <NavBar />
      <v-main>
        <v-row>
          <v-col class="d-flex justify-end mr-16 mt-4">
            <div>
              <v-text-field
                v-model="search"
                outlined
                clearable
                dense
                label="Wyszukaj Post"
                append-icon="mdi-magnify"
              ></v-text-field>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex justify-center ma-12 text-h5">
            <v-header><h1>Zarzadzaj Postami</h1></v-header>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex flex-column align-center">
            <v-btn x-large color="secondary">Dodaj Post</v-btn>
            <div
              v-for="post in filteredPosts"
              :key="post.title"
              class="d-flex flex-column align-center"
            >
              <BlogPost
                :title="post.title"
                :image="post.image"
                :description="post.description"
                :date="post.date"
              />
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

<script>
import Vue from 'vue';
import BlogPost from '../../components/BlogPost.vue';
import NavBar from '../../components/NavBar.vue';

export default Vue.extend({
  components: {
    BlogPost,
    NavBar,
  },
  data() {
    return {
      search: '',
      posts: [
        {
          title: 'Lorem Ipsum',
          image: '',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc non blandit massa enim. Non sodales neque sodales ut etiam sit. Proin fermentum leo vel orci. Vel orci porta non pulvinar neque laoreet suspendisse. Elementum integer enim neque volutpat ac. Ornare lectus sit amet est placerat in egestas. Est ullamcorper eget nulla facilisi etiam dignissim diam. Id faucibus nisl tincidunt eget. Sit amet consectetur adipiscing elit ut. Non blandit massa enim nec dui nunc. Ultrices eros in cursus turpis massa tincidunt dui ut ornare.',
          date: new Date('Dec 10, 2020 01:00:00'),
        },
        {
          title: 'Lorem Ipsum',
          image:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapertag.com%2Fwallpaper%2Ffull%2Fb%2Fe%2F7%2F298063-download-free-grass-background-1920x1200.jpg&f=1&nofb=1',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc non blandit massa enim. Non sodales neque sodales ut etiam sit. Proin fermentum leo vel orci. Vel orci porta non pulvinar neque laoreet suspendisse. Elementum integer enim neque volutpat ac. Ornare lectus sit amet est placerat in egestas. Est ullamcorper eget nulla facilisi etiam dignissim diam. Id faucibus nisl tincidunt eget. Sit amet consectetur adipiscing elit ut. Non blandit massa enim nec dui nunc. Ultrices eros in cursus turpis massa tincidunt dui ut ornare.',
          date: new Date(),
        },
        {
          title: 'Lorem Ipsum',
          image: '',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc non blandit massa enim. Non sodales neque sodales ut etiam sit. Proin fermentum leo vel orci. Vel orci porta non pulvinar neque laoreet suspendisse. Elementum integer enim neque volutpat ac. Ornare lectus sit amet est placerat in egestas. Est ullamcorper eget nulla facilisi etiam dignissim diam. Id faucibus nisl tincidunt eget. Sit amet consectetur adipiscing elit ut. Non blandit massa enim nec dui nunc. Ultrices eros in cursus turpis massa tincidunt dui ut ornare. Lacus laoreet non curabitur gravida arcu ac tortor. Est ante in nibh mauris cursus. Vulputate eu scelerisque felis imperdiet proin. Lectus sit amet est placerat in egestas. Lectus arcu bibendum at varius. Aliquam nulla facilisi cras fermentum odio. Pharetra et ultrices neque ornare aenean euismod elementum nisi quis. Felis eget velit aliquet sagittis id consectetur purus ut. Praesent semper feugiat nibh sed pulvinar proin. Vitae proin sagittis nisl rhoncus mattis rhoncus urna. Consequat interdum varius sit amet mattis vulputate enim nulla. Vitae auctor eu augue ut. Egestas erat imperdiet sed euismod nisi porta lorem.',
          date: new Date(),
        },
      ],
    };
  },
  computed: {
    filteredPosts() {
      return this.posts.filter(post =>
        post.title.toLowerCase().match(this.search.toLowerCase()),
      );
    },
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
</style>
