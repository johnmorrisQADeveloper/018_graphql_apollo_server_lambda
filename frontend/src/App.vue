<template>
  <v-app id="inspire">
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" app >
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
        <v-toolbar-title>SocialPostsApp</v-toolbar-title>
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
        icon: 'mdi-information',
        text: 'About',
        link: '/about'
      }
    ]
  })
}
</script>
