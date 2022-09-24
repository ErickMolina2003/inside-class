<template>
  <div :class="$vuetify.breakpoint.lgAndUp ? 'layout_nosotros' : ''">
    <h1
      class="d-flex justify-center white--text text-center pt-5 text-lg-h1 text-md-h2 text-sm-h3 font-weight-bold"
    >
      SOBRE NOSOTROS
    </h1>
    <v-container
      class="d-flex justify-space-around mt-5"
      :class="$vuetify.breakpoint.mdAndDown ? 'flex-column' : ''"
    >
      <v-card
        class="mx-auto mb-6"
        :max-width="$vuetify.breakpoint.lgAndDown ? '350' : '400'"
        color="var(--v-primary-darken2)"
        dark
      >
        <v-img src="../../assets/nosotros-img/fondo-erick.svg" height="212px"
          ><div>
            <v-img
              src="../../assets/nosotros-img/erick.svg"
              width="163px"
              class="ml-auto mr-auto"
            ></v-img></div
        ></v-img>

        <v-card-title tag="h1" class="pb-0"
          >Erick Molina <v-icon>mdi-linkedin</v-icon>
        </v-card-title>
        <v-card-title tag="h1" class="pt-1"
          >Jr. Front-end developer
        </v-card-title>

        <v-card-subtitle>
          Estudiante de ingenieria en sistemas - UNAH</v-card-subtitle
        >
        <v-card-text
          >Conocimientos y apitudes <br />
          - Js <br />
          - Php <br />
          - Html <br />
          - Css <br />
          - Vue</v-card-text
        >
      </v-card>

      <v-card
        class="mx-auto mb-6"
        :max-width="$vuetify.breakpoint.lgAndDown ? '350' : '400'"
        color="var(--v-primary-darken2)"
        dark
      >
        <v-img src="../../assets/nosotros-img/fondo-angel.svg" height="212px"
          ><div>
            <v-img
              src="../../assets/nosotros-img/Angel.svg"
              width="163px"
              class="ml-auto mr-auto"
            ></v-img></div
        ></v-img>

        <v-card-title tag="h1" class="pb-0"
          >Angel Mejia <v-icon>mdi-linkedin</v-icon>
        </v-card-title>
        <v-card-title tag="h1" class="pt-1"
          >Jr. Front-end developer
        </v-card-title>

        <v-card-subtitle>
          Estudiante de ingenieria en sistemas - UNAH</v-card-subtitle
        >
        <v-card-text
          >Conocimientos y apitudes <br />
          - Js <br />
          - Php <br />
          - Html <br />
          - Css <br />
          - Vue</v-card-text
        >
      </v-card>

      <v-card
        class="mx-auto mb-6"
        :max-width="$vuetify.breakpoint.lgAndDown ? '350' : '400'"
        color="var(--v-primary-darken2)"
        dark
      >
        <v-img src="../../assets/nosotros-img/fondo-gabo.svg" height="212px"
          ><div>
            <v-img
              src="../../assets/nosotros-img/Gabriel.svg"
              width="163px"
              class="ml-auto mr-auto"
            ></v-img></div
        ></v-img>

        <v-card-title tag="h1" class="pb-0"
          >Gabriel Solorzano <v-icon>mdi-linkedin</v-icon>
        </v-card-title>
        <v-card-title tag="h1" class="pt-1"
          >Jr. Front-end developer
        </v-card-title>

        <v-card-subtitle>
          Estudiante de ingenieria en sistemas - UNAH</v-card-subtitle
        >
        <v-card-text
          >Conocimientos y apitudes <br />
          - Js <br />
          - Php <br />
          - Html <br />
          - Css <br />
          - Vue</v-card-text
        >
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  name: "LandingNosotros",
})
export default class LandingNosotros extends Vue {}
</script>

<style scoped>
.layout_nosotros {
  height: 100vh;
}
</style>