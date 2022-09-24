<template>
  <v-row class="ma-5">
    <v-col class="px-1" v-for="(chat, i) in chats" :key="i">
      <chat-card :chat="chat"></chat-card>
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
  careerUser = this.user.career;

  async created() {
    const allChats = await axios({
      method: "GET",
      url: "https://inside-class-bf070-default-rtdb.firebaseio.com/chats.json",
      responseType: "stream",
    });

    for (let id in allChats.data) {
      this.chats.push(allChats.data[id]);
    }

    this.chats = this.chats.filter((chat) => {
      if (chat.careerCode == this.careerUser) {
        return chat;
      }
    });
  }
}
</script>
