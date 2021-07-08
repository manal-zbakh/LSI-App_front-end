import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact_us',
    name: 'Contact_us',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact_us.vue')
  },
  {
    path: '/login_etudiant',
    name: 'login_etudiant',
    component: () => import(/* webpackChunkName: "about" */ '../views/login_etudiant.vue')
  },
  {
    path: '/login_prof',
    name: 'login_prof',
    component: () => import(/* webpackChunkName: "about" */ '../views/login_prof.vue')
  },
  {
    path: '/admin',
    name: 'login_admin',
    component: () => import(/* webpackChunkName: "about" */ '../views/login_admin.vue')
  },
  {
    path: '/profil_prof',
    name: 'profil_prof',
    component: () => import(/* webpackChunkName: "about" */ '../views/profil_prof.vue')
  },
  {
    path: '/profil_etudiant',
    name: 'profil_etudiant',
    component: () => import(/* webpackChunkName: "about" */ '../views/profil_etudiant.vue')
  },
  {
    path: '/profil_admin',
    name: 'profil_admin',
    component: () => import(/* webpackChunkName: "about" */ '../views/profil_admin.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
