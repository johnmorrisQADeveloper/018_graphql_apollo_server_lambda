<template>
  <div class="home">
    <post-form-vue v-if="loggedIn"></post-form-vue>
    <posts-vue></posts-vue>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import PostsVue from '../components/Posts.vue'
import PostFormVue from '../components/PostForm.vue'

export default {
  name: 'Home',
  components: {
    PostsVue,
    PostFormVue
  },
  computed: {
    ...mapGetters(['loggedIn'])
  }
}
</script>
