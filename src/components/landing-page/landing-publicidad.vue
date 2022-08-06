<template>
  <v-container>
    <v-row justify="space-between">
      <v-col>
        <v-row>
          <v-col
            class="d-flex"
            :class="$vuetify.breakpoint.mdAndDown ? 'justify-center' : ''"
            md="12"
            lg="12"
            cols="12"
          >
            <v-img
              class="ma-5"
              contain
              src="../../assets/publicidad-logos/manos.svg"
              max-height="200px"
              max-width="200px"
            ></v-img>
            <v-img
              class="ma-5"
              src="../../assets/publicidad-logos/burger.svg"
              max-height="200px"
              max-width="200px"
            ></v-img>
          </v-col>
          <v-col
            class="d-flex"
            :class="$vuetify.breakpoint.mdAndDown ? 'justify-center' : ''"
            md="12"
            lg="12"
            cols="12"
          >
            <v-img
              class="ma-5"
              src="../../assets/publicidad-logos/balon.svg"
              max-height="200px"
              max-width="200px"
            ></v-img>
            <v-img
              class="ma-5"
              contain
              src="../../assets/publicidad-logos/personas.svg"
              max-height="200px"
              max-width="200px"
            ></v-img>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="mt-auto mb-auto">
        <v-row>
          <v-col cols="12" md="12" lg="12">
            <h1
              class="primarybright--text text--lighten-1 publicidad-titulo text-right"
              :class="$vuetify.breakpoint.mdAndDown || $vuetify.breakpoint.xlOnly ? 'text-center' : ''"
              font-size="6rem"
            >
              PUBLICIDAD
            </h1>
          </v-col>
          <v-col cols="12" md="12" lg="12">
            <h3 class="primarybright--text text--lighten-1 publicidad-texto text-right" :class="$vuetify.breakpoint.mdAndDown || $vuetify.breakpoint.xlOnly ? 'text-center' : ''">
              Tendremos anuncios de diferentes negocios y eventos que se
              realizaran en la Universidad para que mas gente de la comunidad de
              estudiantes pueda participar y vivir muchas experiencias unicas.
            </h3>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  name: "LandingPublicidad",
})
export default class LandingPublicidad extends Vue {}
</script>

<style scoped>
.publicidad-titulo {
  font-size: 5rem;
  font-weight: 900;
}

.publicidad-texto {
  font-size: 1.7rem;
  text-align: center;
}
</style>
