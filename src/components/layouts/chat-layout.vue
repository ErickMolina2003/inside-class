<template>
  <v-app id="inspire">
    <secondary-side-bar>
      <main-side-bar></main-side-bar>
    </secondary-side-bar>

    <right-side-bar></right-side-bar>

    <v-app-bar
      color="var(--v-primary-darken3)"
      app
      clipped-right
      flat
      height="72"
    >
      <v-row>
        <v-col cols="6" md="1" lg="1">
          <v-img
            class="img-chat rounded-circle"
            src="@/assets/usuarios/perfil.svg"
            max-height="60px"
            max-width="60px"
          ></v-img>
        </v-col>
        <v-col cols="6" md="3" lg="3" align-self="center">
          <h4 class="white--text">IS-501 BASE DE DATOS 1</h4>
        </v-col>
      </v-row>
    </v-app-bar>

    <v-main class="pa-0 ma-0 main-wrap">
      <chatting-component></chatting-component>
    </v-main>

    <v-footer color="var(--v-primary-lighten2)" app height="72" inset>
      <v-text-field
        v-model="input"
        background-color="var(--v-primary-darken3)"
        append-icon="mdi-send"
        dark
        label="Escribe un mensaje"
        dense
        flat
        hide-details
        rounded
        solo
      ></v-text-field>
      <div class="wrapper mr-3">
        <emoji-picker @emoji="insert">
          <button
            class="emoji-invoker"
            slot="emoji-invoker"
            slot-scope="{ events: { click: clickEvent } }"
            @click.stop="clickEvent"
          >
            <v-icon class="white--text">mdi-emoticon</v-icon>
          </button>
          <div slot="emoji-picker" slot-scope="{ emojis, insert }">
            <div class="emoji-picker">
              <div>
                <div v-for="(emojiGroup, category) in emojis" :key="category">
                  <h5>{{ category }}</h5>
                  <div class="emojis">
                    <span
                      v-for="(emoji, emojiName) in emojiGroup"
                      :key="emojiName"
                      @click="insert(emoji)"
                      :title="emojiName"
                      >{{ emoji }}</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </emoji-picker>
      </div>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import SecondarySideBar from "@/components/side-bars/secondary-side-bar.vue";
import RightSideBar from "@/components/side-bars/right-side-bar.vue";
import ChattingComponent from "@/components/chats/chatting-component.vue";
import MainSideBar from "@/components/layouts/main-layout.vue";
import EmojiPicker from "vue-emoji-picker";

@Component({
  name: "ChatLayout",
  components: {
    SecondarySideBar,
    RightSideBar,
    ChattingComponent,
    MainSideBar,
    EmojiPicker,
  },
})
export default class ChatLayout extends Vue {
  drawer = null;

  input = "";

  insert(emoji: string) {
    this.input += emoji;
  }
}
</script>

<style scoped>
.main-wrap {
  background-color: var(--v-primary-lighten2);
}

.emoji-invoker {
  position: absolute;
  bottom: 1.7rem;
  right: 0rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s;
  padding: 0;
  background: transparent;
  border: 0;
}
.emoji-invoker:hover {
  transform: scale(1.1);
}

.emoji-picker {
  background-color: var(--v-primarybright-base);
  position: fixed;
  bottom: 3.5rem;
  right: 17rem;
  max-width: 25rem;
  max-height: 10rem;
  border-radius: 20px;
  padding: 6px;
  overflow: scroll;
}

.emoji-picker::-webkit-scrollbar {
  display: none;
}

.emoji-picker h5 {
  margin-bottom: 0;
  color: #b1b1b1;
  text-transform: uppercase;
  font-size: 0.8rem;
  cursor: default;
}
.emoji-picker .emojis {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.emoji-picker .emojis:after {
  content: "";
  flex: auto;
}
.emoji-picker .emojis span {
  padding: 0.2rem;
  cursor: pointer;
  border-radius: 5px;
}
.emoji-picker .emojis span:hover {
  background: #ececec;
  cursor: pointer;
}
</style>
