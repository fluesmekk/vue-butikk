import { createRouter, createWebHistory } from 'vue-router'
import  CheckOut from '../components/check-out.vue';
import  About from '../components/about.vue';
import Cart from '../components/cart.vue'

const routes = [
  {
    path: '/',
    redirect: '/check-out',
  },
  {
    path: '/check-out',
    name: 'check-out',
    component: CheckOut,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
