<template>
  <v-card class="evento-card mx-auto my-6" max-width="300">
    <v-img height="261" src="../assets/eventos-img/evento-img.svg"> </v-img>
    <v-card-actions class="d-flex justify-space-between">
      <v-card-title class="pt-0 pb-0 pl-2">
        <h3 class="white--text">Venta de pizza</h3>
      </v-card-title>
      <v-btn icon @click="show = !show">
        <v-icon class="white--text">{{
          show ? "mdi-chevron-up" : "mdi-chevron-down"
        }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider class="success lighten-1"></v-divider>

        <v-card-text class="white--text">
          <h5>
            Venta de pizza de little Caesars por parte de los estudiantes de
            Sistemas <br />
            Lugar: Edifcio B2 <br />
            Hora: 2-5 pm <br />
            precio: 20 lps
          </h5>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  name: "EventoCard",
})
export default class EventoCard extends Vue {
  show = false;
}
</script>

<style scoped>
.evento-card {
  background-color: var(--v-primary-darken2);
  border-radius: 30px;
}
</style>
