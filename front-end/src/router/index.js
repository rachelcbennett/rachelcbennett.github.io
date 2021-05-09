import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import RecipeIndex from '../views/RecipeIndex.vue'
import Recipe from '../views/Recipe.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/recipe-index',
    name: 'RecipeIndex',
    component: RecipeIndex
  },
  {
    path: '/recipe/:id',
    name: 'recipe',
    component: Recipe
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
