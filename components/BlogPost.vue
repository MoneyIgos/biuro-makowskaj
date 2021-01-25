<template>
  <v-content class="d-flex justify-center">
    <v-row>
      <v-col>
        <h2>{{ title }}</h2>
      </v-col>
      <v-col>
        <img :src="image" />
      </v-col>
      <v-col>{{ description }}</v-col>
    </v-row>
  </v-content>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      title: 'Lorem Ipsum',
      image: '',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc non blandit massa enim. Non sodales neque sodales ut etiam sit. Proin fermentum leo vel orci. Vel orci porta non pulvinar neque laoreet suspendisse. Elementum integer enim neque volutpat ac. Ornare lectus sit amet est placerat in egestas. Est ullamcorper eget nulla facilisi etiam dignissim diam. Id faucibus nisl tincidunt eget. Sit amet consectetur adipiscing elit ut. Non blandit massa enim nec dui nunc. Ultrices eros in cursus turpis massa tincidunt dui ut ornare.',
    };
  },
});
</script>
