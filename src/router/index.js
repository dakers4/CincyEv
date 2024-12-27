import { createRouter, createWebHistory } from 'vue-router'
import SearchResults from '../views/SearchResults.vue'
import HomePage from '../components/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   
  ],
})

const routes = [
  {
  path: '/',
  name: 'home',
  component: HomePage
  }, 

  {
    path: '/reults',
    name: 'search-results',
    component: SearchResults
  }, 




  ]


export default router
