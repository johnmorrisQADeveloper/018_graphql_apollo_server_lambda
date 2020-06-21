<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <posts-vue></posts-vue>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import PostsVue from '../components/Posts.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    PostsVue
  }
}
</script>
