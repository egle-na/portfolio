import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/photography',
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
    component: () => import(/* webpackChunkName: "photography" */ '../views/Photography.vue'),
  },
  {
    path: '/photography/water',
    name: 'Water',
    component: () => import(/* webpackChunkName: "water" */ '../views/Water.vue')
  },
  {
    path: '/photography/rocks',
    name: 'Rocks',
    component: () => import(/* webpackChunkName: "rocks" */ '../views/Rocks.vue')
  },
  {
    path: '/photography/architecture',
    name: 'Architecture',
    component: () => import(/* webpackChunkName: "architecture" */ '../views/Architecture.vue')
  },
  {
    path: '/photography/lines',
    name: 'Lines',
    component: () => import(/* webpackChunkName: "lines" */ '../views/Lines.vue')
  },
  {
    path: '/photography/greens',
    name: 'Greens',
    component: () => import(/* webpackChunkName: "greens" */ '../views/Greens.vue')
  },
  {
    path: '/photography/plants',
    name: 'Plants',
    component: () => import(/* webpackChunkName: "plants" */ '../views/Plants.vue')
  },
  {
    path: '/photography/reds',
    name: 'Reds',
    component: () => import(/* webpackChunkName: "reds" */ '../views/Reds.vue')
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
  mode: 'history',
  routes
})

export default router
