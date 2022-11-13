import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/myhome.vue'
import Profile from '../views/profileview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{
        layout: 'Main'
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      
    },
    {
      path: '/myhome',
      name: 'myhome',
      component: HomeView,
      
    },
    
  ]
})

export default router
