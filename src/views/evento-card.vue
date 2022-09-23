<template>
  <v-card class="evento-card mx-auto my-6" max-width="300">
    <v-img height="261" src="../assets/eventos-img/evento-img.svg"> </v-img>
    <v-card-actions class="d-flex justify-space-between">
      <v-card-title class="pt-0 pb-0 pl-2">
        <h3 class="white--text">{{ evento.title }}</h3>
      </v-card-title>
      <v-btn icon @click="show = !show">
        <v-icon class="white--text">{{
          show ? "mdi-chevron-up" : "mdi-chevron-down"
        }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider class="success lighten-1 cut"></v-divider>

        <v-card-text class="white--text">
          <h5>
            {{ evento.description}} <br />
            Lugar: {{ evento.location }} <br />
            Hora: {{ evento.time }} <br />
            precio: {{ evento.price }} lps
          </h5>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { events } from "@/store/models/chats";


@Component({
  name: "EventoCard",
})
export default class EventoCard extends Vue {
  show = false;

  @Prop({ default: [] }) evento!: events;
}
</script>

<style scoped>
.evento-card {
  background-color: var(--v-primary-darken2);
  border-radius: 30px;
}
.cut{
  border-width: 0.1rem !important;
  height: 100%;
}
</style>
