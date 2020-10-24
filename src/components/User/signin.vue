<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-container>
              <form @click="onSignIn">
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="email"
                      label="Email"
                      id="email"
                      v-model="email"
                      type="text"
                      color="#43A047"
                      required
                    >
                      {{ email }}
                    </v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="password"
                      label="Password"
                      id="password"
                      v-model="password"
                      type="password"
                      color="#43A047"
                      required
                    >
                      {{ password }}
                    </v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs12>
                    <v-btn class="green darken-1 color">
                      Sign In
                    </v-btn>
                  </v-flex>
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {      
      email: "",
      password: "",
    };
  },
   
   mutations: {
        // loginRequest(state, user) {
        //     state.status = { loggingIn: true };
        //     state.user = user;
        // },
        // loginSuccess(state, user) {
        //     state.status = { loggedIn: true };
        //     state.user = user;
        // },
        // loginFailure(state) {
        //     state.status = {};
        //     state.user = null;
        // },
        // logout(state) {
        //     state.status = {};
        //     state.user = null;
        // }
    },
  methods: {
    onSignIn() {
      const signin = {
        email: this.email,
        password: this.password,
      };
      console.log(signin);

      const stringifiedData = JSON.stringify(signin);
      // console.log("S: ", stringifiedData);
      localStorage.setItem("signin", stringifiedData);
      console.log("We got : ", JSON.parse(localStorage.getItem("signin")));
// *

  //  beforeEnter: (to, from, next) => {
  //      if (!store.getters.loadedUsers) {
  //       {
  //         next('/signup');
  //       }
  //     } else {
  //        this.$router.push("/home");
  //     }
  //   }
    }
     
  },
  actions:{}
};
</script>

<style scoped>
.color {
  color: #fafafa;
}
</style>
