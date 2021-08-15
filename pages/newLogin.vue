<template>
  <div>
    <v-layout row wrap class="main-page">
      <v-flex xs12 md4 class="leftColumn d-flex align-center justify-center">
        <v-responsive min-height="150px">
          <v-layout row>
            <v-flex>
              <h1>Lorem Ipsum</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </v-flex>
          </v-layout>
        </v-responsive>
      </v-flex>
      <v-flex xs12 md8>
        <div class="d-sm-flex">
          <v-spacer />
          <p class="pa-2 ma-2 text-xs-right">
            Don't have an account?
            <v-btn
              class="pa-2 ma-2 overline text-transform-none"
              width="100px"
              round
              color="#827AF3"
              dark
              href="/newRegister"
              >Sign Up</v-btn
            >
          </p>
        </div>

        <v-card
          class="mx-auto box-shadow-none"
          color="white"
          width="70%"
          outlined
        >
          <v-card-text>
            <h2 class="text-center">
              Log in to Api Desk
              <br />
            </h2>
            <v-layout class="pa-2" row wrap align-center>
              <v-flex md6 sm12>
                <v-btn
                  class="ma-2 justify-center overline text-transform-none"
                  color="red"
                  large
                  dark
                  @click="googleLoginUser"
                  ><i class="pr-3 fa fa-google-plus font-size-20"></i> Sign Up
                  with Google</v-btn
                >
              </v-flex>
              <v-flex md6 sm12>
                <v-btn
                  class="text-left ma-2 justify-center overline text-transform-none"
                  color="blue"
                  large
                  dark
                  @click="facebookLoginUser"
                  ><i class="pr-3 fa fa-facebook font-size-20"></i> Sign Up with
                  Facebook</v-btn
                >
              </v-flex>
            </v-layout>
            <br />
            <br />
            <p class="centeredxs font-italic font-weight-light text-center">
              OR
            </p>
            <p class="font-italic font-weight-light text-center">
              Enter your details below
            </p>
            <UserAuthForm buttonText="Sign in" :submitForm="loginUser" />

            <!-- <v-layout class="pa-2" row wrap align-center>
              <v-flex class="text-xs-center">
                <div class="align-center d-inline d-sm-none">
                  <p>
                    Don't have an account?
                    <strong>Sign Up</strong>
                  </p>
                </div>
              </v-flex>
            </v-layout> -->
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import UserAuthForm from "@/components/UserAuthForm";

export default {
  layout: "login",
  components: {
    UserAuthForm,
  },
  methods: {
    loginUser(loginInfo) {
      this.$auth.loginWith("local", {
        data: loginInfo,
      }).then(res => {
        
      }).catch(err => {
        this.$notify({
          group: 'foo',
          type: 'error',
          title: 'Error',
          text: 'Unauthorization'
        });
      });
    },
    facebookLoginUser() {
      this.$auth.loginWith("facebook");
    },
    googleLoginUser() {
      this.$auth.loginWith("google");
    },
    linkedinLoginUser() {
      this.$auth.loginWith("linkedin");
    },
  },
};
</script>

<style lang="scss" scoped>
.leftColumn {
  background-image: url("../static/background.jpeg");
  background-repeat: repeat;
}
.layout.row.wrap.align-center {
  text-align: center;
}
.leftColumnText {
  padding-top: 40%;
  padding-left: 10%;
  padding-right: 10%;
  text-align: justify;
}
.leftColumnText h1 {
  text-align: center;
}
.text-xs-center button {
  width: 40%;
}
@media screen and (max-width: 600px) {
  button {
    width: 95%;
  }
}
.main-page {
  min-height: 100vh;
  .leftColumn {
    background-image: url("../static/background.jpeg");
    background-repeat: repeat;
    color: white;
    padding: 20px;

    h1,
    p {
      text-align: center;
    }
  }
}
</style>