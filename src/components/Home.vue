<template>
<v-container>
    <v-row>
        <v-flex class="text-center">

            <v-btn large 
                   router 
                   to="/Recipes" 
                   class="green darken-1  btn-style margine">
                Explore Recipes
            </v-btn>
        </v-flex>
        <v-flex class="text-center">
            <v-btn large 
                   router 
                   to="/recipes/new" 
                   class="green darken-1  btn-style ">
                Create Recipes
            </v-btn>
        </v-flex>
    </v-row>


    <v-layout row wrap>
      <v-col>
        <v-carousel style="cursor:pointer;">
          <v-carousel-item
            v-for="recipe in Recipes"
            :key="recipe.id"
            :src="recipe.imageUrl"
            reverse-transition="fade-transition"
            transition="fade-transition"
            @click="onLoadRecipe(recipe.id)"
          ></v-carousel-item>
        </v-carousel>
      </v-col>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed:{
    Recipes(){
     return this.$store.getters.featuredRecipes
    }
  },
    methods:{
    onLoadRecipe(id){
      this.$router.push('/recipe/'+id)
    },
    loading(){
      return this.$store.getters.loading
    }
  }
}
</script>
<style scoped>
.btn-style {
  color: #FAFAFA;
}
.margine{
  padding-left: 4px;
  padding-right: 4px;

}
</style>
