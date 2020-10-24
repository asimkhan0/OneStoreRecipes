

<template>
  <v-app>
    <v-container>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <h2 class="btn-style">Add Ingredient</h2>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12>
          <form @submit.prevent="onAddIngredient">

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
                  name="name"
                  label="Name"
                  id="name"
                  v-model="Name"
                  color="#43A047"
                  required
                >
                </v-text-field>
              </v-flex>
            </v-layout>
          
             <v-layout>
              <v-flex xs12 sm6 offset-sm3>
                <v-text-field
                  name="ingredientsQuantity"
                  label="Ingredients Quantity"
                  id="ingredientsQuantity"
                  v-model="Quantity"
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
                  type="submit"
                >
                  Add
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
    data() {
    return {
      id: "",
      Name: "",
      Quantity: "",
    };
  },
  computed: {
    formIsValid() {
      return (
        this.id !== ""&&
        this.Name !== "" &&
        this.Quantity !== "" 
      );
    }
    },
  methods: {
    onAddIngredient() {
      if (!this.formIsValid) {
        return;
      }
      const ingredientData = {
        id: this.id,
        Name: this.Name,
        Quantity: this.Quantity
      };

      this.$store.commit('createIngredients', ingredientData);

      const stringifiedData = JSON.stringify(ingredientData);
      // console.log("S: ", stringifiedData);
      localStorage.setItem("ingredient", stringifiedData);
      console.log("We got : ", JSON.parse(localStorage.getItem("ingredient")));
    }
  },

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
