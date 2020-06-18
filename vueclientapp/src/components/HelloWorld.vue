<template>
  <div>
    <div>
      <h1>Axios</h1>
      <ul>
        <li v-for="(post, index) in keys.getPosts" :key="index">{{post}}</li>
      </ul>
    </div>
    <div>
      <h1>Apolo Client</h1>
      <ul>
        <li v-for="(post, index) in getPosts" :key="index">{{post}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ALL_POSTS_QUERY } from "../constants/graphql";
export default {
  name: "HelloWorld",
  data() {
    return {
      keys: [],
      getPosts: []
    };
  },
  async mounted() {
    var result = await axios({
      method: "POST",
      url: "http://127.0.0.1:3000/graphql",
      data: {
        query: `
                  {
                    getPosts {
                      id
                      body
                      likeCount
                      commentCount
                    }
                  }
                `
      }
    });
    console.log(JSON.stringify(result.data.data, null, 1));
    this.keys = result.data.data;
  },
  apollo: {
    getPosts: {
      query: ALL_POSTS_QUERY
    }
  }
};
</script>


<style scoped>
</style>
