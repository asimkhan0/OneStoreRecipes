<template>
  <v-app>
    <div>
      <v-app-bar class="green darken-1">
        <v-app-bar-nav-icon
          @click.stop="drawer = !drawer"
          fab
          color="grey lighten-5"
        ></v-app-bar-nav-icon>

        <v-toolbar-title class="myfont font color size"
          ><router-link to="/" tag="span"
            >Bakerita</router-link
          ></v-toolbar-title
        >

        <v-spacer></v-spacer>

        <span class="span-header">
          <v-list-item
            v-for="itemH in headerIconMenue"
            :key="itemH.title"
            router
            :to="itemH.link"
          >
            <v-btn icon class="pl-2">
              <v-icon color="#fafafa">{{ itemH.icon }}</v-icon>
            </v-btn>
            <v-list-item-content class="color">{{
              itemH.title
            }}</v-list-item-content>
          </v-list-item>
        </span>
      </v-app-bar>
      <!-- Side Bar -->
      <v-navigation-drawer v-model="drawer" absolute bottom temporary>
        <v-list rounded>
          <v-subheader>REPORTS</v-subheader>
          <v-list-item-group color="green darken-1">
            <v-list-item
              v-for="item in menuItems"
              :key="item.title"
              router
              :to="item.link"
            >
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <!-- End Side Bar -->
    </div>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
// import Home from './components/Home.vue'

// import createRecipe from './components/Recipes/createRecipe.vue'
// import Recipe from './components/Recipes/Recipe.vue'
// import Recipes from './components/Recipes/Recipes.vue'

// import CreateNewIngrediets from './components/shoppingList/CreateNewIngrediets.vue'
// import ingredients from './components/shoppingList/ingredients.vue'
// import shoppingList from './components/shoppingList/shoppingList.vue'

// import profile from './components/User/profile.vue'
// import signup from './components/User/signup.vue'
// import signin from './components/User/signin.vue'
export default {
  // components:{
  //   appHome:Home,

  //   appCreateRecipe:createRecipe,
  //   appRecipe:Recipe,
  //   appRecipes:Recipes,

  //   appCreateNewIngrediets:CreateNewIngrediets,
  //     appIngredients:ingredients,
  //     appShoppingList:shoppingList,

  //     appProfile:profile,
  //     appSignup:signup,
  //     appSignIn:signin
  // },

  data() {
    return {
      drawer: false,
      menuItems: [
        { icon: " mdi-home", title: "Home", link: "/home" },
        { icon: "mdi-call-split", title: "View Recipes", link: "/Recipes" },
        {
          icon: "mdi-call-split",
          title: "create Recipes",
          link: "/recipe/new",
        },
        { icon: "mdi-call-split", title: "full Recipe", link: "/recipe/:id" },
        { icon: "mdi-call-split", title: "Sign Up", link: "/signup" },
        { icon: "mdi-call-split", title: "Log in", link: "/login" },
      ],
      headerIconMenue: [
        { icon: " mdi-home", title: "Home", link: "/home" },
        { icon: "mdi-google-earth", title: "Sign up", link: "/signup" },
        { icon: "mdi-lock-open-outline", title: "Sign in", link: "/signin" },
        { icon: "mdi-lock-open-outline", title: "User", link: "/user" },
        {
          icon: "mdi-lock-open-outline",
          title: "shoppingList",
          link: "/shoppinglist",
        },
      ],
    };
  },
};
</script>

<style scoped>
.font {
  font-size: 23pt;
}
.myfont {
  font-family: "Mansalva", cursive;
}
.color {
  /* color: rgb(233, 4, 119) */
  color: #fafafa;
}
.size {
  font-weight: bold;
}

.span-header {
  display: flex;
  flex: 1 1 auto;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
</style>
