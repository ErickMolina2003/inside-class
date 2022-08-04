<template>
  <v-card class="voae-card mx-auto my-12" max-width="300" max-height="500">
    <v-img height="180" src="../assets/voae-img/voae-card-img.svg"></v-img>
    <v-card-title class="white--text pb-0 mt-3"
      >Caminata a la tigra</v-card-title
    >
    <v-card-text class="lightgray--text text--darken-1">
      <h5>
        Domingo 27 Noviembre a las 9PM <br />
        Ambito Academico, cultural y social <br />
        25 Horas VOAE <br />
        UNAH - porton 1
      </h5>
    </v-card-text>
    <v-row justify="center">
      <v-col lg="6" md="6" cols="6">
        <v-btn rounded color="var(--v-success-base)">Inscribirse</v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  name: "VoaeCard",
})
export default class VoaeCard extends Vue {}
</script>

<style scoped>
.voae-card {
  background-color: var(--v-primary-darken2);
  border-radius: 30px;
}
</style>
