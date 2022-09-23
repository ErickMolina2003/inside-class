<template>
  <v-navigation-drawer
    app
    clipped
    permanent
    right
    color="var(--v-primary-darken2)"
  >
    <v-row class="my-4">
      <v-col lg="8" md="8" cols="8">
        <h3 class="mt-2 white--text text-right">Erick Molina</h3>
      </v-col>
      <v-col lg="4" md="4" cols="4">
        <v-img
          src="@/assets/usuarios/perfil.svg"
          max-height="45px"
          max-width="45px"
        ></v-img>
      </v-col>
    </v-row>

    <v-divider class="mb-4 cut" color="white"></v-divider>

    <v-row>
      <v-col cols="12" lg="12" md="12">
        <h3 class="white--text text-center">Miembros</h3>
      </v-col>

      <v-col cols="12" lg="12" md="12">
        <v-row>
          <v-col lg="8" md="8" cols="8">
            <h4 class="mt-2 white--text text-center">Erick Molina</h4>
          </v-col>
          <v-col lg="4" md="4" cols="4">
            <v-img
              src="@/assets/usuarios/perfil.svg"
              max-height="35px"
              max-width="35px"
            ></v-img>
          </v-col>
        </v-row>

        <v-row>
          <v-col lg="8" md="8" cols="8">
            <h4 class="mt-2 white--text text-center">Erick Molina</h4>
          </v-col>
          <v-col lg="4" md="4" cols="4">
            <v-img
              src="@/assets/usuarios/perfil.svg"
              max-height="35px"
              max-width="35px"
            ></v-img>
          </v-col>
        </v-row>

        <v-row>
          <v-col lg="8" md="8" cols="8">
            <h4 class="mt-2 white--text text-center">Erick Molina</h4>
          </v-col>
          <v-col lg="4" md="4" cols="4">
            <v-img
              src="@/assets/usuarios/perfil.svg"
              max-height="35px"
              max-width="35px"
            ></v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  name: "RightSideBar",
})
export default class RightSideBar extends Vue {}
</script>

<style scoped>
.cut{
  border-width: 0.1rem !important;
  border-color:white !important;
  height: 100%;
}
</style>
