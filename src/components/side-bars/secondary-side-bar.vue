<template>
  <v-navigation-drawer
    color="var(--v-primary-darken1)"
    app
    permanent
    width="300"
  >
    <div class="pl-14">
      <v-row justify="center" class="my-5">
        <v-col cols="10" lg="10" md="10">
          <v-text-field
            dark
            append-icon="mdi-magnify"
            background-color="var(--v-primary-darken3)"
            color="var(--v-success-base)"
            label="Buscar chat"
            filled
            rounded
            dense
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          cols="12"
          md="12"
          lg="12"
          class="mb-3"
          v-for="(myChat, index) in myChats"
          :key="index"
        >
          <v-row
            :class="index === userStore.activeChat ? 'active-chat' : ''"
            class="pa-2 chat-row mx-1"
            @click="updateActiveChat(index)"
          >
            <v-col lg="3" md="3" cols="3" class="pa-0" align-self="center">
              <v-img
                class="img-chat rounded-circle"
                :src="getImgUrl"
              ></v-img>
            </v-col>
            <v-col lg="9" md="9" cols="9" class="white--text text-center">
              <v-row>
                <v-col cols="12" lg="12" md="12" class="py-2">
                  <h4>{{ myChat.code }}</h4>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" lg="12" md="12" class="py-1">
                  <h5>{{ myChat.title }}</h5>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
    <slot class="pa-2 ma-2"></slot>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import UserStore from "@/store/models/user";

@Component({
  name: "SecondarySideBar",
})
export default class SecondaySideBar extends Vue {
  userStore = getModule(UserStore, this.$store);

  myChats = this.userStore.chats;

  updateActiveChat(chatId: number) {
    this.userStore.setActiveChat(chatId);
    this.userStore.getMembersActiveChat();
    this.userStore.getMessages();
  }

  get getImgUrl() {
    if (this.userStore.chats[this.userStore.activeChat].code.includes("IS")) {
      return require("@/assets/chats-img/Sistemas.svg");
    }
    if (
      this.userStore.chats[this.userStore.activeChat].code.includes("QQ") ||
      this.userStore.chats[this.userStore.activeChat].code.includes("Q")
    ) {
      return require("@/assets/chats-img/Quimica.svg");
    }
    if (
      this.userStore.chats[this.userStore.activeChat].code.includes("IE") ||
      this.userStore.chats[this.userStore.activeChat].code.includes("FS")
    ) {
      return require("@/assets/chats-img/Electrica.svg");
    }
    return require("@/assets/chats-img/chat-default.svg");
  }
}
</script>

<style scoped>
.active-chat {
  background-color: var(--v-primarybright-base);
}

.chat-row {
  border-radius: 40px;
  cursor: pointer;
}

.chat-row:hover {
  background-color: var(--v-success-base);
}
</style>
