<template>
  <v-row class="ma-5">
    <v-col class="px-1" v-for="i in items" :key="i">
      <chat-card :chat="chats"></chat-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import UserStore from "@/store/models/user";
import ChatCard from "../../views/chat-card.vue";
import { Chat } from "@/store/models/chats";
import axios from "axios";

@Component({
  name: "MainChats",
  components: { ChatCard },
})
export default class MainChats extends Vue {
  items = [1, 2, 3, 4, 5];
  chats: Chat[] = [];
  userStore = getModule(UserStore, this.$store);
  user = this.userStore.user;

  async getChats(){
    console.log();
  }
}
</script>
