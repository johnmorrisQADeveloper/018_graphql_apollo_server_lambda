<template>
  <div>
    <h1>Apolo Client</h1>
    <ul>
      <li v-for="(post, index) in getPosts" :key="index">{{post}}</li>
    </ul>
  </div>
</template>

<script>
import { ALL_POSTS_QUERY } from '../constants/graphql'
export default {
  name: 'Posts',
  data () {
    return {
      getPosts: []
    }
  },
  apollo: {
    getPosts: {
      query: ALL_POSTS_QUERY
    }
  }
}
</script>

<style scoped>
</style>
