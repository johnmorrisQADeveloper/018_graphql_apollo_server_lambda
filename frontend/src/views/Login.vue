<template>
  <v-app id="inspire">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field v-model="username" label="User Name" required></v-text-field>
      <v-text-field v-model="password" label="Password" required></v-text-field>
      <v-btn :disabled="!valid" color="success" class="mr-4" @click="submit">LOGIN</v-btn>
    </v-form>
  </v-app>
</template>

<script>
import { LOGIN_USER_MUTATION } from '../constants/graphql'
export default {
  name: 'Login',
  data: () => ({
    userdetails: {},
    valid: false,
    username: '',
    password: ''
  }),
  methods: {
    async loginUser () {
      const { username, password } = this.$data
      const res = await this.$apollo.mutate({
        mutation: LOGIN_USER_MUTATION,
        variables: {
          username,
          password
        }
      })
      console.log(JSON.stringify(res.data, null, 1))
      this.userdetails.email = res.data.login.email
      this.userdetails.token = res.data.login.token
      this.userdetails.username = res.data.login.username
      this.userdetails.createdAt = res.data.login.createdAt
      this.$router.push('/')
    },
    async submit () {
      await this.loginUser()
    }
  }
}
</script>

<style scoped>
</style>
