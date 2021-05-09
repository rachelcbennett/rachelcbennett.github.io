import Vue from 'vue'
import App from './App.vue'
import router from './router'
import recipedata from './recipe-data.js'

Vue.config.productionTip = false

let data = {
    recipes:recipedata,
    cart: []
}
new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
