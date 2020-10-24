<template>
  <div>
    <v-container>
 <v-layout row wrap v-for="user in Users" :key="user.id" class="mb-2">
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card class="grey lighten-4 pl-3 ">
          <v-container fluid>
            <v-layout row>
              <v-flex xs7 sm8 md9>
                <v-card-title primary-title>
                  <div>
                    <h5 class="color font mb-0">{{ user.name }}</h5>
                    <div>
                      {{ user.email }}
                    </div>
                  </div>
                </v-card-title>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>

    </v-container>

  </div>
</template>

<script>
export default {
    computed: {
    Users() {
      return this.$store.getters.loadedUsers
    },
    createUser(){
      return this.$store.getters.loadedUsers
    }
  },
}
</script>

<style scoped>
.color {
  color: #43a047
}
.font{
  font-size: 23px;
}
</style>