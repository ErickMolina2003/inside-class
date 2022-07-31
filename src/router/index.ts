import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import LogIn from '../components/login/log-in.vue';
<<<<<<< HEAD
import LandingPublicidad from '../components/landing-page/landing-publicidad.vue';
import LandingVoae from '../components/landing-page/landing-voae.vue'
=======
import Registro from '../components/login/registro-usuario.vue' 
import LandingPublicidad from '../components/landing-page/landing-publicidad.vue'
>>>>>>> 97c69bef7d051eba871cefb6afe9805806a6c0fe

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
