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
      {{getUserDetails}}
    </div>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
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
    ...mapActions(['registerUser']),
    reset () {
      this.username = ''
      this.password = ''
      this.confirmPassword = ''
      this.email = ''
    },
    async submit () {
      await this.registerUser({
        username: this.username,
        password: this.password,
        confirmPassword: this.confirmPassword,
        email: this.email
      })
      this.show = !this.show
      // this.$router.push('/')
      this.reset()
    }
  },
  computed: {
    ...mapGetters(['getUserDetails'])
  }
}
</script>
