<template>
  <v-container class="fill-height">
    <v-snackbar v-model="snackbar" top color="red"
      >Credenciales no validas!</v-snackbar
    >
    <v-card
      class="pa-5 rounded-xl"
      color="var(--v-primary-darken4)"
      dark
      width="100%"
    >
      <v-row justify="space-between">
        <v-col>
          <v-row class="row-logo mr-auto ml-auto">
            <v-col cols="12" lg="12" md="12">
              <img
                src="../../assets/logo-IC/logo-IC.svg"
                max-height="50px"
                max-width="50px"
                height="100%"
              />
            </v-col>
            <v-col cols="12" lg="12" md="12">
              <h1 class="text-center">Inside Class</h1>
            </v-col>
          </v-row>
        </v-col>
        <v-divider vertical dark class="cut"></v-divider>
        <v-col class="text-center">
          <v-row justify="center">
            <v-col class="pb-0">
              <v-icon size="50px">mdi-account</v-icon>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col class="pt-0">
              <h2>Iniciar sesion</h2>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col lg="8" md="8" cols="12" class="pb-0">
              <v-text-field
                v-model="usuarioEmail"
                class="shrink"
                rounded
                dense
                light
                label="usuario o email"
                solo
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col lg="8" md="8" cols="12" class="py-0">
              <v-text-field
                v-model="password"
                class="shrink"
                rounded
                dense
                light
                type="password"
                label="contrasena"
                solo
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col class="pt-0">
              <a class="white--text" @click="redirectToCreate">Crear Cuenta</a>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" md="12" lg="12" class="pt-0">
              <v-btn
                large
                rounded
                color="var(--v-success-darken1)"
                dark
                @click="login"
                >Iniciar Sesion</v-btn
              >
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import UserStore from "@/store/models/user";

import axios from "axios";

@Component({
  name: "LogIn",
})
export default class Login extends Vue {
  usuarioEmail = "";
  password = "";
  isLogged = false;
  snackbar = false;
  userStore = getModule(UserStore, this.$store);

  redirectToCreate() {
    this.$router.push("/registro");
  }

  async login() {
    if (this.usuarioEmail && this.password) {
      const allUsers = await this.getAllUsers();
      allUsers.forEach((user) => {
        if (
          (user.email == this.usuarioEmail ||
            user.username == this.usuarioEmail) &&
          user.password == this.password
        ) {
          this.$router.push("/layout/chats");
          this.isLogged = true;
          this.userStore.setLoggedUser(user);
        }
      });
      if (!this.isLogged) {
        this.validationFailed();
      }
    } else {
      this.validationFailed();
    }
  }

  async getAllUsers() {
    const usuarios = await axios({
      method: "GET",
      url: "https://inside-class-bf070-default-rtdb.firebaseio.com/usuarios.json",
      responseType: "stream",
    });
    const allUsers = [];
    for (let index in usuarios.data) {
      allUsers.push(usuarios.data[index]);
    }
    return allUsers;
  }

  validationFailed() {
    this.snackbar = true;
    this.usuarioEmail = "";
    this.password = "";
  }
}
</script>

<style scoped>
.row-logo {
  width: 50%;
}
.cut {
  border-width: 0.2rem !important;
  border-color: var(--v-primary-base) !important;
}
</style>
