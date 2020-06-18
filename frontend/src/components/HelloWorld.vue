<template>
  <v-container>
    <v-row class="text-center">
      <h1>{{ msg }}</h1>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
