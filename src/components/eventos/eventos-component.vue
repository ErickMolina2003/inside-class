<template>
  <v-row class="ma-5">
    <v-col class="px-1" v-for="(evento, index) in eventos" :key="index">
      <eventos-card :evento="evento"></eventos-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import EventosCard from "../../views/evento-card.vue";
import axios from "axios";
import { events } from "@/store/models/chats";

@Component({
  name: "MainChats",
  components: { EventosCard },
})
export default class MainChats extends Vue {
  eventos: events[] = [];

  async created() {
    const response = await axios({
      method: "GET",
      url: "https://inside-class-bf070-default-rtdb.firebaseio.com/eventos.json",
      responseType: "stream",
    });

    for (let id in response.data) {
      this.eventos.push(response.data[id]);
    }
  }
}
</script>
