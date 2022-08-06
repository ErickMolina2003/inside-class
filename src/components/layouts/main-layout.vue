<template>
  <span>
    <side-bar></side-bar>
    <nav-bar></nav-bar>
    <router-view></router-view>
  </span>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import SideBar from "../side-bars/main-side-bar.vue";
import NavBar from "../nav-bar.vue";

@Component({
  name: "MainLayout",
  components: { SideBar, NavBar },
})
class MainLayout extends Vue {}

export default MainLayout;
</script>