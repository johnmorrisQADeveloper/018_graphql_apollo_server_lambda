<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="body"
            label="Enter post"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-btn @click="submit" color="success" dark>Create a Post</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      body: '',
      valid: false
    }
  },
  methods: {
    ...mapActions(['createPost']),
    async submit () {
      await this.createPost({
        body: this.body
      })
      this.body = ''
    }
  }
}
</script>

<style scoped>
</style>
