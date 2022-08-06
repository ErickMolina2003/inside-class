<template>
  <v-container class="fill-height">
    <v-card
      class="pa-5 rounded-xl"
      color="var(--v-primary-darken4)"
      dark
      width="100%"
    >
      <v-row justify="space-between">
        <v-col>
          <v-row class="row-logo mr-auto ml-auto">
            <v-col cols="12" lg="12" md="12">
              <img
                src="../../assets/logo-IC/logo-IC.svg"
                max-height="50px"
                max-width="50px"
                height="100%"
              />
            </v-col>
            <v-col cols="12" lg="12" md="12">
              <h1 class="text-center">Inside Class</h1>
            </v-col>
          </v-row>
        </v-col>
        <v-divider vertical dark></v-divider>
        <v-col class="text-center">
          <v-row justify="center">
            <v-col class="pb-0">
              <v-icon size="50px">mdi-account</v-icon>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col class="pt-0">
              <h2>Iniciar sesion</h2>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col lg="8" md="8" cols="12" class="pb-0">
              <v-text-field
                class="shrink"
                rounded
                dense
                light
                label="usuario"
                solo
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col lg="8" md="8" cols="12" class="py-0">
              <v-text-field
                class="shrink"
                rounded
                dense
                light
                type="password"
                label="contrasena"
                solo
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col class="pt-0">
              <a class="white--text">Crear Cuenta</a>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" md="12" lg="12" class="pt-0">
              <v-btn large rounded color="var(--v-success-darken1)" dark
                >Iniciar Sesion</v-btn
              >
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  name: "LogIn",
})
export default class Login extends Vue {}
</script>

<style scoped>
.row-logo {
  width: 50%;
}
</style>
