<template>
  <v-row class="ma-5">
    <v-col v-for="(voae, index) in voaes" :key="index">
      <voae-card :voae="voae"></voae-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import VoaeCard from "../../views/voae-card.vue";
import axios from "axios";
import { voae } from "@/store/models/chats";

@Component({
  name: "MainChats",
  components: { VoaeCard },
})
export default class MainChats extends Vue {
  voaes: voae[] = [];

  async created() {
    const response = await axios({
      method: "GET",
      url: "https://inside-class-bf070-default-rtdb.firebaseio.com/voae.json",
      responseType: "stream",
    });

    for (let index in response.data) {
      this.voaes.push(response.data[index]);
    }
  }
}
</script>
