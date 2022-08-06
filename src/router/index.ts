import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import LogIn from "../components/login/log-in.vue";
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
  },
];

const router = new VueRouter({
  routes,
});

export default router;
