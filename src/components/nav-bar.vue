<template>
  <v-app-bar color="var(--v-primary-base)" dense dark flat class="mt-4 ml-4">
    <v-row>
      <v-toolbar-title>
        <h2>{{ routeTittle }}</h2>
      </v-toolbar-title>
    </v-row>

    <v-spacer></v-spacer>

    <v-row class="mt-4" justify="end">
      <v-col cols="5" lg="6" md="6">
        <v-text-field
          append-icon="mdi-magnify"
          background-color="var(--v-primary-darken3)"
          color="var(--v-success-base)"
          label="Buscar chat"
          filled
          rounded
          dense
        ></v-text-field>
      </v-col>
      <v-spacer></v-spacer>
      <v-col lg="4" md="4" cols="4">
        <h3 class="mt-2 text-right" @click="redirectToProfile">
          {{ user.firstName }} {{ user.lastName }}
        </h3>
      </v-col>
      <v-col lg="2" md="2" cols="2">
        <v-img
          class="round-img"
          :src="getImgUrl"
          max-height="60px"
          max-width="60px"
          @click="redirectToProfile"
        ></v-img>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import UserStore from "@/store/models/user";
import sideBar from "../components/side-bars/main-side-bar.vue";

@Component({
  name: "NavBar",
  components: { sideBar },
})
export default class NavBar extends Vue {
  userStore = getModule(UserStore, this.$store);
  user = this.userStore.user;

  get routeTittle() {
    if (this.$route.name == "chats") {
      return "Descubre nuevos chats";
    } else if (this.$route.name == "voae") {
      return "Horas VOAE";
    } else if (this.$route.name == "eventos") {
      return "Eventos";
    } else {
      return "Inside Class";
    }
  }

  get getImgUrl() {
    if (this.user.firstName.includes("Erick")) {
      return require("@/assets/usuarios/erick.svg");
    }
    if (this.user.firstName.includes("Angel")) {
      return require("@/assets/usuarios/Angel.svg");
    }
    if (this.user.firstName.includes("Gabriel")) {
      return require("@/assets/usuarios/Gabriel.svg");
    }
    return require("@/assets/usuarios/Default.svg");
  }

  redirectToProfile() {
    this.$router.push("/user");
  }
}
</script>

<style scoped>
.round-img {
  border-radius: 45%;
}
</style>
