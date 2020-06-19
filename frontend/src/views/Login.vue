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
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Login',
  data: () => ({
    userdetails: {},
    valid: false,
    username: '',
    password: ''
  }),
  methods: {
    ...mapActions(['fetchUserDetails']),
    async submit () {
      await this.fetchUserDetails({
        username: this.username,
        password: this.password
      })
      localStorage.setItem('token', JSON.stringify(this.getUserDetails.login.token))
      this.$router.push('/')
    }
  },
  computed: {
    ...mapGetters(['getUserDetails'])
  }
}
</script>

<style scoped>
</style>
