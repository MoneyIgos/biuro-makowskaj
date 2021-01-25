<template>
  <v-main>
    <BlogPost />
  </v-main>
</template>

<script lang="ts">
import Vue from 'vue';
import BlogPost from '../../components/BlogPost.vue';

export default Vue.extend({
  components: {
    BlogPost,
  },
});
</script>
