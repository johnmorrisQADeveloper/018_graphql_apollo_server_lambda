<template>
  <v-app id="inspire">
    <v-card class="mx-auto" style="max-width: 800px;">
      <v-toolbar color="deep-purple accent-4" cards dark flat>
        <v-btn icon>
          <v-icon>mdi-book-open-page-variant</v-icon>
        </v-btn>
        <v-card-title class="title font-weight-regular">Register</v-card-title>
      </v-toolbar>
      <v-form ref="form" v-model="form" class="pa-4 pt-6">
        <v-text-field v-model="username" filled color="deep-purple" label="User Name"></v-text-field>
        <v-text-field
          v-model="email"
          :rules="[rules.email]"
          filled
          color="deep-purple"
          label="Email address"
          type="email"
        ></v-text-field>
        <v-text-field
          v-model="password"
          :rules="[rules.password, rules.length(3)]"
          filled
          color="deep-purple"
          counter="3"
          label="Password"
          style="min-height: 96px"
          type="password"
        ></v-text-field>
        <v-text-field
          v-model="cpassword"
          :rules="[rules.password, rules.length(3)]"
          filled
          color="deep-purple"
          counter="3"
          label="Confirm Password"
          style="min-height: 96px"
          type="password"
        ></v-text-field>
        <v-checkbox v-model="agreement" :rules="[rules.required]" color="deep-purple">
          <template v-slot:label>
            I agree to the&nbsp;
            <a href="#" @click.stop.prevent="dialog = true">Terms of Service</a>
            &nbsp;and&nbsp;
            <a
              href="#"
              @click.stop.prevent="dialog = true"
            >Privacy Policy</a>*
          </template>
        </v-checkbox>
      </v-form>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn text @click="$refs.form.reset()">Clear</v-btn>
        <v-spacer></v-spacer>
        <v-btn
          :disabled="!form"
          :loading="isLoading"
          class="white--text"
          color="deep-purple accent-4"
          depressed
        >Submit</v-btn>
      </v-card-actions>
      <v-dialog v-model="dialog" absolute max-width="400" persistent>
        <v-card>
          <v-card-title class="headline grey lighten-3">Legal</v-card-title>
          <v-card-text></v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn text @click="agreement = false, dialog = false">No</v-btn>
            <v-spacer></v-spacer>
            <v-btn
              class="white--text"
              color="deep-purple accent-4"
              @click="agreement = true, dialog = false"
            >Yes</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: 'Register',
  data: () => ({
    agreement: false,
    cpassword: undefined,
    dialog: false,
    email: undefined,
    form: false,
    isLoading: false,
    password: undefined,
    username: undefined,
    rules: {
      email: v => (v || '').match(/@/) || 'Please enter a valid email',
      length: len => v =>
        (v || '').length >= len || `Invalid character length, required ${len}`,
      password: v =>
        (v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
        'Password must contain an upper case letter, a numeric character, and a special character',
      required: v => !!v || 'This field is required'
    }
  })
}
</script>

<style scoped>
</style>
