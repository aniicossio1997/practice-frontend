import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/grid',
    name: 'Grid',
    component: () => import(/* webpackChunkName: "about" */ '../views/Grid.vue')
  },
  {
    path: '/cards',
    name: 'Cards',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cards.vue')
  }
  ,
  {
    path: '/formulario',
    name: 'Formulario',
    component: () => import(/* webpackChunkName: "about" */ '../views/Formulario.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
