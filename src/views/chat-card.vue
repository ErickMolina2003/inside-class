<template>
  <v-card class="chat-card mx-auto my-6" max-width="227" max-height="307">
    <v-img height="124" :src="getImgUrl"></v-img>

    <h4 class="white--text text-center mt-3">{{ chat.title }}</h4>

    <v-card-text class="pt-0">
      <h5 class="white--text text-center">{{ chat.code }}</h5>
    </v-card-text>

    <v-row justify="center" class="pt-2">
      <v-col lg="2" md="2" cols="2">
        <v-icon class="white--text">mdi-account-group</v-icon>
      </v-col>
      <v-col
        lg="8"
        md="8"
        cols="8"
        v-if="chat.numberMembers"
        align-self="center"
      >
        <h5 class="white--text">{{ chat.numberMembers }} Participantes</h5>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col lg="6" md="6" cols="6">
        <v-btn rounded color="var(--v-success-base)">Unirse</v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Chat } from "@/store/models/chats";
import { getModule } from "vuex-module-decorators";
import UserStore from "@/store/models/user";

@Component({
  name: "ChatCard",
})
export default class ChatCard extends Vue {
  @Prop({ default: [] }) chat!: Chat;

  userStore = getModule(UserStore, this.$store);

  get getImgUrl() {
    if (this.chat.code.includes("IS")) {
      return require("../assets/chats-img/Sistemas.svg");
    }
    if (this.chat.code.includes("QQ") || this.chat.code.includes("Q")) {
      return require("../assets/chats-img/Quimica.svg");
    }
    if (this.chat.code.includes("IE") || this.chat.code.includes("FS")) {
      return require("../assets/chats-img/Electrica.svg");
    }
    return require("../assets/chats-img/chat-default.svg");
  }
}
</script>

<style scoped>
.chat-card {
  background-color: var(--v-primary-darken2);
  border-radius: 30px;
}
</style>
