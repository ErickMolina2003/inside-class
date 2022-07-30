<template>
  <v-container class="fill-height">
    <v-card class="pa-5 card-background" dark max-width="100%">
      <v-row justify="space-between">
        <v-col class="text-center">
          <v-row justify="center">
            <v-col class="pb-0">
              <v-icon size="40px">mdi-flag-checkered</v-icon>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col class="pt-0">
              <h2>Registro de Usuarios</h2>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col lg="8" md="8" cols="12" class="pb-0 pt-0">
              <v-text-field
                class="shrink"
                rounded
                dense
                light
                label="Nombre"
                solo
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col lg="8" md="8" cols="12" class="pb-0 pt-0">
              <v-text-field
                class="shrink"
                rounded
                dense
                light
                label="Apellido"
                solo
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col lg="8" md="8" cols="12" class="pb-0 pt-0">
              <v-text-field
                class="shrink"
                rounded
                dense
                light
                label="Nombre de Usuario"
                solo
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col lg="8" md="8" cols="12" class="pb-0 pt-0">
              <v-text-field
                class="shrink"
                rounded
                dense
                light
                label="Correo"
                solo
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col lg="8" md="8" cols="12" class="pb-0 pt-0">
              <v-combobox
                class="shrink"
                clearable
                solo
                label="Carrera"
                light
                dense
                rounded
              ></v-combobox>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col lg="8" md="8" cols="12" class="pb-0 pt-0">
              <v-text-field
                class="shrink"
                rounded
                dense
                light
                label="Contraseña"
                solo
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" md="12" lg="12" class="pt-0 pt-0">
              <v-btn large rounded color="var(--v-success-darken1)" dark
                >Registrarse</v-btn
              >
            </v-col>
          </v-row>
        </v-col>
        <v-divider vertical dark></v-divider>
        <v-col>
          <v-row class="row-logo mr-auto ml-auto">
            <v-col align-self="center" cols="12" lg="12" md="12">
              <img
                src="../../assets/logo-IC/logo-IC.svg"
                max-height="50px"
                max-width="50px"
              />
              <h1 class="text-center">Inside Class</h1>
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
  name: "Registro",
})
export default class Registro extends Vue {}


</script>

<style scoped>
.card-background {
  width: 100%;
  background-color: var(--v-primary-darken4) !important;
  border-radius: 20px 20px 20px !important;
}

.row-logo {
  width: 50%;
  height: 100%;
}
</style>
