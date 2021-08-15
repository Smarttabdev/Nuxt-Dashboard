<template>
    <div>
    <v-btn @click="facebookLoginUser">Facebook Login</v-btn>
    <v-btn @click="googleLoginUser">Google Login</v-btn>
    <v-btn @click="linkedinLoginUser">Linkedin Login</v-btn>
    </div>
</template>

<script>
  export default {
name: "UserSocialLoginButtons",
    data() {
      
    },
    props: [],
    methods: { 
    facebookLoginUser(){
      this.$auth.loginWith('facebook')
    },
    googleLoginUser(){
      this.$auth.loginWith('google')
    },
    linkedinLoginUser(){
      this.$auth.loginWith('linkedin')
    },
  }
  }
</script>

<style lang="scss" scoped>
</style>