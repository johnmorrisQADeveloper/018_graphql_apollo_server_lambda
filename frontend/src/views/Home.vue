<template>
  <div class="home">
    <posts-vue></posts-vue>
  </div>
</template>

<script>
// @ is an alias to /src
import PostsVue from '../components/Posts.vue'

export default {
  name: 'Home',
  components: {
    PostsVue
  }
}
</script>
