<template>
  <v-app id="inspire">
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" app>
        <v-list dense>
          <v-list-item link :to="item.link" v-for="(item, index) in items" :key="index">
            <v-list-item-action>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{item.text}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar app color="indigo" dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <span class="title ml-3 mr-5">
          App&nbsp;
          <span class="font-weight-light">Posts</span>
        </span>
        <v-spacer></v-spacer>
        <span v-if="loggedIn" class="title ml-3 mr-5">
          {{Object.keys(getUserDetails).length > 0 ? getUserDetails.login.username: ''}}&nbsp;
          <span
            class="font-weight-light"
          >loggedIn</span>
        </span>
      </v-app-bar>

      <v-main>
        <v-container class="fill-height">
          <router-view />
        </v-container>
      </v-main>
      <v-footer color="indigo" app>
        <span class="white--text">&copy; 2019</span>
      </v-footer>
    </v-app>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  components: {},
  data: () => ({
    drawer: null,
    items: [
      {
        icon: 'mdi-home',
        text: 'Home',
        link: '/'
      },
      {
        icon: 'mdi-login',
        text: 'Login',
        link: '/login'
      },
      {
        icon: 'mdi-star',
        text: 'Register',
        link: '/register'
      },
      {
        icon: 'mdi-logout',
        text: 'Logout',
        link: '/logout'
      },
      {
        icon: 'mdi-information',
        text: 'About',
        link: '/about'
      }
    ]
  }),
  computed: {
    ...mapGetters(['loggedIn', 'getUserDetails'])
  }
}
</script>
