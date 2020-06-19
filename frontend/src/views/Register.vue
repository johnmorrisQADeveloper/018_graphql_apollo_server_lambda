<template>
  <v-app id="inspire">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field v-model="username" label="User Name" required></v-text-field>
      <v-text-field v-model="password" label="Password" required></v-text-field>
      <v-text-field v-model="confirmPasword" label="Confirm Pasword" required></v-text-field>
      <v-text-field v-model="email" label="E-mail" required></v-text-field>

      <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>
      <v-btn :disabled="!valid" color="success" class="mr-4" @click="submit">SUBMIT</v-btn>
    </v-form>
  </v-app>
</template>

<script>
// import { CREATE_USER_MUTATION } from "../constants/graphql";
export default {
  name: 'Register',
  data: () => ({
    valid: false,
    username: '',
    password: '',
    confirmPasword: '',
    email: ''
  }),
  methods: {
    reset () {
      this.username = ''
      this.password = ''
      this.confirmPasword = ''
      this.email = ''
    },
    // createLink() {
    //   const { description, url } = this.$data;
    //   this.$apollo.mutate({
    //     mutation: CREATE_LINK_MUTATION,
    //     variables: {
    //       description,
    //       url
    //     }
    //   });
    // },
    submit () {
      // createLink()
      this.reset()
    }
  }
}
</script>

<style scoped>
</style>
