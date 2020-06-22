<template>
  <v-app id="inspire">
    <v-card class="mx-auto" style="width: 50%;">
      <v-toolbar color="deep-purple accent-4" cards dark flat>
        <v-btn icon>
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-card-title class="title font-weight-regular">Login</v-card-title>
      </v-toolbar>
      <v-form ref="form" v-model="form" class="pa-4 pt-6">
        <v-text-field v-model="username" filled color="deep-purple" label="User Name"></v-text-field>
        <v-text-field
          v-model="password"
          filled
          color="deep-purple"
          label="Password"
          style="min-height: 96px"
          type="password"
        ></v-text-field>
      </v-form>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn text @click="$refs.form.reset()">Clear</v-btn>
        <v-spacer></v-spacer>
        <v-btn
          :loading="isLoading"
          class="white--text"
          color="deep-purple accent-4"
          depressed
          @click="login"
        >Submit</v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
</template>

<script>
import { LOGIN_USER_MUTATION } from '../constants/graphql'

export default {
  name: 'Login',
  data: () => ({
    username: '',
    form: false,
    isLoading: false,
    password: ''
  }),
  methods: {
    login () {
      const { username, password } = this.$data
      this.$apollo.mutate({
        mutation: LOGIN_USER_MUTATION,
        variables: {
          username,
          password
        }
      })
      this.$router.push('/')
    }
  }
}
</script>
