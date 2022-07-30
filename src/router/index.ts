import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import LogIn from '../components/login/log-in.vue';
import LandingPublicidad from '../components/landing-page/landing-publicidad.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'login',
    component: LogIn
  },
  {
    path: '/publicidad',
    name: 'publicidad',
    component: LandingPublicidad
  }
]

const router = new VueRouter({
  routes
})

export default router
