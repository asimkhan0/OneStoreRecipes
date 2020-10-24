<template>
  <v-container>
    <v-layout row wrap v-if="loading">
      <v-flex xs12 class="text-xs-center">
        <v-progress-circular
          indeterminate
          class="primary--text"
          :width="7"
          :size="70"
          >
        </v-progress-circular>
      </v-flex>
    </v-layout>
    <v-layout row wrap v-else-if="recipe !== undefined">
      <v-flex x12>
        <v-card>
          <!-- <v-card-title> -->
          <v-card-text>
            <h4 class="btn-style mt-4 mb-4 font">
              {{ recipe.title }}
            </h4>
            <template v-if="true">
                <v-spacer></v-spacer>
                <app-edit-recipe-details :recipe="recipe"></app-edit-recipe-details>
            </template>
            <v-img height="530px" :src="recipe.imageUrl" class="mb-4"></v-img>

            <div class="btn-style mb-6">
              {{ recipe.description }}
            </div>
            <div v-for="ing in recipe.ingredients" :key="ing.id">
              {{ ing.Name }} {{ ing.Quantity }}
              <v-btn class="green darken-1  color mb-5 ml-4 mr-4 pl-50">
                <v-icon class="green darken-1 btn-style">mdi-plus</v-icon>
              </v-btn>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <!-- <v-flex xs5 sm4 md2> -->
           
            <!-- </v-flex> -->
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["id"],
  computed: {
    recipe() {
      const loadedRecipe = this.$store.getters.loadedRecipe(this.id);
      console.log("We loaded a recipe with value : ", loadedRecipe);
      return loadedRecipe;
    },
    ingredient() {
      return this.$store.getters.loadedingredient(this.id);
    },
      loading(){
      return this.$store.getters.loading
    },
    ...mapGetters([
      //Here we put Getter
      "loadedRecipe",
      "loadedingredient",
    ]),
    // userIsAuthenticated() {
    //   return (
    //     this.$store.getters.user !== null &&
    //     this.$store.getters.user !== undefined
    //   );
    // },
    // userIsCreator() {
    //   if (!this.userIsAuthenticated) {
    //     return false;
    //   }
    //   return this.$store.getters.user.id === this.recipe.creator;
    // },
  },
  methods:{
    
  }
};
</script>
<style scoped>
.btn-style {
  color: #43a047;
}
.color {
  color: #fafafa;
}
.deleteColorIcon {
  color: #e53935;
}
.font {
  font-size: 30px;
}
</style>
