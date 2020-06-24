<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field v-model="body" label="Posts" required></v-text-field>
        </v-col>
      </v-row>
      <v-btn color="success" class="mr-4" @click="submit">Add Posts</v-btn>
    </v-container>
  </v-form>
</template>

<script>
import { CREATE_POST_MUTATION } from '../constants/graphql'

export default {
  name: 'AddPost',
  data () {
    return {
      valid: false,
      body: ''
    }
  },
  methods: {
    async submit () {
      console.log('add post clicked')
      const { body } = this.$data
      const res = await this.$apollo.mutate({
        mutation: CREATE_POST_MUTATION,
        variables: {
          body
        }
      })
      console.log(JSON.stringify(res.data))
    }
  }
}
</script>

<style scoped>
</style>
