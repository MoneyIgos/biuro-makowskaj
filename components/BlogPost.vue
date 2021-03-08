<template>
  <div class="d-flex flex-column align-center">
    <div class="rounded-xl blog-post ma-4 pa-8">
      <v-row>
        <v-col elevation="15">
          <div class="d-flex justify-center">
            <h1>{{ title }}</h1>
          </div>
          <div class="caption">
            <p>{{ parsedDate }}</p>
          </div>
          <div class="d-flex justify-center">
            <v-img :src="image" />
          </div>
          <div class="d-flex justify-center">
            {{ description }}
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import relativeDate from '../assets/relativeDate';

export default Vue.extend({
  name: 'BlogPost',
  props: {
    title: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    date: Date,
  },
  data() {
    return {
      parsedDate: relativeDate(this.date, this.date),
    };
  },
});
</script>

<style lang="scss" scoped>
.blog-post {
  background-color: #121212;
  box-shadow: 10px 10px 8px #101010;
  width: 50vw;
}
@media (max-width: 900px) {
  .blog-post {
    width: 100vw;
  }
}
</style>
