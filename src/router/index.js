import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../components/login.vue')
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: () => import('../components/sign-up.vue')
    },
    {
      path: '/adminPage',
      name: 'adminPage',
      component: () => import('../components/adminPage.vue')
    },
    {
      path: '/userPage',
      name: 'userPage',
      component: () => import('../components/userPage.vue')
    },
    {
      path: '/cart',
      name: 'cart', 
      component: () => import('../components/cart.vue')
    },
  ]
})

export default router
