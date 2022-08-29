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
      <v-icon class="white--text ml-2">mdi-emoticon</v-icon>
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

@Component({
  name: "ChatLayout",
  components: {
    SecondarySideBar,
    RightSideBar,
    ChattingComponent,
    MainSideBar,
  },
})
export default class ChatLayout extends Vue {
  drawer = null;
}
</script>

<style scoped>
.main-wrap {
  background-color: var(--v-primary-lighten2);
}
</style>
