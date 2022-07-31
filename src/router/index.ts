import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import LogIn from '../components/login/log-in.vue';
import LandingPublicidad from '../components/landing-page/landing-publicidad.vue';
import LandingVoae from '../components/landing-page/landing-voae.vue'
import Registro from '../components/login/registro-usuario.vue' 

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'login',
    component: LogIn
  },
  {
    path: '/registro',
    name: 'registro',
    component: Registro
  },
  {

    path: '/publicidad',
    name: 'publicidad',
    component: LandingPublicidad
  },
  {
    path: '/voae',
    name: 'voae',
    component: LandingVoae
  },
]

const router = new VueRouter({
  routes
})

export default router
