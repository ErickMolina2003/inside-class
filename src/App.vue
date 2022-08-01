<template>
  <v-app>
    <v-main class="main-background">
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  name: "App",
})
export default class App extends Vue {}

</script>

<style>
.main-background {
  background-color: var(--v-primary-base);
}
</style>