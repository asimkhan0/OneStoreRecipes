import Vue from "vue";
import Vuex from "vuex";
import image1 from "../assets/img/image4.jpg";
import image2 from "../assets/img/image2.jpg";
import image3 from "../assets/img/image3.jpg";
import image4 from "../assets/img/insta2.jpg";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    loadedIngredients: [
      {
        id: '1',
        Name: "Sugar",
        Quantity: "5kg",
      },
      {
        id: "2",
        Name: "Sugar",
        Quantity: "5kg",
      }
    ],
    // loadedingredients: [
    //   { id: "1", Name: "Sugar", Quantity: "5kg" },
    //   { id: "2", Name: "Sugar", Quantity: "5kg" },
    //   { id: "3", Name: "Sugar", Quantity: "5kg" },
    // ],
    loadedRecipes: [
      {
        imageUrl: image3,
        id: "3",
        title: "Homemade Burger",
        description:
          "Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.."
      },
      {
        imageUrl: image1,
        id: "1",
        title: "Cake",
        description:
          "Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.."
      },
      {
        imageUrl: image4,
        id: "4",
        title: "Salad",
        description:
          "Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.."
      },
      {
        imageUrl: image2,
        id: "2",
        title: "Kabseh",
        description:
          "Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating."
      }
    ],
    user: [
      { name: "Hiba", email: "Hiba69@gmail.com", password: "123442321325" },
    ],
    loading: false,
  },
  actions: {
    updateRecipeData({ commit }, payload) {
      // commit('setLoading',true)
      const updateObj = {};
      if (payload.title) {
        updateObj.title == payload.title;
      }
      if (payload.description) {
        updateObj.description == payload.description;
      }
      commit("updateRecipe", payload);
      localStorage.setItem("updateRecipe", this.loadedRecipes);
    },
    updateIngredientData({ commit }, payload) {
      // commit('setLoading',true)
      const updateObj = {};
      if (payload.ingredientsQuantity) {
        updateObj.ingredientsQuantity == payload.ingredientsQuantity;
      }
      commit("updateingredient", payload);
      localStorage.setItem("updateingredient", this.loadedIngredients);
    },
  },
  // like setters
  mutations: {
    createRecipe(state, payload) {
      // Vue.set(state, 'loadedRecipes', [...state.loadedRecipes, payload])
      state.loadedRecipes.push(payload);
    },
    createIngredients(state, payload) {
      // Vue.set(state, 'loadedRecipes', [...state.loadedRecipes, payload])
      state.loadedIngredients.push(payload);
    },
    createUser(state, payload) {
      state.user.push(payload);
    },
    delete_recipe(state, id) {
      let index = state.loadedRecipes.findIndex((recipe) => recipe.id == id);
      state.loadedRecipes.splice(index, 1);
      console.log("Deleted Successfully");
    },
    delete_ingredient(state, id) {
      let index = state.loadedIngredients.findIndex(
        (ingredient) => ingredient.id == id
      );
      state.loadedIngredients.splice(index, 1);
      console.log("Deleted Successfully");
    },
    updateRecipe(state, payload) {
      const recipe = state.loadedRecipes.find((recipe) => {
        return recipe.id == payload.id;
      });
      if (payload.title) {
        recipe.title = payload.title;
      }
      if (payload.description) {
        recipe.description = payload.description;
      }
    },
    updateingredient(state,payload) {
      const ingredient = state.loadedingredients.find((ingredient)=>{
        return ingredient.id == payload.id;
      });
      if(payload.ingredientsQuantity){
        ingredient.ingredientsQuantity=payload.ingredientsQuantity
      }
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
  },
  getters: {
    loadedRecipes: (state) => {
      console.log(state.loadedRecipes)
      return state.loadedRecipes
        .sort((RecipeA, RecipeB) => {
          return RecipeA.id > RecipeB.id;
        })
        .map((aRec) => {
          aRec["ingredients"] = [...state.loadedIngredients];
          return aRec;
        });
    },
    loadedingredients: (state) => {
      return state.loadedIngredients.sort((ingredientA, ingredientB) => {
        return ingredientA.ingredientsQuantity > ingredientB.ingredientsQuantity;
      });
    },
    featuredRecipes: (getters) => {
      return getters.loadedRecipes.slice(0, 5);
    },
    loadedRecipe: (state) => {
      // state.loadedRecipes.push(payload.recipeData)
      // console.log('payload is:'+payload)
      return (recipeId) => {
        return state.loadedRecipes.find((recipe) => {
          return recipe.id === recipeId;
          
        });
      };
    },
    loadedingredient: (state) => {
      return (ingredientId) => {
        return state.loadedIngredients.find((ingredient) => {
          return ingredient.id === ingredientId;
        });
      };
    },
    loadedUsers: (state) => {
      return state.user.sort((userA, userB) => {
        return userA.id > userB.id;
      });
    },
    isLoggedIn: (state) => {
      return state.isLoggedIn;
    },
    loading(state) {
      return state.loading;
    },
  },
});
