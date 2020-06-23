<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field v-model="addPosts" label="Posts" required></v-text-field>
        </v-col>
      </v-row>
      <v-btn color="success" class="mr-4" @click="submit">Add Posts</v-btn>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: 'AddPost',
  data () {
    return {
      valid: false
    }
  },
  methods: {
    submit () {
      console.log('add post clicked')
    }
  }
}
</script>

<style scoped>
</style>
