<template>
  <v-container>
    <v-layout row justify-end>
      <v-flex md4 xs12 sm6 lg3>
        <v-text-field
          append-icon="mdi-magnify"
          class="my-12 mx-12"
          dark
          clearable
          
          rounded
          background-color="var(--v-primary-darken3)"
          color="var(--v-success-base)"
          label="Buscar chat"
        ></v-text-field>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  name: "SearchField",
})
export default class SearchField extends Vue {}
</script>
