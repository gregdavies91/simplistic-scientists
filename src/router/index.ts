import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import About from '../views/About.vue';
import Music from '../views/Music.vue';
import Merch from '../views/Merch.vue';
import Contact from '../views/Contact.vue';
import PageNotFound from '../views/PageNotFound.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/about'
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/music',
    name: 'Music',
    component: Music
  },
  {
    path: '/merch',
    name: 'Merch',
    component: Merch
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: PageNotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router