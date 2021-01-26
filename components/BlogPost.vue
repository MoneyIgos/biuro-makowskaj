<template>
  <div class="d-flex flex-column align-center">
    <div class="rounded-xl blog-post">
      <v-row>
        <v-col>
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
    title: String,
    image: String,
    description: String,
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
  width: 50vw;
  padding: 30px;
  margin: 20px;
}
</style>
