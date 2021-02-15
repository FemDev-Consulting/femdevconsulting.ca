import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';

const NotFound = () => import('../views/NotFound.vue');

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomePage,
    },
    {
      path: '/404',
      name: 'not-found',
      component: NotFound,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect:
      {
        name: 'not-found'
      }
    }
  ],
});
