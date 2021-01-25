<template>
  <v-content>
    <BlogPost />
  </v-content>
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
