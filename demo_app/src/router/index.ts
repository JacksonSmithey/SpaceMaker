import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import EuclideanSpace from '../views/EuclideanSpace.vue'
import EllipticalSpace from '../views/EllipticalSpace.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/euclidean',
    name: 'EuclideanSpace',
    component: EuclideanSpace
  },
  {
    path: '/elliptical',
    name: 'EllipticalSpace',
    component: EllipticalSpace
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router