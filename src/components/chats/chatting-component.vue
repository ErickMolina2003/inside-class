<template>
  <div class="chatting-component">
    <v-row justify="center" class="py-4">
      <v-col cols="4" md="2" lg="2">
        <h4 class="lightgray--text text--darken-3">13/12/2022</h4>
      </v-col>
    </v-row>
    <v-container>
      <v-row class="mb-3 user-chat">
        <v-col cols="6" md="1" lg="1" align-self="start">
          <v-img
            class="img-chat rounded-circle"
            src="@/assets/usuarios/perfil.svg"
            max-height="40px"
            max-width="40px"
          ></v-img>
        </v-col>

        <v-col class="chat-content" cols="auto" md="auto" lg="auto">
          <v-row>
            <v-col cols="12" md="12" lg="12" class="pb-0">
              <h3>Alejandro Molina</h3>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="12" lg="12">
              <h4 class="white--text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                debitis voluptas non, magni aut ab velit voluptatem maiores
                deleniti quidem, earum totam itaque et necessitatibus nemo
                assumenda eos dolores modi!
              </h4>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row class="mb-3 user-chat">
        <v-col cols="6" md="1" lg="1" align-self="start">
          <v-img
            class="img-chat rounded-circle"
            src="@/assets/usuarios/perfil.svg"
            max-height="40px"
            max-width="40px"
          ></v-img>
        </v-col>

        <v-col class="chat-content" cols="auto" md="auto" lg="auto">
          <v-row>
            <v-col cols="12" md="12" lg="12" class="pb-0">
              <h3>Alejandro Molina</h3>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="12" lg="12">
              <h4 class="white--text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                debitis voluptas non, magni aut ab velit voluptatem maiores
                deleniti quidem, earum totam itaque et necessitatibus nemo
                assumenda eos dolores modi!
              </h4>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row class="mb-3 own-chat" justify="end">
        <v-col class="chat-content" cols="auto" md="auto" lg="auto">
          <v-row>
            <v-col cols="12" md="12" lg="12" class="pb-0">
              <h3>Alejandro Molina</h3>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="12" lg="12">
              <h4 class="white--text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                debitis voluptas non, magni aut ab velit voluptatem maiores
                deleniti quidem, earum totam itaque et necessitatibus nemo
                assumenda eos dolores modi!
              </h4>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="6" md="1" lg="1" align-self="start">
          <v-img
            class="img-chat rounded-circle"
            src="@/assets/usuarios/perfil.svg"
            max-height="40px"
            max-width="40px"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  name: "ChattingComponent",
})
export default class ChattingComponent extends Vue {}
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
