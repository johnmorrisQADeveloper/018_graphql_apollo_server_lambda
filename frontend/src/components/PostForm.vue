<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="post"
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
export default {
  data () {
    return {
      valid: false
    }
  },
  methods: {
    submit () {

    }
  }
}
</script>

<style scoped>
</style>
