<template>
  <v-container>
    <v-layout row wrap v-for="recipe in loadedRecipes" :key="recipe.id" class="mb-2">
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card class="grey lighten-4 pl-3 ">
          <v-container fluid>
            <v-layout row>
              <v-flex xs5 sm4 md3>
                <v-img height="180px" :src="recipe.imageUrl"></v-img>
              </v-flex>
              <v-flex xs7 sm8 md9>
                <v-card-title primary-title>
                  <div>
                    <h5 class="color mb-0">{{ recipe.title }}</h5>
                    <div>
                      {{ recipe.description }}
                    </div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-flex>
                    <v-btn
                      text
                      left
                      :to="'/recipe/' + recipe.id"
                      class="green darken-1  btn-style"
                    >
                      View Recipe
                    </v-btn>
                  </v-flex>
                  <v-flex xs5 sm4 md2>
                    <v-btn class="deleteColorIcon" >
                      <v-icon left class=" pl-4" @click="$store.commit('delete_recipe',recipe.id)">
                        mdi-delete
                      </v-icon>
                      <!-- </v-btn> -->
                    </v-btn>
                  </v-flex>
                   <v-flex xs5 sm4 md2>
                    <v-btn>
                      <v-icon left class=" pl-4">
                        mdi-pen
                      </v-icon>
                      <!-- </v-btn> -->
                    </v-btn>
                  </v-flex>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  actions: {
    // deleteRecipe({commit}, id) {            
    //       commit('delete_recipe', id)
    //   }
  },
  computed: {
    // Recipes() {
    //   return this.$store.getters.loadedRecipes
    // },
    // createRecipe(){
    //   return this.$store.state.createRecipe
    // },
    ...mapGetters([
      //Here we put Getter
      'loadedRecipes',
      'loadedingredient'
    ]),
  },
  methods: {
  
  },
};
</script>

<style scoped>
.color {
  color: #43a047;
}
.btn-style {
  color: #fafafa;
}
.deleteColorIcon {
  color: #e53935;
}
</style>
