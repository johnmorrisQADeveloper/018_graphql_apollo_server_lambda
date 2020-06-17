<template>
  <div class="hello">hi john</div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  data() {
    return {
      keys: ""
    };
  },
  async mounted() {
    var result = await axios({
      method: "POST",
      url: "https://tul8x7p1cg.execute-api.eu-west-2.amazonaws.com/v1/graphql",
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
    })
    console.log(result.data)
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
