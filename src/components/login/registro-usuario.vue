<template>
  <v-container class="fill-height">
    <v-snackbar v-model="snackbar" top color="red"
      >RELLENE TODOS LOS CAMPOS</v-snackbar
    >
    <v-card class="pa-5 card-background" dark max-width="100%">
      <v-row justify="space-between">
        <v-col class="text-center">
          <v-row justify="center">
            <v-col class="pb-0">
              <v-icon size="40px">mdi-flag-checkered</v-icon>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col class="pt-0">
              <h2>Registro de Usuarios</h2>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col lg="8" md="8" cols="12" class="pb-0 pt-0">
              <v-text-field
                v-model="firstName"
                class="shrink"
                rounded
                dense
                light
                label="Nombre"
                solo
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col lg="8" md="8" cols="12" class="pb-0 pt-0">
              <v-text-field
                v-model="lastName"
                class="shrink"
                rounded
                dense
                light
                label="Apellido"
                solo
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col lg="8" md="8" cols="12" class="pb-0 pt-0">
              <v-text-field
                v-model="username"
                class="shrink"
                rounded
                dense
                light
                label="Nombre de Usuario"
                solo
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col lg="8" md="8" cols="12" class="pb-0 pt-0">
              <v-text-field
                v-model="email"
                class="shrink"
                rounded
                dense
                light
                label="Correo"
                solo
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col lg="8" md="8" cols="12" class="pb-0 pt-0">
              <v-select
                v-model="career"
                class="shrink"
                label="Carrera"
                light
                dense
                rounded
                :items="nombreCarreras"
                solo
              ></v-select>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col lg="8" md="8" cols="12" class="pb-0 pt-0">
              <v-text-field
                v-model="password"
                class="shrink"
                rounded
                dense
                light
                label="Contraseña"
                type="password"
                solo
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" md="12" lg="12" class="pt-0 pt-0">
              <v-btn
                large
                rounded
                color="var(--v-success-darken1)"
                dark
                @click="crearUsuario"
                >Registrarse</v-btn
              >
            </v-col>
          </v-row>
        </v-col>
        <v-divider vertical dark></v-divider>
        <v-col>
          <v-row class="row-logo mr-auto ml-auto">
            <v-col align-self="center" cols="12" lg="12" md="12">
              <img
                src="../../assets/logo-IC/logo-IC.svg"
                max-height="50px"
                max-width="50px"
              />
              <h1 class="text-center">Inside Class</h1>
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
import axios from "axios";
import { User } from "@/store/models/chats";

@Component({
  name: "Registro",
})
export default class Registro extends Vue {
  firstName = "";
  lastName = "";
  username = "";
  email = "";
  password = "";
  career = "";
  carreras = [];
  nombreCarreras = [];
  snackbar = false;

  async created() {
    const response = await axios({
      method: "GET",
      url: "https://inside-class-bf070-default-rtdb.firebaseio.com/carreras.json",
      responseType: "stream",
    });
    for (let id in response.data) {
      this.nombreCarreras.push(response.data[id].title);
      this.carreras.push(response.data[id]);
    }
  }

  async crearUsuario() {
    if (
      this.username &&
      this.email &&
      this.password &&
      this.firstName &&
      this.lastName &&
      this.career
    ) {
      const newCarrera = this.encontrarCarrera(this.career);
      const newId = await this.encontrarId();
      const newUser: User = {
        id: newId,
        username: this.username,
        email: this.email,
        password: this.password,
        firstName: this.firstName,
        lastName: this.lastName,
        career: newCarrera,
        chats: [],
      };
      this.postUsuario(newUser);
      this.$router.push('/login')
    } else {
      this.username = "";
      this.email = "";
      this.password = "";
      this.firstName = "";
      this.lastName = "";
      this.career = "";
      this.snackbar = true;
    }
  }

  encontrarCarrera(nombreCarrera: string) {
    let newCarrera = this.carreras.find((carrera) => {
      if (carrera.title == nombreCarrera) {
        return carrera;
      }
    });
    return newCarrera.id;
  }

  async encontrarId() {
    const usuarios = await axios({
      method: "GET",
      url: "https://inside-class-bf070-default-rtdb.firebaseio.com/usuarios.json",
      responseType: "stream",
    });

    let cantidadUsuario = 0;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (let usuario in usuarios.data) {
      cantidadUsuario++;
    }
    return cantidadUsuario;
  }

  async postUsuario(newUser: User) {
    axios({
      method: "POST",
      url: "https://inside-class-bf070-default-rtdb.firebaseio.com/usuarios.json",
      data: JSON.stringify(newUser),
    });
  }
}
</script>

<style scoped>
.card-background {
  width: 100%;
  background-color: var(--v-primary-darken4) !important;
  border-radius: 20px 20px 20px !important;
}

.row-logo {
  width: 50%;
  height: 100%;
}
</style>
