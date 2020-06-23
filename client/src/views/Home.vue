<template>
  <div class="home">
    <AddPostVue></AddPostVue>
    <posts-vue></posts-vue>
  </div>
</template>

<script>
// @ is an alias to /src
import PostsVue from '@/components/Posts.vue'
import AddPostVue from '../components/AddPost.vue'

export default {
  name: 'Home',
  components: {
    PostsVue,
    AddPostVue
  }
}
</script>
