<template>
  <v-container>
    <v-row justify="space-between"  :class="$vuetify.breakpoint.mdAndDown ? 'flex-column' : ''">
      <v-col class="mt-auto mb-auto">
        <v-row>
          <v-col cols="12" md="12" lg="12">
            <h1
              class="success--text text--base voae-titulo text-left"
              :class="$vuetify.breakpoint.mdAndDown ? 'text-center' : ''"
              font-size="6rem"
            >
              HORAS VOAE
            </h1>
          </v-col>
          <v-col cols="12" md="12" lg="12">
            <h3 class="success--text text--base voae-texto text-left" :class="$vuetify.breakpoint.mdAndDown ? 'text-center' : ''">
              Tendremos anuncios de las actividades que estaran disponibles para
              realizar las horas VOAE segun el articulo 140.
            </h3>
          </v-col>
        </v-row>
      </v-col>
      <v-col>
        <v-row>
          <v-col
            class="d-flex justify-end"
            :class="$vuetify.breakpoint.mdAndDown || $vuetify.breakpoint.xlOnly ? 'justify-center' : ''"
            md="12"
            lg="12"
            cols="12"
          >
            <v-img
              class="ma-5"
              contain
              src="../../assets/horas-voae-logos/reloj.svg"
              max-height="245px"
              max-width="200px"
            ></v-img>
            <v-img
              class="ma-5"
              src="../../assets/horas-voae-logos/persona.svg"
              max-height="245px"
              max-width="200px"
            ></v-img>
          </v-col>
          <v-col
            class="d-flex justify-end"
            :class="$vuetify.breakpoint.mdAndDown || $vuetify.breakpoint.xlOnly ? 'justify-center' : ''"
            md="12"
            lg="12"
            cols="12"
          >
            <v-img
              class="ma-5"
              src="../../assets/horas-voae-logos/graduado.svg"
              max-height="245px"
              max-width="200px"
            ></v-img>
            <v-img
              class="ma-5"
              contain
              src="../../assets/horas-voae-logos/libro.svg"
              max-height="245px"
              max-width="200px"
            ></v-img>
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
  name: "LandingVoae",
})
export default class LandingVoae extends Vue {}
</script>

<style scoped>
.voae-titulo {
  font-size: 5rem;
  font-weight: 900;
}

.voae-texto {
  font-size: 1.7rem;
  text-align: center;
}
</style>
