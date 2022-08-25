<template>
  <v-navigation-drawer
    color="var(--v-primary-darken1)"
    permanent
  >
    <v-row justify="center" class="my-5">
      <v-col cols="10" lg="10" md="10">
        <v-text-field
          dark
          append-icon="mdi-magnify"
          background-color="var(--v-primary-darken3)"
          color="var(--v-success-base)"
          label="Buscar chat"
          filled
          rounded
          dense
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="12" lg="12" class="mb-3">
        <v-row class="pa-2 active-chat chat-row mx-1">
          <v-col lg="3" md="3" cols="3" class="pa-0" align-self="center">
            <v-img
              class="img-chat rounded-circle"
              src="@/assets/usuarios/perfil.svg"
            ></v-img>
          </v-col>
          <v-col lg="9" md="9" cols="9" class="white--text text-center">
            <v-row>
              <v-col cols="12" lg="12" md="12" class="py-2">
                <h4>IS-501</h4>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" lg="12" md="12" class="py-1">
                <h4>BASE DE DATOS 1</h4>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" md="12" lg="12" class="mb-3">
        <v-row class="pa-2 inactive-chat chat-row mx-1">
          <v-col lg="3" md="3" cols="3" class="pa-0" align-self="center">
            <v-img
              class="img-chat rounded-circle"
              src="@/assets/usuarios/perfil.svg"
            ></v-img>
          </v-col>
          <v-col lg="9" md="9" cols="9" class="white--text text-center">
            <v-row>
              <v-col cols="12" lg="12" md="12" class="py-2">
                <h4>IS-501</h4>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" lg="12" md="12" class="py-1">
                <h4>BASE DE DATOS 1</h4>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" md="12" lg="12" class="mb-3">
        <v-row class="pa-2 inactive-chat chat-row mx-1">
          <v-col lg="3" md="3" cols="3" class="pa-0" align-self="center">
            <v-img
              class="img-chat rounded-circle"
              src="@/assets/usuarios/perfil.svg"
            ></v-img>
          </v-col>
          <v-col lg="9" md="9" cols="9" class="white--text text-center">
            <v-row>
              <v-col cols="12" lg="12" md="12" class="py-2">
                <h4>IS-501</h4>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" lg="12" md="12" class="py-1">
                <h4>BASE DE DATOS 1</h4>
              </v-col>
            </v-row>
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
  name: "SecondarySideBar",
})
export default class SecondaySideBar extends Vue {}
</script>

<style scoped>
.active-chat {
  background-color: var(--v-primarybright-base);
}

.chat-row {
  border-radius: 40px;
  cursor: pointer;
}

.chat-row:hover {
  background-color: var(--v-success-base);
}
</style>
