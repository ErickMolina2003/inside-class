<template>
  <v-card class="landing-container" flat>
    <v-toolbar flat color="var(--v-primary-base) mb-10">
      <v-img
        contain
        src="../../assets/logo-IC/logo-IC.svg"
        :max-height="40"
        :max-width="40"
        class="mr-10"
      ></v-img>
      <v-toolbar-title class="white--text">
        <span>InsideClass</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn class="mr-10" large rounded color="var(--v-success-darken1)"
        @click="redirectToRegister">Registrarse</v-btn
      >
      <v-btn
        class="mr-10 white--text"
        large
        rounded
        color="var(--v-primarybright-base)"
        @click="redirectToLogin">Login</v-btn
      >
    </v-toolbar>
    <v-card
      flat
      class="mt-12 ml-14"
      color="#ffffff00 "
      max-width="50%"
      :class="$vuetify.breakpoint.mdAndDown ? 'mt-10' : ''"
    >
      <v-row class="d-flex" justify="center">
        <v-col cols="12" md="12" lg="12" class="white--text text-center">
          <h1>UNAH</h1>
        </v-col>
        <v-col cols="12" md="12" lg="12" class="white--text text-center">
          <h1>¡YO SOY PUMA!</h1>
        </v-col>
        <v-col cols="6" md="6" lg="6" class="white--text text-center">
          <span >
            Deseas tener mas informacion, referencias, consejos sobres tus
            proximas clases, entonces unete a nuestra comunidad de estudiantes
            donde podras tener toda la informacion que necesites...
          </span>
        </v-col>
      </v-row>
    </v-card>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  name: "LandingPage",
})
export default class LandingPage extends Vue {
  redirectToRegister(){
    this.$router.push("/registro");
  }
  redirectToLogin(){
    this.$router.push("/login");
  }
}
</script>

<style scoped>
.landing-container {
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-image: url("../../assets/landing-img/BG-Landing2.svg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
