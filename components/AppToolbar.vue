<template>
  <v-toolbar fixed app>
    <v-toolbar-title class="ml-0 pl-3">
      <v-toolbar-side-icon @click.stop="toggleDrawer()"></v-toolbar-side-icon>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn v-if="!isAuth" class="text-transform-none" round href="/newLogin">
      Log In
    </v-btn>
    <v-btn
      round
      class="text-transform-none"
      v-if="!isAuth"
      rounded
      color="#827AF3"
      dark
      href="/newRegister"
    >
      Sign Up
    </v-btn>
    <v-btn v-else dark color="#827AF3" class="text-transform-none" round @click="handleLogout">
      Log Out
    </v-btn>
  </v-toolbar>
</template>
<script>
import NotificationList from "@/components/widgets/list/NotificationList";
import Util from "@/util";

export default {
  name: "app-toolbar",
  components: {
    NotificationList,
  },
  data: function () {
    return {};
  },
  computed: {
    toolbarColor() {
      return this.$vuetify.options.extra.mainNav;
    },
    isAuth() {
      return this.$auth.loggedIn;
    }
  },
  methods: {
    toggleDrawer() {
      this.$store.commit("toggleDrawer");
    },
    handleFullScreen() {
      Util.toggleFullScreen();
    },
    async handleLogout() {
      try {
        await this.$auth.logout();
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

