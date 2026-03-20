import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import HowItWorksView from '@/views/HowItWorksView.vue'
import ChatView from '@/views/ChatView.vue'
import EventsView from '@/views/EventsView.vue'
import FaqView from '@/views/FaqView.vue'
import ContactView from '@/views/ContactView.vue'

const routes = [
  { path: '/',             component: HomeView,       meta: { layout: 'HomeLayout' } },
  { path: '/about',        component: AboutView },
  { path: '/how-it-works', component: HowItWorksView },
  { path: '/chat',         component: ChatView },
  { path: '/events',       component: EventsView },
  { path: '/faq',          component: FaqView },
  { path: '/contact',      component: ContactView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

export default router
