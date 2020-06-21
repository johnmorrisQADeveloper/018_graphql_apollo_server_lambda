<template>
  <v-app id="inspire">
    <v-card class="mx-auto" style="width: 50%;">
      <v-toolbar color="deep-purple accent-4" cards dark flat>
        <v-btn icon>
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-card-title class="title font-weight-regular">Register a new user</v-card-title>
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
        <v-text-field
          v-model="confirmPassword"
          filled
          color="deep-purple"
          label="Confirm Password"
          style="min-height: 96px"
          type="password"
        ></v-text-field>
        <v-text-field
          v-model="email"
          filled
          color="deep-purple"
          label="Email address"
          type="email"
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
          @click="register"
        >Submit</v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
</template>

<script>
import { USER_REGISTRATION_MUTATION } from '../constants/graphql'

export default {
  name: 'Register',
  data: () => ({
    agreement: false,
    username: '',
    confirmPassword: '',
    email: '',
    form: false,
    isLoading: false,
    password: ''
  }),
  methods: {
    register () {
      const { username, password, confirmPassword, email } = this.$data
      this.$apollo.mutate({
        mutation: USER_REGISTRATION_MUTATION,
        variables: {
          username,
          password,
          confirmPassword,
          email
        }
      })
    }
  }
}
</script>
