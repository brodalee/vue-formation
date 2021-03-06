import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    props: true
  },
  {
    path: '/result',
    name: 'Result',
    component: () => import('../views/Result.vue'),
    props: true
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: () => import('../views/Favorite.vue'),
    props: true
  },
  { path: '/:pathMatch(.*)', redirect: { name: 'Home' } }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
