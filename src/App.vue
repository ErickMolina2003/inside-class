<template>
  <v-app>
    <v-main class="main-background">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  }),
});
</script>

<style>
.main-background {
  background-color: var(--v-primary-base);
}
</style>