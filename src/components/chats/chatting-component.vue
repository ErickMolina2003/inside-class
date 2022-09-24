<template>
  <div class="chatting-component">
    <v-row justify="center" class="py-4">
      <v-col cols="4" md="2" lg="2">
        <h4 class="lightgray--text text--darken-3">13/12/2022</h4>
      </v-col>
    </v-row>
    <v-container>
      <div v-for="(message, index) in messages" :key="index">
        <v-row
          :class="ownChat(message.speaker) ? 'own-chat' : 'user-chat'"
          :justify="ownChat(message.speaker) ? 'end' : 'start'"
          class="mb-5"
        >
          <v-col
            v-if="!ownChat(message.speaker)"
            cols="6"
            md="1"
            lg="1"
            align-self="start"
            class="pr-5"
          >
            <v-row justify="end">
              <v-img
                class="img-chat rounded-circle"
                :src="getImgUrl(message)"
                max-height="40px"
                max-width="40px"
              ></v-img>
            </v-row>
          </v-col>

          <v-col
            v-if="!ownChat(message.speaker)"
            class="chat-content"
            cols="auto"
            md="auto"
            lg="auto"
          >
            <v-row>
              <v-col cols="12" md="12" lg="12" class="pb-0">
                <h3>{{ message.speakerTitle }}</h3>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="12" lg="12">
                <h4 class="white--text">
                  {{ message.message }}
                </h4>
              </v-col>
            </v-row>
          </v-col>

          <v-col
            v-if="ownChat(message.speaker)"
            class="chat-content"
            cols="auto"
            md="auto"
            lg="auto"
          >
            <v-row>
              <v-col cols="12" md="12" lg="12" class="pb-0">
                <h3>{{ message.speakerTitle }}</h3>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="12" lg="12">
                <h4 class="white--text">
                  {{ message.message }}
                </h4>
              </v-col>
            </v-row>
          </v-col>

          <v-col
            v-if="ownChat(message.speaker)"
            cols="6"
            md="1"
            lg="1"
            align-self="start"
          >
            <v-img
              class="img-chat rounded-circle"
              :src="getImgUrl(message)"
              max-height="40px"
              max-width="40px"
            ></v-img>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Watch } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import UserStore from "@/store/models/user";

@Component({
  name: "ChattingComponent",
})
export default class ChattingComponent extends Vue {
  userStore = getModule(UserStore, this.$store);
  user = this.userStore.user;
  messages = this.userStore.messages;

  ownChat(speaker: number) {
    if (this.user.id == speaker) {
      return true;
    }
    return false;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getImgUrl(message: any) {
    if (message?.speakerTitle == "Erick Molina") {
      return require("@/assets/usuarios/erick.svg");
    }
    if (message?.speakerTitle == "Angel Sanchez") {
      return require("@/assets/usuarios/Angel.svg");
    }
    if (message?.speakerTitle == "Gabriel Omar") {
      return require("@/assets/usuarios/Gabriel.svg");
    }
    return require("@/assets/usuarios/Default.svg");
  }

  @Watch("userStore.messages")
  updateMessages() {
    this.messages = this.userStore.messages;
  }
}
</script>

<style scoped>
.chatting-component {
  height: 100% !important;
  background-color: var(--v-primary-lighten2);
}

.chat-content {
  max-width: 70%;
  border-radius: 20px;
}

.user-chat .chat-content {
  background-color: var(--v-primary-lighten1);
}

.user-chat h3 {
  color: var(--v-success-base);
}

.own-chat .chat-content {
  background-color: var(--v-dark-base);
}

.own-chat h3 {
  color: var(--v-error-base);
}
</style>
