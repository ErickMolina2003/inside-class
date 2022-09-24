<template>
  <v-card class="voae-card mx-1 my-6" max-width="300" max-height="500">
    <v-img height="180" :src="getImgUrl"></v-img>
    <v-card-title class="white--text pb-0 mt-3 text-break text-center">{{
      voae.title
    }}</v-card-title>
    <v-card-text class="lightgray--text text--darken-1">
      <h5>
        {{ voae.date }} <br />
        {{ voae.type }} <br />
        {{ voae.hours }} Horas VOAE <br />
        {{ voae.location }}
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
import { Component, Prop } from "vue-property-decorator";
import { voae } from "@/store/models/chats";

@Component({
  name: "VoaeCard",
})
export default class VoaeCard extends Vue {
  @Prop({ default: [] }) voae!: voae;

  get getImgUrl() {
    if (this.voae.title.includes("Caminata")) {
      return require("../assets/voae-img/Tigra.svg");
    }
    if (this.voae.title.includes("Artificial")) {
      return require("../assets/voae-img/IA.svg");
    }
    if (this.voae.title.includes("COMPDES")) {
      return require("../assets/voae-img/Compdes.svg");
    }
    if (this.voae.title.includes("UNAH")) {
      return require("../assets/voae-img/Tutorias.svg");
    }
    if (this.voae.title.includes("reforestacion")) {
      return require("../assets/voae-img/Reforestacion.svg");
    }
    return require("../assets/voae-img/voae-card-img.svg");
  }
}
</script>

<style scoped>
.voae-card {
  background-color: var(--v-primary-darken2);
  border-radius: 30px;
}
</style>
