<template>
  <v-navigation-drawer
    app
    clipped
    permanent
    right
    color="var(--v-primary-darken2)"
  >
    <v-row class="my-4">
      <v-col lg="8" md="8" cols="8">
        <h3 class="mt-2 white--text text-right">
          {{ user.firstName }} {{ user.lastName }}
        </h3>
      </v-col>
      <v-col lg="4" md="4" cols="4">
        <v-img
          class="rounded-circle"
          :src="getImgUrl(user)"
          max-height="45px"
          max-width="45px"
        ></v-img>
      </v-col>
    </v-row>

    <v-divider class="mb-4 cut" color="white"></v-divider>

    <v-row>
      <v-col cols="12" lg="12" md="12">
        <h3 class="white--text text-center">Miembros</h3>
      </v-col>

      <v-col
        cols="12"
        lg="12"
        md="12"
        v-for="(member, key) in members"
        :key="key"
      >
        <v-row v-if="member.id != user.id">
          <v-col lg="8" md="8" cols="8">
            <h4 class="mt-2 white--text text-center">
              {{ member.firstName }} {{ member.lastName }}
            </h4>
          </v-col>
          <v-col lg="4" md="4" cols="4" align-self="end">
            <v-img
              class="rounded-circle"
              :src="getImgUrl(member)"
              max-height="35px"
              max-width="35px"
            ></v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Watch } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import UserStore from "@/store/models/user";

@Component({
  name: "RightSideBar",
})
export default class RightSideBar extends Vue {
  userStore = getModule(UserStore, this.$store);
  user = this.userStore.user;
  members = this.userStore.members;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getImgUrl(message: any) {
    if (
      message?.speakerTitle == "Erick Molina" ||
      message?.firstName.includes("Erick")
    ) {
      return require("@/assets/usuarios/erick.svg");
    }
    if (
      message?.speakerTitle == "Angel Sanchez" ||
      message?.firstName.includes("Angel")
    ) {
      return require("@/assets/usuarios/Angel.svg");
    }
    if (
      message?.speakerTitle == "Gabriel Omar" ||
      message?.firstName.includes("Gabriel")
    ) {
      return require("@/assets/usuarios/Gabriel.svg");
    }
    return require("@/assets/usuarios/Default.svg");
  }

  @Watch("userStore.members")
  updateMembers() {
    this.members = this.userStore.members;
  }
}
</script>

<style scoped>
.cut {
  border-width: 0.1rem !important;
  border-color: white !important;
  height: 100%;
}
</style>
