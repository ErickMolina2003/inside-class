import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import LogIn from "../components/login/log-in.vue";
import NavBar from "../components/nav-bar.vue";
import LandingPage from "../components/landing-page/landing-page.vue";
import LandingPublicidad from "../components/landing-page/landing-publicidad.vue";
import LandingVoae from "../components/landing-page/landing-voae.vue";
import Registro from "../components/login/registro-usuario.vue";
import MainSideBar from "../components/side-bars/main-side-bar.vue";
import ChatCard from "../views/chat-card.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "login",
    component: LogIn,
  },
  {
    path: "/navBar",
    name: "navBar",
    component: NavBar,
  },
  {
    path: "/registro",
    name: "registro",
    component: Registro,
  },
  {
    path: "/publicidad",
    name: "publicidad",
    component: LandingPublicidad,
  },
  {
    path: "/landingPage",
    name: "landingPage",
    component: LandingPage,
  },
  {
    path: "/voae",
    name: "voae",
    component: LandingVoae,
  },
  {
    path: "/sideBar",
    name: "sideBar",
    component: MainSideBar,
  },
  {
    path: "/chat",
    name: "chat",
    component: ChatCard,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
