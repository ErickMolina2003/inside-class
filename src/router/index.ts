import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import LogIn from "../components/login/log-in.vue";
<<<<<<< HEAD
import NavBar from "../components/nav-bar.vue";
import LandingPage from "../components/landing-page/landing-page.vue";
import LandingPublicidad from "../components/landing-page/landing-publicidad.vue";
import LandingVoae from "../components/landing-page/landing-voae.vue";
=======
>>>>>>> 505d93e59d3456c82396e89b05df2769826d2ba6
import Registro from "../components/login/registro-usuario.vue";
import MainLayout from "../components/layouts/main-layout.vue"

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "login",
    component: LogIn,
  },
  {
    path: "/registro",
    name: "registro",
    component: Registro,
  },
  {
<<<<<<< HEAD
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
=======
    path: "/layout",
    component: MainLayout,
    children: [
      {
        path: 'chats',
        name: 'chats',
        component: () => import('@/components/chats/main-chats.vue')
      },
      {
        path: 'voae',
        name: 'voae',
        component: () => import('@/components/horas-voae/horas-voae.vue')
      }
    ]
>>>>>>> 505d93e59d3456c82396e89b05df2769826d2ba6
  },
];

const router = new VueRouter({
  routes,
});

export default router;
