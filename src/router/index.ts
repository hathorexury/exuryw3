import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServicesView from '../views/ServicesView.vue'
import ProcessView from '../views/ProcessView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView
    },
    {
      path: '/process',
      name: 'process',
      component: ProcessView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
    //{
    // path: '/services',
    // name: 'services',
    // component: () => import('../views/ServicesView.vue')
    //}
  ]
})

export default router
