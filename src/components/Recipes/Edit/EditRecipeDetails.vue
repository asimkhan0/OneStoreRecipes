<template>
  <v-row justify="center">
    <v-dialog v-model="editDialog" persistent max-width="1050px" height="400px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          fab
          accent
          class="grey lighten-1 margin"
          dark
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>
            mdi-pencil
          </v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-layout>
          <v-flex xs12>
            <v-card-title class="color">
              <span class="headline"> Edit Recipe</span>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-divider xs12></v-divider>

        <v-layout>
          <v-flex xs12>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      name="title"
                      label="Title"
                      id="title"
                      v-model="editedTitle"
                      required
                    ></v-text-field>

                    <v-text-field
                      name="description"
                      label="Description"
                      id="description"
                      v-model="editedDescription"
                      multi-line
                      required
                    ></v-text-field>

                    <v-text-field
                      name="imageUrl"
                      label="ImageUrl"
                      id="imageUrl"
                      v-model="editedImageUrl"
                      multi-line
                      required
                    >
                    </v-text-field>

                    <v-text-field
                      name="ingredientsName"
                      label="IngredientsName"
                      id="ingredientsName"
                      v-model="editedIngredientsName"
                      color="#43A047"
                      multi-line
                      required
                    >
                    </v-text-field>
                    <v-text-field
                      name="ingredientsQuantity"
                      label="IngredientsQuantity"
                      id="ingredientsQuantity"
                      v-model="editedIngredientsQuantity"
                      color="#43A047"
                      multi-line
                      required
                    >
                    </v-text-field>

                    <v-layout>
                      <v-flex xs12 sm6 offset-sm3>
                        <img :src="editedImageUrl" height="300px">
                      </v-flex>
                    </v-layout>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout>
          <v-flex xs12>
            <v-card-actions>
              <!-- <v-spacer></v-spacer> -->

              <v-btn
                class="green--text darken-1"
                text
                @click="editDialog = false"
              >
                Close
              </v-btn>
              <v-btn class="green--text darken-1" text @click="onSaveChanges">
                Save
              </v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: ["recipe"],
  data() {
    return {
      editDialog: false,
      editedTitle: this.recipe.title,
      editedDescription: this.recipe.description,
      editedImageUrl: this.recipe.imageUrl,
      editedIngredientsName: this.recipe.ingredientsName,
      editedIngredientsQuantity: this.recipe.ingredientsQuantity

    };
  },
  methods: {
    onSaveChanges() {
      // if (
      //   this.editedTitle.trim() === "" ||
      //   this.editedDescription.trim() === "" ||
      //   this.editedImageUrl.trim() === "" ||
      //   this.editedIngredientsName.trim() === "" ||
      //   this.editedIngredientsQuantity.trim() === ""
      // ) {
      //   return;
      // }
      this.editDialog = false;

      const stringifiedData = JSON.stringify(
        this.$store.dispatch("updateRecipeData", {
          id: this.recipe.id,
          title: this.editedTitle,
          description: this.editedDescription,
          imageUrl: this.editedImageUrl,
          ingredientsName: this.editedIngredientsName,
          ingredientsQuantity: this.editedIngredientsQuantity
        })
      );
      // console.log("S: ", stringifiedData);
      localStorage.setItem("updateRecipe", stringifiedData);
      console.log(
        "We got : ",
        JSON.parse(localStorage.getItem("updateRecipe"))
      );
    },
  },
};
</script>

<style scoped>
.color {
  color: green;
  font-size: 2px;
}
.margin {
  margin-left: 1000px;
}
</style>
