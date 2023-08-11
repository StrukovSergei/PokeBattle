import { createRouter, createWebHashHistory } from 'vue-router'
import AppHome from './../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AppIndex from './../views/AppIndex.vue'
import AppMap from './../views/AppMap.vue'
import DashBoard from '../views/DashBoard.vue'
import ItemDetails from './../views/ItemDetails.vue'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome,
    },
    {
      path: '/item',
      name: 'app',
      component: AppIndex,
      children: [
        {
          path: '/item/:_id',
          name: 'details',
          props: true,
          component: ItemDetails,
        },
      ],
    },

    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/map',
      name: 'map',
      component: AppMap,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashBoard,
    },
  ],
})

export default router
