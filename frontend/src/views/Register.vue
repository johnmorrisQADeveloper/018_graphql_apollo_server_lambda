<template>
  <v-app id="inspire">
    <v-form ref="form" v-show="show" v-model="valid" lazy-validation>
      <v-text-field v-model="username" label="User Name" required></v-text-field>
      <v-text-field v-model="password" label="Password" required></v-text-field>
      <v-text-field v-model="confirmPassword" label="Confirm Pasword" required></v-text-field>
      <v-text-field v-model="email" label="E-mail" required></v-text-field>
      <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>
      <v-btn :disabled="!valid" color="success" class="mr-4" @click="submit">SUBMIT</v-btn>
    </v-form>
    <div v-show="!show">
      {{userdetails}}
    </div>
  </v-app>
</template>

<script>
import { CREATE_USER_MUTATION } from '../constants/graphql'
export default {
  name: 'Register',
  data: () => ({
    userdetails: {},
    valid: false,
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    show: true
  }),
  methods: {
    reset () {
      this.username = ''
      this.password = ''
      this.confirmPassword = ''
      this.email = ''
    },
    async createUser () {
      const { username, password, confirmPassword, email } = this.$data
      const res = await this.$apollo.mutate({
        mutation: CREATE_USER_MUTATION,
        variables: {
          username,
          password,
          confirmPassword,
          email
        }
      })
      this.userdetails.email = res.data.register.email
      this.userdetails.token = res.data.register.token
      this.userdetails.username = res.data.register.username
      this.userdetails.createdAt = res.data.register.createdAt
      this.show = false
      this.$router.push('/')
    },
    async submit () {
      await this.createUser()
      this.reset()
    }
  }
}
</script>

<style scoped>
</style>
