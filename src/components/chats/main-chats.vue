<template>
  <v-row class="ma-5">
    <v-col class="px-1" v-for="i in items" :key="i">
      <chat-card></chat-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import ChatCard from "../../views/chat-card.vue";

@Component({
  name: "MainChats",
  components: { ChatCard },
})
export default class MainChats extends Vue {
  items = [1, 2, 3, 4, 5];
}
</script>
