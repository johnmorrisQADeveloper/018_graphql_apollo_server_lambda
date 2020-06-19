<template>
  <v-app id="inspire">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field v-model="username" label="User Name" required></v-text-field>
      <v-text-field v-model="password" label="Password" required></v-text-field>
      <v-text-field v-model="confirmPassword" label="Confirm Pasword" required></v-text-field>
      <v-text-field v-model="email" label="E-mail" required></v-text-field>

      <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>
      <v-btn :disabled="!valid" color="success" class="mr-4" @click="submit">SUBMIT</v-btn>
    </v-form>
  </v-app>
</template>

<script>
import { CREATE_USER_MUTATION } from '../constants/graphql'
export default {
  name: 'Register',
  data: () => ({
    valid: false,
    username: '',
    password: '',
    confirmPassword: '',
    email: ''
  }),
  methods: {
    reset () {
      this.username = ''
      this.password = ''
      this.confirmPassword = ''
      this.email = ''
    },
    createUser () {
      const { username, password, confirmPassword, email } = this.$data
      this.$apollo.mutate({
        mutation: CREATE_USER_MUTATION,
        variables: {
          username,
          password,
          confirmPassword,
          email
        }
      })
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
