import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRoute from 'vue-router'
import { routes } from './router/index'
import { store} from './store'
import Vuetify from 'vuetify/lib'
import AlertCmp from './components/shared/alert.vue'
import EditRecipeDetails from './components/Recipes/Edit/EditRecipeDetails.vue'
import EditIngredientDetails from './components/shoppingList/Edit/EditIngrediet.vue'

Vue.config.productionTip = false

Vue.use(VueRoute)
Vue.use(Vuetify)
Vue.component('app-alert',AlertCmp)
Vue.component('app-edit-recipe-details',EditRecipeDetails)
Vue.component('app-edit-ingredient-details',EditIngredientDetails)

const router = new VueRoute({
  routes,
  mode:'history'
})

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App),
}).$mount('#app')

