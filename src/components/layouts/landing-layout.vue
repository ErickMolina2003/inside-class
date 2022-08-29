<template>
  <span>
    <main-landing></main-landing>
    <publicidad-landing class="my-6"></publicidad-landing>
    <voae-landing class="my-6"></voae-landing>
    <nosotros-landing class="my-8"></nosotros-landing>
  </span>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import MainLanding from "../landing-page/landing-page.vue";
import PublicidadLanding from "../landing-page/landing-publicidad.vue";
import VoaeLanding from "../landing-page/landing-voae.vue";
import NosotrosLanding from "../landing-page/landing-sobreNosotros.vue";

@Component({
  name: "LandingLayout",
  components: { MainLanding, PublicidadLanding, VoaeLanding, NosotrosLanding },
})
export default class LandingLayout extends Vue {}
</script>

<style scoped></style>
