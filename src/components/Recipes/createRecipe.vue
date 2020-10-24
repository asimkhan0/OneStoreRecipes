<template>
  <v-app>
    <v-container>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <h2 class="btn-style">Create Recipe</h2>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12>
          <form @submit.prevent="onCreateRecipe">
              <v-layout>
              <v-flex xs12 sm6 offset-sm3>
                <v-text-field
                  name="id"
                  label="Id"
                  id="id"
                  v-model="id"
                  color="#43A047"
                  required
                >
                </v-text-field>
              </v-flex>
            </v-layout>

            <v-layout>
              <v-flex xs12 sm6 offset-sm3>
                <v-text-field
                  name="title"
                  label="Title"
                  id="title"
                  v-model="title"
                  color="#43A047"
                  required
                >
                </v-text-field>
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex xs12 sm6 offset-sm3>
                <v-text-field
                  name="imageUrl"
                  label="ImageUrl"
                  id="imageUrl"
                  v-model="imageUrl"
                  color="#43A047"
                  required
                >
                </v-text-field>
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex xs12 sm6 offset-sm3>
                <img :src="imageUrl" height="300px">
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex xs12 sm6 offset-sm3>
                <v-text-field
                  name="description"
                  label="Description"
                  id="description"
                  v-model="description"
                  color="#43A047"
                  multi-line
                  required
                >
                </v-text-field>
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex xs12 sm6 offset-sm3>
                <v-text-field
                  name="ingredientsName"
                  label="IngredientsName"
                  id="ingredientsName"
                  v-model="ingredientsName"
                  color="#43A047"
                  multi-line
                  required
                >
                </v-text-field>
              </v-flex>
            </v-layout>

             <v-layout>
              <v-flex xs12 sm6 offset-sm3>
                <v-text-field
                  name="ingredientsQuantity"
                  label="IngredientsQuantity"
                  id="ingredientsQuantity"
                  v-model="ingredientsQuantity"
                  color="#43A047"
                  multi-line
                  required
                >
                </v-text-field>
              </v-flex>
            </v-layout>

            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <v-btn
                  class="green darken-1 color"
                  :disabled="!formIsValid"
                  type="submit"
                >
                  Create Recipe
                </v-btn>
              </v-flex>
            </v-layout>
            
          </form>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>

export default {
  props:['ingredients'],
  data() {
    return {
      id:"",
      title: "",
      imageUrl: "",
      description: "",
      ingredientsName: "",
      ingredientsQuantity: "",
    };
  },
  computed: {
    formIsValid() {
      return (
        this.id !== ""&&
        this.title !== "" &&
        this.description !== "" &&
        this.imageUrl !== "" &&
        this.ingredientsName !== ""&&
        this.ingredientsQuantity !== ""
      );
    }
  },
 
  methods: {     
    onCreateRecipe() {
      if (!this.formIsValid) {
        return;
      }
      const recipeData = {
        id:this.id,
        title: this.title,
        description: this.description,
        imageUrl: this.imageUrl,
        ingredientsName:  this.ingredientsName,
        ingredientsQuantity: this.ingredientsQuantity
      };
    // Here we call the setter to put the Data inside it
      this.$store.commit('createRecipe', recipeData)

      const stringifiedData = JSON.stringify(recipeData);
      // console.log("S: ", stringifiedData);
      localStorage.setItem("recipe", stringifiedData);
      console.log("We got : ", JSON.parse(localStorage.getItem("recipe")));
      // this.$store.dispatch('createRecipe', recipeData).then(() => //alert('STH') or whatever you want to do after you add recipe)
      
    },
    addIngredient () {
  this.ingredients = [...this.ingredients , {
    ingredientsName: "",
    ingredientsQuantity: ""
  }]
}
 
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
</style>
