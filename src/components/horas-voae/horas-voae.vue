<template>
  <v-row class="ma-5">
    <v-col v-for="i in items" :key="i">
      <voae-card></voae-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import VoaeCard from "../../views/voae-card.vue";

@Component({
  name: "MainChats",
  components: { VoaeCard },
})
export default class MainChats extends Vue {
  items = [1, 2, 3, 4, 5];
}
</script>
