import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/about-me',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact-me',
    name: 'Contacts',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
  {
    path: '/photography',
    name: 'Photography',
    component: () => import(/* webpackChunkName: "photography" */ '../views/Photography.vue')
  },
  {
    path: '/illustration',
    name: 'Illustration',
    component: () => import(/* webpackChunkName: "illustration" */ '../views/Illustration.vue')
  },
  {
    path: '/modeling-vfx',
    name: 'Modeling',
    component: () => import(/* webpackChunkName: "modeling" */ '../views/Modeling.vue')
  },
  {
    path: '/frontend',
    name: 'Frontend',
    component: () => import(/* webpackChunkName: "frontend" */ '../views/Frontend.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
