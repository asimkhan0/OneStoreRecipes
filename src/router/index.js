import Home from "../components/Home.vue";
import User from "../components/User/profile.vue";
import SignUp from "../components/User/signup.vue";
import SignIn from "../components/User/signin.vue";
import Recipes from "../components/Recipes/Recipes.vue";
import Recipe from "../components/Recipes/Recipe.vue";
import CreateRecipe from "../components/Recipes/createRecipe.vue";
// import EditRecipe from "../components/Recipes/EditRecipe.vue";
import ShoppingList from "../components/shoppingList/shoppingList.vue";
import CreateNewIngrediets from "../components/shoppingList/CreateNewIngrediets.vue";

export const routes = [
  { path: "/home", name:'Hello',component: Home },
  { path: "/user", name:'User', component: User },
  { path: "/signup", name:'SignUp', component: SignUp },
  { path: "/signin", name:'SignIn', component: SignIn },
  { path: "/Recipes", name:'Recipes',component: Recipes },
  { path: "/shoppinglist", name:'Shoppinglist',component: ShoppingList },
  { path: "/recipes/new", name:'createRecipe',component: CreateRecipe },
  // { path: "/recipes/edit", name:'editRecipe',component: EditRecipe },
  { path: "/recipe/:id", name:'Recipe',props:true,component: Recipe },
  { path: "/CreateNewIngrediets", name:'Create New Ingrediets',props:true,component: CreateNewIngrediets }
];


