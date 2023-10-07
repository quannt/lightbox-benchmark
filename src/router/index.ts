import { createRouter, createWebHistory } from 'vue-router'
import ViewerJsView from '../views/ViewerJsView.vue'
import PhotoswipeView from '../views/PhotoswipeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ViewerJsView
    },
    {
      path: '/viewerjs',
      name: 'viewerjs',
      component: ViewerJsView
    },
    {
      path: '/photo-swipe',
      name: 'photo-swipe',
      component: PhotoswipeView
    },
  ]
})

export default router
