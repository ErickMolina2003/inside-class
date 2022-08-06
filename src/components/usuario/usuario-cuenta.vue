<template>
  <v-container class="contenedor mt-4">
    <v-card class="pa-5 rounded-xl" color="var(--v-primary-darken4)" dark>
      <v-row>
        <v-col cols="12" md="12" lg="12">
          <v-row>
            <v-col lg="1" md="1" cols="1">
              <v-img
                src="../../assets/usuarios/perfil.svg"
                max-height="60px"
                max-width="60px"
              ></v-img>
            </v-col>
            <v-col align-self="center">
              <h2>Eralejo2003 / Erick Molina</h2>
            </v-col>
            <v-spacer></v-spacer>
            <v-col align-self="center">
              <h2>Ingenieria en sistemas</h2>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" md="12" lg="12">
          <v-row>
            <v-col md="12" lg="12" cols="12">
              <h5 class="lightgray--text text--darken-3">Nombre de usuario</h5>
            </v-col>
          </v-row>
          <v-row class="mt-0">
            <v-col>
              <h2 v-if="!editUser">Eralejo2003</h2>
              <v-row v-if="editUser">
                <v-col cols="6" md="6" lg="6">
                  <v-text-field
                    class="shrink"
                    rounded
                    dense
                    light
                    label="usuario"
                    solo
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-col>
            <v-col class="text-center">
              <v-btn
                :color="
                  !editUser ? 'var(--v-success-base)' : 'var(--v-error-base)'
                "
                class="text--white"
                @click="editUser = !editUser"
                >{{ !editUser ? "Editar" : "Cancelar" }}</v-btn
              >
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" md="12" lg="12">
          <v-row>
            <v-col md="12" lg="12" cols="12">
              <h5 class="lightgray--text text--darken-3">Correo electronico</h5>
            </v-col>
          </v-row>
          <v-row class="mt-0">
            <v-col>
              <h2 v-if="!editEmail">eralejo2003@gmail.com</h2>
              <v-row v-if="editEmail">
                <v-col cols="6" md="6" lg="6">
                  <v-text-field
                    class="shrink"
                    rounded
                    dense
                    light
                    label="correo electronico"
                    solo
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-col>
            <v-col class="text-center">
              <v-btn
                :color="
                  !editEmail ? 'var(--v-success-base)' : 'var(--v-error-base)'
                "
                class="text--white"
                @click="editEmail = !editEmail"
                >{{ !editEmail ? "Editar" : "Cancelar" }}</v-btn
              >
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" md="12" lg="12">
          <v-row>
            <v-col md="12" lg="12" cols="12">
              <h5 class="lightgray--text text--darken-3">Contrasena</h5>
            </v-col>
          </v-row>
          <v-row class="mt-0">
            <v-col>
              <h2 v-if="!editPassword" type="password">************</h2>
              <v-row v-if="editPassword">
                <v-col cols="6" md="6" lg="6">
                  <h4 class="pt-2">Nueva Contrasena</h4>
                </v-col>
                <v-col cols="6" md="6" lg="6">
                  <v-text-field
                    class="shrink"
                    rounded
                    dense
                    light
                    label="correo electronico"
                    solo
                  ></v-text-field>
                </v-col>

                <v-col cols="6" md="6" lg="6">
                  <h4 class="pt-2">confirmar Contrasena</h4>
                </v-col>
                <v-col cols="6" md="6" lg="6">
                  <v-text-field
                    class="shrink"
                    rounded
                    dense
                    light
                    label="correo electronico"
                    solo
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-col>
            <v-col class="text-center">
              <v-btn
                :color="
                  !editPassword
                    ? 'var(--v-success-base)'
                    : 'var(--v-error-base)'
                "
                class="text--white"
                @click="editPassword = !editPassword"
                >{{ !editPassword ? "Editar" : "Cancelar" }}</v-btn
              >
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row v-if="editandoUsuario" class="mt-4" justify="center">
        <v-col cols="2" lg="2" md="2">
          <v-btn color="var(--v-success-base)" class="text--white"
            >Aceptar</v-btn
          >
        </v-col>
        <v-col cols="2" lg="2" md="2">
          <v-btn color="var(--v-error-base)" class="text--white"
            >Cancelar</v-btn
          >
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  name: "UsuarioCuenta",
})
class UsuarioCuenta extends Vue {
  editUser = false;
  editEmail = false;
  editPassword = false;

  get editandoUsuario() {
    if(this.editUser || this.editEmail || this.editPassword) {
        return true;
    }
    return false;
  }
}

export default UsuarioCuenta;
</script>
