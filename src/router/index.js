import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'
import ContactView from '@/views/ContactView.vue'

const routes = [
  { path: '/', 
    name: 'home', 
    component: HomeView 
  },

  { path: '/contact', 
    name: 'contact', 
    component: ContactView
  },

  { path: '/creations',
    name: 'Creations', 
    component: () => import('@/views/CreationsView.vue')
  },
  
  { path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  } 
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes ,

  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  },
})

export default router
