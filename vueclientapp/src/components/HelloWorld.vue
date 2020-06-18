<template>
  <div>
    <h5>Hi John</h5>
    <ul>
      <li v-for="(post, index) in keys.getPosts" :key="index">
        {{post}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  data() {
    return {
      keys: []
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
