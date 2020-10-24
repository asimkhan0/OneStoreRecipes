

<template>
  <div>
    <v-container class="mb-30">
      <v-flex class="floating-right">
        <v-btn
          large
          router
          to="/CreateNewIngrediets"
          class="green darken-1  btn-style margine mr-50"
        >
          <v-icon class="green darken-1 btn-style">mdi-plus</v-icon>
        </v-btn>
      </v-flex>

      <v-container>
        <v-layout
          row
          wrap
          v-for="ingredient in ingredients"
          :key="ingredient.id"
          class="mb-3 mt-4"
        >
          <v-flex xs6 sm8 md4 offset-sm1 offset-md2>
            <v-card class="grey lighten-4 pl-3 ">
              <v-container fluid>
                <v-layout row class="pl-14">
                  <v-flex xs7 sm8 md9>
                    <v-card-title primary-title>
                      <v-flex xs7 sm8 md9>
                        <div>
                          {{ ingredient.Name }}
                        </div>
                      </v-flex>

                      <v-flex xs7 sm8 md9>
                        <div>
                          {{ ingredient.Quantity }}
                        </div>
                      </v-flex>
                      <v-flex xs5 sm4 md2>
                        <!-- <template v-if="true">
                          <v-spacer></v-spacer>
                          <app-edit-ingredient-details
                          ></app-edit-ingredient-details>
                        </template> -->
                        <v-btn class="deleteColorIcon">
                          <v-icon
                            left
                            class=" pl-4"
                            @click="
                              $store.commit('delete_ingredient', ingredient.id)
                            "
                          >
                            mdi-delete
                          </v-icon>
                          <!-- </v-btn> -->
                        </v-btn>
                      </v-flex>
                    </v-card-title>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    Recipes() {
      return this.$store.getters.loadedRecipes;
    },
    ingredients() {
      return this.$store.getters.loadedingredients;
    },
  },
};
</script>

<style scoped>
.color {
  color: #43a047;
}
.deleteColorIcon {
  color: #e53935;
}
.btn-style {
  color: aliceblue;
}
</style>
